
(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)

(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ re.begin-anchor (re.++ (re.+ (re.union (re.range "a" "z") (re.range "A" "Z"))) (re.union (re.++ (str.to.re "") ((_ re.capture 1) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ ((_ re.capture 3) (re.union ((_ re.capture 4) (str.to.re "-")) ((_ re.capture 5) (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))))) (re.+ (re.union (re.range "a" "z") (re.range "A" "Z")))))) (str.to.re "")) (re.union (re.++ (str.to.re "") ((_ re.capture 6) (re.++ (str.to.re ",") (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 7) (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}")))))))) (str.to.re "")) ((_ re.capture 8) (re.union (re.union (re.union (re.++ ((_ re.capture 9) (re.union ((_ re.capture 10) (re.union (str.to.re "j") (str.to.re "J"))) ((_ re.capture 11) (re.union (str.to.re "s") (str.to.re "S"))))) (re.++ ((_ re.capture 12) (re.union (str.to.re "r") (str.to.re "R"))) (re.union (re.++ (str.to.re "") ((_ re.capture 13) (str.to.re "."))) (str.to.re "")))) (re.++ (str.to.re "I") (str.to.re "I"))) (re.++ (str.to.re "I") (re.++ (str.to.re "I") (str.to.re "I")))) (re.++ (str.to.re "I") (str.to.re "V")))))))) (str.to.re ""))))) (str.to.re "")))) re.end-anchor)))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ (re.+ (re.union (re.range "a" "z") (re.range "A" "Z"))) (re.union (re.++ (str.to.re "") ((_ re.capture 1) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ ((_ re.capture 3) (re.union ((_ re.capture 4) (str.to.re "-")) ((_ re.capture 5) (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))))) (re.+ (re.union (re.range "a" "z") (re.range "A" "Z")))))) (str.to.re "")) (re.union (re.++ (str.to.re "") ((_ re.capture 6) (re.++ (str.to.re ",") (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 7) (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}")))))))) (str.to.re "")) ((_ re.capture 8) (re.union (re.union (re.union (re.++ ((_ re.capture 9) (re.union ((_ re.capture 10) (re.union (str.to.re "j") (str.to.re "J"))) ((_ re.capture 11) (re.union (str.to.re "s") (str.to.re "S"))))) (re.++ ((_ re.capture 12) (re.union (str.to.re "r") (str.to.re "R"))) (re.union (re.++ (str.to.re "") ((_ re.capture 13) (str.to.re "."))) (str.to.re "")))) (re.++ (str.to.re "I") (str.to.re "I"))) (re.++ (str.to.re "I") (re.++ (str.to.re "I") (str.to.re "I")))) (re.++ (str.to.re "I") (str.to.re "V")))))))) (str.to.re ""))))) (str.to.re "")))) re.end-anchor)) (str.to.re "\x00"))))
;match[1]!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ (re.+ (re.union (re.range "a" "z") (re.range "A" "Z"))) (re.union (re.++ (str.to.re "") ((_ re.capture 1) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ ((_ re.capture 3) (re.union ((_ re.capture 4) (str.to.re "-")) ((_ re.capture 5) (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))))) (re.+ (re.union (re.range "a" "z") (re.range "A" "Z")))))) (str.to.re "")) (re.union (re.++ (str.to.re "") ((_ re.capture 6) (re.++ (str.to.re ",") (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 7) (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}")))))))) (str.to.re "")) ((_ re.capture 8) (re.union (re.union (re.union (re.++ ((_ re.capture 9) (re.union ((_ re.capture 10) (re.union (str.to.re "j") (str.to.re "J"))) ((_ re.capture 11) (re.union (str.to.re "s") (str.to.re "S"))))) (re.++ ((_ re.capture 12) (re.union (str.to.re "r") (str.to.re "R"))) (re.union (re.++ (str.to.re "") ((_ re.capture 13) (str.to.re "."))) (str.to.re "")))) (re.++ (str.to.re "I") (str.to.re "I"))) (re.++ (str.to.re "I") (re.++ (str.to.re "I") (str.to.re "I")))) (re.++ (str.to.re "I") (str.to.re "V")))))))) (str.to.re ""))))) (str.to.re "")))) re.end-anchor)) (re.++ re.all(re.+ (re.range "a" "z")) re.all) ))
;/[a-z]+/.test(match[1]) == true
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ re.begin-anchor (re.++ (re.+ (re.union (re.range "a" "z") (re.range "A" "Z"))) (re.union (re.++ (str.to.re "") ((_ re.capture 1) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ ((_ re.capture 3) (re.union ((_ re.capture 4) (str.to.re "-")) ((_ re.capture 5) (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))))) (re.+ (re.union (re.range "a" "z") (re.range "A" "Z")))))) (str.to.re "")) (re.union (re.++ (str.to.re "") ((_ re.capture 6) (re.++ (str.to.re ",") (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 7) (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}")))))))) (str.to.re "")) ((_ re.capture 8) (re.union (re.union (re.union (re.++ ((_ re.capture 9) (re.union ((_ re.capture 10) (re.union (str.to.re "j") (str.to.re "J"))) ((_ re.capture 11) (re.union (str.to.re "s") (str.to.re "S"))))) (re.++ ((_ re.capture 12) (re.union (str.to.re "r") (str.to.re "R"))) (re.union (re.++ (str.to.re "") ((_ re.capture 13) (str.to.re "."))) (str.to.re "")))) (re.++ (str.to.re "I") (str.to.re "I"))) (re.++ (str.to.re "I") (re.++ (str.to.re "I") (str.to.re "I")))) (re.++ (str.to.re "I") (str.to.re "V")))))))) (str.to.re ""))))) (str.to.re "")))) re.end-anchor)))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ (re.+ (re.union (re.range "a" "z") (re.range "A" "Z"))) (re.union (re.++ (str.to.re "") ((_ re.capture 1) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ ((_ re.capture 3) (re.union ((_ re.capture 4) (str.to.re "-")) ((_ re.capture 5) (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))))) (re.+ (re.union (re.range "a" "z") (re.range "A" "Z")))))) (str.to.re "")) (re.union (re.++ (str.to.re "") ((_ re.capture 6) (re.++ (str.to.re ",") (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 7) (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}")))))))) (str.to.re "")) ((_ re.capture 8) (re.union (re.union (re.union (re.++ ((_ re.capture 9) (re.union ((_ re.capture 10) (re.union (str.to.re "j") (str.to.re "J"))) ((_ re.capture 11) (re.union (str.to.re "s") (str.to.re "S"))))) (re.++ ((_ re.capture 12) (re.union (str.to.re "r") (str.to.re "R"))) (re.union (re.++ (str.to.re "") ((_ re.capture 13) (str.to.re "."))) (str.to.re "")))) (re.++ (str.to.re "I") (str.to.re "I"))) (re.++ (str.to.re "I") (re.++ (str.to.re "I") (str.to.re "I")))) (re.++ (str.to.re "I") (str.to.re "V")))))))) (str.to.re ""))))) (str.to.re "")))) re.end-anchor)) (str.to.re "\x00"))))	
;match[1]!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ (re.+ (re.union (re.range "a" "z") (re.range "A" "Z"))) (re.union (re.++ (str.to.re "") ((_ re.capture 1) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ ((_ re.capture 3) (re.union ((_ re.capture 4) (str.to.re "-")) ((_ re.capture 5) (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))))) (re.+ (re.union (re.range "a" "z") (re.range "A" "Z")))))) (str.to.re "")) (re.union (re.++ (str.to.re "") ((_ re.capture 6) (re.++ (str.to.re ",") (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 7) (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}")))))))) (str.to.re "")) ((_ re.capture 8) (re.union (re.union (re.union (re.++ ((_ re.capture 9) (re.union ((_ re.capture 10) (re.union (str.to.re "j") (str.to.re "J"))) ((_ re.capture 11) (re.union (str.to.re "s") (str.to.re "S"))))) (re.++ ((_ re.capture 12) (re.union (str.to.re "r") (str.to.re "R"))) (re.union (re.++ (str.to.re "") ((_ re.capture 13) (str.to.re "."))) (str.to.re "")))) (re.++ (str.to.re "I") (str.to.re "I"))) (re.++ (str.to.re "I") (re.++ (str.to.re "I") (str.to.re "I")))) (re.++ (str.to.re "I") (str.to.re "V")))))))) (str.to.re ""))))) (str.to.re "")))) re.end-anchor)) (re.++ re.all(re.+ (re.range "a" "z")) re.all) )))
;/[a-z]+/.test(match[1]) == false	
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ re.begin-anchor (re.++ (re.+ (re.union (re.range "a" "z") (re.range "A" "Z"))) (re.union (re.++ (str.to.re "") ((_ re.capture 1) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ ((_ re.capture 3) (re.union ((_ re.capture 4) (str.to.re "-")) ((_ re.capture 5) (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))))) (re.+ (re.union (re.range "a" "z") (re.range "A" "Z")))))) (str.to.re "")) (re.union (re.++ (str.to.re "") ((_ re.capture 6) (re.++ (str.to.re ",") (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 7) (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}")))))))) (str.to.re "")) ((_ re.capture 8) (re.union (re.union (re.union (re.++ ((_ re.capture 9) (re.union ((_ re.capture 10) (re.union (str.to.re "j") (str.to.re "J"))) ((_ re.capture 11) (re.union (str.to.re "s") (str.to.re "S"))))) (re.++ ((_ re.capture 12) (re.union (str.to.re "r") (str.to.re "R"))) (re.union (re.++ (str.to.re "") ((_ re.capture 13) (str.to.re "."))) (str.to.re "")))) (re.++ (str.to.re "I") (str.to.re "I"))) (re.++ (str.to.re "I") (re.++ (str.to.re "I") (str.to.re "I")))) (re.++ (str.to.re "I") (str.to.re "V")))))))) (str.to.re ""))))) (str.to.re "")))) re.end-anchor)))	; match!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ (re.+ (re.union (re.range "a" "z") (re.range "A" "Z"))) (re.union (re.++ (str.to.re "") ((_ re.capture 1) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ ((_ re.capture 3) (re.union ((_ re.capture 4) (str.to.re "-")) ((_ re.capture 5) (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))))) (re.+ (re.union (re.range "a" "z") (re.range "A" "Z")))))) (str.to.re "")) (re.union (re.++ (str.to.re "") ((_ re.capture 6) (re.++ (str.to.re ",") (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 7) (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}")))))))) (str.to.re "")) ((_ re.capture 8) (re.union (re.union (re.union (re.++ ((_ re.capture 9) (re.union ((_ re.capture 10) (re.union (str.to.re "j") (str.to.re "J"))) ((_ re.capture 11) (re.union (str.to.re "s") (str.to.re "S"))))) (re.++ ((_ re.capture 12) (re.union (str.to.re "r") (str.to.re "R"))) (re.union (re.++ (str.to.re "") ((_ re.capture 13) (str.to.re "."))) (str.to.re "")))) (re.++ (str.to.re "I") (str.to.re "I"))) (re.++ (str.to.re "I") (re.++ (str.to.re "I") (str.to.re "I")))) (re.++ (str.to.re "I") (str.to.re "V")))))))) (str.to.re ""))))) (str.to.re "")))) re.end-anchor)) (str.to.re "\x00")))
;match[1]==null
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (not (str.in.re var0 (re.++ (re.++ re.begin-anchor (re.++ (re.+ (re.union (re.range "a" "z") (re.range "A" "Z"))) (re.union (re.++ (str.to.re "") ((_ re.capture 1) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ ((_ re.capture 3) (re.union ((_ re.capture 4) (str.to.re "-")) ((_ re.capture 5) (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))))) (re.+ (re.union (re.range "a" "z") (re.range "A" "Z")))))) (str.to.re "")) (re.union (re.++ (str.to.re "") ((_ re.capture 6) (re.++ (str.to.re ",") (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 7) (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}")))))))) (str.to.re "")) ((_ re.capture 8) (re.union (re.union (re.union (re.++ ((_ re.capture 9) (re.union ((_ re.capture 10) (re.union (str.to.re "j") (str.to.re "J"))) ((_ re.capture 11) (re.union (str.to.re "s") (str.to.re "S"))))) (re.++ ((_ re.capture 12) (re.union (str.to.re "r") (str.to.re "R"))) (re.union (re.++ (str.to.re "") ((_ re.capture 13) (str.to.re "."))) (str.to.re "")))) (re.++ (str.to.re "I") (str.to.re "I"))) (re.++ (str.to.re "I") (re.++ (str.to.re "I") (str.to.re "I")))) (re.++ (str.to.re "I") (str.to.re "V")))))))) (str.to.re ""))))) (str.to.re "")))) re.end-anchor))))	; match == null
(check-sat)
(get-model)
(pop 1)
(exit)