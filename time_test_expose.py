from timeit import default_timer as timer
import subprocess, os, sys, re, signal

if "-a" in sys.argv[2]:
    command = "../../aratha/node_modules/.bin/jalangi2 --analysis ../../aratha/index.js"
    logfileStream = open(f"{sys.argv[1]}_log(aratha_query).txt", "w")
else:
    command = "EXPOSE_PRINT_PATHS=1 ../../ExpoSE/expoSE"
    logfileStream = open(f"{sys.argv[1]}_log(expose_query).txt", "w")
queryCountDict = {}
timeout = 10

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
    os.system("echo " + command + " " + testFile)
    proc = subprocess.Popen(command + " " + testFile, encoding="utf8", shell=True, stderr=subprocess.PIPE, stdout=subprocess.PIPE, start_new_session=True)
    try:
        outs, errors = proc.communicate(timeout=timeout)
    except subprocess.TimeoutExpired:
        os.killpg(proc.pid, signal.SIGKILL)
        outs, errors = proc.communicate()
    queryCount = len(set(re.findall(r"^(\d)$", outs, re.M)))
    updateQCDict(queryCount)

eachFile(sys.argv[1])
queryCountTuple = sorted(queryCountDict.items(), key = lambda d : d[0])
totalQuery = 0
for t in queryCountTuple:
    logfileStream.write(f"finishing query {t[0]} count : {t[1]}\n")
    totalQuery += t[0]*t[1]
logfileStream.write(f"total finishing query count : {totalQuery}\n")
logfileStream.close()