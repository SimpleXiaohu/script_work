import os
import signal
import subprocess
import sys
from multiprocessing import Process, Manager


def execmd(cmd, args, v, pid) :
    r = subprocess.Popen(cmd+args, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, preexec_fn=os.setsid, encoding="utf8")
    pid.append(r.pid)
    info = r.stdout.readlines()
    v.append(info[-2:])     # the last 2 lines: e.g ["sat\n", "1.11s\n"]

def cpExecutableJar():
    if(not os.path.exists("./ostrich-assembly-1.0.jar")):
        os.system("cp ./target/scala-*/ostrich-assembly*.jar ostrich-assembly-1.0.jar")

if __name__== "__main__":
    os.system("chmod 755 ./a")
    if len(sys.argv) != 2:
        print("use : python script.py fileName")
        exit(1)
    cpExecutableJar()
    manager = Manager()
    ic3 = manager.list()
    bmc = manager.list()
    ic3_pid = manager.list()
    bmc_pid = manager.list()
    cmd1 = "java -jar ostrich-assembly-1.0.jar -timeout=30 -window=0 -strategy=-I -tmpfile=tmp1.txt "
    cmd2 = "java -jar ostrich-assembly-1.0.jar -timeout=30 -window=30 -strategy=-F -tmpfile=tmp2.txt "
    p_ic3 = Process(target = execmd, args = (cmd1, sys.argv[1] + " 2>&1", ic3, ic3_pid))
    p_ic3.daemon = True
    p_bmc = Process(target = execmd, args = (cmd2, sys.argv[1] + " 2>&1", bmc, bmc_pid))
    p_bmc.daemon = True
    p_ic3.start()
    p_bmc.start()
    while (len(ic3) == 0) & (len(bmc) == 0) :
        pass
    if len(ic3) > 0 :
        os.killpg(bmc_pid[0], signal.SIGKILL)
        print(ic3[0][0][0:-1])  # 0:-1 is used to delete "\n"
        #p_ic3.join()
    elif 'sat\n' in bmc[0] :
        os.killpg(ic3_pid[0], signal.SIGKILL)
        print(bmc[0][0][0:-1])
        #p_bmc.join()
    else:
        while (len(ic3) == 0) :
            pass
        print(ic3[0][0][0:-1])



