
(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)

(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.union (re.++ (str.to.re "a") (re.++ (str.to.re "t") (re.++ (str.to.re "u") (re.++ (str.to.re "v") (re.++ (str.to.re "w") (re.++ (str.to.re "d") (re.++ (str.to.re "x") (re.++ (str.to.re "y") (re.++ (str.to.re "z") (re.++ (str.to.re "a") (str.to.re "d"))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "b") (re.++ (str.to.re "c") (re.++ (str.to.re "e") (re.++ (str.to.re "f") (re.++ (str.to.re "d") (re.++ (str.to.re "g") (re.++ (str.to.re "h") (re.++ (str.to.re "i") (re.++ (str.to.re "j") (str.to.re "d")))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "l") (re.++ (str.to.re "m") (re.++ (str.to.re "n") (re.++ (str.to.re "o") (re.++ (str.to.re "d") (re.++ (str.to.re "p") (re.++ (str.to.re "q") (re.++ (str.to.re "r") (re.++ (str.to.re "s") (str.to.re "d")))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "2") (re.++ (str.to.re "2") (re.++ (str.to.re "3") (re.++ (re.union (re.++ (str.to.re "") (str.to.re ";")) (str.to.re "")) (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.++ (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re ""))) (str.to.re ""))) (str.to.re "")) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "1") (re.++ (str.to.re "8") (re.++ (str.to.re "1") (re.++ (str.to.re ";") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "p")) (str.to.re "")) (re.++ (str.to.re "s") (str.to.re "d")))))))))))))))))))))) (re.++ (re.* ((_ re.capture 2) (re.union (re.union (re.union (re.++ (str.to.re "k") (re.++ (str.to.re "t") (re.++ (str.to.re "u") (re.++ (str.to.re "v") (re.++ (str.to.re "w") (re.++ (str.to.re "d") (re.++ (str.to.re "x") (re.++ (str.to.re "y") (re.++ (str.to.re "z") (re.++ (str.to.re "a") (str.to.re "d"))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "b") (re.++ (str.to.re "c") (re.++ (str.to.re "e") (re.++ (str.to.re "f") (re.++ (str.to.re "d") (re.++ (str.to.re "g") (re.++ (str.to.re "h") (re.++ (str.to.re "i") (re.++ (str.to.re "j") (str.to.re "d")))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "l") (re.++ (str.to.re "m") (re.++ (str.to.re "n") (re.++ (str.to.re "o") (re.++ (str.to.re "d") (re.++ (str.to.re "p") (re.++ (str.to.re "q") (re.++ (str.to.re "r") (re.++ (str.to.re "s") (str.to.re "d")))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "2") (re.++ (str.to.re "2") (re.++ (str.to.re "3") (re.++ (re.union (re.++ (str.to.re "") (str.to.re ";")) (str.to.re "")) (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.++ (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re ""))) (str.to.re ""))) (str.to.re "")) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "1") (re.++ (str.to.re "8") (re.++ (str.to.re "1") (re.++ (str.to.re ";") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "p")) (str.to.re "")) (re.++ (str.to.re "s") (str.to.re "d"))))))))))))))))))))))) re.all)))))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.union (re.++ (str.to.re "a") (re.++ (str.to.re "t") (re.++ (str.to.re "u") (re.++ (str.to.re "v") (re.++ (str.to.re "w") (re.++ (str.to.re "d") (re.++ (str.to.re "x") (re.++ (str.to.re "y") (re.++ (str.to.re "z") (re.++ (str.to.re "a") (str.to.re "d"))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "b") (re.++ (str.to.re "c") (re.++ (str.to.re "e") (re.++ (str.to.re "f") (re.++ (str.to.re "d") (re.++ (str.to.re "g") (re.++ (str.to.re "h") (re.++ (str.to.re "i") (re.++ (str.to.re "j") (str.to.re "d")))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "l") (re.++ (str.to.re "m") (re.++ (str.to.re "n") (re.++ (str.to.re "o") (re.++ (str.to.re "d") (re.++ (str.to.re "p") (re.++ (str.to.re "q") (re.++ (str.to.re "r") (re.++ (str.to.re "s") (str.to.re "d")))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "2") (re.++ (str.to.re "2") (re.++ (str.to.re "3") (re.++ (re.union (re.++ (str.to.re "") (str.to.re ";")) (str.to.re "")) (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.++ (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re ""))) (str.to.re ""))) (str.to.re "")) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "1") (re.++ (str.to.re "8") (re.++ (str.to.re "1") (re.++ (str.to.re ";") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "p")) (str.to.re "")) (re.++ (str.to.re "s") (str.to.re "d")))))))))))))))))))))) (re.++ (re.* ((_ re.capture 2) (re.union (re.union (re.union (re.++ (str.to.re "k") (re.++ (str.to.re "t") (re.++ (str.to.re "u") (re.++ (str.to.re "v") (re.++ (str.to.re "w") (re.++ (str.to.re "d") (re.++ (str.to.re "x") (re.++ (str.to.re "y") (re.++ (str.to.re "z") (re.++ (str.to.re "a") (str.to.re "d"))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "b") (re.++ (str.to.re "c") (re.++ (str.to.re "e") (re.++ (str.to.re "f") (re.++ (str.to.re "d") (re.++ (str.to.re "g") (re.++ (str.to.re "h") (re.++ (str.to.re "i") (re.++ (str.to.re "j") (str.to.re "d")))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "l") (re.++ (str.to.re "m") (re.++ (str.to.re "n") (re.++ (str.to.re "o") (re.++ (str.to.re "d") (re.++ (str.to.re "p") (re.++ (str.to.re "q") (re.++ (str.to.re "r") (re.++ (str.to.re "s") (str.to.re "d")))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "2") (re.++ (str.to.re "2") (re.++ (str.to.re "3") (re.++ (re.union (re.++ (str.to.re "") (str.to.re ";")) (str.to.re "")) (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.++ (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re ""))) (str.to.re ""))) (str.to.re "")) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "1") (re.++ (str.to.re "8") (re.++ (str.to.re "1") (re.++ (str.to.re ";") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "p")) (str.to.re "")) (re.++ (str.to.re "s") (str.to.re "d"))))))))))))))))))))))) re.all)))) (str.to.re "\x00"))))
;match[1]!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.union (re.++ (str.to.re "a") (re.++ (str.to.re "t") (re.++ (str.to.re "u") (re.++ (str.to.re "v") (re.++ (str.to.re "w") (re.++ (str.to.re "d") (re.++ (str.to.re "x") (re.++ (str.to.re "y") (re.++ (str.to.re "z") (re.++ (str.to.re "a") (str.to.re "d"))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "b") (re.++ (str.to.re "c") (re.++ (str.to.re "e") (re.++ (str.to.re "f") (re.++ (str.to.re "d") (re.++ (str.to.re "g") (re.++ (str.to.re "h") (re.++ (str.to.re "i") (re.++ (str.to.re "j") (str.to.re "d")))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "l") (re.++ (str.to.re "m") (re.++ (str.to.re "n") (re.++ (str.to.re "o") (re.++ (str.to.re "d") (re.++ (str.to.re "p") (re.++ (str.to.re "q") (re.++ (str.to.re "r") (re.++ (str.to.re "s") (str.to.re "d")))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "2") (re.++ (str.to.re "2") (re.++ (str.to.re "3") (re.++ (re.union (re.++ (str.to.re "") (str.to.re ";")) (str.to.re "")) (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.++ (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re ""))) (str.to.re ""))) (str.to.re "")) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "1") (re.++ (str.to.re "8") (re.++ (str.to.re "1") (re.++ (str.to.re ";") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "p")) (str.to.re "")) (re.++ (str.to.re "s") (str.to.re "d")))))))))))))))))))))) (re.++ (re.* ((_ re.capture 2) (re.union (re.union (re.union (re.++ (str.to.re "k") (re.++ (str.to.re "t") (re.++ (str.to.re "u") (re.++ (str.to.re "v") (re.++ (str.to.re "w") (re.++ (str.to.re "d") (re.++ (str.to.re "x") (re.++ (str.to.re "y") (re.++ (str.to.re "z") (re.++ (str.to.re "a") (str.to.re "d"))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "b") (re.++ (str.to.re "c") (re.++ (str.to.re "e") (re.++ (str.to.re "f") (re.++ (str.to.re "d") (re.++ (str.to.re "g") (re.++ (str.to.re "h") (re.++ (str.to.re "i") (re.++ (str.to.re "j") (str.to.re "d")))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "l") (re.++ (str.to.re "m") (re.++ (str.to.re "n") (re.++ (str.to.re "o") (re.++ (str.to.re "d") (re.++ (str.to.re "p") (re.++ (str.to.re "q") (re.++ (str.to.re "r") (re.++ (str.to.re "s") (str.to.re "d")))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "2") (re.++ (str.to.re "2") (re.++ (str.to.re "3") (re.++ (re.union (re.++ (str.to.re "") (str.to.re ";")) (str.to.re "")) (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.++ (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re ""))) (str.to.re ""))) (str.to.re "")) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "1") (re.++ (str.to.re "8") (re.++ (str.to.re "1") (re.++ (str.to.re ";") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "p")) (str.to.re "")) (re.++ (str.to.re "s") (str.to.re "d"))))))))))))))))))))))) re.all)))) (re.++ re.all(re.+ (re.range "a" "z")) re.all) ))
;/[a-z]+/.test(match[1]) == true
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.union (re.++ (str.to.re "a") (re.++ (str.to.re "t") (re.++ (str.to.re "u") (re.++ (str.to.re "v") (re.++ (str.to.re "w") (re.++ (str.to.re "d") (re.++ (str.to.re "x") (re.++ (str.to.re "y") (re.++ (str.to.re "z") (re.++ (str.to.re "a") (str.to.re "d"))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "b") (re.++ (str.to.re "c") (re.++ (str.to.re "e") (re.++ (str.to.re "f") (re.++ (str.to.re "d") (re.++ (str.to.re "g") (re.++ (str.to.re "h") (re.++ (str.to.re "i") (re.++ (str.to.re "j") (str.to.re "d")))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "l") (re.++ (str.to.re "m") (re.++ (str.to.re "n") (re.++ (str.to.re "o") (re.++ (str.to.re "d") (re.++ (str.to.re "p") (re.++ (str.to.re "q") (re.++ (str.to.re "r") (re.++ (str.to.re "s") (str.to.re "d")))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "2") (re.++ (str.to.re "2") (re.++ (str.to.re "3") (re.++ (re.union (re.++ (str.to.re "") (str.to.re ";")) (str.to.re "")) (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.++ (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re ""))) (str.to.re ""))) (str.to.re "")) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "1") (re.++ (str.to.re "8") (re.++ (str.to.re "1") (re.++ (str.to.re ";") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "p")) (str.to.re "")) (re.++ (str.to.re "s") (str.to.re "d")))))))))))))))))))))) (re.++ (re.* ((_ re.capture 2) (re.union (re.union (re.union (re.++ (str.to.re "k") (re.++ (str.to.re "t") (re.++ (str.to.re "u") (re.++ (str.to.re "v") (re.++ (str.to.re "w") (re.++ (str.to.re "d") (re.++ (str.to.re "x") (re.++ (str.to.re "y") (re.++ (str.to.re "z") (re.++ (str.to.re "a") (str.to.re "d"))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "b") (re.++ (str.to.re "c") (re.++ (str.to.re "e") (re.++ (str.to.re "f") (re.++ (str.to.re "d") (re.++ (str.to.re "g") (re.++ (str.to.re "h") (re.++ (str.to.re "i") (re.++ (str.to.re "j") (str.to.re "d")))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "l") (re.++ (str.to.re "m") (re.++ (str.to.re "n") (re.++ (str.to.re "o") (re.++ (str.to.re "d") (re.++ (str.to.re "p") (re.++ (str.to.re "q") (re.++ (str.to.re "r") (re.++ (str.to.re "s") (str.to.re "d")))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "2") (re.++ (str.to.re "2") (re.++ (str.to.re "3") (re.++ (re.union (re.++ (str.to.re "") (str.to.re ";")) (str.to.re "")) (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.++ (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re ""))) (str.to.re ""))) (str.to.re "")) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "1") (re.++ (str.to.re "8") (re.++ (str.to.re "1") (re.++ (str.to.re ";") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "p")) (str.to.re "")) (re.++ (str.to.re "s") (str.to.re "d"))))))))))))))))))))))) re.all)))))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.union (re.++ (str.to.re "a") (re.++ (str.to.re "t") (re.++ (str.to.re "u") (re.++ (str.to.re "v") (re.++ (str.to.re "w") (re.++ (str.to.re "d") (re.++ (str.to.re "x") (re.++ (str.to.re "y") (re.++ (str.to.re "z") (re.++ (str.to.re "a") (str.to.re "d"))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "b") (re.++ (str.to.re "c") (re.++ (str.to.re "e") (re.++ (str.to.re "f") (re.++ (str.to.re "d") (re.++ (str.to.re "g") (re.++ (str.to.re "h") (re.++ (str.to.re "i") (re.++ (str.to.re "j") (str.to.re "d")))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "l") (re.++ (str.to.re "m") (re.++ (str.to.re "n") (re.++ (str.to.re "o") (re.++ (str.to.re "d") (re.++ (str.to.re "p") (re.++ (str.to.re "q") (re.++ (str.to.re "r") (re.++ (str.to.re "s") (str.to.re "d")))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "2") (re.++ (str.to.re "2") (re.++ (str.to.re "3") (re.++ (re.union (re.++ (str.to.re "") (str.to.re ";")) (str.to.re "")) (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.++ (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re ""))) (str.to.re ""))) (str.to.re "")) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "1") (re.++ (str.to.re "8") (re.++ (str.to.re "1") (re.++ (str.to.re ";") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "p")) (str.to.re "")) (re.++ (str.to.re "s") (str.to.re "d")))))))))))))))))))))) (re.++ (re.* ((_ re.capture 2) (re.union (re.union (re.union (re.++ (str.to.re "k") (re.++ (str.to.re "t") (re.++ (str.to.re "u") (re.++ (str.to.re "v") (re.++ (str.to.re "w") (re.++ (str.to.re "d") (re.++ (str.to.re "x") (re.++ (str.to.re "y") (re.++ (str.to.re "z") (re.++ (str.to.re "a") (str.to.re "d"))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "b") (re.++ (str.to.re "c") (re.++ (str.to.re "e") (re.++ (str.to.re "f") (re.++ (str.to.re "d") (re.++ (str.to.re "g") (re.++ (str.to.re "h") (re.++ (str.to.re "i") (re.++ (str.to.re "j") (str.to.re "d")))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "l") (re.++ (str.to.re "m") (re.++ (str.to.re "n") (re.++ (str.to.re "o") (re.++ (str.to.re "d") (re.++ (str.to.re "p") (re.++ (str.to.re "q") (re.++ (str.to.re "r") (re.++ (str.to.re "s") (str.to.re "d")))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "2") (re.++ (str.to.re "2") (re.++ (str.to.re "3") (re.++ (re.union (re.++ (str.to.re "") (str.to.re ";")) (str.to.re "")) (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.++ (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re ""))) (str.to.re ""))) (str.to.re "")) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "1") (re.++ (str.to.re "8") (re.++ (str.to.re "1") (re.++ (str.to.re ";") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "p")) (str.to.re "")) (re.++ (str.to.re "s") (str.to.re "d"))))))))))))))))))))))) re.all)))) (str.to.re "\x00"))))	
;match[1]!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.union (re.++ (str.to.re "a") (re.++ (str.to.re "t") (re.++ (str.to.re "u") (re.++ (str.to.re "v") (re.++ (str.to.re "w") (re.++ (str.to.re "d") (re.++ (str.to.re "x") (re.++ (str.to.re "y") (re.++ (str.to.re "z") (re.++ (str.to.re "a") (str.to.re "d"))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "b") (re.++ (str.to.re "c") (re.++ (str.to.re "e") (re.++ (str.to.re "f") (re.++ (str.to.re "d") (re.++ (str.to.re "g") (re.++ (str.to.re "h") (re.++ (str.to.re "i") (re.++ (str.to.re "j") (str.to.re "d")))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "l") (re.++ (str.to.re "m") (re.++ (str.to.re "n") (re.++ (str.to.re "o") (re.++ (str.to.re "d") (re.++ (str.to.re "p") (re.++ (str.to.re "q") (re.++ (str.to.re "r") (re.++ (str.to.re "s") (str.to.re "d")))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "2") (re.++ (str.to.re "2") (re.++ (str.to.re "3") (re.++ (re.union (re.++ (str.to.re "") (str.to.re ";")) (str.to.re "")) (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.++ (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re ""))) (str.to.re ""))) (str.to.re "")) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "1") (re.++ (str.to.re "8") (re.++ (str.to.re "1") (re.++ (str.to.re ";") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "p")) (str.to.re "")) (re.++ (str.to.re "s") (str.to.re "d")))))))))))))))))))))) (re.++ (re.* ((_ re.capture 2) (re.union (re.union (re.union (re.++ (str.to.re "k") (re.++ (str.to.re "t") (re.++ (str.to.re "u") (re.++ (str.to.re "v") (re.++ (str.to.re "w") (re.++ (str.to.re "d") (re.++ (str.to.re "x") (re.++ (str.to.re "y") (re.++ (str.to.re "z") (re.++ (str.to.re "a") (str.to.re "d"))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "b") (re.++ (str.to.re "c") (re.++ (str.to.re "e") (re.++ (str.to.re "f") (re.++ (str.to.re "d") (re.++ (str.to.re "g") (re.++ (str.to.re "h") (re.++ (str.to.re "i") (re.++ (str.to.re "j") (str.to.re "d")))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "l") (re.++ (str.to.re "m") (re.++ (str.to.re "n") (re.++ (str.to.re "o") (re.++ (str.to.re "d") (re.++ (str.to.re "p") (re.++ (str.to.re "q") (re.++ (str.to.re "r") (re.++ (str.to.re "s") (str.to.re "d")))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "2") (re.++ (str.to.re "2") (re.++ (str.to.re "3") (re.++ (re.union (re.++ (str.to.re "") (str.to.re ";")) (str.to.re "")) (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.++ (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re ""))) (str.to.re ""))) (str.to.re "")) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "1") (re.++ (str.to.re "8") (re.++ (str.to.re "1") (re.++ (str.to.re ";") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "p")) (str.to.re "")) (re.++ (str.to.re "s") (str.to.re "d"))))))))))))))))))))))) re.all)))) (re.++ re.all(re.+ (re.range "a" "z")) re.all) )))
;/[a-z]+/.test(match[1]) == false	
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.union (re.++ (str.to.re "a") (re.++ (str.to.re "t") (re.++ (str.to.re "u") (re.++ (str.to.re "v") (re.++ (str.to.re "w") (re.++ (str.to.re "d") (re.++ (str.to.re "x") (re.++ (str.to.re "y") (re.++ (str.to.re "z") (re.++ (str.to.re "a") (str.to.re "d"))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "b") (re.++ (str.to.re "c") (re.++ (str.to.re "e") (re.++ (str.to.re "f") (re.++ (str.to.re "d") (re.++ (str.to.re "g") (re.++ (str.to.re "h") (re.++ (str.to.re "i") (re.++ (str.to.re "j") (str.to.re "d")))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "l") (re.++ (str.to.re "m") (re.++ (str.to.re "n") (re.++ (str.to.re "o") (re.++ (str.to.re "d") (re.++ (str.to.re "p") (re.++ (str.to.re "q") (re.++ (str.to.re "r") (re.++ (str.to.re "s") (str.to.re "d")))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "2") (re.++ (str.to.re "2") (re.++ (str.to.re "3") (re.++ (re.union (re.++ (str.to.re "") (str.to.re ";")) (str.to.re "")) (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.++ (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re ""))) (str.to.re ""))) (str.to.re "")) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "1") (re.++ (str.to.re "8") (re.++ (str.to.re "1") (re.++ (str.to.re ";") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "p")) (str.to.re "")) (re.++ (str.to.re "s") (str.to.re "d")))))))))))))))))))))) (re.++ (re.* ((_ re.capture 2) (re.union (re.union (re.union (re.++ (str.to.re "k") (re.++ (str.to.re "t") (re.++ (str.to.re "u") (re.++ (str.to.re "v") (re.++ (str.to.re "w") (re.++ (str.to.re "d") (re.++ (str.to.re "x") (re.++ (str.to.re "y") (re.++ (str.to.re "z") (re.++ (str.to.re "a") (str.to.re "d"))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "b") (re.++ (str.to.re "c") (re.++ (str.to.re "e") (re.++ (str.to.re "f") (re.++ (str.to.re "d") (re.++ (str.to.re "g") (re.++ (str.to.re "h") (re.++ (str.to.re "i") (re.++ (str.to.re "j") (str.to.re "d")))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "l") (re.++ (str.to.re "m") (re.++ (str.to.re "n") (re.++ (str.to.re "o") (re.++ (str.to.re "d") (re.++ (str.to.re "p") (re.++ (str.to.re "q") (re.++ (str.to.re "r") (re.++ (str.to.re "s") (str.to.re "d")))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "2") (re.++ (str.to.re "2") (re.++ (str.to.re "3") (re.++ (re.union (re.++ (str.to.re "") (str.to.re ";")) (str.to.re "")) (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.++ (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re ""))) (str.to.re ""))) (str.to.re "")) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "1") (re.++ (str.to.re "8") (re.++ (str.to.re "1") (re.++ (str.to.re ";") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "p")) (str.to.re "")) (re.++ (str.to.re "s") (str.to.re "d"))))))))))))))))))))))) re.all)))))	; match!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.union (re.++ (str.to.re "a") (re.++ (str.to.re "t") (re.++ (str.to.re "u") (re.++ (str.to.re "v") (re.++ (str.to.re "w") (re.++ (str.to.re "d") (re.++ (str.to.re "x") (re.++ (str.to.re "y") (re.++ (str.to.re "z") (re.++ (str.to.re "a") (str.to.re "d"))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "b") (re.++ (str.to.re "c") (re.++ (str.to.re "e") (re.++ (str.to.re "f") (re.++ (str.to.re "d") (re.++ (str.to.re "g") (re.++ (str.to.re "h") (re.++ (str.to.re "i") (re.++ (str.to.re "j") (str.to.re "d")))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "l") (re.++ (str.to.re "m") (re.++ (str.to.re "n") (re.++ (str.to.re "o") (re.++ (str.to.re "d") (re.++ (str.to.re "p") (re.++ (str.to.re "q") (re.++ (str.to.re "r") (re.++ (str.to.re "s") (str.to.re "d")))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "2") (re.++ (str.to.re "2") (re.++ (str.to.re "3") (re.++ (re.union (re.++ (str.to.re "") (str.to.re ";")) (str.to.re "")) (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.++ (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re ""))) (str.to.re ""))) (str.to.re "")) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "1") (re.++ (str.to.re "8") (re.++ (str.to.re "1") (re.++ (str.to.re ";") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "p")) (str.to.re "")) (re.++ (str.to.re "s") (str.to.re "d")))))))))))))))))))))) (re.++ (re.* ((_ re.capture 2) (re.union (re.union (re.union (re.++ (str.to.re "k") (re.++ (str.to.re "t") (re.++ (str.to.re "u") (re.++ (str.to.re "v") (re.++ (str.to.re "w") (re.++ (str.to.re "d") (re.++ (str.to.re "x") (re.++ (str.to.re "y") (re.++ (str.to.re "z") (re.++ (str.to.re "a") (str.to.re "d"))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "b") (re.++ (str.to.re "c") (re.++ (str.to.re "e") (re.++ (str.to.re "f") (re.++ (str.to.re "d") (re.++ (str.to.re "g") (re.++ (str.to.re "h") (re.++ (str.to.re "i") (re.++ (str.to.re "j") (str.to.re "d")))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "l") (re.++ (str.to.re "m") (re.++ (str.to.re "n") (re.++ (str.to.re "o") (re.++ (str.to.re "d") (re.++ (str.to.re "p") (re.++ (str.to.re "q") (re.++ (str.to.re "r") (re.++ (str.to.re "s") (str.to.re "d")))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "2") (re.++ (str.to.re "2") (re.++ (str.to.re "3") (re.++ (re.union (re.++ (str.to.re "") (str.to.re ";")) (str.to.re "")) (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.++ (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re ""))) (str.to.re ""))) (str.to.re "")) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "1") (re.++ (str.to.re "8") (re.++ (str.to.re "1") (re.++ (str.to.re ";") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "p")) (str.to.re "")) (re.++ (str.to.re "s") (str.to.re "d"))))))))))))))))))))))) re.all)))) (str.to.re "\x00")))
;match[1]==null
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (not (str.in.re var0 (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.union (re.++ (str.to.re "a") (re.++ (str.to.re "t") (re.++ (str.to.re "u") (re.++ (str.to.re "v") (re.++ (str.to.re "w") (re.++ (str.to.re "d") (re.++ (str.to.re "x") (re.++ (str.to.re "y") (re.++ (str.to.re "z") (re.++ (str.to.re "a") (str.to.re "d"))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "b") (re.++ (str.to.re "c") (re.++ (str.to.re "e") (re.++ (str.to.re "f") (re.++ (str.to.re "d") (re.++ (str.to.re "g") (re.++ (str.to.re "h") (re.++ (str.to.re "i") (re.++ (str.to.re "j") (str.to.re "d")))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "l") (re.++ (str.to.re "m") (re.++ (str.to.re "n") (re.++ (str.to.re "o") (re.++ (str.to.re "d") (re.++ (str.to.re "p") (re.++ (str.to.re "q") (re.++ (str.to.re "r") (re.++ (str.to.re "s") (str.to.re "d")))))))))))) (re.++ (str.to.re "a") (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "2") (re.++ (str.to.re "2") (re.++ (str.to.re "3") (re.++ (re.union (re.++ (str.to.re "") (str.to.re ";")) (str.to.re "")) (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.++ (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re ""))) (str.to.re ""))) (str.to.re "")) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "1") (re.++ (str.to.re "8") (re.++ (str.to.re "1") (re.++ (str.to.re ";") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "p")) (str.to.re "")) (re.++ (str.to.re "s") (str.to.re "d")))))))))))))))))))))) (re.++ (re.* ((_ re.capture 2) (re.union (re.union (re.union (re.++ (str.to.re "k") (re.++ (str.to.re "t") (re.++ (str.to.re "u") (re.++ (str.to.re "v") (re.++ (str.to.re "w") (re.++ (str.to.re "d") (re.++ (str.to.re "x") (re.++ (str.to.re "y") (re.++ (str.to.re "z") (re.++ (str.to.re "a") (str.to.re "d"))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "b") (re.++ (str.to.re "c") (re.++ (str.to.re "e") (re.++ (str.to.re "f") (re.++ (str.to.re "d") (re.++ (str.to.re "g") (re.++ (str.to.re "h") (re.++ (str.to.re "i") (re.++ (str.to.re "j") (str.to.re "d")))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "l") (re.++ (str.to.re "m") (re.++ (str.to.re "n") (re.++ (str.to.re "o") (re.++ (str.to.re "d") (re.++ (str.to.re "p") (re.++ (str.to.re "q") (re.++ (str.to.re "r") (re.++ (str.to.re "s") (str.to.re "d")))))))))))) (re.++ (str.to.re "k") (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "2") (re.++ (str.to.re "2") (re.++ (str.to.re "3") (re.++ (re.union (re.++ (str.to.re "") (str.to.re ";")) (str.to.re "")) (re.++ (str.to.re "d") (re.++ (str.to.re "e") (re.++ (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re ""))) (str.to.re ""))) (str.to.re "")) (re.++ (str.to.re "&") (re.++ (str.to.re "#") (re.++ (str.to.re "1") (re.++ (str.to.re "8") (re.++ (str.to.re "1") (re.++ (str.to.re ";") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "d")) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "p")) (str.to.re "")) (re.++ (str.to.re "s") (str.to.re "d"))))))))))))))))))))))) re.all))))))	; match == null
(check-sat)
(get-model)
(pop 1)
(exit)