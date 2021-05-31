import os,sys,datetime
import subprocess
import shutil
import argparse

# some utils ----------------------------------------------
def writeFileA(file, line):
    # write file with flag "a"
    if(not os.path.exists(file)):
        writeFileW(file, line)
    else:
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
# some utils ----------------------------------------------

# run the test for a specific file, write the res to result file 
def run(cmd, file):
    ret = subprocess.run(f"{cmd} {file}",shell=True,stdout=subprocess.PIPE,stderr=subprocess.PIPE,encoding="utf-8")
    print(f"{file}:\n {ret.stdout}")
    # count the result 
    counter(ret, counterList)
    writeFileA(resFile, f"{file} : {ret.stdout}\n")

# accemulate the counter in the "counterList" based on the result "ret"
def counter(ret, counterList):
    print("if need counter, please implement it")

# write the counting result to res.txt
def writeCounter(file, counterList):
    print("if need counter, please implement it")



# handle_package could input a packge(like .rar, .tar), and you should specify the function un_package. 
# it can input a folder as well.
def handle_package(pkgPath):
    tmp_package = os.path.splitext(pkgPath)[0]
    if not os.path.exists(tmp_package):
        un_package(tmp_package, pkgPath)
    handle_package_rec(tmp_package)

# unpakage the package "pkgPath" to folder "pkgFolder"
def un_package(pkgFolder, pkgPath):
    os.mkdir(pkgFolder)
    os.system(f'echo unrar e {pkgPath} {pkgFolder}')
    os.system(f'unrar e {pkgPath} {pkgFolder} > /dev/null 2>&1')

# run the folder recursively
def handle_package_rec(folderpath):
    pathDir = os.listdir(folderpath)      
    for s in pathDir:
        newDir=os.path.join(folderpath,s)     
        if os.path.isfile(newDir) :        
            if(newDir in already):
            # do not test the file alreay tested
                continue
            if os.path.splitext(newDir)[1]==".smt2":
                run(cmd, newDir)
                writeFileA(alreadyFile, newDir)
        else:
            handle_package_rec(newDir)                            

# main script 
parser = argparse.ArgumentParser()
parser.add_argument("testfile", type=str, default="")
parser.add_argument("-already", type=str, default=f"./already.txt")    # input alreay file
parser.add_argument("-needCount", type=int, default=0)    
# input how many types of res need counting (e.g, if we have two types of result [sat, unsat], then the -needCout = 2)
args = parser.parse_args()
needCount = args.needCount
counterList = [0 for i in range(0, needCount)]
testfile = args.testfile
resDir = f"{os.path.splitext(os.path.basename(testfile))[0]}_res"
mkdir(resDir)
cmd = "python3 script.py"
currentTime = datetime.datetime.now().strftime('%Y-%m-%d-%H-%M-%S') # use current time to distinguish res.txt
resFile = f"./{resDir}/res-{currentTime}.txt"    # sys.argv[1] is the rar being runed
alreadyFile = args.already# use already to track files has been test, avoid repeatedly test. (Like checkpoint)
print(alreadyFile)
already = readFile(alreadyFile)
# clear the existing res file
handle_package(sys.argv[1])
writeCounter(resFile, counterList)