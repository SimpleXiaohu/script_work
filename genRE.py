

def concat(*regulars):
    res = ""
    for re in regulars:
        res = res + re
    return res
def alternation(*regulars):
    res = ""
    for re in regulars:
        res = res + "|" + re
    res = res[1:]
    return res
def kleeneStar(*regulars):
    return regulars[0] + "*"
def lazyKleeneStar(*regulars):
    return regulars[0] + "*?"
def optional(*regulars):
    return regulars[0] + "?"
def lazyOptional(*regulars):
    return regulars[0] + "??"
def kleenePlus(*regulars):
    return regulars[0] + "+"
def lazyKleenePlus(*regulars):
    return regulars[0] + "+?"
def repetition(*regulars):
    return regulars[0] + "{1,4}"
def lazyRepetition(*regulars):
    return regulars[0] + "{1,4}?"
def capture(*regulars):
    return "(" + regulars[0] + ")" 


def generateRE():
    _az = "[a-z]"
    _AZ = "[A-Z]"
    _09 = "[0-9]"
    _notWord = "[^A-Za-z0-9]"

    func_list = [concat, alternation, kleeneStar, lazyKleeneStar, optional, lazyOptional, kleenePlus, lazyKleenePlus, repetition, lazyRepetition, capture]
    for func1 in func_list:
        print("^"+capture(func1(_az, _AZ)))
        for func2 in func_list:
            if not func1 == func2:
                print("^"+func1(capture(func2(_az,_AZ)),_09))
            for func3 in func_list:
                if func1 != func2 or func1 != func3:
                    print("^"+func1(func2(capture(func3(_az, _AZ), _09)), _notWord))

generateRE()