import os,sys,re

handledFileList = []

def eachFile(filepath):
    pathDir = os.listdir(filepath)      #获取当前路径下的文件名，返回List
    for s in pathDir:
        newDir=os.path.join(filepath,s)     #将文件命加入到当前文件路径后面
        if os.path.isfile(newDir) :         #如果是文件
            if os.path.splitext(newDir)[1]==".js" \
                and os.path.split(newDir)[1] in handledFileList:  #判断是否是txt
                os.system(f"git rm {newDir}")                     #读文件（或者做其他的操作）
                print(f"git rm {newDir}")
                pass
        else:
            eachFile(newDir)                #如果不是文件，递归这个文件夹的路径

with open(sys.argv[2], "r") as f:
    lines = f.readlines()
    for line in lines:
        handledFileList.append(re.sub(r"\n", "", line))
for line in handledFileList:
    print(line)

eachFile(sys.argv[1])