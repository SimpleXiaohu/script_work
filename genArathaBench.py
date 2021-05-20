import os,sys,re


def eachFile(filepath):
    pathDir = os.listdir(filepath)      #获取当前路径下的文件名，返回List
    for s in pathDir:
        newDir=os.path.join(filepath,s)     #将文件命加入到当前文件路径后面
        if os.path.isfile(newDir) :         #如果是文件
            if os.path.splitext(newDir)[1]==".js":  #判断是否是txt
                travese2Arahta(newDir)                     #读文件（或者做其他的操作）
                pass
        else:
            eachFile(newDir)                #如果不是文件，递归这个文件夹的路径

def travese2Arahta(exposeFile) : 
    tmpFile = "tmp.js"
    tmpF = open(tmpFile, "w")
    with open(exposeFile, "r") as f:
        lines = f.readlines()
        sSymbolReg = r"S\$\.symbol\(.*?\)"
        for line in lines: 
            if ("S$.assume(" in line):  
                line = re.sub(r"S\$\.assume\(", "S$.assert(", line)
            if ("require(\"S$\")" in line or \
                "require(\'S$\')" in line ):   continue
            if ("S$.symbol(" in line): 
                line = re.sub(sSymbolReg, "J$.readString();", line)
            line = re.sub(r'const ', 'var ', line)
            line = re.sub(r'S\$\.assert', "J$.assert", line)
            line = re.sub(r'const ', "var ", line)
            line = re.sub(r'let ', "var ", line)
            line = re.sub(r'\/y', "/", line)
            tmpF.write(line)
        tmpF.close()
        os.system("echo cp " + tmpFile + " " + exposeFile)
        os.system("cp " + tmpFile + " " + exposeFile)

eachFile(sys.argv[1])