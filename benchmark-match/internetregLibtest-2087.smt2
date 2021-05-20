
(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)

(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.* (re.range "\x01" "\xff"))) (re.++ (re.range "1" "9") (re.* (re.range "\x01" "\xff"))))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.union ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (str.to.re "j") (str.to.re "J"))) (re.++ ((_ re.capture 5) (re.union (str.to.re "p") (str.to.re "P"))) ((_ re.capture 6) (re.union (str.to.re "g") (str.to.re "G")))))) ((_ re.capture 7) (re.++ ((_ re.capture 8) (re.union (str.to.re "g") (str.to.re "G"))) (re.++ ((_ re.capture 9) (re.union (str.to.re "i") (str.to.re "I"))) ((_ re.capture 10) (re.union (str.to.re "f") (str.to.re "F"))))))))))) re.end-anchor)))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.* (re.range "\x01" "\xff"))) (re.++ (re.range "1" "9") (re.* (re.range "\x01" "\xff"))))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.union ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (str.to.re "j") (str.to.re "J"))) (re.++ ((_ re.capture 5) (re.union (str.to.re "p") (str.to.re "P"))) ((_ re.capture 6) (re.union (str.to.re "g") (str.to.re "G")))))) ((_ re.capture 7) (re.++ ((_ re.capture 8) (re.union (str.to.re "g") (str.to.re "G"))) (re.++ ((_ re.capture 9) (re.union (str.to.re "i") (str.to.re "I"))) ((_ re.capture 10) (re.union (str.to.re "f") (str.to.re "F"))))))))))) re.end-anchor)) (str.to.re "\x00"))))
;match[1]!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.* (re.range "\x01" "\xff"))) (re.++ (re.range "1" "9") (re.* (re.range "\x01" "\xff"))))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.union ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (str.to.re "j") (str.to.re "J"))) (re.++ ((_ re.capture 5) (re.union (str.to.re "p") (str.to.re "P"))) ((_ re.capture 6) (re.union (str.to.re "g") (str.to.re "G")))))) ((_ re.capture 7) (re.++ ((_ re.capture 8) (re.union (str.to.re "g") (str.to.re "G"))) (re.++ ((_ re.capture 9) (re.union (str.to.re "i") (str.to.re "I"))) ((_ re.capture 10) (re.union (str.to.re "f") (str.to.re "F"))))))))))) re.end-anchor)) (re.++ re.all(re.+ (re.range "a" "z")) re.all) ))
;/[a-z]+/.test(match[1]) == true
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.* (re.range "\x01" "\xff"))) (re.++ (re.range "1" "9") (re.* (re.range "\x01" "\xff"))))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.union ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (str.to.re "j") (str.to.re "J"))) (re.++ ((_ re.capture 5) (re.union (str.to.re "p") (str.to.re "P"))) ((_ re.capture 6) (re.union (str.to.re "g") (str.to.re "G")))))) ((_ re.capture 7) (re.++ ((_ re.capture 8) (re.union (str.to.re "g") (str.to.re "G"))) (re.++ ((_ re.capture 9) (re.union (str.to.re "i") (str.to.re "I"))) ((_ re.capture 10) (re.union (str.to.re "f") (str.to.re "F"))))))))))) re.end-anchor)))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.* (re.range "\x01" "\xff"))) (re.++ (re.range "1" "9") (re.* (re.range "\x01" "\xff"))))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.union ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (str.to.re "j") (str.to.re "J"))) (re.++ ((_ re.capture 5) (re.union (str.to.re "p") (str.to.re "P"))) ((_ re.capture 6) (re.union (str.to.re "g") (str.to.re "G")))))) ((_ re.capture 7) (re.++ ((_ re.capture 8) (re.union (str.to.re "g") (str.to.re "G"))) (re.++ ((_ re.capture 9) (re.union (str.to.re "i") (str.to.re "I"))) ((_ re.capture 10) (re.union (str.to.re "f") (str.to.re "F"))))))))))) re.end-anchor)) (str.to.re "\x00"))))	
;match[1]!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.* (re.range "\x01" "\xff"))) (re.++ (re.range "1" "9") (re.* (re.range "\x01" "\xff"))))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.union ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (str.to.re "j") (str.to.re "J"))) (re.++ ((_ re.capture 5) (re.union (str.to.re "p") (str.to.re "P"))) ((_ re.capture 6) (re.union (str.to.re "g") (str.to.re "G")))))) ((_ re.capture 7) (re.++ ((_ re.capture 8) (re.union (str.to.re "g") (str.to.re "G"))) (re.++ ((_ re.capture 9) (re.union (str.to.re "i") (str.to.re "I"))) ((_ re.capture 10) (re.union (str.to.re "f") (str.to.re "F"))))))))))) re.end-anchor)) (re.++ re.all(re.+ (re.range "a" "z")) re.all) )))
;/[a-z]+/.test(match[1]) == false	
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.* (re.range "\x01" "\xff"))) (re.++ (re.range "1" "9") (re.* (re.range "\x01" "\xff"))))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.union ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (str.to.re "j") (str.to.re "J"))) (re.++ ((_ re.capture 5) (re.union (str.to.re "p") (str.to.re "P"))) ((_ re.capture 6) (re.union (str.to.re "g") (str.to.re "G")))))) ((_ re.capture 7) (re.++ ((_ re.capture 8) (re.union (str.to.re "g") (str.to.re "G"))) (re.++ ((_ re.capture 9) (re.union (str.to.re "i") (str.to.re "I"))) ((_ re.capture 10) (re.union (str.to.re "f") (str.to.re "F"))))))))))) re.end-anchor)))	; match!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.* (re.range "\x01" "\xff"))) (re.++ (re.range "1" "9") (re.* (re.range "\x01" "\xff"))))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.union ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (str.to.re "j") (str.to.re "J"))) (re.++ ((_ re.capture 5) (re.union (str.to.re "p") (str.to.re "P"))) ((_ re.capture 6) (re.union (str.to.re "g") (str.to.re "G")))))) ((_ re.capture 7) (re.++ ((_ re.capture 8) (re.union (str.to.re "g") (str.to.re "G"))) (re.++ ((_ re.capture 9) (re.union (str.to.re "i") (str.to.re "I"))) ((_ re.capture 10) (re.union (str.to.re "f") (str.to.re "F"))))))))))) re.end-anchor)) (str.to.re "\x00")))
;match[1]==null
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (not (str.in.re var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.* (re.range "\x01" "\xff"))) (re.++ (re.range "1" "9") (re.* (re.range "\x01" "\xff"))))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.union ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (str.to.re "j") (str.to.re "J"))) (re.++ ((_ re.capture 5) (re.union (str.to.re "p") (str.to.re "P"))) ((_ re.capture 6) (re.union (str.to.re "g") (str.to.re "G")))))) ((_ re.capture 7) (re.++ ((_ re.capture 8) (re.union (str.to.re "g") (str.to.re "G"))) (re.++ ((_ re.capture 9) (re.union (str.to.re "i") (str.to.re "I"))) ((_ re.capture 10) (re.union (str.to.re "f") (str.to.re "F"))))))))))) re.end-anchor))))	; match == null
(check-sat)
(get-model)
(pop 1)
(exit)