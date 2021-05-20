import shutil,os 

def reFresh(path):
    if os.path.exists(path):
        shutil.rmtree(path)
    os.mkdir(path)

jsFolder = "./js-benchmark/"

