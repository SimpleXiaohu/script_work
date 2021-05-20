
(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)

(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 ((_ re.capture 1) (re.union (re.++ (re.++ (re.*? re.allchar) (re.* (re.range "\x01" "\xff"))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.++ (re.union (str.to.re "w") (str.to.re "W")) (re.++ (re.union (str.to.re "m") (str.to.re "M")) (re.union (re.++ (str.to.re "a") re.all) (re.++ (str.to.re "A") re.all))))))) (re.++ ((_ re.capture 3) (re.++ (re.union (re.++ (re.*? re.allchar) (str.to.re "m")) (re.++ (re.*? re.allchar) (str.to.re "M"))) (re.++ (re.union (str.to.re "p") (str.to.re "P")) (str.to.re "3")))) re.end-anchor)))))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 ((_ re.capture 1) (re.union (re.++ (re.++ (re.*? re.allchar) (re.* (re.range "\x01" "\xff"))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.++ (re.union (str.to.re "w") (str.to.re "W")) (re.++ (re.union (str.to.re "m") (str.to.re "M")) (re.union (re.++ (str.to.re "a") re.all) (re.++ (str.to.re "A") re.all))))))) (re.++ ((_ re.capture 3) (re.++ (re.union (re.++ (re.*? re.allchar) (str.to.re "m")) (re.++ (re.*? re.allchar) (str.to.re "M"))) (re.++ (re.union (str.to.re "p") (str.to.re "P")) (str.to.re "3")))) re.end-anchor)))) (str.to.re "\x00"))))
;match[1]!==null
(assert (str.in.re ((_ str.extract 1) var0 ((_ re.capture 1) (re.union (re.++ (re.++ (re.*? re.allchar) (re.* (re.range "\x01" "\xff"))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.++ (re.union (str.to.re "w") (str.to.re "W")) (re.++ (re.union (str.to.re "m") (str.to.re "M")) (re.union (re.++ (str.to.re "a") re.all) (re.++ (str.to.re "A") re.all))))))) (re.++ ((_ re.capture 3) (re.++ (re.union (re.++ (re.*? re.allchar) (str.to.re "m")) (re.++ (re.*? re.allchar) (str.to.re "M"))) (re.++ (re.union (str.to.re "p") (str.to.re "P")) (str.to.re "3")))) re.end-anchor)))) (re.++ re.all(re.+ (re.range "a" "z")) re.all) ))
;/[a-z]+/.test(match[1]) == true
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 ((_ re.capture 1) (re.union (re.++ (re.++ (re.*? re.allchar) (re.* (re.range "\x01" "\xff"))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.++ (re.union (str.to.re "w") (str.to.re "W")) (re.++ (re.union (str.to.re "m") (str.to.re "M")) (re.union (re.++ (str.to.re "a") re.all) (re.++ (str.to.re "A") re.all))))))) (re.++ ((_ re.capture 3) (re.++ (re.union (re.++ (re.*? re.allchar) (str.to.re "m")) (re.++ (re.*? re.allchar) (str.to.re "M"))) (re.++ (re.union (str.to.re "p") (str.to.re "P")) (str.to.re "3")))) re.end-anchor)))))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 ((_ re.capture 1) (re.union (re.++ (re.++ (re.*? re.allchar) (re.* (re.range "\x01" "\xff"))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.++ (re.union (str.to.re "w") (str.to.re "W")) (re.++ (re.union (str.to.re "m") (str.to.re "M")) (re.union (re.++ (str.to.re "a") re.all) (re.++ (str.to.re "A") re.all))))))) (re.++ ((_ re.capture 3) (re.++ (re.union (re.++ (re.*? re.allchar) (str.to.re "m")) (re.++ (re.*? re.allchar) (str.to.re "M"))) (re.++ (re.union (str.to.re "p") (str.to.re "P")) (str.to.re "3")))) re.end-anchor)))) (str.to.re "\x00"))))	
;match[1]!==null
(assert (not (str.in.re ((_ str.extract 1) var0 ((_ re.capture 1) (re.union (re.++ (re.++ (re.*? re.allchar) (re.* (re.range "\x01" "\xff"))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.++ (re.union (str.to.re "w") (str.to.re "W")) (re.++ (re.union (str.to.re "m") (str.to.re "M")) (re.union (re.++ (str.to.re "a") re.all) (re.++ (str.to.re "A") re.all))))))) (re.++ ((_ re.capture 3) (re.++ (re.union (re.++ (re.*? re.allchar) (str.to.re "m")) (re.++ (re.*? re.allchar) (str.to.re "M"))) (re.++ (re.union (str.to.re "p") (str.to.re "P")) (str.to.re "3")))) re.end-anchor)))) (re.++ re.all(re.+ (re.range "a" "z")) re.all) )))
;/[a-z]+/.test(match[1]) == false	
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 ((_ re.capture 1) (re.union (re.++ (re.++ (re.*? re.allchar) (re.* (re.range "\x01" "\xff"))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.++ (re.union (str.to.re "w") (str.to.re "W")) (re.++ (re.union (str.to.re "m") (str.to.re "M")) (re.union (re.++ (str.to.re "a") re.all) (re.++ (str.to.re "A") re.all))))))) (re.++ ((_ re.capture 3) (re.++ (re.union (re.++ (re.*? re.allchar) (str.to.re "m")) (re.++ (re.*? re.allchar) (str.to.re "M"))) (re.++ (re.union (str.to.re "p") (str.to.re "P")) (str.to.re "3")))) re.end-anchor)))))	; match!==null
(assert (str.in.re ((_ str.extract 1) var0 ((_ re.capture 1) (re.union (re.++ (re.++ (re.*? re.allchar) (re.* (re.range "\x01" "\xff"))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.++ (re.union (str.to.re "w") (str.to.re "W")) (re.++ (re.union (str.to.re "m") (str.to.re "M")) (re.union (re.++ (str.to.re "a") re.all) (re.++ (str.to.re "A") re.all))))))) (re.++ ((_ re.capture 3) (re.++ (re.union (re.++ (re.*? re.allchar) (str.to.re "m")) (re.++ (re.*? re.allchar) (str.to.re "M"))) (re.++ (re.union (str.to.re "p") (str.to.re "P")) (str.to.re "3")))) re.end-anchor)))) (str.to.re "\x00")))
;match[1]==null
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (not (str.in.re var0 ((_ re.capture 1) (re.union (re.++ (re.++ (re.*? re.allchar) (re.* (re.range "\x01" "\xff"))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.++ (re.union (str.to.re "w") (str.to.re "W")) (re.++ (re.union (str.to.re "m") (str.to.re "M")) (re.union (re.++ (str.to.re "a") re.all) (re.++ (str.to.re "A") re.all))))))) (re.++ ((_ re.capture 3) (re.++ (re.union (re.++ (re.*? re.allchar) (str.to.re "m")) (re.++ (re.*? re.allchar) (str.to.re "M"))) (re.++ (re.union (str.to.re "p") (str.to.re "P")) (str.to.re "3")))) re.end-anchor))))))	; match == null
(check-sat)
(get-model)
(pop 1)
(exit)
