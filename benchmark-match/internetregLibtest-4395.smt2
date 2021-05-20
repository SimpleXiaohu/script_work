
(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)

(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.*? re.allchar) (re.++ (re.union (re.union (re.union ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.union (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (re.union (str.to.re "0") (str.to.re "1"))))) (re.++ (str.to.re "/") (re.++ (re.union (re.++ (str.to.re "0") (re.union (str.to.re "1") (re.union (str.to.re "3") (re.union (str.to.re "5") (re.union (str.to.re "7") (str.to.re "8")))))) (re.++ (str.to.re "1") (re.union (str.to.re "0") (str.to.re "2")))) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9")))))))))) ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "8")))) (re.++ (str.to.re "/") (re.++ (re.++ (str.to.re "0") (str.to.re "2")) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9"))))))))))) ((_ re.capture 5) (re.++ (str.to.re "2") (re.++ (str.to.re "9") (re.++ (str.to.re "/") (re.++ (re.++ (str.to.re "0") (str.to.re "2")) (re.++ (str.to.re "/") ((_ re.capture 6) (re.union ((_ re.capture 7) (re.union (re.union (re.union (re.++ (str.to.re "1") (re.++ (str.to.re "2") (re.++ (str.to.re "0") (str.to.re "0")))) (re.++ (str.to.re "1") (re.++ (str.to.re "6") (re.++ (str.to.re "0") (str.to.re "0"))))) (re.++ (str.to.re "2") (re.++ (str.to.re "0") (re.++ (str.to.re "0") (str.to.re "0"))))) (re.++ (str.to.re "2") (re.++ (str.to.re "4") (re.++ (str.to.re "0") (str.to.re "0")))))) (re.++ ((_ re.capture 8) (re.union (re.++ (str.to.re "1") (re.range "6" "9")) (re.++ (str.to.re "2") (re.range "0" "9")))) ((_ re.capture 9) ((_ re.capture 10) (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.++ (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))) (re.++ (str.to.re "1") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "2") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "3") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "4") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "5") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "6") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "7") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "8") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "9") (re.union (str.to.re "2") (str.to.re "6")))))))))))))))) ((_ re.capture 11) (re.++ ((_ re.capture 12) (re.union (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (str.to.re "0")))) (re.++ (str.to.re "/") (re.++ (re.union (re.++ (str.to.re "0") (re.union (str.to.re "4") (re.union (str.to.re "6") (str.to.re "9")))) (re.++ (str.to.re "1") (str.to.re "1"))) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9"))))))))))) re.all))))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.union (re.union (re.union ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.union (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (re.union (str.to.re "0") (str.to.re "1"))))) (re.++ (str.to.re "/") (re.++ (re.union (re.++ (str.to.re "0") (re.union (str.to.re "1") (re.union (str.to.re "3") (re.union (str.to.re "5") (re.union (str.to.re "7") (str.to.re "8")))))) (re.++ (str.to.re "1") (re.union (str.to.re "0") (str.to.re "2")))) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9")))))))))) ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "8")))) (re.++ (str.to.re "/") (re.++ (re.++ (str.to.re "0") (str.to.re "2")) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9"))))))))))) ((_ re.capture 5) (re.++ (str.to.re "2") (re.++ (str.to.re "9") (re.++ (str.to.re "/") (re.++ (re.++ (str.to.re "0") (str.to.re "2")) (re.++ (str.to.re "/") ((_ re.capture 6) (re.union ((_ re.capture 7) (re.union (re.union (re.union (re.++ (str.to.re "1") (re.++ (str.to.re "2") (re.++ (str.to.re "0") (str.to.re "0")))) (re.++ (str.to.re "1") (re.++ (str.to.re "6") (re.++ (str.to.re "0") (str.to.re "0"))))) (re.++ (str.to.re "2") (re.++ (str.to.re "0") (re.++ (str.to.re "0") (str.to.re "0"))))) (re.++ (str.to.re "2") (re.++ (str.to.re "4") (re.++ (str.to.re "0") (str.to.re "0")))))) (re.++ ((_ re.capture 8) (re.union (re.++ (str.to.re "1") (re.range "6" "9")) (re.++ (str.to.re "2") (re.range "0" "9")))) ((_ re.capture 9) ((_ re.capture 10) (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.++ (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))) (re.++ (str.to.re "1") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "2") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "3") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "4") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "5") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "6") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "7") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "8") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "9") (re.union (str.to.re "2") (str.to.re "6")))))))))))))))) ((_ re.capture 11) (re.++ ((_ re.capture 12) (re.union (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (str.to.re "0")))) (re.++ (str.to.re "/") (re.++ (re.union (re.++ (str.to.re "0") (re.union (str.to.re "4") (re.union (str.to.re "6") (str.to.re "9")))) (re.++ (str.to.re "1") (str.to.re "1"))) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9"))))))))))) re.all))) (str.to.re "\x00"))))
;match[1]!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.union (re.union (re.union ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.union (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (re.union (str.to.re "0") (str.to.re "1"))))) (re.++ (str.to.re "/") (re.++ (re.union (re.++ (str.to.re "0") (re.union (str.to.re "1") (re.union (str.to.re "3") (re.union (str.to.re "5") (re.union (str.to.re "7") (str.to.re "8")))))) (re.++ (str.to.re "1") (re.union (str.to.re "0") (str.to.re "2")))) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9")))))))))) ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "8")))) (re.++ (str.to.re "/") (re.++ (re.++ (str.to.re "0") (str.to.re "2")) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9"))))))))))) ((_ re.capture 5) (re.++ (str.to.re "2") (re.++ (str.to.re "9") (re.++ (str.to.re "/") (re.++ (re.++ (str.to.re "0") (str.to.re "2")) (re.++ (str.to.re "/") ((_ re.capture 6) (re.union ((_ re.capture 7) (re.union (re.union (re.union (re.++ (str.to.re "1") (re.++ (str.to.re "2") (re.++ (str.to.re "0") (str.to.re "0")))) (re.++ (str.to.re "1") (re.++ (str.to.re "6") (re.++ (str.to.re "0") (str.to.re "0"))))) (re.++ (str.to.re "2") (re.++ (str.to.re "0") (re.++ (str.to.re "0") (str.to.re "0"))))) (re.++ (str.to.re "2") (re.++ (str.to.re "4") (re.++ (str.to.re "0") (str.to.re "0")))))) (re.++ ((_ re.capture 8) (re.union (re.++ (str.to.re "1") (re.range "6" "9")) (re.++ (str.to.re "2") (re.range "0" "9")))) ((_ re.capture 9) ((_ re.capture 10) (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.++ (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))) (re.++ (str.to.re "1") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "2") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "3") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "4") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "5") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "6") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "7") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "8") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "9") (re.union (str.to.re "2") (str.to.re "6")))))))))))))))) ((_ re.capture 11) (re.++ ((_ re.capture 12) (re.union (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (str.to.re "0")))) (re.++ (str.to.re "/") (re.++ (re.union (re.++ (str.to.re "0") (re.union (str.to.re "4") (re.union (str.to.re "6") (str.to.re "9")))) (re.++ (str.to.re "1") (str.to.re "1"))) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9"))))))))))) re.all))) (re.++ re.all(re.+ (re.range "a" "z")) re.all) ))
;/[a-z]+/.test(match[1]) == true
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.*? re.allchar) (re.++ (re.union (re.union (re.union ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.union (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (re.union (str.to.re "0") (str.to.re "1"))))) (re.++ (str.to.re "/") (re.++ (re.union (re.++ (str.to.re "0") (re.union (str.to.re "1") (re.union (str.to.re "3") (re.union (str.to.re "5") (re.union (str.to.re "7") (str.to.re "8")))))) (re.++ (str.to.re "1") (re.union (str.to.re "0") (str.to.re "2")))) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9")))))))))) ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "8")))) (re.++ (str.to.re "/") (re.++ (re.++ (str.to.re "0") (str.to.re "2")) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9"))))))))))) ((_ re.capture 5) (re.++ (str.to.re "2") (re.++ (str.to.re "9") (re.++ (str.to.re "/") (re.++ (re.++ (str.to.re "0") (str.to.re "2")) (re.++ (str.to.re "/") ((_ re.capture 6) (re.union ((_ re.capture 7) (re.union (re.union (re.union (re.++ (str.to.re "1") (re.++ (str.to.re "2") (re.++ (str.to.re "0") (str.to.re "0")))) (re.++ (str.to.re "1") (re.++ (str.to.re "6") (re.++ (str.to.re "0") (str.to.re "0"))))) (re.++ (str.to.re "2") (re.++ (str.to.re "0") (re.++ (str.to.re "0") (str.to.re "0"))))) (re.++ (str.to.re "2") (re.++ (str.to.re "4") (re.++ (str.to.re "0") (str.to.re "0")))))) (re.++ ((_ re.capture 8) (re.union (re.++ (str.to.re "1") (re.range "6" "9")) (re.++ (str.to.re "2") (re.range "0" "9")))) ((_ re.capture 9) ((_ re.capture 10) (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.++ (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))) (re.++ (str.to.re "1") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "2") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "3") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "4") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "5") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "6") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "7") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "8") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "9") (re.union (str.to.re "2") (str.to.re "6")))))))))))))))) ((_ re.capture 11) (re.++ ((_ re.capture 12) (re.union (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (str.to.re "0")))) (re.++ (str.to.re "/") (re.++ (re.union (re.++ (str.to.re "0") (re.union (str.to.re "4") (re.union (str.to.re "6") (str.to.re "9")))) (re.++ (str.to.re "1") (str.to.re "1"))) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9"))))))))))) re.all))))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.union (re.union (re.union ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.union (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (re.union (str.to.re "0") (str.to.re "1"))))) (re.++ (str.to.re "/") (re.++ (re.union (re.++ (str.to.re "0") (re.union (str.to.re "1") (re.union (str.to.re "3") (re.union (str.to.re "5") (re.union (str.to.re "7") (str.to.re "8")))))) (re.++ (str.to.re "1") (re.union (str.to.re "0") (str.to.re "2")))) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9")))))))))) ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "8")))) (re.++ (str.to.re "/") (re.++ (re.++ (str.to.re "0") (str.to.re "2")) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9"))))))))))) ((_ re.capture 5) (re.++ (str.to.re "2") (re.++ (str.to.re "9") (re.++ (str.to.re "/") (re.++ (re.++ (str.to.re "0") (str.to.re "2")) (re.++ (str.to.re "/") ((_ re.capture 6) (re.union ((_ re.capture 7) (re.union (re.union (re.union (re.++ (str.to.re "1") (re.++ (str.to.re "2") (re.++ (str.to.re "0") (str.to.re "0")))) (re.++ (str.to.re "1") (re.++ (str.to.re "6") (re.++ (str.to.re "0") (str.to.re "0"))))) (re.++ (str.to.re "2") (re.++ (str.to.re "0") (re.++ (str.to.re "0") (str.to.re "0"))))) (re.++ (str.to.re "2") (re.++ (str.to.re "4") (re.++ (str.to.re "0") (str.to.re "0")))))) (re.++ ((_ re.capture 8) (re.union (re.++ (str.to.re "1") (re.range "6" "9")) (re.++ (str.to.re "2") (re.range "0" "9")))) ((_ re.capture 9) ((_ re.capture 10) (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.++ (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))) (re.++ (str.to.re "1") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "2") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "3") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "4") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "5") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "6") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "7") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "8") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "9") (re.union (str.to.re "2") (str.to.re "6")))))))))))))))) ((_ re.capture 11) (re.++ ((_ re.capture 12) (re.union (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (str.to.re "0")))) (re.++ (str.to.re "/") (re.++ (re.union (re.++ (str.to.re "0") (re.union (str.to.re "4") (re.union (str.to.re "6") (str.to.re "9")))) (re.++ (str.to.re "1") (str.to.re "1"))) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9"))))))))))) re.all))) (str.to.re "\x00"))))	
;match[1]!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.union (re.union (re.union ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.union (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (re.union (str.to.re "0") (str.to.re "1"))))) (re.++ (str.to.re "/") (re.++ (re.union (re.++ (str.to.re "0") (re.union (str.to.re "1") (re.union (str.to.re "3") (re.union (str.to.re "5") (re.union (str.to.re "7") (str.to.re "8")))))) (re.++ (str.to.re "1") (re.union (str.to.re "0") (str.to.re "2")))) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9")))))))))) ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "8")))) (re.++ (str.to.re "/") (re.++ (re.++ (str.to.re "0") (str.to.re "2")) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9"))))))))))) ((_ re.capture 5) (re.++ (str.to.re "2") (re.++ (str.to.re "9") (re.++ (str.to.re "/") (re.++ (re.++ (str.to.re "0") (str.to.re "2")) (re.++ (str.to.re "/") ((_ re.capture 6) (re.union ((_ re.capture 7) (re.union (re.union (re.union (re.++ (str.to.re "1") (re.++ (str.to.re "2") (re.++ (str.to.re "0") (str.to.re "0")))) (re.++ (str.to.re "1") (re.++ (str.to.re "6") (re.++ (str.to.re "0") (str.to.re "0"))))) (re.++ (str.to.re "2") (re.++ (str.to.re "0") (re.++ (str.to.re "0") (str.to.re "0"))))) (re.++ (str.to.re "2") (re.++ (str.to.re "4") (re.++ (str.to.re "0") (str.to.re "0")))))) (re.++ ((_ re.capture 8) (re.union (re.++ (str.to.re "1") (re.range "6" "9")) (re.++ (str.to.re "2") (re.range "0" "9")))) ((_ re.capture 9) ((_ re.capture 10) (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.++ (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))) (re.++ (str.to.re "1") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "2") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "3") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "4") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "5") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "6") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "7") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "8") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "9") (re.union (str.to.re "2") (str.to.re "6")))))))))))))))) ((_ re.capture 11) (re.++ ((_ re.capture 12) (re.union (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (str.to.re "0")))) (re.++ (str.to.re "/") (re.++ (re.union (re.++ (str.to.re "0") (re.union (str.to.re "4") (re.union (str.to.re "6") (str.to.re "9")))) (re.++ (str.to.re "1") (str.to.re "1"))) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9"))))))))))) re.all))) (re.++ re.all(re.+ (re.range "a" "z")) re.all) )))
;/[a-z]+/.test(match[1]) == false	
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.*? re.allchar) (re.++ (re.union (re.union (re.union ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.union (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (re.union (str.to.re "0") (str.to.re "1"))))) (re.++ (str.to.re "/") (re.++ (re.union (re.++ (str.to.re "0") (re.union (str.to.re "1") (re.union (str.to.re "3") (re.union (str.to.re "5") (re.union (str.to.re "7") (str.to.re "8")))))) (re.++ (str.to.re "1") (re.union (str.to.re "0") (str.to.re "2")))) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9")))))))))) ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "8")))) (re.++ (str.to.re "/") (re.++ (re.++ (str.to.re "0") (str.to.re "2")) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9"))))))))))) ((_ re.capture 5) (re.++ (str.to.re "2") (re.++ (str.to.re "9") (re.++ (str.to.re "/") (re.++ (re.++ (str.to.re "0") (str.to.re "2")) (re.++ (str.to.re "/") ((_ re.capture 6) (re.union ((_ re.capture 7) (re.union (re.union (re.union (re.++ (str.to.re "1") (re.++ (str.to.re "2") (re.++ (str.to.re "0") (str.to.re "0")))) (re.++ (str.to.re "1") (re.++ (str.to.re "6") (re.++ (str.to.re "0") (str.to.re "0"))))) (re.++ (str.to.re "2") (re.++ (str.to.re "0") (re.++ (str.to.re "0") (str.to.re "0"))))) (re.++ (str.to.re "2") (re.++ (str.to.re "4") (re.++ (str.to.re "0") (str.to.re "0")))))) (re.++ ((_ re.capture 8) (re.union (re.++ (str.to.re "1") (re.range "6" "9")) (re.++ (str.to.re "2") (re.range "0" "9")))) ((_ re.capture 9) ((_ re.capture 10) (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.++ (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))) (re.++ (str.to.re "1") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "2") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "3") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "4") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "5") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "6") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "7") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "8") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "9") (re.union (str.to.re "2") (str.to.re "6")))))))))))))))) ((_ re.capture 11) (re.++ ((_ re.capture 12) (re.union (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (str.to.re "0")))) (re.++ (str.to.re "/") (re.++ (re.union (re.++ (str.to.re "0") (re.union (str.to.re "4") (re.union (str.to.re "6") (str.to.re "9")))) (re.++ (str.to.re "1") (str.to.re "1"))) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9"))))))))))) re.all))))	; match!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.union (re.union (re.union ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.union (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (re.union (str.to.re "0") (str.to.re "1"))))) (re.++ (str.to.re "/") (re.++ (re.union (re.++ (str.to.re "0") (re.union (str.to.re "1") (re.union (str.to.re "3") (re.union (str.to.re "5") (re.union (str.to.re "7") (str.to.re "8")))))) (re.++ (str.to.re "1") (re.union (str.to.re "0") (str.to.re "2")))) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9")))))))))) ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "8")))) (re.++ (str.to.re "/") (re.++ (re.++ (str.to.re "0") (str.to.re "2")) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9"))))))))))) ((_ re.capture 5) (re.++ (str.to.re "2") (re.++ (str.to.re "9") (re.++ (str.to.re "/") (re.++ (re.++ (str.to.re "0") (str.to.re "2")) (re.++ (str.to.re "/") ((_ re.capture 6) (re.union ((_ re.capture 7) (re.union (re.union (re.union (re.++ (str.to.re "1") (re.++ (str.to.re "2") (re.++ (str.to.re "0") (str.to.re "0")))) (re.++ (str.to.re "1") (re.++ (str.to.re "6") (re.++ (str.to.re "0") (str.to.re "0"))))) (re.++ (str.to.re "2") (re.++ (str.to.re "0") (re.++ (str.to.re "0") (str.to.re "0"))))) (re.++ (str.to.re "2") (re.++ (str.to.re "4") (re.++ (str.to.re "0") (str.to.re "0")))))) (re.++ ((_ re.capture 8) (re.union (re.++ (str.to.re "1") (re.range "6" "9")) (re.++ (str.to.re "2") (re.range "0" "9")))) ((_ re.capture 9) ((_ re.capture 10) (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.++ (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))) (re.++ (str.to.re "1") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "2") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "3") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "4") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "5") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "6") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "7") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "8") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "9") (re.union (str.to.re "2") (str.to.re "6")))))))))))))))) ((_ re.capture 11) (re.++ ((_ re.capture 12) (re.union (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (str.to.re "0")))) (re.++ (str.to.re "/") (re.++ (re.union (re.++ (str.to.re "0") (re.union (str.to.re "4") (re.union (str.to.re "6") (str.to.re "9")))) (re.++ (str.to.re "1") (str.to.re "1"))) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9"))))))))))) re.all))) (str.to.re "\x00")))
;match[1]==null
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (not (str.in.re var0 (re.++ (re.*? re.allchar) (re.++ (re.union (re.union (re.union ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.union (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (re.union (str.to.re "0") (str.to.re "1"))))) (re.++ (str.to.re "/") (re.++ (re.union (re.++ (str.to.re "0") (re.union (str.to.re "1") (re.union (str.to.re "3") (re.union (str.to.re "5") (re.union (str.to.re "7") (str.to.re "8")))))) (re.++ (str.to.re "1") (re.union (str.to.re "0") (str.to.re "2")))) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9")))))))))) ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "8")))) (re.++ (str.to.re "/") (re.++ (re.++ (str.to.re "0") (str.to.re "2")) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9"))))))))))) ((_ re.capture 5) (re.++ (str.to.re "2") (re.++ (str.to.re "9") (re.++ (str.to.re "/") (re.++ (re.++ (str.to.re "0") (str.to.re "2")) (re.++ (str.to.re "/") ((_ re.capture 6) (re.union ((_ re.capture 7) (re.union (re.union (re.union (re.++ (str.to.re "1") (re.++ (str.to.re "2") (re.++ (str.to.re "0") (str.to.re "0")))) (re.++ (str.to.re "1") (re.++ (str.to.re "6") (re.++ (str.to.re "0") (str.to.re "0"))))) (re.++ (str.to.re "2") (re.++ (str.to.re "0") (re.++ (str.to.re "0") (str.to.re "0"))))) (re.++ (str.to.re "2") (re.++ (str.to.re "4") (re.++ (str.to.re "0") (str.to.re "0")))))) (re.++ ((_ re.capture 8) (re.union (re.++ (str.to.re "1") (re.range "6" "9")) (re.++ (str.to.re "2") (re.range "0" "9")))) ((_ re.capture 9) ((_ re.capture 10) (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.++ (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))) (re.++ (str.to.re "1") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "2") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "3") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "4") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "5") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "6") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "7") (re.union (str.to.re "2") (str.to.re "6")))) (re.++ (str.to.re "8") (re.union (str.to.re "0") (re.union (str.to.re "4") (str.to.re "8"))))) (re.++ (str.to.re "9") (re.union (str.to.re "2") (str.to.re "6")))))))))))))))) ((_ re.capture 11) (re.++ ((_ re.capture 12) (re.union (re.union (re.union (re.++ (str.to.re "0") (re.range "1" "9")) (re.++ (str.to.re "1") (re.range "0" "9"))) (re.++ (str.to.re "2") (re.range "0" "9"))) (re.++ (str.to.re "3") (str.to.re "0")))) (re.++ (str.to.re "/") (re.++ (re.union (re.++ (str.to.re "0") (re.union (str.to.re "4") (re.union (str.to.re "6") (str.to.re "9")))) (re.++ (str.to.re "1") (str.to.re "1"))) (re.++ (str.to.re "/") (re.union (re.++ (str.to.re "1") (re.++ (re.range "2" "9") (re.+ (re.range "0" "9")))) (re.++ (str.to.re "2") (re.++ (re.range "0" "9") (re.+ (re.range "0" "9"))))))))))) re.all)))))	; match == null
(check-sat)
(get-model)
(pop 1)
(exit)
