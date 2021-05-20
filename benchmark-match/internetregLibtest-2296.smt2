
(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)

(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ (re.union (re.++ (re.++ (re.*? re.allchar) (str.to.re "")) ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.++ re.begin-anchor (re.* (re.range "0" "9")))) (re.++ (re.union (re.++ (str.to.re "") (re.range "\x01" "\xff")) (str.to.re "")) (re.union (re.++ (str.to.re "") ((_ re.capture 3) (re.union (re.union ((_ re.capture 4) (re.++ (str.to.re "B") (re.++ (str.to.re "I") (str.to.re "S")))) ((_ re.capture 5) (re.++ (str.to.re "T") (re.++ (str.to.re "E") (str.to.re "R"))))) ((_ re.capture 6) (re.++ (str.to.re "Q") (re.++ (str.to.re "U") (re.++ (str.to.re "A") (re.++ (str.to.re "T") (re.++ (str.to.re "E") (str.to.re "R")))))))))) (str.to.re "")))))) (re.++ (re.*? re.allchar) (str.to.re ""))) (re.++ ((_ re.capture 7) (re.union ((_ re.capture 8) (re.+ (re.inter (re.diff (re.range "\x01" "\xff") (re.range "a" "z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "A" "Z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "0" "9")) (re.diff (re.range "\x01" "\xff") (str.to.re "_"))))))) ((_ re.capture 9) re.begin-anchor))) (re.++ ((_ re.capture 10) (re.* ((_ re.capture 11) (re.++ (re.+ (re.range "a" "z")) (re.range "\x01" "\xff"))))) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 12) (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9"))))))) (str.to.re "")) (re.++ (re.range "\x01" "\xff") ((_ re.capture 13) (re.* ((_ re.capture 14) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (str.to.re ";")))))))))))) (re.range "\x01" "\xff")))))))))) re.end-anchor)))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ (re.union (re.++ (re.++ (re.*? re.allchar) (str.to.re "")) ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.++ re.begin-anchor (re.* (re.range "0" "9")))) (re.++ (re.union (re.++ (str.to.re "") (re.range "\x01" "\xff")) (str.to.re "")) (re.union (re.++ (str.to.re "") ((_ re.capture 3) (re.union (re.union ((_ re.capture 4) (re.++ (str.to.re "B") (re.++ (str.to.re "I") (str.to.re "S")))) ((_ re.capture 5) (re.++ (str.to.re "T") (re.++ (str.to.re "E") (str.to.re "R"))))) ((_ re.capture 6) (re.++ (str.to.re "Q") (re.++ (str.to.re "U") (re.++ (str.to.re "A") (re.++ (str.to.re "T") (re.++ (str.to.re "E") (str.to.re "R")))))))))) (str.to.re "")))))) (re.++ (re.*? re.allchar) (str.to.re ""))) (re.++ ((_ re.capture 7) (re.union ((_ re.capture 8) (re.+ (re.inter (re.diff (re.range "\x01" "\xff") (re.range "a" "z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "A" "Z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "0" "9")) (re.diff (re.range "\x01" "\xff") (str.to.re "_"))))))) ((_ re.capture 9) re.begin-anchor))) (re.++ ((_ re.capture 10) (re.* ((_ re.capture 11) (re.++ (re.+ (re.range "a" "z")) (re.range "\x01" "\xff"))))) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 12) (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9"))))))) (str.to.re "")) (re.++ (re.range "\x01" "\xff") ((_ re.capture 13) (re.* ((_ re.capture 14) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (str.to.re ";")))))))))))) (re.range "\x01" "\xff")))))))))) re.end-anchor)) (str.to.re "\x00"))))
;match[1]!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ (re.union (re.++ (re.++ (re.*? re.allchar) (str.to.re "")) ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.++ re.begin-anchor (re.* (re.range "0" "9")))) (re.++ (re.union (re.++ (str.to.re "") (re.range "\x01" "\xff")) (str.to.re "")) (re.union (re.++ (str.to.re "") ((_ re.capture 3) (re.union (re.union ((_ re.capture 4) (re.++ (str.to.re "B") (re.++ (str.to.re "I") (str.to.re "S")))) ((_ re.capture 5) (re.++ (str.to.re "T") (re.++ (str.to.re "E") (str.to.re "R"))))) ((_ re.capture 6) (re.++ (str.to.re "Q") (re.++ (str.to.re "U") (re.++ (str.to.re "A") (re.++ (str.to.re "T") (re.++ (str.to.re "E") (str.to.re "R")))))))))) (str.to.re "")))))) (re.++ (re.*? re.allchar) (str.to.re ""))) (re.++ ((_ re.capture 7) (re.union ((_ re.capture 8) (re.+ (re.inter (re.diff (re.range "\x01" "\xff") (re.range "a" "z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "A" "Z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "0" "9")) (re.diff (re.range "\x01" "\xff") (str.to.re "_"))))))) ((_ re.capture 9) re.begin-anchor))) (re.++ ((_ re.capture 10) (re.* ((_ re.capture 11) (re.++ (re.+ (re.range "a" "z")) (re.range "\x01" "\xff"))))) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 12) (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9"))))))) (str.to.re "")) (re.++ (re.range "\x01" "\xff") ((_ re.capture 13) (re.* ((_ re.capture 14) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (str.to.re ";")))))))))))) (re.range "\x01" "\xff")))))))))) re.end-anchor)) (re.++ re.all(re.+ (re.range "a" "z")) re.all) ))
;/[a-z]+/.test(match[1]) == true
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ (re.union (re.++ (re.++ (re.*? re.allchar) (str.to.re "")) ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.++ re.begin-anchor (re.* (re.range "0" "9")))) (re.++ (re.union (re.++ (str.to.re "") (re.range "\x01" "\xff")) (str.to.re "")) (re.union (re.++ (str.to.re "") ((_ re.capture 3) (re.union (re.union ((_ re.capture 4) (re.++ (str.to.re "B") (re.++ (str.to.re "I") (str.to.re "S")))) ((_ re.capture 5) (re.++ (str.to.re "T") (re.++ (str.to.re "E") (str.to.re "R"))))) ((_ re.capture 6) (re.++ (str.to.re "Q") (re.++ (str.to.re "U") (re.++ (str.to.re "A") (re.++ (str.to.re "T") (re.++ (str.to.re "E") (str.to.re "R")))))))))) (str.to.re "")))))) (re.++ (re.*? re.allchar) (str.to.re ""))) (re.++ ((_ re.capture 7) (re.union ((_ re.capture 8) (re.+ (re.inter (re.diff (re.range "\x01" "\xff") (re.range "a" "z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "A" "Z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "0" "9")) (re.diff (re.range "\x01" "\xff") (str.to.re "_"))))))) ((_ re.capture 9) re.begin-anchor))) (re.++ ((_ re.capture 10) (re.* ((_ re.capture 11) (re.++ (re.+ (re.range "a" "z")) (re.range "\x01" "\xff"))))) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 12) (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9"))))))) (str.to.re "")) (re.++ (re.range "\x01" "\xff") ((_ re.capture 13) (re.* ((_ re.capture 14) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (str.to.re ";")))))))))))) (re.range "\x01" "\xff")))))))))) re.end-anchor)))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ (re.union (re.++ (re.++ (re.*? re.allchar) (str.to.re "")) ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.++ re.begin-anchor (re.* (re.range "0" "9")))) (re.++ (re.union (re.++ (str.to.re "") (re.range "\x01" "\xff")) (str.to.re "")) (re.union (re.++ (str.to.re "") ((_ re.capture 3) (re.union (re.union ((_ re.capture 4) (re.++ (str.to.re "B") (re.++ (str.to.re "I") (str.to.re "S")))) ((_ re.capture 5) (re.++ (str.to.re "T") (re.++ (str.to.re "E") (str.to.re "R"))))) ((_ re.capture 6) (re.++ (str.to.re "Q") (re.++ (str.to.re "U") (re.++ (str.to.re "A") (re.++ (str.to.re "T") (re.++ (str.to.re "E") (str.to.re "R")))))))))) (str.to.re "")))))) (re.++ (re.*? re.allchar) (str.to.re ""))) (re.++ ((_ re.capture 7) (re.union ((_ re.capture 8) (re.+ (re.inter (re.diff (re.range "\x01" "\xff") (re.range "a" "z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "A" "Z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "0" "9")) (re.diff (re.range "\x01" "\xff") (str.to.re "_"))))))) ((_ re.capture 9) re.begin-anchor))) (re.++ ((_ re.capture 10) (re.* ((_ re.capture 11) (re.++ (re.+ (re.range "a" "z")) (re.range "\x01" "\xff"))))) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 12) (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9"))))))) (str.to.re "")) (re.++ (re.range "\x01" "\xff") ((_ re.capture 13) (re.* ((_ re.capture 14) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (str.to.re ";")))))))))))) (re.range "\x01" "\xff")))))))))) re.end-anchor)) (str.to.re "\x00"))))	
;match[1]!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ (re.union (re.++ (re.++ (re.*? re.allchar) (str.to.re "")) ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.++ re.begin-anchor (re.* (re.range "0" "9")))) (re.++ (re.union (re.++ (str.to.re "") (re.range "\x01" "\xff")) (str.to.re "")) (re.union (re.++ (str.to.re "") ((_ re.capture 3) (re.union (re.union ((_ re.capture 4) (re.++ (str.to.re "B") (re.++ (str.to.re "I") (str.to.re "S")))) ((_ re.capture 5) (re.++ (str.to.re "T") (re.++ (str.to.re "E") (str.to.re "R"))))) ((_ re.capture 6) (re.++ (str.to.re "Q") (re.++ (str.to.re "U") (re.++ (str.to.re "A") (re.++ (str.to.re "T") (re.++ (str.to.re "E") (str.to.re "R")))))))))) (str.to.re "")))))) (re.++ (re.*? re.allchar) (str.to.re ""))) (re.++ ((_ re.capture 7) (re.union ((_ re.capture 8) (re.+ (re.inter (re.diff (re.range "\x01" "\xff") (re.range "a" "z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "A" "Z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "0" "9")) (re.diff (re.range "\x01" "\xff") (str.to.re "_"))))))) ((_ re.capture 9) re.begin-anchor))) (re.++ ((_ re.capture 10) (re.* ((_ re.capture 11) (re.++ (re.+ (re.range "a" "z")) (re.range "\x01" "\xff"))))) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 12) (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9"))))))) (str.to.re "")) (re.++ (re.range "\x01" "\xff") ((_ re.capture 13) (re.* ((_ re.capture 14) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (str.to.re ";")))))))))))) (re.range "\x01" "\xff")))))))))) re.end-anchor)) (re.++ re.all(re.+ (re.range "a" "z")) re.all) )))
;/[a-z]+/.test(match[1]) == false	
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ (re.union (re.++ (re.++ (re.*? re.allchar) (str.to.re "")) ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.++ re.begin-anchor (re.* (re.range "0" "9")))) (re.++ (re.union (re.++ (str.to.re "") (re.range "\x01" "\xff")) (str.to.re "")) (re.union (re.++ (str.to.re "") ((_ re.capture 3) (re.union (re.union ((_ re.capture 4) (re.++ (str.to.re "B") (re.++ (str.to.re "I") (str.to.re "S")))) ((_ re.capture 5) (re.++ (str.to.re "T") (re.++ (str.to.re "E") (str.to.re "R"))))) ((_ re.capture 6) (re.++ (str.to.re "Q") (re.++ (str.to.re "U") (re.++ (str.to.re "A") (re.++ (str.to.re "T") (re.++ (str.to.re "E") (str.to.re "R")))))))))) (str.to.re "")))))) (re.++ (re.*? re.allchar) (str.to.re ""))) (re.++ ((_ re.capture 7) (re.union ((_ re.capture 8) (re.+ (re.inter (re.diff (re.range "\x01" "\xff") (re.range "a" "z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "A" "Z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "0" "9")) (re.diff (re.range "\x01" "\xff") (str.to.re "_"))))))) ((_ re.capture 9) re.begin-anchor))) (re.++ ((_ re.capture 10) (re.* ((_ re.capture 11) (re.++ (re.+ (re.range "a" "z")) (re.range "\x01" "\xff"))))) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 12) (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9"))))))) (str.to.re "")) (re.++ (re.range "\x01" "\xff") ((_ re.capture 13) (re.* ((_ re.capture 14) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (str.to.re ";")))))))))))) (re.range "\x01" "\xff")))))))))) re.end-anchor)))	; match!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ (re.union (re.++ (re.++ (re.*? re.allchar) (str.to.re "")) ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.++ re.begin-anchor (re.* (re.range "0" "9")))) (re.++ (re.union (re.++ (str.to.re "") (re.range "\x01" "\xff")) (str.to.re "")) (re.union (re.++ (str.to.re "") ((_ re.capture 3) (re.union (re.union ((_ re.capture 4) (re.++ (str.to.re "B") (re.++ (str.to.re "I") (str.to.re "S")))) ((_ re.capture 5) (re.++ (str.to.re "T") (re.++ (str.to.re "E") (str.to.re "R"))))) ((_ re.capture 6) (re.++ (str.to.re "Q") (re.++ (str.to.re "U") (re.++ (str.to.re "A") (re.++ (str.to.re "T") (re.++ (str.to.re "E") (str.to.re "R")))))))))) (str.to.re "")))))) (re.++ (re.*? re.allchar) (str.to.re ""))) (re.++ ((_ re.capture 7) (re.union ((_ re.capture 8) (re.+ (re.inter (re.diff (re.range "\x01" "\xff") (re.range "a" "z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "A" "Z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "0" "9")) (re.diff (re.range "\x01" "\xff") (str.to.re "_"))))))) ((_ re.capture 9) re.begin-anchor))) (re.++ ((_ re.capture 10) (re.* ((_ re.capture 11) (re.++ (re.+ (re.range "a" "z")) (re.range "\x01" "\xff"))))) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 12) (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9"))))))) (str.to.re "")) (re.++ (re.range "\x01" "\xff") ((_ re.capture 13) (re.* ((_ re.capture 14) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (str.to.re ";")))))))))))) (re.range "\x01" "\xff")))))))))) re.end-anchor)) (str.to.re "\x00")))
;match[1]==null
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (not (str.in.re var0 (re.++ (re.++ (re.union (re.++ (re.++ (re.*? re.allchar) (str.to.re "")) ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.++ re.begin-anchor (re.* (re.range "0" "9")))) (re.++ (re.union (re.++ (str.to.re "") (re.range "\x01" "\xff")) (str.to.re "")) (re.union (re.++ (str.to.re "") ((_ re.capture 3) (re.union (re.union ((_ re.capture 4) (re.++ (str.to.re "B") (re.++ (str.to.re "I") (str.to.re "S")))) ((_ re.capture 5) (re.++ (str.to.re "T") (re.++ (str.to.re "E") (str.to.re "R"))))) ((_ re.capture 6) (re.++ (str.to.re "Q") (re.++ (str.to.re "U") (re.++ (str.to.re "A") (re.++ (str.to.re "T") (re.++ (str.to.re "E") (str.to.re "R")))))))))) (str.to.re "")))))) (re.++ (re.*? re.allchar) (str.to.re ""))) (re.++ ((_ re.capture 7) (re.union ((_ re.capture 8) (re.+ (re.inter (re.diff (re.range "\x01" "\xff") (re.range "a" "z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "A" "Z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "0" "9")) (re.diff (re.range "\x01" "\xff") (str.to.re "_"))))))) ((_ re.capture 9) re.begin-anchor))) (re.++ ((_ re.capture 10) (re.* ((_ re.capture 11) (re.++ (re.+ (re.range "a" "z")) (re.range "\x01" "\xff"))))) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 12) (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9"))))))) (str.to.re "")) (re.++ (re.range "\x01" "\xff") ((_ re.capture 13) (re.* ((_ re.capture 14) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (str.to.re ";")))))))))))) (re.range "\x01" "\xff")))))))))) re.end-anchor))))	; match == null
(check-sat)
(get-model)
(pop 1)
(exit)
