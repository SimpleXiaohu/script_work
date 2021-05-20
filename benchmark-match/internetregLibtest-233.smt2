
(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)

(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.*? re.allchar) (re.++ (re.union (re.union (re.union (re.union ((_ re.capture 1) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.*? (re.union (re.range "0" "9") (re.diff (re.range "\x01" "\xff") (re.range "0" "9")))) (re.++ (str.to.re "*") (str.to.re "/")))))) ((_ re.capture 2) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.* ((_ re.capture 3) (re.union (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))) (re.*? (re.range "\x01" "\xff"))))) (re.++ (str.to.re "*") (str.to.re "/"))))))) ((_ re.capture 4) (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.* (re.range "\x01" "\xff")))))) ((_ re.capture 5) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.*? (re.union (re.range "0" "9") (re.union (str.to.re "\\") (str.to.re "D")))) (re.++ (str.to.re "*") (str.to.re "/"))))))) (re.+ ((_ re.capture 6) (re.++ (re.* (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{0a}") (str.to.re " ")))) (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.* (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re "\u{0d}")) (re.diff (re.range "\x01" "\xff") (str.to.re "\u{0a}")))))))))) re.all))))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.union (re.union (re.union (re.union ((_ re.capture 1) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.*? (re.union (re.range "0" "9") (re.diff (re.range "\x01" "\xff") (re.range "0" "9")))) (re.++ (str.to.re "*") (str.to.re "/")))))) ((_ re.capture 2) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.* ((_ re.capture 3) (re.union (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))) (re.*? (re.range "\x01" "\xff"))))) (re.++ (str.to.re "*") (str.to.re "/"))))))) ((_ re.capture 4) (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.* (re.range "\x01" "\xff")))))) ((_ re.capture 5) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.*? (re.union (re.range "0" "9") (re.union (str.to.re "\\") (str.to.re "D")))) (re.++ (str.to.re "*") (str.to.re "/"))))))) (re.+ ((_ re.capture 6) (re.++ (re.* (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{0a}") (str.to.re " ")))) (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.* (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re "\u{0d}")) (re.diff (re.range "\x01" "\xff") (str.to.re "\u{0a}")))))))))) re.all))) (str.to.re "\x00"))))
;match[1]!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.union (re.union (re.union (re.union ((_ re.capture 1) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.*? (re.union (re.range "0" "9") (re.diff (re.range "\x01" "\xff") (re.range "0" "9")))) (re.++ (str.to.re "*") (str.to.re "/")))))) ((_ re.capture 2) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.* ((_ re.capture 3) (re.union (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))) (re.*? (re.range "\x01" "\xff"))))) (re.++ (str.to.re "*") (str.to.re "/"))))))) ((_ re.capture 4) (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.* (re.range "\x01" "\xff")))))) ((_ re.capture 5) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.*? (re.union (re.range "0" "9") (re.union (str.to.re "\\") (str.to.re "D")))) (re.++ (str.to.re "*") (str.to.re "/"))))))) (re.+ ((_ re.capture 6) (re.++ (re.* (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{0a}") (str.to.re " ")))) (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.* (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re "\u{0d}")) (re.diff (re.range "\x01" "\xff") (str.to.re "\u{0a}")))))))))) re.all))) (re.++ re.all(re.+ (re.range "a" "z")) re.all) ))
;/[a-z]+/.test(match[1]) == true
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.*? re.allchar) (re.++ (re.union (re.union (re.union (re.union ((_ re.capture 1) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.*? (re.union (re.range "0" "9") (re.diff (re.range "\x01" "\xff") (re.range "0" "9")))) (re.++ (str.to.re "*") (str.to.re "/")))))) ((_ re.capture 2) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.* ((_ re.capture 3) (re.union (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))) (re.*? (re.range "\x01" "\xff"))))) (re.++ (str.to.re "*") (str.to.re "/"))))))) ((_ re.capture 4) (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.* (re.range "\x01" "\xff")))))) ((_ re.capture 5) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.*? (re.union (re.range "0" "9") (re.union (str.to.re "\\") (str.to.re "D")))) (re.++ (str.to.re "*") (str.to.re "/"))))))) (re.+ ((_ re.capture 6) (re.++ (re.* (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{0a}") (str.to.re " ")))) (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.* (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re "\u{0d}")) (re.diff (re.range "\x01" "\xff") (str.to.re "\u{0a}")))))))))) re.all))))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.union (re.union (re.union (re.union ((_ re.capture 1) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.*? (re.union (re.range "0" "9") (re.diff (re.range "\x01" "\xff") (re.range "0" "9")))) (re.++ (str.to.re "*") (str.to.re "/")))))) ((_ re.capture 2) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.* ((_ re.capture 3) (re.union (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))) (re.*? (re.range "\x01" "\xff"))))) (re.++ (str.to.re "*") (str.to.re "/"))))))) ((_ re.capture 4) (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.* (re.range "\x01" "\xff")))))) ((_ re.capture 5) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.*? (re.union (re.range "0" "9") (re.union (str.to.re "\\") (str.to.re "D")))) (re.++ (str.to.re "*") (str.to.re "/"))))))) (re.+ ((_ re.capture 6) (re.++ (re.* (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{0a}") (str.to.re " ")))) (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.* (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re "\u{0d}")) (re.diff (re.range "\x01" "\xff") (str.to.re "\u{0a}")))))))))) re.all))) (str.to.re "\x00"))))	
;match[1]!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.union (re.union (re.union (re.union ((_ re.capture 1) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.*? (re.union (re.range "0" "9") (re.diff (re.range "\x01" "\xff") (re.range "0" "9")))) (re.++ (str.to.re "*") (str.to.re "/")))))) ((_ re.capture 2) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.* ((_ re.capture 3) (re.union (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))) (re.*? (re.range "\x01" "\xff"))))) (re.++ (str.to.re "*") (str.to.re "/"))))))) ((_ re.capture 4) (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.* (re.range "\x01" "\xff")))))) ((_ re.capture 5) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.*? (re.union (re.range "0" "9") (re.union (str.to.re "\\") (str.to.re "D")))) (re.++ (str.to.re "*") (str.to.re "/"))))))) (re.+ ((_ re.capture 6) (re.++ (re.* (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{0a}") (str.to.re " ")))) (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.* (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re "\u{0d}")) (re.diff (re.range "\x01" "\xff") (str.to.re "\u{0a}")))))))))) re.all))) (re.++ re.all(re.+ (re.range "a" "z")) re.all) )))
;/[a-z]+/.test(match[1]) == false	
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.*? re.allchar) (re.++ (re.union (re.union (re.union (re.union ((_ re.capture 1) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.*? (re.union (re.range "0" "9") (re.diff (re.range "\x01" "\xff") (re.range "0" "9")))) (re.++ (str.to.re "*") (str.to.re "/")))))) ((_ re.capture 2) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.* ((_ re.capture 3) (re.union (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))) (re.*? (re.range "\x01" "\xff"))))) (re.++ (str.to.re "*") (str.to.re "/"))))))) ((_ re.capture 4) (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.* (re.range "\x01" "\xff")))))) ((_ re.capture 5) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.*? (re.union (re.range "0" "9") (re.union (str.to.re "\\") (str.to.re "D")))) (re.++ (str.to.re "*") (str.to.re "/"))))))) (re.+ ((_ re.capture 6) (re.++ (re.* (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{0a}") (str.to.re " ")))) (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.* (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re "\u{0d}")) (re.diff (re.range "\x01" "\xff") (str.to.re "\u{0a}")))))))))) re.all))))	; match!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.union (re.union (re.union (re.union ((_ re.capture 1) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.*? (re.union (re.range "0" "9") (re.diff (re.range "\x01" "\xff") (re.range "0" "9")))) (re.++ (str.to.re "*") (str.to.re "/")))))) ((_ re.capture 2) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.* ((_ re.capture 3) (re.union (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))) (re.*? (re.range "\x01" "\xff"))))) (re.++ (str.to.re "*") (str.to.re "/"))))))) ((_ re.capture 4) (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.* (re.range "\x01" "\xff")))))) ((_ re.capture 5) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.*? (re.union (re.range "0" "9") (re.union (str.to.re "\\") (str.to.re "D")))) (re.++ (str.to.re "*") (str.to.re "/"))))))) (re.+ ((_ re.capture 6) (re.++ (re.* (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{0a}") (str.to.re " ")))) (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.* (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re "\u{0d}")) (re.diff (re.range "\x01" "\xff") (str.to.re "\u{0a}")))))))))) re.all))) (str.to.re "\x00")))
;match[1]==null
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (not (str.in.re var0 (re.++ (re.*? re.allchar) (re.++ (re.union (re.union (re.union (re.union ((_ re.capture 1) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.*? (re.union (re.range "0" "9") (re.diff (re.range "\x01" "\xff") (re.range "0" "9")))) (re.++ (str.to.re "*") (str.to.re "/")))))) ((_ re.capture 2) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.* ((_ re.capture 3) (re.union (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))) (re.*? (re.range "\x01" "\xff"))))) (re.++ (str.to.re "*") (str.to.re "/"))))))) ((_ re.capture 4) (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.* (re.range "\x01" "\xff")))))) ((_ re.capture 5) (re.++ (str.to.re "/") (re.++ (str.to.re "*") (re.++ (re.*? (re.union (re.range "0" "9") (re.union (str.to.re "\\") (str.to.re "D")))) (re.++ (str.to.re "*") (str.to.re "/"))))))) (re.+ ((_ re.capture 6) (re.++ (re.* (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{0a}") (str.to.re " ")))) (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.* (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re "\u{0d}")) (re.diff (re.range "\x01" "\xff") (str.to.re "\u{0a}")))))))))) re.all)))))	; match == null
(check-sat)
(get-model)
(pop 1)
(exit)