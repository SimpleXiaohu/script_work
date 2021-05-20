
(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)

(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (re.range "1" "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (re.range "0" "1")))) (re.++ ((_ re.capture 2) (str.to.re "/")) (re.++ ((_ re.capture 3) (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "2")))) (re.++ ((_ re.capture 4) (str.to.re "/")) ((_ re.capture 5) (re.++ (re.+ (re.union (str.to.re "1") (re.union (str.to.re "9") (re.union (str.to.re "|") (re.union (str.to.re "2") (str.to.re "0")))))) (re.++ (re.range "0" "9") (re.range "0" "9"))))))))) re.end-anchor)))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (re.range "1" "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (re.range "0" "1")))) (re.++ ((_ re.capture 2) (str.to.re "/")) (re.++ ((_ re.capture 3) (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "2")))) (re.++ ((_ re.capture 4) (str.to.re "/")) ((_ re.capture 5) (re.++ (re.+ (re.union (str.to.re "1") (re.union (str.to.re "9") (re.union (str.to.re "|") (re.union (str.to.re "2") (str.to.re "0")))))) (re.++ (re.range "0" "9") (re.range "0" "9"))))))))) re.end-anchor)) (str.to.re "\x00"))))
;match[1]!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (re.range "1" "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (re.range "0" "1")))) (re.++ ((_ re.capture 2) (str.to.re "/")) (re.++ ((_ re.capture 3) (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "2")))) (re.++ ((_ re.capture 4) (str.to.re "/")) ((_ re.capture 5) (re.++ (re.+ (re.union (str.to.re "1") (re.union (str.to.re "9") (re.union (str.to.re "|") (re.union (str.to.re "2") (str.to.re "0")))))) (re.++ (re.range "0" "9") (re.range "0" "9"))))))))) re.end-anchor)) (re.++ re.all(re.+ (re.range "a" "z")) re.all) ))
;/[a-z]+/.test(match[1]) == true
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (re.range "1" "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (re.range "0" "1")))) (re.++ ((_ re.capture 2) (str.to.re "/")) (re.++ ((_ re.capture 3) (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "2")))) (re.++ ((_ re.capture 4) (str.to.re "/")) ((_ re.capture 5) (re.++ (re.+ (re.union (str.to.re "1") (re.union (str.to.re "9") (re.union (str.to.re "|") (re.union (str.to.re "2") (str.to.re "0")))))) (re.++ (re.range "0" "9") (re.range "0" "9"))))))))) re.end-anchor)))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (re.range "1" "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (re.range "0" "1")))) (re.++ ((_ re.capture 2) (str.to.re "/")) (re.++ ((_ re.capture 3) (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "2")))) (re.++ ((_ re.capture 4) (str.to.re "/")) ((_ re.capture 5) (re.++ (re.+ (re.union (str.to.re "1") (re.union (str.to.re "9") (re.union (str.to.re "|") (re.union (str.to.re "2") (str.to.re "0")))))) (re.++ (re.range "0" "9") (re.range "0" "9"))))))))) re.end-anchor)) (str.to.re "\x00"))))	
;match[1]!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (re.range "1" "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (re.range "0" "1")))) (re.++ ((_ re.capture 2) (str.to.re "/")) (re.++ ((_ re.capture 3) (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "2")))) (re.++ ((_ re.capture 4) (str.to.re "/")) ((_ re.capture 5) (re.++ (re.+ (re.union (str.to.re "1") (re.union (str.to.re "9") (re.union (str.to.re "|") (re.union (str.to.re "2") (str.to.re "0")))))) (re.++ (re.range "0" "9") (re.range "0" "9"))))))))) re.end-anchor)) (re.++ re.all(re.+ (re.range "a" "z")) re.all) )))
;/[a-z]+/.test(match[1]) == false	
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (re.range "1" "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (re.range "0" "1")))) (re.++ ((_ re.capture 2) (str.to.re "/")) (re.++ ((_ re.capture 3) (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "2")))) (re.++ ((_ re.capture 4) (str.to.re "/")) ((_ re.capture 5) (re.++ (re.+ (re.union (str.to.re "1") (re.union (str.to.re "9") (re.union (str.to.re "|") (re.union (str.to.re "2") (str.to.re "0")))))) (re.++ (re.range "0" "9") (re.range "0" "9"))))))))) re.end-anchor)))	; match!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (re.range "1" "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (re.range "0" "1")))) (re.++ ((_ re.capture 2) (str.to.re "/")) (re.++ ((_ re.capture 3) (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "2")))) (re.++ ((_ re.capture 4) (str.to.re "/")) ((_ re.capture 5) (re.++ (re.+ (re.union (str.to.re "1") (re.union (str.to.re "9") (re.union (str.to.re "|") (re.union (str.to.re "2") (str.to.re "0")))))) (re.++ (re.range "0" "9") (re.range "0" "9"))))))))) re.end-anchor)) (str.to.re "\x00")))
;match[1]==null
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (not (str.in.re var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (re.range "1" "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (re.range "0" "1")))) (re.++ ((_ re.capture 2) (str.to.re "/")) (re.++ ((_ re.capture 3) (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "2")))) (re.++ ((_ re.capture 4) (str.to.re "/")) ((_ re.capture 5) (re.++ (re.+ (re.union (str.to.re "1") (re.union (str.to.re "9") (re.union (str.to.re "|") (re.union (str.to.re "2") (str.to.re "0")))))) (re.++ (re.range "0" "9") (re.range "0" "9"))))))))) re.end-anchor))))	; match == null
(check-sat)
(get-model)
(pop 1)
(exit)
