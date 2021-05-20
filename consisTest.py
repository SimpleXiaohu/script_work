import os,subprocess,re

ostrichCommand = "java -jar E:\hanzhilei\ostrich\\target\scala-2.11\ostrich-assembly-1.0.jar +incremental "
jsCommand = "node "
benchmarkLen2 = ".\len2\\"
jsFolder = ".\js-benchmark\\"

def eachFile(filepath):
    pathDir = os.listdir(filepath)      #获取当前路径下的文件名，返回List
    for s in pathDir:
        newDir=os.path.join(filepath,s)     #将文件命加入到当前文件路径后面
        if os.path.isfile(newDir) :         #如果是文件
            if os.path.splitext(newDir)[1]==".smt2":  #判断是否是txt
                consisTest(newDir)                     #读文件（或者做其他的操作）
                # os.rename(newDir, newDir+"2")
                pass
        else:
            eachFile(newDir)                #如果不是文件，递归这个文件夹的路径

def consisTest(smtFile):
    jsFile = jsFolder +\
        re.sub(r"\.smt2", ".js", os.path.basename(smtFile))
    jsRet = subprocess.run(jsCommand + jsFile, shell=True, stdout=subprocess.PIPE,stderr=subprocess.PIPE)
    ostrichRet = subprocess.run(ostrichCommand + smtFile, shell=True, stdout=subprocess.PIPE,stderr=subprocess.PIPE)
    if(ostrichRet.returncode != 0):
        print(f"wrong ostrich exec file {smtFile}")
        return
    if(jsRet.returncode != 0):
        # there are some bad benchmark, remove them
        os.remove(smtFile)
        os.remove(jsFile)
        print(f"remove {smtFile} and {jsFile}")
        return

    reg = r"\(define-fun res \(\) String \"(.*?)\".*"
    if(re.search(reg ,str(ostrichRet.stdout), re.M) == None):
        print(smtFile)
    ostrichResStr = re.search(reg ,str(ostrichRet.stdout), re.M).group(1)
    jsResStr = str(jsRet.stdout)[2:-3]   # jsRet.stdout is like b'str\n'
    if(jsResStr != ostrichResStr):
        print(f"not consistent: {smtFile}, ostrichRes={ostrichResStr}, jsRes={jsResStr}")

eachFile(benchmarkLen2)