import os
import subprocess
import shutil

# for each .tgz, unzip it to /tgz_folder, do recusive thing to the /tgz_folder, 
# write res to the fold /res, and then delete the /tgz_folder

def run_ostrich(newDir):
    global cmd 
    ret = subprocess.run(f"{cmd} {newDir}",shell=True,stdout=subprocess.PIPE,stderr=subprocess.PIPE,encoding="utf-8")
    print(f"{newDir}:\n {ret.stdout}")
    with open("res.txt", "a", encoding="utf8") as f:
        f.write(f"{newDir}:\n {ret.stdout}\n")


def handle_rar_rec(folderpath):
    global fileTailNum
    global resFolderName
    pathDir = os.listdir(folderpath)      #获取当前路径下的文件名，返回List
    for s in pathDir:
        newDir=os.path.join(folderpath,s)     #将文件命加入到当前文件路径后面
        if os.path.isfile(newDir) :         #如果是文件
            if os.path.splitext(newDir)[1]==".smt2":
                run_ostrich(newDir)
        else:
            handle_rar_rec(newDir)                #如果不是文件，递归这个文件夹的路径

def handle_tar(tgzpath):
    tmp_package = os.path.splitext(tgzpath)[0]
    if os.path.exists(tmp_package):
        shutil.rmtree(tmp_package)
    os.mkdir(tmp_package)
    os.system('echo unrar e ' + tgzpath + tmp_package + " >tmp.txt 2>&1")
    os.system('tar -xzvf ' + tgzpath  + tmp_package) 
    handle_rar_rec(tmp_package)
    shutil.rmtree(tmp_package)



def eachFile(filepath):
    pathDir = os.listdir(filepath)      #获取当前路径下的文件名，返回List
    for s in pathDir:
        newDir=os.path.join(filepath,s)     #将文件命加入到当前文件路径后面
        if os.path.isfile(newDir) :         #如果是文件
            if os.path.splitext(newDir)[1]==".tar":  #判断是否是tar
                handle_tar(newDir)                     #读文件（或者做其他的操作）
                pass
        else:
            eachFile(newDir)                #如果不是文件，递归这个文件夹的路径

fileTailNum = 0
cmd = "python3 script.py"

# clear the existing res file
with open("res.txt", "r") as f:
    f.close()

eachFile('.')