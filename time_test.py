from timeit import default_timer as timer
import time
import subprocess
import os, signal, sys

exposeCommand = "java -jar /mnt/e/hanzhilei/ostrich/target/scala-2.11/ostrich-assembly-1.0.jar +incremental "
tic = time.time()
proc = subprocess.Popen(exposeCommand + " " + sys.argv[1], shell = True, start_new_session=True, encoding="utf8", stderr=subprocess.PIPE, stdout=subprocess.PIPE)
try:
    outs, errs = proc.communicate()
    print(f"outs is:\n{outs}")
    print(f"errs is:\n{errs}")
except subprocess.TimeoutExpired:
    os.killpg(proc.pid, signal.SIGKILL)
    outs, errs = proc.communicate()
    print(f"outs is:\n{outs}")
    print(f"errs is:\n{errs}")
    print("\nexpose timeout!!!!!")

toc = time.time()

print("\ntime used : " + "{:.3f}".format(toc - tic) + "s" ) # 输出的时间，秒为单位