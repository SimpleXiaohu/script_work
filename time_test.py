from timeit import default_timer as timer
import subprocess, os, sys, re, signal

if "-a" in sys.argv[2]:
    command = "../aratha/node_modules/.bin/jalangi2 --analysis ../aratha/index.js"
    logfileStream = open(f"{sys.argv[1]}_log(aratha).txt", "w")
else:
    command = "EXPOSE_PRINT_PATHS=1 ../ExpoSE/expoSE"
    logfileStream = open(f"{sys.argv[1]}_log(expose).txt", "w")
timeoutList = []
zeroConstraitsList = []
zeroQueryList = []
queryCountDict = {}
timeout = 120
unHandled = open(f"{sys.argv[1]}_unhandled(aratha).txt", "w")
totalNormalTime = 0
totalNormalNum = 0
totalErrorNum = 0

def updateQCDict(key):
    if(key in queryCountDict):
        queryCountDict[key] += 1
    else:
        queryCountDict[key] = 1

def eachFile(filepath):
    global logfileStream
    global command
    pathDir = os.listdir(filepath)      #获取当前路径下的文件名，返回List
    for s in pathDir:
        newDir=os.path.join(filepath,s)     #将文件命加入到当前文件路径后面
        if os.path.isfile(newDir) :         #如果是文件
            if os.path.splitext(newDir)[1]==".js" \
                and not "_.js" in newDir:  #判断是否是txt
                runAndLog(command,newDir)
                pass
        else:
            eachFile(newDir)                #如果不是文件，递归这个文件夹的路径


def runAndLog(command, testFile):
    global logfileStream, unHandled
    global totalErrorNum
    global totalNormalNum
    global totalNormalTime
    global timeoutList
    global zeroConstraitsList, zeroQueryList
    tic = timer()
    os.system("echo " + command + " " + testFile)
    proc = subprocess.Popen(command + " " + testFile, encoding="utf8", shell=True, stderr=subprocess.PIPE, stdout=subprocess.PIPE, start_new_session=True)
    try:
        outs, errors = proc.communicate(timeout=timeout)
    except subprocess.TimeoutExpired:
        os.killpg(proc.pid, signal.SIGKILL)
        outs, errors = proc.communicate()
        timeoutList.append(testFile)
    toc = timer()
    oneTime = toc - tic
    if(errors != '' and "-a" in sys.argv[2]) :
        logfileStream.write(testFile + " :\n" + errors)
        totalErrorNum += 1
        logfileStream.flush()
        unHandled.write(os.path.split(testFile)[1] + "\n")
        unHandled.flush()
    elif("0 constraints in path condition" in str(outs)):
        zeroConstraitsList.append(testFile)
        unHandled.write(os.path.split(testFile)[1] + "\n")
        unHandled.flush()
    else:
        logfileStream.write(testFile + " : " + "{:2f}".format(oneTime) + "s\n")
        logfileStream.flush()
        totalNormalNum += 1
    queryCount = len(set(re.findall(r"^(\d)$", outs, re.M)))
    if(queryCount == 1):
        zeroQueryList.append(testFile)
    updateQCDict(queryCount)
    totalNormalTime += oneTime

eachFile(sys.argv[1])
logfileStream.write(f"timeout set to ${timeout} s\n")
logfileStream.write("----------------timeout file list :\n")
for file in timeoutList:
    logfileStream.write(file + "\n")
logfileStream.write("-----------------------------------------\n")
logfileStream.write("----------------non-bench-generated file list:\n")
for file in zeroConstraitsList:
    logfileStream.write(file + "\n")
logfileStream.write("-----------------------------------------\n")
logfileStream.write("----------------zero query file list :\n")
for file in zeroQueryList:
    logfileStream.write(file + "\n")
logfileStream.write("-----------------------------------------\n")

totalNum = totalNormalNum + totalErrorNum + len(timeoutList) + len(zeroConstraitsList)
logfileStream.write(f"total test file count : {totalNum}\n")
logfileStream.write(f"total normal test file count : {totalNormalNum}\n")
logfileStream.write(f"total error test file count : {totalErrorNum}\n")
logfileStream.write(f"total timeout test file count : {len(timeoutList)}\n")
logfileStream.write(f"total non-benchmark-generate test file count : {len(zeroConstraitsList)}\n")
logfileStream.write(f"total cost time (without warning, error and timeout) : {totalNormalTime:.2f}\n") 
logfileStream.write(f"average cost time (without warning, error and timeout) : {totalNormalTime/totalNormalNum:.2f}\n") 
queryCountTuple = sorted(queryCountDict.items(), key = lambda d : d[0])
for t in queryCountTuple:
    logfileStream.write(f"finishing query {t[0]} count : {t[1]}\n")
logfileStream.close()
unHandled.close()
