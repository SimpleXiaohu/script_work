
(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)

(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ (re.++ (re.++ (re.*? re.allchar) (str.to.re "&")) (re.++ (str.to.re "q") (re.++ (str.to.re "u") (re.++ (str.to.re "o") (re.++ (str.to.re "t") (str.to.re ";")))))) (re.++ re.begin-anchor (re.++ (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))) (re.+? ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.union (re.++ (re.+ ((_ re.capture 3) (re.++ (re.+ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-"))) (str.to.re ".")))) (re.+ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-")))) ((_ re.capture 4) (re.union (re.union (re.range "a" "z") (re.range "A" "Z")) (re.++ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-")) (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-"))))))) (re.++ (str.to.re "@") (re.++ (re.+ ((_ re.capture 5) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_"))))) (str.to.re ".")))) (re.++ (re.union (re.union (re.union (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z"))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (str.to.re " ")))) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (re.union (str.to.re ",") (str.to.re ";"))))) (str.to.re "")) (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (str.to.re " ")))) (str.to.re ""))))))))))))) (re.++ re.end-anchor (re.++ (str.to.re "&") (re.++ (str.to.re "q") (re.++ (str.to.re "u") (re.++ (str.to.re "o") (re.++ (str.to.re "t") (re.++ (str.to.re ";") re.all))))))))))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ (re.++ (re.++ (re.*? re.allchar) (str.to.re "&")) (re.++ (str.to.re "q") (re.++ (str.to.re "u") (re.++ (str.to.re "o") (re.++ (str.to.re "t") (str.to.re ";")))))) (re.++ re.begin-anchor (re.++ (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))) (re.+? ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.union (re.++ (re.+ ((_ re.capture 3) (re.++ (re.+ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-"))) (str.to.re ".")))) (re.+ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-")))) ((_ re.capture 4) (re.union (re.union (re.range "a" "z") (re.range "A" "Z")) (re.++ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-")) (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-"))))))) (re.++ (str.to.re "@") (re.++ (re.+ ((_ re.capture 5) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_"))))) (str.to.re ".")))) (re.++ (re.union (re.union (re.union (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z"))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (str.to.re " ")))) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (re.union (str.to.re ",") (str.to.re ";"))))) (str.to.re "")) (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (str.to.re " ")))) (str.to.re ""))))))))))))) (re.++ re.end-anchor (re.++ (str.to.re "&") (re.++ (str.to.re "q") (re.++ (str.to.re "u") (re.++ (str.to.re "o") (re.++ (str.to.re "t") (re.++ (str.to.re ";") re.all))))))))) (str.to.re "\x00"))))
;match[1]!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ (re.++ (re.++ (re.*? re.allchar) (str.to.re "&")) (re.++ (str.to.re "q") (re.++ (str.to.re "u") (re.++ (str.to.re "o") (re.++ (str.to.re "t") (str.to.re ";")))))) (re.++ re.begin-anchor (re.++ (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))) (re.+? ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.union (re.++ (re.+ ((_ re.capture 3) (re.++ (re.+ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-"))) (str.to.re ".")))) (re.+ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-")))) ((_ re.capture 4) (re.union (re.union (re.range "a" "z") (re.range "A" "Z")) (re.++ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-")) (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-"))))))) (re.++ (str.to.re "@") (re.++ (re.+ ((_ re.capture 5) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_"))))) (str.to.re ".")))) (re.++ (re.union (re.union (re.union (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z"))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (str.to.re " ")))) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (re.union (str.to.re ",") (str.to.re ";"))))) (str.to.re "")) (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (str.to.re " ")))) (str.to.re ""))))))))))))) (re.++ re.end-anchor (re.++ (str.to.re "&") (re.++ (str.to.re "q") (re.++ (str.to.re "u") (re.++ (str.to.re "o") (re.++ (str.to.re "t") (re.++ (str.to.re ";") re.all))))))))) (re.++ re.all(re.+ (re.range "a" "z")) re.all) ))
;/[a-z]+/.test(match[1]) == true
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ (re.++ (re.++ (re.*? re.allchar) (str.to.re "&")) (re.++ (str.to.re "q") (re.++ (str.to.re "u") (re.++ (str.to.re "o") (re.++ (str.to.re "t") (str.to.re ";")))))) (re.++ re.begin-anchor (re.++ (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))) (re.+? ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.union (re.++ (re.+ ((_ re.capture 3) (re.++ (re.+ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-"))) (str.to.re ".")))) (re.+ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-")))) ((_ re.capture 4) (re.union (re.union (re.range "a" "z") (re.range "A" "Z")) (re.++ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-")) (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-"))))))) (re.++ (str.to.re "@") (re.++ (re.+ ((_ re.capture 5) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_"))))) (str.to.re ".")))) (re.++ (re.union (re.union (re.union (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z"))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (str.to.re " ")))) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (re.union (str.to.re ",") (str.to.re ";"))))) (str.to.re "")) (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (str.to.re " ")))) (str.to.re ""))))))))))))) (re.++ re.end-anchor (re.++ (str.to.re "&") (re.++ (str.to.re "q") (re.++ (str.to.re "u") (re.++ (str.to.re "o") (re.++ (str.to.re "t") (re.++ (str.to.re ";") re.all))))))))))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ (re.++ (re.++ (re.*? re.allchar) (str.to.re "&")) (re.++ (str.to.re "q") (re.++ (str.to.re "u") (re.++ (str.to.re "o") (re.++ (str.to.re "t") (str.to.re ";")))))) (re.++ re.begin-anchor (re.++ (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))) (re.+? ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.union (re.++ (re.+ ((_ re.capture 3) (re.++ (re.+ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-"))) (str.to.re ".")))) (re.+ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-")))) ((_ re.capture 4) (re.union (re.union (re.range "a" "z") (re.range "A" "Z")) (re.++ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-")) (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-"))))))) (re.++ (str.to.re "@") (re.++ (re.+ ((_ re.capture 5) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_"))))) (str.to.re ".")))) (re.++ (re.union (re.union (re.union (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z"))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (str.to.re " ")))) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (re.union (str.to.re ",") (str.to.re ";"))))) (str.to.re "")) (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (str.to.re " ")))) (str.to.re ""))))))))))))) (re.++ re.end-anchor (re.++ (str.to.re "&") (re.++ (str.to.re "q") (re.++ (str.to.re "u") (re.++ (str.to.re "o") (re.++ (str.to.re "t") (re.++ (str.to.re ";") re.all))))))))) (str.to.re "\x00"))))	
;match[1]!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ (re.++ (re.++ (re.*? re.allchar) (str.to.re "&")) (re.++ (str.to.re "q") (re.++ (str.to.re "u") (re.++ (str.to.re "o") (re.++ (str.to.re "t") (str.to.re ";")))))) (re.++ re.begin-anchor (re.++ (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))) (re.+? ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.union (re.++ (re.+ ((_ re.capture 3) (re.++ (re.+ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-"))) (str.to.re ".")))) (re.+ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-")))) ((_ re.capture 4) (re.union (re.union (re.range "a" "z") (re.range "A" "Z")) (re.++ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-")) (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-"))))))) (re.++ (str.to.re "@") (re.++ (re.+ ((_ re.capture 5) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_"))))) (str.to.re ".")))) (re.++ (re.union (re.union (re.union (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z"))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (str.to.re " ")))) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (re.union (str.to.re ",") (str.to.re ";"))))) (str.to.re "")) (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (str.to.re " ")))) (str.to.re ""))))))))))))) (re.++ re.end-anchor (re.++ (str.to.re "&") (re.++ (str.to.re "q") (re.++ (str.to.re "u") (re.++ (str.to.re "o") (re.++ (str.to.re "t") (re.++ (str.to.re ";") re.all))))))))) (re.++ re.all(re.+ (re.range "a" "z")) re.all) )))
;/[a-z]+/.test(match[1]) == false	
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ (re.++ (re.++ (re.*? re.allchar) (str.to.re "&")) (re.++ (str.to.re "q") (re.++ (str.to.re "u") (re.++ (str.to.re "o") (re.++ (str.to.re "t") (str.to.re ";")))))) (re.++ re.begin-anchor (re.++ (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))) (re.+? ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.union (re.++ (re.+ ((_ re.capture 3) (re.++ (re.+ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-"))) (str.to.re ".")))) (re.+ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-")))) ((_ re.capture 4) (re.union (re.union (re.range "a" "z") (re.range "A" "Z")) (re.++ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-")) (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-"))))))) (re.++ (str.to.re "@") (re.++ (re.+ ((_ re.capture 5) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_"))))) (str.to.re ".")))) (re.++ (re.union (re.union (re.union (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z"))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (str.to.re " ")))) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (re.union (str.to.re ",") (str.to.re ";"))))) (str.to.re "")) (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (str.to.re " ")))) (str.to.re ""))))))))))))) (re.++ re.end-anchor (re.++ (str.to.re "&") (re.++ (str.to.re "q") (re.++ (str.to.re "u") (re.++ (str.to.re "o") (re.++ (str.to.re "t") (re.++ (str.to.re ";") re.all))))))))))	; match!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ (re.++ (re.++ (re.*? re.allchar) (str.to.re "&")) (re.++ (str.to.re "q") (re.++ (str.to.re "u") (re.++ (str.to.re "o") (re.++ (str.to.re "t") (str.to.re ";")))))) (re.++ re.begin-anchor (re.++ (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))) (re.+? ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.union (re.++ (re.+ ((_ re.capture 3) (re.++ (re.+ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-"))) (str.to.re ".")))) (re.+ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-")))) ((_ re.capture 4) (re.union (re.union (re.range "a" "z") (re.range "A" "Z")) (re.++ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-")) (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-"))))))) (re.++ (str.to.re "@") (re.++ (re.+ ((_ re.capture 5) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_"))))) (str.to.re ".")))) (re.++ (re.union (re.union (re.union (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z"))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (str.to.re " ")))) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (re.union (str.to.re ",") (str.to.re ";"))))) (str.to.re "")) (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (str.to.re " ")))) (str.to.re ""))))))))))))) (re.++ re.end-anchor (re.++ (str.to.re "&") (re.++ (str.to.re "q") (re.++ (str.to.re "u") (re.++ (str.to.re "o") (re.++ (str.to.re "t") (re.++ (str.to.re ";") re.all))))))))) (str.to.re "\x00")))
;match[1]==null
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (not (str.in.re var0 (re.++ (re.++ (re.++ (re.++ (re.*? re.allchar) (str.to.re "&")) (re.++ (str.to.re "q") (re.++ (str.to.re "u") (re.++ (str.to.re "o") (re.++ (str.to.re "t") (str.to.re ";")))))) (re.++ re.begin-anchor (re.++ (re.* (re.union (str.to.re " ") (re.union (str.to.re "\u{0b}") (re.union (str.to.re "\u{0a}") (re.union (str.to.re "\u{0d}") (re.union (str.to.re "\u{09}") (str.to.re "\u{0c}"))))))) (re.+? ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.union (re.++ (re.+ ((_ re.capture 3) (re.++ (re.+ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-"))) (str.to.re ".")))) (re.+ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-")))) ((_ re.capture 4) (re.union (re.union (re.range "a" "z") (re.range "A" "Z")) (re.++ (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-")) (re.union (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_")))) (str.to.re "-"))))))) (re.++ (str.to.re "@") (re.++ (re.+ ((_ re.capture 5) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (str.to.re "_"))))) (str.to.re ".")))) (re.++ (re.union (re.union (re.union (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z"))))) (re.++ (re.union (re.range "A" "Z") (re.range "a" "z")) (re.union (re.range "A" "Z") (re.range "a" "z")))) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (str.to.re " ")))) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (re.union (str.to.re ",") (str.to.re ";"))))) (str.to.re "")) (re.union (re.++ (str.to.re "") (re.union (str.to.re "?") (re.union (str.to.re "=") (str.to.re " ")))) (str.to.re ""))))))))))))) (re.++ re.end-anchor (re.++ (str.to.re "&") (re.++ (str.to.re "q") (re.++ (str.to.re "u") (re.++ (str.to.re "o") (re.++ (str.to.re "t") (re.++ (str.to.re ";") re.all)))))))))))	; match == null
(check-sat)
(get-model)
(pop 1)
(exit)
