import re,os,sys
consoleNum = 0
def genConsoleIns():
    global consoleNum
    consoleNum += 1
    return f"console.log({consoleNum});"

def genRegExpose(exposeFile):
    tmpFile = "tmp.js"
    tmpF = open(tmpFile, "w")
    with open(exposeFile, "r") as f:
        lines = f.readlines()
        throwReg = r"(throw \'Reachable\';)|(throw \'Unreachable\';)"
        for line in lines: 
            if(re.search(throwReg, line) != None):
                line = re.sub(throwReg, genConsoleIns(), line)
            tmpF.write(line)
        tmpF.close()
        os.system("echo cp " + tmpFile + " " + exposeFile)
        os.system("cp " + tmpFile + " " + exposeFile)

def eachFile(filepath):
    global consoleNum
    pathDir = os.listdir(filepath)      #获取当前路径下的文件名，返回List
    for s in pathDir:
        newDir=os.path.join(filepath,s)     #将文件命加入到当前文件路径后面
        if os.path.isfile(newDir) :         #如果是文件
            if os.path.splitext(newDir)[1]==".js":  #判断是否是txt
                consoleNum = 0
                genRegExpose(newDir)                     #读文件（或者做其他的操作）
                pass
        else:
            eachFile(newDir)                #如果不是文件，递归这个文件夹的路径

eachFile(sys.argv[1])
