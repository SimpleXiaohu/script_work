import os,sys,datetime
import subprocess
import shutil
from types import CodeType

def writeFileA(file, line):
    # write file with flag "a"
    with open(file, "a+", encoding="utf8") as f:
        f.write(line)
        f.flush()
def clearFile(file):
    with open(file, "w", encoding="utf8") as f:
        f.close()
def writeFileW(file,line):
    # write file with flag "w"
    with open(file, "w", encoding="utf8") as f:
        f.write(line)
        f.flush()
def readFile(file):
    res = ""
    if os.path.exists(file):
        with open(file, "r", encoding="utf8") as f:
            res = f.read()
    return res
def reFresh(path):
    if os.path.exists(path):
        shutil.rmtree(path)
    os.mkdir(path)
def mkdir(path):
    if not os.path.exists(path):
        os.mkdir(path)


def run_ostrich(newDir):
    global cmd 
    ret = subprocess.run(f"{cmd} {newDir}",shell=True,stdout=subprocess.PIPE,stderr=subprocess.PIPE,encoding="utf-8")
    print(f"{newDir}:\n {ret.stdout}")
    writeFileA(resFile, f"{newDir} : {ret.stdout}\n")


def handle_rar_rec(folderpath):
    pathDir = os.listdir(folderpath)      #获取当前路径下的文件名，返回List
    for s in pathDir:
        newDir=os.path.join(folderpath,s)     #将文件命加入到当前文件路径后面
        if os.path.isfile(newDir) :         #如果是文件
            # print(newDir)
            print(already)
            if(not newDir in already):
                continue
            if os.path.splitext(newDir)[1]==".smt2":
                run_ostrich(newDir)
                writeFileA(alreadyFile, newDir)
        else:
            handle_rar_rec(newDir)                #如果不是文件，递归这个文件夹的路径

def handle_rar(tgzpath):
    tmp_package = os.path.splitext(tgzpath)[0]
    # reFresh(tmp_package)
    # os.system(f'echo unrar e {tgzpath} {tmp_package}')
    # os.system(f'unrar e {tgzpath} {tmp_package} > /dev/null 2>&1') 
    handle_rar_rec(tmp_package)
    # shutil.rmtree(tmp_package)



def eachFile(filepath):
    pathDir = os.listdir(filepath)      #获取当前路径下的文件名，返回List
    for s in pathDir:
        newDir=os.path.join(filepath,s)     #将文件命加入到当前文件路径后面
        if newDir == already:
            continue
        if os.path.isfile(newDir) :         #如果是文件
            if os.path.splitext(newDir)[1]==".rar":  #判断是否是tar
                handle_rar(newDir)                     #读文件（或者做其他的操作）
                pass
        else:
            eachFile(newDir)                #如果不是文件，递归这个文件夹的路径

cmd = "python3 script.py"
resDir = f"{sys.argv[1][:-4]}_res"
mkdir(resDir)
currentTime = datetime.datetime.now().strftime('%Y-%m-%d-%H:%M:%S') # use current time to distinguish res.txt
resFile = f"./{resDir}/res-{currentTime}.txt"    # sys.argv[1] is the rar being runed
alreadyFile = f"./{resDir}/already.txt" # use already.txt to track files has been test, avoid repeatedly test. (Like checkpoint)
already = readFile(alreadyFile)
# clear the existing res file
clearFile(resFile)
handle_rar(sys.argv[1])
writeFileA(resFile, "done\n")