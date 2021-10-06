
(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)

(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ re.begin-anchor ((_ re.capture 1) (re.union (re.union (re.union (re.union (re.++ (re.+ (re.union (str.to.re "V") (str.to.re "v"))) (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ (str.to.re "e") (re.++ (str.to.re "r") (re.++ (str.to.re "d") (re.++ (str.to.re "a") (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.union (re.++ (str.to.re "") ((_ re.capture 3) (re.++ (str.to.re "i") (re.++ (str.to.re "r") (str.to.re "o"))))) (str.to.re "")))))))))) (str.to.re ""))) (re.++ (re.+ (re.union (str.to.re "F") (str.to.re "f"))) (re.union (re.++ (str.to.re "") ((_ re.capture 4) (re.++ (str.to.re "a") (re.++ (str.to.re "l") (re.++ (str.to.re "s") (re.union (str.to.re "e") (str.to.re "o"))))))) (str.to.re "")))) (re.++ (re.+ (re.union (str.to.re "T") (str.to.re "t"))) (re.union (re.++ (str.to.re "") ((_ re.capture 5) (re.++ (str.to.re "r") (re.++ (str.to.re "u") (str.to.re "e"))))) (str.to.re "")))) (str.to.re "0")) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")) (str.to.re "1"))))) re.end-anchor)))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor ((_ re.capture 1) (re.union (re.union (re.union (re.union (re.++ (re.+ (re.union (str.to.re "V") (str.to.re "v"))) (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ (str.to.re "e") (re.++ (str.to.re "r") (re.++ (str.to.re "d") (re.++ (str.to.re "a") (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.union (re.++ (str.to.re "") ((_ re.capture 3) (re.++ (str.to.re "i") (re.++ (str.to.re "r") (str.to.re "o"))))) (str.to.re "")))))))))) (str.to.re ""))) (re.++ (re.+ (re.union (str.to.re "F") (str.to.re "f"))) (re.union (re.++ (str.to.re "") ((_ re.capture 4) (re.++ (str.to.re "a") (re.++ (str.to.re "l") (re.++ (str.to.re "s") (re.union (str.to.re "e") (str.to.re "o"))))))) (str.to.re "")))) (re.++ (re.+ (re.union (str.to.re "T") (str.to.re "t"))) (re.union (re.++ (str.to.re "") ((_ re.capture 5) (re.++ (str.to.re "r") (re.++ (str.to.re "u") (str.to.re "e"))))) (str.to.re "")))) (str.to.re "0")) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")) (str.to.re "1"))))) re.end-anchor)) (str.to.re "\x00"))))
;match[1]!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor ((_ re.capture 1) (re.union (re.union (re.union (re.union (re.++ (re.+ (re.union (str.to.re "V") (str.to.re "v"))) (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ (str.to.re "e") (re.++ (str.to.re "r") (re.++ (str.to.re "d") (re.++ (str.to.re "a") (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.union (re.++ (str.to.re "") ((_ re.capture 3) (re.++ (str.to.re "i") (re.++ (str.to.re "r") (str.to.re "o"))))) (str.to.re "")))))))))) (str.to.re ""))) (re.++ (re.+ (re.union (str.to.re "F") (str.to.re "f"))) (re.union (re.++ (str.to.re "") ((_ re.capture 4) (re.++ (str.to.re "a") (re.++ (str.to.re "l") (re.++ (str.to.re "s") (re.union (str.to.re "e") (str.to.re "o"))))))) (str.to.re "")))) (re.++ (re.+ (re.union (str.to.re "T") (str.to.re "t"))) (re.union (re.++ (str.to.re "") ((_ re.capture 5) (re.++ (str.to.re "r") (re.++ (str.to.re "u") (str.to.re "e"))))) (str.to.re "")))) (str.to.re "0")) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")) (str.to.re "1"))))) re.end-anchor)) (re.++ re.all(re.+ (re.range "a" "z")) re.all) ))
;/[a-z]+/.test(match[1]) == true
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ re.begin-anchor ((_ re.capture 1) (re.union (re.union (re.union (re.union (re.++ (re.+ (re.union (str.to.re "V") (str.to.re "v"))) (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ (str.to.re "e") (re.++ (str.to.re "r") (re.++ (str.to.re "d") (re.++ (str.to.re "a") (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.union (re.++ (str.to.re "") ((_ re.capture 3) (re.++ (str.to.re "i") (re.++ (str.to.re "r") (str.to.re "o"))))) (str.to.re "")))))))))) (str.to.re ""))) (re.++ (re.+ (re.union (str.to.re "F") (str.to.re "f"))) (re.union (re.++ (str.to.re "") ((_ re.capture 4) (re.++ (str.to.re "a") (re.++ (str.to.re "l") (re.++ (str.to.re "s") (re.union (str.to.re "e") (str.to.re "o"))))))) (str.to.re "")))) (re.++ (re.+ (re.union (str.to.re "T") (str.to.re "t"))) (re.union (re.++ (str.to.re "") ((_ re.capture 5) (re.++ (str.to.re "r") (re.++ (str.to.re "u") (str.to.re "e"))))) (str.to.re "")))) (str.to.re "0")) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")) (str.to.re "1"))))) re.end-anchor)))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor ((_ re.capture 1) (re.union (re.union (re.union (re.union (re.++ (re.+ (re.union (str.to.re "V") (str.to.re "v"))) (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ (str.to.re "e") (re.++ (str.to.re "r") (re.++ (str.to.re "d") (re.++ (str.to.re "a") (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.union (re.++ (str.to.re "") ((_ re.capture 3) (re.++ (str.to.re "i") (re.++ (str.to.re "r") (str.to.re "o"))))) (str.to.re "")))))))))) (str.to.re ""))) (re.++ (re.+ (re.union (str.to.re "F") (str.to.re "f"))) (re.union (re.++ (str.to.re "") ((_ re.capture 4) (re.++ (str.to.re "a") (re.++ (str.to.re "l") (re.++ (str.to.re "s") (re.union (str.to.re "e") (str.to.re "o"))))))) (str.to.re "")))) (re.++ (re.+ (re.union (str.to.re "T") (str.to.re "t"))) (re.union (re.++ (str.to.re "") ((_ re.capture 5) (re.++ (str.to.re "r") (re.++ (str.to.re "u") (str.to.re "e"))))) (str.to.re "")))) (str.to.re "0")) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")) (str.to.re "1"))))) re.end-anchor)) (str.to.re "\x00"))))	
;match[1]!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor ((_ re.capture 1) (re.union (re.union (re.union (re.union (re.++ (re.+ (re.union (str.to.re "V") (str.to.re "v"))) (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ (str.to.re "e") (re.++ (str.to.re "r") (re.++ (str.to.re "d") (re.++ (str.to.re "a") (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.union (re.++ (str.to.re "") ((_ re.capture 3) (re.++ (str.to.re "i") (re.++ (str.to.re "r") (str.to.re "o"))))) (str.to.re "")))))))))) (str.to.re ""))) (re.++ (re.+ (re.union (str.to.re "F") (str.to.re "f"))) (re.union (re.++ (str.to.re "") ((_ re.capture 4) (re.++ (str.to.re "a") (re.++ (str.to.re "l") (re.++ (str.to.re "s") (re.union (str.to.re "e") (str.to.re "o"))))))) (str.to.re "")))) (re.++ (re.+ (re.union (str.to.re "T") (str.to.re "t"))) (re.union (re.++ (str.to.re "") ((_ re.capture 5) (re.++ (str.to.re "r") (re.++ (str.to.re "u") (str.to.re "e"))))) (str.to.re "")))) (str.to.re "0")) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")) (str.to.re "1"))))) re.end-anchor)) (re.++ re.all(re.+ (re.range "a" "z")) re.all) )))
;/[a-z]+/.test(match[1]) == false	
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ re.begin-anchor ((_ re.capture 1) (re.union (re.union (re.union (re.union (re.++ (re.+ (re.union (str.to.re "V") (str.to.re "v"))) (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ (str.to.re "e") (re.++ (str.to.re "r") (re.++ (str.to.re "d") (re.++ (str.to.re "a") (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.union (re.++ (str.to.re "") ((_ re.capture 3) (re.++ (str.to.re "i") (re.++ (str.to.re "r") (str.to.re "o"))))) (str.to.re "")))))))))) (str.to.re ""))) (re.++ (re.+ (re.union (str.to.re "F") (str.to.re "f"))) (re.union (re.++ (str.to.re "") ((_ re.capture 4) (re.++ (str.to.re "a") (re.++ (str.to.re "l") (re.++ (str.to.re "s") (re.union (str.to.re "e") (str.to.re "o"))))))) (str.to.re "")))) (re.++ (re.+ (re.union (str.to.re "T") (str.to.re "t"))) (re.union (re.++ (str.to.re "") ((_ re.capture 5) (re.++ (str.to.re "r") (re.++ (str.to.re "u") (str.to.re "e"))))) (str.to.re "")))) (str.to.re "0")) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")) (str.to.re "1"))))) re.end-anchor)))	; match!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor ((_ re.capture 1) (re.union (re.union (re.union (re.union (re.++ (re.+ (re.union (str.to.re "V") (str.to.re "v"))) (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ (str.to.re "e") (re.++ (str.to.re "r") (re.++ (str.to.re "d") (re.++ (str.to.re "a") (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.union (re.++ (str.to.re "") ((_ re.capture 3) (re.++ (str.to.re "i") (re.++ (str.to.re "r") (str.to.re "o"))))) (str.to.re "")))))))))) (str.to.re ""))) (re.++ (re.+ (re.union (str.to.re "F") (str.to.re "f"))) (re.union (re.++ (str.to.re "") ((_ re.capture 4) (re.++ (str.to.re "a") (re.++ (str.to.re "l") (re.++ (str.to.re "s") (re.union (str.to.re "e") (str.to.re "o"))))))) (str.to.re "")))) (re.++ (re.+ (re.union (str.to.re "T") (str.to.re "t"))) (re.union (re.++ (str.to.re "") ((_ re.capture 5) (re.++ (str.to.re "r") (re.++ (str.to.re "u") (str.to.re "e"))))) (str.to.re "")))) (str.to.re "0")) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")) (str.to.re "1"))))) re.end-anchor)) (str.to.re "\x00")))
;match[1]==null
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (not (str.in.re var0 (re.++ (re.++ re.begin-anchor ((_ re.capture 1) (re.union (re.union (re.union (re.union (re.++ (re.+ (re.union (str.to.re "V") (str.to.re "v"))) (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ (str.to.re "e") (re.++ (str.to.re "r") (re.++ (str.to.re "d") (re.++ (str.to.re "a") (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.union (re.++ (str.to.re "") ((_ re.capture 3) (re.++ (str.to.re "i") (re.++ (str.to.re "r") (str.to.re "o"))))) (str.to.re "")))))))))) (str.to.re ""))) (re.++ (re.+ (re.union (str.to.re "F") (str.to.re "f"))) (re.union (re.++ (str.to.re "") ((_ re.capture 4) (re.++ (str.to.re "a") (re.++ (str.to.re "l") (re.++ (str.to.re "s") (re.union (str.to.re "e") (str.to.re "o"))))))) (str.to.re "")))) (re.++ (re.+ (re.union (str.to.re "T") (str.to.re "t"))) (re.union (re.++ (str.to.re "") ((_ re.capture 5) (re.++ (str.to.re "r") (re.++ (str.to.re "u") (str.to.re "e"))))) (str.to.re "")))) (str.to.re "0")) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")) (str.to.re "1"))))) re.end-anchor))))	; match == null
(check-sat)
(get-model)
(pop 1)
(exit)