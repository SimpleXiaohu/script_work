import os,subprocess,re
import shutil

# ostrich_command = "java -jar E:\hanzhilei\ostrich\\target\scala-2.11\ostrich-assembly-1.0.jar +incremental "
ostrich_command = "java -jar ostrich-assembly-1.0.jar +incremental "    # use this in computing server 
benchmarkLen1 = ".\len-1\\"
benchmarkLen2 = ".\len-2\\"
jsFolder = ".\js-benchmark\\"

def eachFile(filepath):
    pathDir = os.listdir(filepath)      #获取当前路径下的文件名，返回List
    for s in pathDir:
        newDir=os.path.join(filepath,s)     #将文件命加入到当前文件路径后面
        if os.path.isfile(newDir) :         #如果是文件
            if os.path.splitext(newDir)[1]==".smt2":  #判断是否是txt
            # if os.path.splitext(newDir)[1]==".smt":  #判断是否是txt
                runOstrich(newDir)                     #读文件（或者做其他的操作）
                # os.rename(newDir, newDir+"2")
                pass
        else:
            eachFile(newDir)                #如果不是文件，递归这个文件夹的路径

def runOstrich(filepath):
    ret = subprocess.run(ostrich_command + filepath, shell=True, stdout=subprocess.PIPE,stderr=subprocess.PIPE)
    if(ret.returncode == 0):
        reg = r"\(define-fun var0 \(\) String \"(.*)\".*"
        if(re.search(reg ,str(ret.stdout), re.M) == None):
            print(filepath)
            print(ret.stdout)
        var0Str = re.search(reg ,str(ret.stdout), re.M).group(1)
        repl = f"(assert (= var0 \"{var0Str}\"))"
        len2BeReplFile = benchmarkLen2 + os.path.basename(filepath)
        replaceLen2(len2BeReplFile, repl)
        genJsBench(len2BeReplFile, var0Str)
        # print(f"{os.path.basename(filepath)} : huziadd(assert (= var0 \"{var0Str})\")")

def replaceLen2(filepath, repl):
    res = ""
    with open(filepath, "r", encoding="utf8") as f:
        read = f.read()
        res = re.sub(r"\(hu add something\)", repl, read)
        print(filepath)
    with open(filepath, "w", encoding="utf8") as f:
        f.write(res)
        f.flush()    

def genJsBench(filepath, concreStr):
    regex = ""
    with open(filepath, "r", encoding="utf8") as f:
        read = f.readline()
        regex = re.search(r";;(.*)", read).group(1)
        print(regex)
    jsFile = jsFolder + \
            re.sub(r"\.smt2", ".js", os.path.basename(filepath))
    with open(jsFile, "w", encoding="utf8") as f:
        concreStr = re.sub(r"\\u", "u", concreStr)
        toWrite = f"var x = \"{concreStr}\"\n\
console.log(x.match(/{regex}/)[1])"
        f.write(toWrite)

def reFresh(path):
    if os.path.exists(path):
        shutil.rmtree(path)
    os.mkdir(path)

eachFile(benchmarkLen1)