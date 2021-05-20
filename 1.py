import os, sys, re, subprocess
def cleanLog():
    with open("log", "w", encoding="utf8") as f:
        f.flush()
def logFile(line):
    with open("log", "a+", encoding="utf8") as f:
        f.write(line)
        f.flush()
def logAlready(line):
    with open("already", "a+", encoding="utf8") as f:
        f.write(line)
        f.flush()
def readAlready():
    with open("already", "r", encoding="utf8") as f:
        res = f.read()
    return res
def exec_ostrich(file):
    # command = f"java -jar /mnt/e/philipp/ostrich/target/scala-2.11/ostrich-assembly-1.0.jar +incremental {file}"
    command = f"java -jar ./ostrich-assembly-1.0.jar +incremental {file}"

    ret = subprocess.run(command,shell=True,stdout=subprocess.PIPE,stderr=subprocess.PIPE,encoding="utf-8")
    res = re.findall(r"^sat$|^unsat$", ret.stdout, re.M)
    return res


def exec_expose(file):
    # command = f"EXPOSE_PRINT_PATHS=1 /mnt/d/github/ExpoSE/expoSE {file}"
    command = f"EXPOSE_PRINT_PATHS=1 ../ExpoSE/expoSE {file}"
    ret = subprocess.run(command,shell=True,stdout=subprocess.PIPE,stderr=subprocess.PIPE,encoding="utf-8")
    res1 = re.findall(r"^\d", ret.stdout, re.M)
    res2 = re.findall(r".*? took \d(\.)?\d*s", ret.stdout, re.M)
    return res1 + res2

def parseLine(file):
    with open(file, "r+", encoding="utf8") as f:
        lines = f.readlines()
        # test_pattern = r"\.\/benchmark-match\/internetregLibtest-\d*"
        test_pattern = r"\.\/benchmark-match\/uniq-regexestest-\d*"
        alreadyTest = readAlready()    #the already tested file
        for line in lines:
            match = re.search(test_pattern, line)
            if(match != None):
                if(match.group() in alreadyTest):
                    continue
                print(match.group())
                smtFile = match.group() + ".smt2"
                jsFile = match.group() + ".js"
                if (not os.path.exists(smtFile)):
                    continue
                f = open(smtFile, "r", encoding="utf8")
                smtLines = f.read()
                f.close()
                f = open(jsFile, "r", encoding="utf8")
                jsLines = f.read()
                f.close()
                ostrich_res = exec_ostrich(smtFile)
                expose_res = exec_expose(jsFile)
                isWrong = False
                if(len(ostrich_res) < 4):
                    continue
                if ((not "unsat" in ostrich_res[0]) ^ ('1' in expose_res)):
                    logFile(f"{jsFile}: .test(reg) wrong, ostrich res: {ostrich_res[0]}\n")
                    isWrong = True
                # if((not "unsat" in ostrich_res[1]) ^ ('2' in expose_res)):
                #     logFile(f"{jsFile}: .test(reg) wrong, ostrich res: {ostrich_res[1]}\n")
                #     isWrong = True
                if((not "unsat" in ostrich_res[1]) and (not '2' in expose_res)):
                    logFile(f"{jsFile}: .test(reg) wrong, ostrich res: {ostrich_res[1]}\n")
                    isWrong = True
                # if((not "unsat" in ostrich_res[2]) ^ ('3' in expose_res)):
                #     logFile(f"{jsFile}: match[1] wrong, ostrich res: {ostrich_res[2]}\n")
                #     isWrong = True
                # if((not "unsat" in ostrich_res[2]) and (not '3' in expose_res)):
                #     logFile(f"{jsFile}: match[1] wrong, ostrich res: {ostrich_res[2]}\n")
                #     isWrong = True
                if((not "unsat" in ostrich_res[3]) ^ ('4' in expose_res)):
                    logFile(f"{jsFile}: match wrong, ostrich res: {ostrich_res[3]}\n")
                    isWrong = True
                if(isWrong):
                    logFile(f"\n{expose_res}\n{ostrich_res}\n{jsLines}\nsmt:\n{smtLines}, ")
                logAlready(match.group()+"\n")
# cleanLog()
parseLine(sys.argv[1])