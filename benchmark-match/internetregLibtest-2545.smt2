
(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)

(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ re.begin-anchor (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.++ ((_ re.capture 3) (re.union (re.++ (str.to.re "h") (str.to.re "t")) (str.to.re "f"))) (re.++ (str.to.re "t") (re.++ (str.to.re "p") ((_ re.capture 4) (re.union (re.++ (str.to.re "") (str.to.re "s")) (str.to.re ""))))))) (re.++ (str.to.re ":") (re.++ (str.to.re "/") (str.to.re "/")))))) (str.to.re "")) (re.++ ((_ re.capture 5) (re.union (re.++ (str.to.re "w") (re.++ (str.to.re "w") (re.++ (str.to.re "w") (re.range "\x01" "\xff")))) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.range "\x01" "\xff")))) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (str.to.re ".")))))) (re.++ (str.to.re ".") (re.++ ((_ re.capture 6) (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.++ (str.to.re "c") (re.++ (str.to.re "o") (str.to.re "m"))) (re.++ (str.to.re "e") (re.++ (str.to.re "d") (str.to.re "u")))) (re.++ (str.to.re "g") (re.++ (str.to.re "o") (str.to.re "v")))) (re.++ (str.to.re "m") (re.++ (str.to.re "i") (str.to.re "l")))) (re.++ (str.to.re "n") (re.++ (str.to.re "e") (str.to.re "t")))) (re.++ (str.to.re "o") (re.++ (str.to.re "r") (str.to.re "g")))) (re.++ (str.to.re "b") (re.++ (str.to.re "i") (str.to.re "z")))) (re.++ (str.to.re "i") (re.++ (str.to.re "n") (re.++ (str.to.re "f") (str.to.re "o"))))) (re.++ (str.to.re "n") (re.++ (str.to.re "a") (re.++ (str.to.re "m") (str.to.re "e"))))) (re.++ (str.to.re "m") (re.++ (str.to.re "u") (re.++ (str.to.re "s") (re.++ (str.to.re "e") (re.++ (str.to.re "u") (str.to.re "m"))))))) (re.++ (str.to.re "u") (str.to.re "s"))) (re.++ (str.to.re "c") (str.to.re "a"))) (re.++ (str.to.re "u") (str.to.re "k")))) (re.++ (re.* ((_ re.capture 7) (re.++ (str.to.re ":") (re.+ (re.range "0" "9"))))) (re.* ((_ re.capture 8) (re.++ (str.to.re "/") ((_ re.capture 9) (re.union re.end-anchor (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re ".") (re.union (str.to.re ",") (re.union (str.to.re ";") (re.union (str.to.re "?") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "\\") (re.union (str.to.re "+") (re.union (str.to.re "&") (re.union (str.to.re "a") (re.union (str.to.re "m") (re.union (str.to.re "p") (re.union (str.to.re ";") (re.union (str.to.re "%") (re.union (str.to.re "$") (re.union (str.to.re "#") (re.union (str.to.re "=") (re.union (str.to.re "~") (re.union (str.to.re "_") (str.to.re "-"))))))))))))))))))))))))))))))))))))))) re.end-anchor)))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.++ ((_ re.capture 3) (re.union (re.++ (str.to.re "h") (str.to.re "t")) (str.to.re "f"))) (re.++ (str.to.re "t") (re.++ (str.to.re "p") ((_ re.capture 4) (re.union (re.++ (str.to.re "") (str.to.re "s")) (str.to.re ""))))))) (re.++ (str.to.re ":") (re.++ (str.to.re "/") (str.to.re "/")))))) (str.to.re "")) (re.++ ((_ re.capture 5) (re.union (re.++ (str.to.re "w") (re.++ (str.to.re "w") (re.++ (str.to.re "w") (re.range "\x01" "\xff")))) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.range "\x01" "\xff")))) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (str.to.re ".")))))) (re.++ (str.to.re ".") (re.++ ((_ re.capture 6) (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.++ (str.to.re "c") (re.++ (str.to.re "o") (str.to.re "m"))) (re.++ (str.to.re "e") (re.++ (str.to.re "d") (str.to.re "u")))) (re.++ (str.to.re "g") (re.++ (str.to.re "o") (str.to.re "v")))) (re.++ (str.to.re "m") (re.++ (str.to.re "i") (str.to.re "l")))) (re.++ (str.to.re "n") (re.++ (str.to.re "e") (str.to.re "t")))) (re.++ (str.to.re "o") (re.++ (str.to.re "r") (str.to.re "g")))) (re.++ (str.to.re "b") (re.++ (str.to.re "i") (str.to.re "z")))) (re.++ (str.to.re "i") (re.++ (str.to.re "n") (re.++ (str.to.re "f") (str.to.re "o"))))) (re.++ (str.to.re "n") (re.++ (str.to.re "a") (re.++ (str.to.re "m") (str.to.re "e"))))) (re.++ (str.to.re "m") (re.++ (str.to.re "u") (re.++ (str.to.re "s") (re.++ (str.to.re "e") (re.++ (str.to.re "u") (str.to.re "m"))))))) (re.++ (str.to.re "u") (str.to.re "s"))) (re.++ (str.to.re "c") (str.to.re "a"))) (re.++ (str.to.re "u") (str.to.re "k")))) (re.++ (re.* ((_ re.capture 7) (re.++ (str.to.re ":") (re.+ (re.range "0" "9"))))) (re.* ((_ re.capture 8) (re.++ (str.to.re "/") ((_ re.capture 9) (re.union re.end-anchor (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re ".") (re.union (str.to.re ",") (re.union (str.to.re ";") (re.union (str.to.re "?") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "\\") (re.union (str.to.re "+") (re.union (str.to.re "&") (re.union (str.to.re "a") (re.union (str.to.re "m") (re.union (str.to.re "p") (re.union (str.to.re ";") (re.union (str.to.re "%") (re.union (str.to.re "$") (re.union (str.to.re "#") (re.union (str.to.re "=") (re.union (str.to.re "~") (re.union (str.to.re "_") (str.to.re "-"))))))))))))))))))))))))))))))))))))))) re.end-anchor)) (str.to.re "\x00"))))
;match[1]!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.++ ((_ re.capture 3) (re.union (re.++ (str.to.re "h") (str.to.re "t")) (str.to.re "f"))) (re.++ (str.to.re "t") (re.++ (str.to.re "p") ((_ re.capture 4) (re.union (re.++ (str.to.re "") (str.to.re "s")) (str.to.re ""))))))) (re.++ (str.to.re ":") (re.++ (str.to.re "/") (str.to.re "/")))))) (str.to.re "")) (re.++ ((_ re.capture 5) (re.union (re.++ (str.to.re "w") (re.++ (str.to.re "w") (re.++ (str.to.re "w") (re.range "\x01" "\xff")))) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.range "\x01" "\xff")))) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (str.to.re ".")))))) (re.++ (str.to.re ".") (re.++ ((_ re.capture 6) (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.++ (str.to.re "c") (re.++ (str.to.re "o") (str.to.re "m"))) (re.++ (str.to.re "e") (re.++ (str.to.re "d") (str.to.re "u")))) (re.++ (str.to.re "g") (re.++ (str.to.re "o") (str.to.re "v")))) (re.++ (str.to.re "m") (re.++ (str.to.re "i") (str.to.re "l")))) (re.++ (str.to.re "n") (re.++ (str.to.re "e") (str.to.re "t")))) (re.++ (str.to.re "o") (re.++ (str.to.re "r") (str.to.re "g")))) (re.++ (str.to.re "b") (re.++ (str.to.re "i") (str.to.re "z")))) (re.++ (str.to.re "i") (re.++ (str.to.re "n") (re.++ (str.to.re "f") (str.to.re "o"))))) (re.++ (str.to.re "n") (re.++ (str.to.re "a") (re.++ (str.to.re "m") (str.to.re "e"))))) (re.++ (str.to.re "m") (re.++ (str.to.re "u") (re.++ (str.to.re "s") (re.++ (str.to.re "e") (re.++ (str.to.re "u") (str.to.re "m"))))))) (re.++ (str.to.re "u") (str.to.re "s"))) (re.++ (str.to.re "c") (str.to.re "a"))) (re.++ (str.to.re "u") (str.to.re "k")))) (re.++ (re.* ((_ re.capture 7) (re.++ (str.to.re ":") (re.+ (re.range "0" "9"))))) (re.* ((_ re.capture 8) (re.++ (str.to.re "/") ((_ re.capture 9) (re.union re.end-anchor (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re ".") (re.union (str.to.re ",") (re.union (str.to.re ";") (re.union (str.to.re "?") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "\\") (re.union (str.to.re "+") (re.union (str.to.re "&") (re.union (str.to.re "a") (re.union (str.to.re "m") (re.union (str.to.re "p") (re.union (str.to.re ";") (re.union (str.to.re "%") (re.union (str.to.re "$") (re.union (str.to.re "#") (re.union (str.to.re "=") (re.union (str.to.re "~") (re.union (str.to.re "_") (str.to.re "-"))))))))))))))))))))))))))))))))))))))) re.end-anchor)) (re.++ re.all(re.+ (re.range "a" "z")) re.all) ))
;/[a-z]+/.test(match[1]) == true
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ re.begin-anchor (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.++ ((_ re.capture 3) (re.union (re.++ (str.to.re "h") (str.to.re "t")) (str.to.re "f"))) (re.++ (str.to.re "t") (re.++ (str.to.re "p") ((_ re.capture 4) (re.union (re.++ (str.to.re "") (str.to.re "s")) (str.to.re ""))))))) (re.++ (str.to.re ":") (re.++ (str.to.re "/") (str.to.re "/")))))) (str.to.re "")) (re.++ ((_ re.capture 5) (re.union (re.++ (str.to.re "w") (re.++ (str.to.re "w") (re.++ (str.to.re "w") (re.range "\x01" "\xff")))) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.range "\x01" "\xff")))) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (str.to.re ".")))))) (re.++ (str.to.re ".") (re.++ ((_ re.capture 6) (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.++ (str.to.re "c") (re.++ (str.to.re "o") (str.to.re "m"))) (re.++ (str.to.re "e") (re.++ (str.to.re "d") (str.to.re "u")))) (re.++ (str.to.re "g") (re.++ (str.to.re "o") (str.to.re "v")))) (re.++ (str.to.re "m") (re.++ (str.to.re "i") (str.to.re "l")))) (re.++ (str.to.re "n") (re.++ (str.to.re "e") (str.to.re "t")))) (re.++ (str.to.re "o") (re.++ (str.to.re "r") (str.to.re "g")))) (re.++ (str.to.re "b") (re.++ (str.to.re "i") (str.to.re "z")))) (re.++ (str.to.re "i") (re.++ (str.to.re "n") (re.++ (str.to.re "f") (str.to.re "o"))))) (re.++ (str.to.re "n") (re.++ (str.to.re "a") (re.++ (str.to.re "m") (str.to.re "e"))))) (re.++ (str.to.re "m") (re.++ (str.to.re "u") (re.++ (str.to.re "s") (re.++ (str.to.re "e") (re.++ (str.to.re "u") (str.to.re "m"))))))) (re.++ (str.to.re "u") (str.to.re "s"))) (re.++ (str.to.re "c") (str.to.re "a"))) (re.++ (str.to.re "u") (str.to.re "k")))) (re.++ (re.* ((_ re.capture 7) (re.++ (str.to.re ":") (re.+ (re.range "0" "9"))))) (re.* ((_ re.capture 8) (re.++ (str.to.re "/") ((_ re.capture 9) (re.union re.end-anchor (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re ".") (re.union (str.to.re ",") (re.union (str.to.re ";") (re.union (str.to.re "?") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "\\") (re.union (str.to.re "+") (re.union (str.to.re "&") (re.union (str.to.re "a") (re.union (str.to.re "m") (re.union (str.to.re "p") (re.union (str.to.re ";") (re.union (str.to.re "%") (re.union (str.to.re "$") (re.union (str.to.re "#") (re.union (str.to.re "=") (re.union (str.to.re "~") (re.union (str.to.re "_") (str.to.re "-"))))))))))))))))))))))))))))))))))))))) re.end-anchor)))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.++ ((_ re.capture 3) (re.union (re.++ (str.to.re "h") (str.to.re "t")) (str.to.re "f"))) (re.++ (str.to.re "t") (re.++ (str.to.re "p") ((_ re.capture 4) (re.union (re.++ (str.to.re "") (str.to.re "s")) (str.to.re ""))))))) (re.++ (str.to.re ":") (re.++ (str.to.re "/") (str.to.re "/")))))) (str.to.re "")) (re.++ ((_ re.capture 5) (re.union (re.++ (str.to.re "w") (re.++ (str.to.re "w") (re.++ (str.to.re "w") (re.range "\x01" "\xff")))) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.range "\x01" "\xff")))) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (str.to.re ".")))))) (re.++ (str.to.re ".") (re.++ ((_ re.capture 6) (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.++ (str.to.re "c") (re.++ (str.to.re "o") (str.to.re "m"))) (re.++ (str.to.re "e") (re.++ (str.to.re "d") (str.to.re "u")))) (re.++ (str.to.re "g") (re.++ (str.to.re "o") (str.to.re "v")))) (re.++ (str.to.re "m") (re.++ (str.to.re "i") (str.to.re "l")))) (re.++ (str.to.re "n") (re.++ (str.to.re "e") (str.to.re "t")))) (re.++ (str.to.re "o") (re.++ (str.to.re "r") (str.to.re "g")))) (re.++ (str.to.re "b") (re.++ (str.to.re "i") (str.to.re "z")))) (re.++ (str.to.re "i") (re.++ (str.to.re "n") (re.++ (str.to.re "f") (str.to.re "o"))))) (re.++ (str.to.re "n") (re.++ (str.to.re "a") (re.++ (str.to.re "m") (str.to.re "e"))))) (re.++ (str.to.re "m") (re.++ (str.to.re "u") (re.++ (str.to.re "s") (re.++ (str.to.re "e") (re.++ (str.to.re "u") (str.to.re "m"))))))) (re.++ (str.to.re "u") (str.to.re "s"))) (re.++ (str.to.re "c") (str.to.re "a"))) (re.++ (str.to.re "u") (str.to.re "k")))) (re.++ (re.* ((_ re.capture 7) (re.++ (str.to.re ":") (re.+ (re.range "0" "9"))))) (re.* ((_ re.capture 8) (re.++ (str.to.re "/") ((_ re.capture 9) (re.union re.end-anchor (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re ".") (re.union (str.to.re ",") (re.union (str.to.re ";") (re.union (str.to.re "?") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "\\") (re.union (str.to.re "+") (re.union (str.to.re "&") (re.union (str.to.re "a") (re.union (str.to.re "m") (re.union (str.to.re "p") (re.union (str.to.re ";") (re.union (str.to.re "%") (re.union (str.to.re "$") (re.union (str.to.re "#") (re.union (str.to.re "=") (re.union (str.to.re "~") (re.union (str.to.re "_") (str.to.re "-"))))))))))))))))))))))))))))))))))))))) re.end-anchor)) (str.to.re "\x00"))))	
;match[1]!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.++ ((_ re.capture 3) (re.union (re.++ (str.to.re "h") (str.to.re "t")) (str.to.re "f"))) (re.++ (str.to.re "t") (re.++ (str.to.re "p") ((_ re.capture 4) (re.union (re.++ (str.to.re "") (str.to.re "s")) (str.to.re ""))))))) (re.++ (str.to.re ":") (re.++ (str.to.re "/") (str.to.re "/")))))) (str.to.re "")) (re.++ ((_ re.capture 5) (re.union (re.++ (str.to.re "w") (re.++ (str.to.re "w") (re.++ (str.to.re "w") (re.range "\x01" "\xff")))) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.range "\x01" "\xff")))) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (str.to.re ".")))))) (re.++ (str.to.re ".") (re.++ ((_ re.capture 6) (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.++ (str.to.re "c") (re.++ (str.to.re "o") (str.to.re "m"))) (re.++ (str.to.re "e") (re.++ (str.to.re "d") (str.to.re "u")))) (re.++ (str.to.re "g") (re.++ (str.to.re "o") (str.to.re "v")))) (re.++ (str.to.re "m") (re.++ (str.to.re "i") (str.to.re "l")))) (re.++ (str.to.re "n") (re.++ (str.to.re "e") (str.to.re "t")))) (re.++ (str.to.re "o") (re.++ (str.to.re "r") (str.to.re "g")))) (re.++ (str.to.re "b") (re.++ (str.to.re "i") (str.to.re "z")))) (re.++ (str.to.re "i") (re.++ (str.to.re "n") (re.++ (str.to.re "f") (str.to.re "o"))))) (re.++ (str.to.re "n") (re.++ (str.to.re "a") (re.++ (str.to.re "m") (str.to.re "e"))))) (re.++ (str.to.re "m") (re.++ (str.to.re "u") (re.++ (str.to.re "s") (re.++ (str.to.re "e") (re.++ (str.to.re "u") (str.to.re "m"))))))) (re.++ (str.to.re "u") (str.to.re "s"))) (re.++ (str.to.re "c") (str.to.re "a"))) (re.++ (str.to.re "u") (str.to.re "k")))) (re.++ (re.* ((_ re.capture 7) (re.++ (str.to.re ":") (re.+ (re.range "0" "9"))))) (re.* ((_ re.capture 8) (re.++ (str.to.re "/") ((_ re.capture 9) (re.union re.end-anchor (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re ".") (re.union (str.to.re ",") (re.union (str.to.re ";") (re.union (str.to.re "?") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "\\") (re.union (str.to.re "+") (re.union (str.to.re "&") (re.union (str.to.re "a") (re.union (str.to.re "m") (re.union (str.to.re "p") (re.union (str.to.re ";") (re.union (str.to.re "%") (re.union (str.to.re "$") (re.union (str.to.re "#") (re.union (str.to.re "=") (re.union (str.to.re "~") (re.union (str.to.re "_") (str.to.re "-"))))))))))))))))))))))))))))))))))))))) re.end-anchor)) (re.++ re.all(re.+ (re.range "a" "z")) re.all) )))
;/[a-z]+/.test(match[1]) == false	
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ re.begin-anchor (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.++ ((_ re.capture 3) (re.union (re.++ (str.to.re "h") (str.to.re "t")) (str.to.re "f"))) (re.++ (str.to.re "t") (re.++ (str.to.re "p") ((_ re.capture 4) (re.union (re.++ (str.to.re "") (str.to.re "s")) (str.to.re ""))))))) (re.++ (str.to.re ":") (re.++ (str.to.re "/") (str.to.re "/")))))) (str.to.re "")) (re.++ ((_ re.capture 5) (re.union (re.++ (str.to.re "w") (re.++ (str.to.re "w") (re.++ (str.to.re "w") (re.range "\x01" "\xff")))) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.range "\x01" "\xff")))) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (str.to.re ".")))))) (re.++ (str.to.re ".") (re.++ ((_ re.capture 6) (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.++ (str.to.re "c") (re.++ (str.to.re "o") (str.to.re "m"))) (re.++ (str.to.re "e") (re.++ (str.to.re "d") (str.to.re "u")))) (re.++ (str.to.re "g") (re.++ (str.to.re "o") (str.to.re "v")))) (re.++ (str.to.re "m") (re.++ (str.to.re "i") (str.to.re "l")))) (re.++ (str.to.re "n") (re.++ (str.to.re "e") (str.to.re "t")))) (re.++ (str.to.re "o") (re.++ (str.to.re "r") (str.to.re "g")))) (re.++ (str.to.re "b") (re.++ (str.to.re "i") (str.to.re "z")))) (re.++ (str.to.re "i") (re.++ (str.to.re "n") (re.++ (str.to.re "f") (str.to.re "o"))))) (re.++ (str.to.re "n") (re.++ (str.to.re "a") (re.++ (str.to.re "m") (str.to.re "e"))))) (re.++ (str.to.re "m") (re.++ (str.to.re "u") (re.++ (str.to.re "s") (re.++ (str.to.re "e") (re.++ (str.to.re "u") (str.to.re "m"))))))) (re.++ (str.to.re "u") (str.to.re "s"))) (re.++ (str.to.re "c") (str.to.re "a"))) (re.++ (str.to.re "u") (str.to.re "k")))) (re.++ (re.* ((_ re.capture 7) (re.++ (str.to.re ":") (re.+ (re.range "0" "9"))))) (re.* ((_ re.capture 8) (re.++ (str.to.re "/") ((_ re.capture 9) (re.union re.end-anchor (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re ".") (re.union (str.to.re ",") (re.union (str.to.re ";") (re.union (str.to.re "?") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "\\") (re.union (str.to.re "+") (re.union (str.to.re "&") (re.union (str.to.re "a") (re.union (str.to.re "m") (re.union (str.to.re "p") (re.union (str.to.re ";") (re.union (str.to.re "%") (re.union (str.to.re "$") (re.union (str.to.re "#") (re.union (str.to.re "=") (re.union (str.to.re "~") (re.union (str.to.re "_") (str.to.re "-"))))))))))))))))))))))))))))))))))))))) re.end-anchor)))	; match!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.++ ((_ re.capture 3) (re.union (re.++ (str.to.re "h") (str.to.re "t")) (str.to.re "f"))) (re.++ (str.to.re "t") (re.++ (str.to.re "p") ((_ re.capture 4) (re.union (re.++ (str.to.re "") (str.to.re "s")) (str.to.re ""))))))) (re.++ (str.to.re ":") (re.++ (str.to.re "/") (str.to.re "/")))))) (str.to.re "")) (re.++ ((_ re.capture 5) (re.union (re.++ (str.to.re "w") (re.++ (str.to.re "w") (re.++ (str.to.re "w") (re.range "\x01" "\xff")))) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.range "\x01" "\xff")))) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (str.to.re ".")))))) (re.++ (str.to.re ".") (re.++ ((_ re.capture 6) (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.++ (str.to.re "c") (re.++ (str.to.re "o") (str.to.re "m"))) (re.++ (str.to.re "e") (re.++ (str.to.re "d") (str.to.re "u")))) (re.++ (str.to.re "g") (re.++ (str.to.re "o") (str.to.re "v")))) (re.++ (str.to.re "m") (re.++ (str.to.re "i") (str.to.re "l")))) (re.++ (str.to.re "n") (re.++ (str.to.re "e") (str.to.re "t")))) (re.++ (str.to.re "o") (re.++ (str.to.re "r") (str.to.re "g")))) (re.++ (str.to.re "b") (re.++ (str.to.re "i") (str.to.re "z")))) (re.++ (str.to.re "i") (re.++ (str.to.re "n") (re.++ (str.to.re "f") (str.to.re "o"))))) (re.++ (str.to.re "n") (re.++ (str.to.re "a") (re.++ (str.to.re "m") (str.to.re "e"))))) (re.++ (str.to.re "m") (re.++ (str.to.re "u") (re.++ (str.to.re "s") (re.++ (str.to.re "e") (re.++ (str.to.re "u") (str.to.re "m"))))))) (re.++ (str.to.re "u") (str.to.re "s"))) (re.++ (str.to.re "c") (str.to.re "a"))) (re.++ (str.to.re "u") (str.to.re "k")))) (re.++ (re.* ((_ re.capture 7) (re.++ (str.to.re ":") (re.+ (re.range "0" "9"))))) (re.* ((_ re.capture 8) (re.++ (str.to.re "/") ((_ re.capture 9) (re.union re.end-anchor (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re ".") (re.union (str.to.re ",") (re.union (str.to.re ";") (re.union (str.to.re "?") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "\\") (re.union (str.to.re "+") (re.union (str.to.re "&") (re.union (str.to.re "a") (re.union (str.to.re "m") (re.union (str.to.re "p") (re.union (str.to.re ";") (re.union (str.to.re "%") (re.union (str.to.re "$") (re.union (str.to.re "#") (re.union (str.to.re "=") (re.union (str.to.re "~") (re.union (str.to.re "_") (str.to.re "-"))))))))))))))))))))))))))))))))))))))) re.end-anchor)) (str.to.re "\x00")))
;match[1]==null
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (not (str.in.re var0 (re.++ (re.++ re.begin-anchor (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 1) (re.++ ((_ re.capture 2) (re.++ ((_ re.capture 3) (re.union (re.++ (str.to.re "h") (str.to.re "t")) (str.to.re "f"))) (re.++ (str.to.re "t") (re.++ (str.to.re "p") ((_ re.capture 4) (re.union (re.++ (str.to.re "") (str.to.re "s")) (str.to.re ""))))))) (re.++ (str.to.re ":") (re.++ (str.to.re "/") (str.to.re "/")))))) (str.to.re "")) (re.++ ((_ re.capture 5) (re.union (re.++ (str.to.re "w") (re.++ (str.to.re "w") (re.++ (str.to.re "w") (re.range "\x01" "\xff")))) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.range "\x01" "\xff")))) (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (str.to.re ".")))))) (re.++ (str.to.re ".") (re.++ ((_ re.capture 6) (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.union (re.++ (str.to.re "c") (re.++ (str.to.re "o") (str.to.re "m"))) (re.++ (str.to.re "e") (re.++ (str.to.re "d") (str.to.re "u")))) (re.++ (str.to.re "g") (re.++ (str.to.re "o") (str.to.re "v")))) (re.++ (str.to.re "m") (re.++ (str.to.re "i") (str.to.re "l")))) (re.++ (str.to.re "n") (re.++ (str.to.re "e") (str.to.re "t")))) (re.++ (str.to.re "o") (re.++ (str.to.re "r") (str.to.re "g")))) (re.++ (str.to.re "b") (re.++ (str.to.re "i") (str.to.re "z")))) (re.++ (str.to.re "i") (re.++ (str.to.re "n") (re.++ (str.to.re "f") (str.to.re "o"))))) (re.++ (str.to.re "n") (re.++ (str.to.re "a") (re.++ (str.to.re "m") (str.to.re "e"))))) (re.++ (str.to.re "m") (re.++ (str.to.re "u") (re.++ (str.to.re "s") (re.++ (str.to.re "e") (re.++ (str.to.re "u") (str.to.re "m"))))))) (re.++ (str.to.re "u") (str.to.re "s"))) (re.++ (str.to.re "c") (str.to.re "a"))) (re.++ (str.to.re "u") (str.to.re "k")))) (re.++ (re.* ((_ re.capture 7) (re.++ (str.to.re ":") (re.+ (re.range "0" "9"))))) (re.* ((_ re.capture 8) (re.++ (str.to.re "/") ((_ re.capture 9) (re.union re.end-anchor (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re ".") (re.union (str.to.re ",") (re.union (str.to.re ";") (re.union (str.to.re "?") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "\\") (re.union (str.to.re "+") (re.union (str.to.re "&") (re.union (str.to.re "a") (re.union (str.to.re "m") (re.union (str.to.re "p") (re.union (str.to.re ";") (re.union (str.to.re "%") (re.union (str.to.re "$") (re.union (str.to.re "#") (re.union (str.to.re "=") (re.union (str.to.re "~") (re.union (str.to.re "_") (str.to.re "-"))))))))))))))))))))))))))))))))))))))) re.end-anchor))))	; match == null
(check-sat)
(get-model)
(pop 1)
(exit)