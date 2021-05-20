
(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)

(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.union (re.union (re.union (re.++ (re.*? re.allchar) (re.++ (re.inter (re.diff (re.range "\x01" "\xff") (re.range "a" "z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "A" "Z")) (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re " ")) (re.diff (re.range "\x01" "\xff") (str.to.re "-"))))) re.all)) ((_ re.capture 1) (re.++ (re.++ (re.*? re.allchar) (str.to.re " ")) (re.++ (str.to.re " ") re.all)))) ((_ re.capture 2) (re.++ (re.++ (re.*? re.allchar) (str.to.re "-")) (re.++ (str.to.re "-") re.all)))) ((_ re.capture 3) (re.++ (re.++ re.begin-anchor (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}")))))))) re.end-anchor)))))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.union (re.union (re.union (re.++ (re.*? re.allchar) (re.++ (re.inter (re.diff (re.range "\x01" "\xff") (re.range "a" "z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "A" "Z")) (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re " ")) (re.diff (re.range "\x01" "\xff") (str.to.re "-"))))) re.all)) ((_ re.capture 1) (re.++ (re.++ (re.*? re.allchar) (str.to.re " ")) (re.++ (str.to.re " ") re.all)))) ((_ re.capture 2) (re.++ (re.++ (re.*? re.allchar) (str.to.re "-")) (re.++ (str.to.re "-") re.all)))) ((_ re.capture 3) (re.++ (re.++ re.begin-anchor (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}")))))))) re.end-anchor)))) (str.to.re "\x00"))))
;match[1]!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.union (re.union (re.union (re.++ (re.*? re.allchar) (re.++ (re.inter (re.diff (re.range "\x01" "\xff") (re.range "a" "z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "A" "Z")) (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re " ")) (re.diff (re.range "\x01" "\xff") (str.to.re "-"))))) re.all)) ((_ re.capture 1) (re.++ (re.++ (re.*? re.allchar) (str.to.re " ")) (re.++ (str.to.re " ") re.all)))) ((_ re.capture 2) (re.++ (re.++ (re.*? re.allchar) (str.to.re "-")) (re.++ (str.to.re "-") re.all)))) ((_ re.capture 3) (re.++ (re.++ re.begin-anchor (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}")))))))) re.end-anchor)))) (re.++ re.all(re.+ (re.range "a" "z")) re.all) ))
;/[a-z]+/.test(match[1]) == true
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.union (re.union (re.union (re.++ (re.*? re.allchar) (re.++ (re.inter (re.diff (re.range "\x01" "\xff") (re.range "a" "z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "A" "Z")) (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re " ")) (re.diff (re.range "\x01" "\xff") (str.to.re "-"))))) re.all)) ((_ re.capture 1) (re.++ (re.++ (re.*? re.allchar) (str.to.re " ")) (re.++ (str.to.re " ") re.all)))) ((_ re.capture 2) (re.++ (re.++ (re.*? re.allchar) (str.to.re "-")) (re.++ (str.to.re "-") re.all)))) ((_ re.capture 3) (re.++ (re.++ re.begin-anchor (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}")))))))) re.end-anchor)))))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.union (re.union (re.union (re.++ (re.*? re.allchar) (re.++ (re.inter (re.diff (re.range "\x01" "\xff") (re.range "a" "z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "A" "Z")) (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re " ")) (re.diff (re.range "\x01" "\xff") (str.to.re "-"))))) re.all)) ((_ re.capture 1) (re.++ (re.++ (re.*? re.allchar) (str.to.re " ")) (re.++ (str.to.re " ") re.all)))) ((_ re.capture 2) (re.++ (re.++ (re.*? re.allchar) (str.to.re "-")) (re.++ (str.to.re "-") re.all)))) ((_ re.capture 3) (re.++ (re.++ re.begin-anchor (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}")))))))) re.end-anchor)))) (str.to.re "\x00"))))	
;match[1]!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.union (re.union (re.union (re.++ (re.*? re.allchar) (re.++ (re.inter (re.diff (re.range "\x01" "\xff") (re.range "a" "z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "A" "Z")) (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re " ")) (re.diff (re.range "\x01" "\xff") (str.to.re "-"))))) re.all)) ((_ re.capture 1) (re.++ (re.++ (re.*? re.allchar) (str.to.re " ")) (re.++ (str.to.re " ") re.all)))) ((_ re.capture 2) (re.++ (re.++ (re.*? re.allchar) (str.to.re "-")) (re.++ (str.to.re "-") re.all)))) ((_ re.capture 3) (re.++ (re.++ re.begin-anchor (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}")))))))) re.end-anchor)))) (re.++ re.all(re.+ (re.range "a" "z")) re.all) )))
;/[a-z]+/.test(match[1]) == false	
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.union (re.union (re.union (re.++ (re.*? re.allchar) (re.++ (re.inter (re.diff (re.range "\x01" "\xff") (re.range "a" "z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "A" "Z")) (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re " ")) (re.diff (re.range "\x01" "\xff") (str.to.re "-"))))) re.all)) ((_ re.capture 1) (re.++ (re.++ (re.*? re.allchar) (str.to.re " ")) (re.++ (str.to.re " ") re.all)))) ((_ re.capture 2) (re.++ (re.++ (re.*? re.allchar) (str.to.re "-")) (re.++ (str.to.re "-") re.all)))) ((_ re.capture 3) (re.++ (re.++ re.begin-anchor (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}")))))))) re.end-anchor)))))	; match!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.union (re.union (re.union (re.++ (re.*? re.allchar) (re.++ (re.inter (re.diff (re.range "\x01" "\xff") (re.range "a" "z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "A" "Z")) (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re " ")) (re.diff (re.range "\x01" "\xff") (str.to.re "-"))))) re.all)) ((_ re.capture 1) (re.++ (re.++ (re.*? re.allchar) (str.to.re " ")) (re.++ (str.to.re " ") re.all)))) ((_ re.capture 2) (re.++ (re.++ (re.*? re.allchar) (str.to.re "-")) (re.++ (str.to.re "-") re.all)))) ((_ re.capture 3) (re.++ (re.++ re.begin-anchor (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}")))))))) re.end-anchor)))) (str.to.re "\x00")))
;match[1]==null
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (not (str.in.re var0 (re.union (re.union (re.union (re.++ (re.*? re.allchar) (re.++ (re.inter (re.diff (re.range "\x01" "\xff") (re.range "a" "z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "A" "Z")) (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re " ")) (re.diff (re.range "\x01" "\xff") (str.to.re "-"))))) re.all)) ((_ re.capture 1) (re.++ (re.++ (re.*? re.allchar) (str.to.re " ")) (re.++ (str.to.re " ") re.all)))) ((_ re.capture 2) (re.++ (re.++ (re.*? re.allchar) (str.to.re "-")) (re.++ (str.to.re "-") re.all)))) ((_ re.capture 3) (re.++ (re.++ re.begin-anchor (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}")))))))) re.end-anchor))))))	; match == null
(check-sat)
(get-model)
(pop 1)
(exit)
