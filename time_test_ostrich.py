from timeit import default_timer as timer
import subprocess
import os
import sys

arathaCommand = "java -jar ostrich-assembly-1.0.jar +incremental"
timeoutList = []
def eachFile(filepath):
    global logfileStream
    global arathaCommand
    pathDir = os.listdir(filepath)      #获取当前路径下的文件名，返回List
    for s in pathDir:
        newDir=os.path.join(filepath,s)     #将文件命加入到当前文件路径后面
        if os.path.isfile(newDir) :         #如果是文件
            if os.path.splitext(newDir)[1]==".smt2":
                runAndLog(arathaCommand,newDir)
                pass
        else:
            eachFile(newDir)                #如果不是文件，递归这个文件夹的路径


def runAndLog(command, testFile):
    global logfileStream
    global totalErrorNum
    global totalNormalNum
    global totalNormalTime
    global timeoutList
    tic = timer()
    try:
        os.system("echo " + command + " " + testFile)
        res = subprocess.run(command + " " + testFile, shell=True, timeout=30, encoding="utf8", stderr=subprocess.PIPE, stdout=subprocess.PIPE)
    except subprocess.TimeoutExpired:
        timeoutList.append(testFile)
        return
    toc = timer()
    oneTime = toc - tic
    if(res.returncode != 0) :
        logfileStream.write(testFile + " :\n" + res.stderr)
        totalErrorNum += 1
        logfileStream.flush()
    else:
        logfileStream.write(testFile + " : " + "{:2f}".format(oneTime) + "s\n")
        logfileStream.flush()
        totalNormalNum += 1
    totalNormalTime += oneTime

logfileStream = open(f"{sys.argv[1]}_ostrich_log.txt", "w")
totalNormalTime = 0
totalNormalNum = 0
totalErrorNum = 0
eachFile(sys.argv[1])
logfileStream.write("----------------timeout file list :\n")
for file in timeoutList:
    logfileStream.write(file + "\n")
logfileStream.write("-----------------------------------------\n")
logfileStream.write(f"total test file count : {totalErrorNum+totalNormalNum+len(timeoutList)}\n")
logfileStream.write(f"total normal test file count : {totalNormalNum}\n")
logfileStream.write(f"total error test file count : {totalErrorNum}\n")
logfileStream.write(f"total timeout test file count : {timeoutList}\n") 
logfileStream.write(f"total cost time (without warning, error and timeout) : {totalNormalTime:.2f}\n")
logfileStream.close()