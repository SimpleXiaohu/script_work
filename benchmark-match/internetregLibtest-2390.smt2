
(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)

(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.*? re.allchar) (re.++ (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")) (re.++ ((_ re.capture 1) (re.union (str.to.re "0") (re.++ (re.range "1" "9") (re.++ ((_ re.capture 2) (re.union (re.union (re.++ (re.range "0" "9") (re.range "0" "9")) (re.range "0" "9")) (str.to.re ""))) (re.* ((_ re.capture 3) (re.++ (str.to.re ",") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9")))))))))) (re.union (re.++ (str.to.re "") ((_ re.capture 4) (re.++ (str.to.re ".") (re.+ (re.range "0" "9"))))) (str.to.re "")))) re.all))))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")) (re.++ ((_ re.capture 1) (re.union (str.to.re "0") (re.++ (re.range "1" "9") (re.++ ((_ re.capture 2) (re.union (re.union (re.++ (re.range "0" "9") (re.range "0" "9")) (re.range "0" "9")) (str.to.re ""))) (re.* ((_ re.capture 3) (re.++ (str.to.re ",") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9")))))))))) (re.union (re.++ (str.to.re "") ((_ re.capture 4) (re.++ (str.to.re ".") (re.+ (re.range "0" "9"))))) (str.to.re "")))) re.all))) (str.to.re "\x00"))))
;match[1]!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")) (re.++ ((_ re.capture 1) (re.union (str.to.re "0") (re.++ (re.range "1" "9") (re.++ ((_ re.capture 2) (re.union (re.union (re.++ (re.range "0" "9") (re.range "0" "9")) (re.range "0" "9")) (str.to.re ""))) (re.* ((_ re.capture 3) (re.++ (str.to.re ",") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9")))))))))) (re.union (re.++ (str.to.re "") ((_ re.capture 4) (re.++ (str.to.re ".") (re.+ (re.range "0" "9"))))) (str.to.re "")))) re.all))) (re.++ re.all(re.+ (re.range "a" "z")) re.all) ))
;/[a-z]+/.test(match[1]) == true
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.*? re.allchar) (re.++ (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")) (re.++ ((_ re.capture 1) (re.union (str.to.re "0") (re.++ (re.range "1" "9") (re.++ ((_ re.capture 2) (re.union (re.union (re.++ (re.range "0" "9") (re.range "0" "9")) (re.range "0" "9")) (str.to.re ""))) (re.* ((_ re.capture 3) (re.++ (str.to.re ",") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9")))))))))) (re.union (re.++ (str.to.re "") ((_ re.capture 4) (re.++ (str.to.re ".") (re.+ (re.range "0" "9"))))) (str.to.re "")))) re.all))))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")) (re.++ ((_ re.capture 1) (re.union (str.to.re "0") (re.++ (re.range "1" "9") (re.++ ((_ re.capture 2) (re.union (re.union (re.++ (re.range "0" "9") (re.range "0" "9")) (re.range "0" "9")) (str.to.re ""))) (re.* ((_ re.capture 3) (re.++ (str.to.re ",") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9")))))))))) (re.union (re.++ (str.to.re "") ((_ re.capture 4) (re.++ (str.to.re ".") (re.+ (re.range "0" "9"))))) (str.to.re "")))) re.all))) (str.to.re "\x00"))))	
;match[1]!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")) (re.++ ((_ re.capture 1) (re.union (str.to.re "0") (re.++ (re.range "1" "9") (re.++ ((_ re.capture 2) (re.union (re.union (re.++ (re.range "0" "9") (re.range "0" "9")) (re.range "0" "9")) (str.to.re ""))) (re.* ((_ re.capture 3) (re.++ (str.to.re ",") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9")))))))))) (re.union (re.++ (str.to.re "") ((_ re.capture 4) (re.++ (str.to.re ".") (re.+ (re.range "0" "9"))))) (str.to.re "")))) re.all))) (re.++ re.all(re.+ (re.range "a" "z")) re.all) )))
;/[a-z]+/.test(match[1]) == false	
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.*? re.allchar) (re.++ (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")) (re.++ ((_ re.capture 1) (re.union (str.to.re "0") (re.++ (re.range "1" "9") (re.++ ((_ re.capture 2) (re.union (re.union (re.++ (re.range "0" "9") (re.range "0" "9")) (re.range "0" "9")) (str.to.re ""))) (re.* ((_ re.capture 3) (re.++ (str.to.re ",") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9")))))))))) (re.union (re.++ (str.to.re "") ((_ re.capture 4) (re.++ (str.to.re ".") (re.+ (re.range "0" "9"))))) (str.to.re "")))) re.all))))	; match!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")) (re.++ ((_ re.capture 1) (re.union (str.to.re "0") (re.++ (re.range "1" "9") (re.++ ((_ re.capture 2) (re.union (re.union (re.++ (re.range "0" "9") (re.range "0" "9")) (re.range "0" "9")) (str.to.re ""))) (re.* ((_ re.capture 3) (re.++ (str.to.re ",") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9")))))))))) (re.union (re.++ (str.to.re "") ((_ re.capture 4) (re.++ (str.to.re ".") (re.+ (re.range "0" "9"))))) (str.to.re "")))) re.all))) (str.to.re "\x00")))
;match[1]==null
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (not (str.in.re var0 (re.++ (re.*? re.allchar) (re.++ (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")) (re.++ ((_ re.capture 1) (re.union (str.to.re "0") (re.++ (re.range "1" "9") (re.++ ((_ re.capture 2) (re.union (re.union (re.++ (re.range "0" "9") (re.range "0" "9")) (re.range "0" "9")) (str.to.re ""))) (re.* ((_ re.capture 3) (re.++ (str.to.re ",") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9")))))))))) (re.union (re.++ (str.to.re "") ((_ re.capture 4) (re.++ (str.to.re ".") (re.+ (re.range "0" "9"))))) (str.to.re "")))) re.all)))))	; match == null
(check-sat)
(get-model)
(pop 1)
(exit)
