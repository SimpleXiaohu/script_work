
(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)

(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.range "A" "Z") (re.range "a" "z")) (re.range "0" "9"))) (re.+ ((_ re.capture 2) (re.union (re.++ (re.* ((_ re.capture 3) (re.range "A" "Z"))) ((_ re.capture 4) (re.++ (re.* ((_ re.capture 5) (re.range "a" "z"))) (re.++ (re.* ((_ re.capture 6) (re.range "0" "9"))) (re.++ (re.* ((_ re.capture 7) (str.to.re "%"))) (re.++ (re.* ((_ re.capture 8) (str.to.re "&"))) (re.++ (re.* ((_ re.capture 9) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "3") (re.++ (str.to.re "9") (str.to.re ";"))))))) (re.++ (re.* ((_ re.capture 10) (str.to.re "+"))) (re.++ (re.* ((_ re.capture 11) (str.to.re "-"))) (re.++ (re.* ((_ re.capture 12) (str.to.re "@"))) (re.++ (re.* ((_ re.capture 13) (str.to.re "_"))) (re.* ((_ re.capture 14) (str.to.re ".")))))))))))))) (re.++ ((_ re.capture 15) (str.to.re " ")) (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re " ")) (re.diff (re.range "\x01" "\xff") (str.to.re " "))))))))) re.end-anchor)))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.range "A" "Z") (re.range "a" "z")) (re.range "0" "9"))) (re.+ ((_ re.capture 2) (re.union (re.++ (re.* ((_ re.capture 3) (re.range "A" "Z"))) ((_ re.capture 4) (re.++ (re.* ((_ re.capture 5) (re.range "a" "z"))) (re.++ (re.* ((_ re.capture 6) (re.range "0" "9"))) (re.++ (re.* ((_ re.capture 7) (str.to.re "%"))) (re.++ (re.* ((_ re.capture 8) (str.to.re "&"))) (re.++ (re.* ((_ re.capture 9) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "3") (re.++ (str.to.re "9") (str.to.re ";"))))))) (re.++ (re.* ((_ re.capture 10) (str.to.re "+"))) (re.++ (re.* ((_ re.capture 11) (str.to.re "-"))) (re.++ (re.* ((_ re.capture 12) (str.to.re "@"))) (re.++ (re.* ((_ re.capture 13) (str.to.re "_"))) (re.* ((_ re.capture 14) (str.to.re ".")))))))))))))) (re.++ ((_ re.capture 15) (str.to.re " ")) (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re " ")) (re.diff (re.range "\x01" "\xff") (str.to.re " "))))))))) re.end-anchor)) (str.to.re "\x00"))))
;match[1]!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.range "A" "Z") (re.range "a" "z")) (re.range "0" "9"))) (re.+ ((_ re.capture 2) (re.union (re.++ (re.* ((_ re.capture 3) (re.range "A" "Z"))) ((_ re.capture 4) (re.++ (re.* ((_ re.capture 5) (re.range "a" "z"))) (re.++ (re.* ((_ re.capture 6) (re.range "0" "9"))) (re.++ (re.* ((_ re.capture 7) (str.to.re "%"))) (re.++ (re.* ((_ re.capture 8) (str.to.re "&"))) (re.++ (re.* ((_ re.capture 9) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "3") (re.++ (str.to.re "9") (str.to.re ";"))))))) (re.++ (re.* ((_ re.capture 10) (str.to.re "+"))) (re.++ (re.* ((_ re.capture 11) (str.to.re "-"))) (re.++ (re.* ((_ re.capture 12) (str.to.re "@"))) (re.++ (re.* ((_ re.capture 13) (str.to.re "_"))) (re.* ((_ re.capture 14) (str.to.re ".")))))))))))))) (re.++ ((_ re.capture 15) (str.to.re " ")) (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re " ")) (re.diff (re.range "\x01" "\xff") (str.to.re " "))))))))) re.end-anchor)) (re.++ re.all(re.+ (re.range "a" "z")) re.all) ))
;/[a-z]+/.test(match[1]) == true
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.range "A" "Z") (re.range "a" "z")) (re.range "0" "9"))) (re.+ ((_ re.capture 2) (re.union (re.++ (re.* ((_ re.capture 3) (re.range "A" "Z"))) ((_ re.capture 4) (re.++ (re.* ((_ re.capture 5) (re.range "a" "z"))) (re.++ (re.* ((_ re.capture 6) (re.range "0" "9"))) (re.++ (re.* ((_ re.capture 7) (str.to.re "%"))) (re.++ (re.* ((_ re.capture 8) (str.to.re "&"))) (re.++ (re.* ((_ re.capture 9) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "3") (re.++ (str.to.re "9") (str.to.re ";"))))))) (re.++ (re.* ((_ re.capture 10) (str.to.re "+"))) (re.++ (re.* ((_ re.capture 11) (str.to.re "-"))) (re.++ (re.* ((_ re.capture 12) (str.to.re "@"))) (re.++ (re.* ((_ re.capture 13) (str.to.re "_"))) (re.* ((_ re.capture 14) (str.to.re ".")))))))))))))) (re.++ ((_ re.capture 15) (str.to.re " ")) (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re " ")) (re.diff (re.range "\x01" "\xff") (str.to.re " "))))))))) re.end-anchor)))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.range "A" "Z") (re.range "a" "z")) (re.range "0" "9"))) (re.+ ((_ re.capture 2) (re.union (re.++ (re.* ((_ re.capture 3) (re.range "A" "Z"))) ((_ re.capture 4) (re.++ (re.* ((_ re.capture 5) (re.range "a" "z"))) (re.++ (re.* ((_ re.capture 6) (re.range "0" "9"))) (re.++ (re.* ((_ re.capture 7) (str.to.re "%"))) (re.++ (re.* ((_ re.capture 8) (str.to.re "&"))) (re.++ (re.* ((_ re.capture 9) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "3") (re.++ (str.to.re "9") (str.to.re ";"))))))) (re.++ (re.* ((_ re.capture 10) (str.to.re "+"))) (re.++ (re.* ((_ re.capture 11) (str.to.re "-"))) (re.++ (re.* ((_ re.capture 12) (str.to.re "@"))) (re.++ (re.* ((_ re.capture 13) (str.to.re "_"))) (re.* ((_ re.capture 14) (str.to.re ".")))))))))))))) (re.++ ((_ re.capture 15) (str.to.re " ")) (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re " ")) (re.diff (re.range "\x01" "\xff") (str.to.re " "))))))))) re.end-anchor)) (str.to.re "\x00"))))	
;match[1]!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.range "A" "Z") (re.range "a" "z")) (re.range "0" "9"))) (re.+ ((_ re.capture 2) (re.union (re.++ (re.* ((_ re.capture 3) (re.range "A" "Z"))) ((_ re.capture 4) (re.++ (re.* ((_ re.capture 5) (re.range "a" "z"))) (re.++ (re.* ((_ re.capture 6) (re.range "0" "9"))) (re.++ (re.* ((_ re.capture 7) (str.to.re "%"))) (re.++ (re.* ((_ re.capture 8) (str.to.re "&"))) (re.++ (re.* ((_ re.capture 9) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "3") (re.++ (str.to.re "9") (str.to.re ";"))))))) (re.++ (re.* ((_ re.capture 10) (str.to.re "+"))) (re.++ (re.* ((_ re.capture 11) (str.to.re "-"))) (re.++ (re.* ((_ re.capture 12) (str.to.re "@"))) (re.++ (re.* ((_ re.capture 13) (str.to.re "_"))) (re.* ((_ re.capture 14) (str.to.re ".")))))))))))))) (re.++ ((_ re.capture 15) (str.to.re " ")) (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re " ")) (re.diff (re.range "\x01" "\xff") (str.to.re " "))))))))) re.end-anchor)) (re.++ re.all(re.+ (re.range "a" "z")) re.all) )))
;/[a-z]+/.test(match[1]) == false	
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.range "A" "Z") (re.range "a" "z")) (re.range "0" "9"))) (re.+ ((_ re.capture 2) (re.union (re.++ (re.* ((_ re.capture 3) (re.range "A" "Z"))) ((_ re.capture 4) (re.++ (re.* ((_ re.capture 5) (re.range "a" "z"))) (re.++ (re.* ((_ re.capture 6) (re.range "0" "9"))) (re.++ (re.* ((_ re.capture 7) (str.to.re "%"))) (re.++ (re.* ((_ re.capture 8) (str.to.re "&"))) (re.++ (re.* ((_ re.capture 9) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "3") (re.++ (str.to.re "9") (str.to.re ";"))))))) (re.++ (re.* ((_ re.capture 10) (str.to.re "+"))) (re.++ (re.* ((_ re.capture 11) (str.to.re "-"))) (re.++ (re.* ((_ re.capture 12) (str.to.re "@"))) (re.++ (re.* ((_ re.capture 13) (str.to.re "_"))) (re.* ((_ re.capture 14) (str.to.re ".")))))))))))))) (re.++ ((_ re.capture 15) (str.to.re " ")) (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re " ")) (re.diff (re.range "\x01" "\xff") (str.to.re " "))))))))) re.end-anchor)))	; match!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.range "A" "Z") (re.range "a" "z")) (re.range "0" "9"))) (re.+ ((_ re.capture 2) (re.union (re.++ (re.* ((_ re.capture 3) (re.range "A" "Z"))) ((_ re.capture 4) (re.++ (re.* ((_ re.capture 5) (re.range "a" "z"))) (re.++ (re.* ((_ re.capture 6) (re.range "0" "9"))) (re.++ (re.* ((_ re.capture 7) (str.to.re "%"))) (re.++ (re.* ((_ re.capture 8) (str.to.re "&"))) (re.++ (re.* ((_ re.capture 9) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "3") (re.++ (str.to.re "9") (str.to.re ";"))))))) (re.++ (re.* ((_ re.capture 10) (str.to.re "+"))) (re.++ (re.* ((_ re.capture 11) (str.to.re "-"))) (re.++ (re.* ((_ re.capture 12) (str.to.re "@"))) (re.++ (re.* ((_ re.capture 13) (str.to.re "_"))) (re.* ((_ re.capture 14) (str.to.re ".")))))))))))))) (re.++ ((_ re.capture 15) (str.to.re " ")) (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re " ")) (re.diff (re.range "\x01" "\xff") (str.to.re " "))))))))) re.end-anchor)) (str.to.re "\x00")))
;match[1]==null
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (not (str.in.re var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.range "A" "Z") (re.range "a" "z")) (re.range "0" "9"))) (re.+ ((_ re.capture 2) (re.union (re.++ (re.* ((_ re.capture 3) (re.range "A" "Z"))) ((_ re.capture 4) (re.++ (re.* ((_ re.capture 5) (re.range "a" "z"))) (re.++ (re.* ((_ re.capture 6) (re.range "0" "9"))) (re.++ (re.* ((_ re.capture 7) (str.to.re "%"))) (re.++ (re.* ((_ re.capture 8) (str.to.re "&"))) (re.++ (re.* ((_ re.capture 9) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "3") (re.++ (str.to.re "9") (str.to.re ";"))))))) (re.++ (re.* ((_ re.capture 10) (str.to.re "+"))) (re.++ (re.* ((_ re.capture 11) (str.to.re "-"))) (re.++ (re.* ((_ re.capture 12) (str.to.re "@"))) (re.++ (re.* ((_ re.capture 13) (str.to.re "_"))) (re.* ((_ re.capture 14) (str.to.re ".")))))))))))))) (re.++ ((_ re.capture 15) (str.to.re " ")) (re.inter (re.diff (re.range "\x01" "\xff") (str.to.re " ")) (re.diff (re.range "\x01" "\xff") (str.to.re " "))))))))) re.end-anchor))))	; match == null
(check-sat)
(get-model)
(pop 1)
(exit)
