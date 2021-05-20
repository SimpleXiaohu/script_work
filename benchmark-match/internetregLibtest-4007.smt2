
(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)

(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.*? re.allchar) (re.++ (re.++ ((_ re.capture 1) (re.* (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.range "1" "9"))))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.union (re.union (re.union (re.union (re.union (re.union (re.union ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (str.to.re "a") (str.to.re "A"))) (re.++ ((_ re.capture 5) (re.union (str.to.re "s") (str.to.re "S"))) (re.++ ((_ re.capture 6) (re.union (str.to.re "p") (str.to.re "P"))) ((_ re.capture 7) (re.union (str.to.re "x") (str.to.re "X"))))))) ((_ re.capture 8) (re.++ ((_ re.capture 9) (re.union (str.to.re "h") (str.to.re "H"))) (re.++ ((_ re.capture 10) (re.union (str.to.re "T") (str.to.re "t"))) (re.++ ((_ re.capture 11) (re.union (str.to.re "m") (str.to.re "M"))) ((_ re.capture 12) (re.union (str.to.re "l") (str.to.re "L")))))))) ((_ re.capture 13) (re.++ ((_ re.capture 14) (re.union (str.to.re "h") (str.to.re "H"))) (re.++ ((_ re.capture 15) (re.union (str.to.re "t") (str.to.re "T"))) ((_ re.capture 16) (re.union (str.to.re "M") (str.to.re "m"))))))) ((_ re.capture 17) (re.++ ((_ re.capture 18) (re.union (str.to.re "a") (str.to.re "A"))) (re.++ ((_ re.capture 19) (re.union (str.to.re "s") (str.to.re "S"))) ((_ re.capture 20) (re.union (str.to.re "p") (str.to.re "P"))))))) ((_ re.capture 21) (re.++ ((_ re.capture 22) (re.union (str.to.re "t") (str.to.re "T"))) (re.++ ((_ re.capture 23) (re.union (str.to.re "x") (str.to.re "X"))) ((_ re.capture 24) (re.union (str.to.re "T") (str.to.re "x"))))))) ((_ re.capture 25) (re.++ ((_ re.capture 26) (re.union (str.to.re "m") (str.to.re "M"))) (re.++ ((_ re.capture 27) (re.union (str.to.re "S") (str.to.re "s"))) (re.++ ((_ re.capture 28) (re.union (str.to.re "P") (str.to.re "p"))) ((_ re.capture 29) (re.union (str.to.re "x") (str.to.re "X")))))))) ((_ re.capture 30) (re.++ ((_ re.capture 31) (re.union (str.to.re "g") (str.to.re "G"))) (re.++ ((_ re.capture 32) (re.union (str.to.re "i") (str.to.re "I"))) ((_ re.capture 33) (re.union (str.to.re "F") (str.to.re "f"))))))) ((_ re.capture 34) (re.++ ((_ re.capture 35) (re.union (str.to.re "d") (str.to.re "D"))) (re.++ ((_ re.capture 36) (re.union (str.to.re "o") (str.to.re "O"))) ((_ re.capture 37) (re.union (str.to.re "c") (str.to.re "C")))))))))) re.all))))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.++ ((_ re.capture 1) (re.* (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.range "1" "9"))))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.union (re.union (re.union (re.union (re.union (re.union (re.union ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (str.to.re "a") (str.to.re "A"))) (re.++ ((_ re.capture 5) (re.union (str.to.re "s") (str.to.re "S"))) (re.++ ((_ re.capture 6) (re.union (str.to.re "p") (str.to.re "P"))) ((_ re.capture 7) (re.union (str.to.re "x") (str.to.re "X"))))))) ((_ re.capture 8) (re.++ ((_ re.capture 9) (re.union (str.to.re "h") (str.to.re "H"))) (re.++ ((_ re.capture 10) (re.union (str.to.re "T") (str.to.re "t"))) (re.++ ((_ re.capture 11) (re.union (str.to.re "m") (str.to.re "M"))) ((_ re.capture 12) (re.union (str.to.re "l") (str.to.re "L")))))))) ((_ re.capture 13) (re.++ ((_ re.capture 14) (re.union (str.to.re "h") (str.to.re "H"))) (re.++ ((_ re.capture 15) (re.union (str.to.re "t") (str.to.re "T"))) ((_ re.capture 16) (re.union (str.to.re "M") (str.to.re "m"))))))) ((_ re.capture 17) (re.++ ((_ re.capture 18) (re.union (str.to.re "a") (str.to.re "A"))) (re.++ ((_ re.capture 19) (re.union (str.to.re "s") (str.to.re "S"))) ((_ re.capture 20) (re.union (str.to.re "p") (str.to.re "P"))))))) ((_ re.capture 21) (re.++ ((_ re.capture 22) (re.union (str.to.re "t") (str.to.re "T"))) (re.++ ((_ re.capture 23) (re.union (str.to.re "x") (str.to.re "X"))) ((_ re.capture 24) (re.union (str.to.re "T") (str.to.re "x"))))))) ((_ re.capture 25) (re.++ ((_ re.capture 26) (re.union (str.to.re "m") (str.to.re "M"))) (re.++ ((_ re.capture 27) (re.union (str.to.re "S") (str.to.re "s"))) (re.++ ((_ re.capture 28) (re.union (str.to.re "P") (str.to.re "p"))) ((_ re.capture 29) (re.union (str.to.re "x") (str.to.re "X")))))))) ((_ re.capture 30) (re.++ ((_ re.capture 31) (re.union (str.to.re "g") (str.to.re "G"))) (re.++ ((_ re.capture 32) (re.union (str.to.re "i") (str.to.re "I"))) ((_ re.capture 33) (re.union (str.to.re "F") (str.to.re "f"))))))) ((_ re.capture 34) (re.++ ((_ re.capture 35) (re.union (str.to.re "d") (str.to.re "D"))) (re.++ ((_ re.capture 36) (re.union (str.to.re "o") (str.to.re "O"))) ((_ re.capture 37) (re.union (str.to.re "c") (str.to.re "C")))))))))) re.all))) (str.to.re "\x00"))))
;match[1]!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.++ ((_ re.capture 1) (re.* (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.range "1" "9"))))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.union (re.union (re.union (re.union (re.union (re.union (re.union ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (str.to.re "a") (str.to.re "A"))) (re.++ ((_ re.capture 5) (re.union (str.to.re "s") (str.to.re "S"))) (re.++ ((_ re.capture 6) (re.union (str.to.re "p") (str.to.re "P"))) ((_ re.capture 7) (re.union (str.to.re "x") (str.to.re "X"))))))) ((_ re.capture 8) (re.++ ((_ re.capture 9) (re.union (str.to.re "h") (str.to.re "H"))) (re.++ ((_ re.capture 10) (re.union (str.to.re "T") (str.to.re "t"))) (re.++ ((_ re.capture 11) (re.union (str.to.re "m") (str.to.re "M"))) ((_ re.capture 12) (re.union (str.to.re "l") (str.to.re "L")))))))) ((_ re.capture 13) (re.++ ((_ re.capture 14) (re.union (str.to.re "h") (str.to.re "H"))) (re.++ ((_ re.capture 15) (re.union (str.to.re "t") (str.to.re "T"))) ((_ re.capture 16) (re.union (str.to.re "M") (str.to.re "m"))))))) ((_ re.capture 17) (re.++ ((_ re.capture 18) (re.union (str.to.re "a") (str.to.re "A"))) (re.++ ((_ re.capture 19) (re.union (str.to.re "s") (str.to.re "S"))) ((_ re.capture 20) (re.union (str.to.re "p") (str.to.re "P"))))))) ((_ re.capture 21) (re.++ ((_ re.capture 22) (re.union (str.to.re "t") (str.to.re "T"))) (re.++ ((_ re.capture 23) (re.union (str.to.re "x") (str.to.re "X"))) ((_ re.capture 24) (re.union (str.to.re "T") (str.to.re "x"))))))) ((_ re.capture 25) (re.++ ((_ re.capture 26) (re.union (str.to.re "m") (str.to.re "M"))) (re.++ ((_ re.capture 27) (re.union (str.to.re "S") (str.to.re "s"))) (re.++ ((_ re.capture 28) (re.union (str.to.re "P") (str.to.re "p"))) ((_ re.capture 29) (re.union (str.to.re "x") (str.to.re "X")))))))) ((_ re.capture 30) (re.++ ((_ re.capture 31) (re.union (str.to.re "g") (str.to.re "G"))) (re.++ ((_ re.capture 32) (re.union (str.to.re "i") (str.to.re "I"))) ((_ re.capture 33) (re.union (str.to.re "F") (str.to.re "f"))))))) ((_ re.capture 34) (re.++ ((_ re.capture 35) (re.union (str.to.re "d") (str.to.re "D"))) (re.++ ((_ re.capture 36) (re.union (str.to.re "o") (str.to.re "O"))) ((_ re.capture 37) (re.union (str.to.re "c") (str.to.re "C")))))))))) re.all))) (re.++ re.all(re.+ (re.range "a" "z")) re.all) ))
;/[a-z]+/.test(match[1]) == true
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.*? re.allchar) (re.++ (re.++ ((_ re.capture 1) (re.* (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.range "1" "9"))))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.union (re.union (re.union (re.union (re.union (re.union (re.union ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (str.to.re "a") (str.to.re "A"))) (re.++ ((_ re.capture 5) (re.union (str.to.re "s") (str.to.re "S"))) (re.++ ((_ re.capture 6) (re.union (str.to.re "p") (str.to.re "P"))) ((_ re.capture 7) (re.union (str.to.re "x") (str.to.re "X"))))))) ((_ re.capture 8) (re.++ ((_ re.capture 9) (re.union (str.to.re "h") (str.to.re "H"))) (re.++ ((_ re.capture 10) (re.union (str.to.re "T") (str.to.re "t"))) (re.++ ((_ re.capture 11) (re.union (str.to.re "m") (str.to.re "M"))) ((_ re.capture 12) (re.union (str.to.re "l") (str.to.re "L")))))))) ((_ re.capture 13) (re.++ ((_ re.capture 14) (re.union (str.to.re "h") (str.to.re "H"))) (re.++ ((_ re.capture 15) (re.union (str.to.re "t") (str.to.re "T"))) ((_ re.capture 16) (re.union (str.to.re "M") (str.to.re "m"))))))) ((_ re.capture 17) (re.++ ((_ re.capture 18) (re.union (str.to.re "a") (str.to.re "A"))) (re.++ ((_ re.capture 19) (re.union (str.to.re "s") (str.to.re "S"))) ((_ re.capture 20) (re.union (str.to.re "p") (str.to.re "P"))))))) ((_ re.capture 21) (re.++ ((_ re.capture 22) (re.union (str.to.re "t") (str.to.re "T"))) (re.++ ((_ re.capture 23) (re.union (str.to.re "x") (str.to.re "X"))) ((_ re.capture 24) (re.union (str.to.re "T") (str.to.re "x"))))))) ((_ re.capture 25) (re.++ ((_ re.capture 26) (re.union (str.to.re "m") (str.to.re "M"))) (re.++ ((_ re.capture 27) (re.union (str.to.re "S") (str.to.re "s"))) (re.++ ((_ re.capture 28) (re.union (str.to.re "P") (str.to.re "p"))) ((_ re.capture 29) (re.union (str.to.re "x") (str.to.re "X")))))))) ((_ re.capture 30) (re.++ ((_ re.capture 31) (re.union (str.to.re "g") (str.to.re "G"))) (re.++ ((_ re.capture 32) (re.union (str.to.re "i") (str.to.re "I"))) ((_ re.capture 33) (re.union (str.to.re "F") (str.to.re "f"))))))) ((_ re.capture 34) (re.++ ((_ re.capture 35) (re.union (str.to.re "d") (str.to.re "D"))) (re.++ ((_ re.capture 36) (re.union (str.to.re "o") (str.to.re "O"))) ((_ re.capture 37) (re.union (str.to.re "c") (str.to.re "C")))))))))) re.all))))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.++ ((_ re.capture 1) (re.* (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.range "1" "9"))))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.union (re.union (re.union (re.union (re.union (re.union (re.union ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (str.to.re "a") (str.to.re "A"))) (re.++ ((_ re.capture 5) (re.union (str.to.re "s") (str.to.re "S"))) (re.++ ((_ re.capture 6) (re.union (str.to.re "p") (str.to.re "P"))) ((_ re.capture 7) (re.union (str.to.re "x") (str.to.re "X"))))))) ((_ re.capture 8) (re.++ ((_ re.capture 9) (re.union (str.to.re "h") (str.to.re "H"))) (re.++ ((_ re.capture 10) (re.union (str.to.re "T") (str.to.re "t"))) (re.++ ((_ re.capture 11) (re.union (str.to.re "m") (str.to.re "M"))) ((_ re.capture 12) (re.union (str.to.re "l") (str.to.re "L")))))))) ((_ re.capture 13) (re.++ ((_ re.capture 14) (re.union (str.to.re "h") (str.to.re "H"))) (re.++ ((_ re.capture 15) (re.union (str.to.re "t") (str.to.re "T"))) ((_ re.capture 16) (re.union (str.to.re "M") (str.to.re "m"))))))) ((_ re.capture 17) (re.++ ((_ re.capture 18) (re.union (str.to.re "a") (str.to.re "A"))) (re.++ ((_ re.capture 19) (re.union (str.to.re "s") (str.to.re "S"))) ((_ re.capture 20) (re.union (str.to.re "p") (str.to.re "P"))))))) ((_ re.capture 21) (re.++ ((_ re.capture 22) (re.union (str.to.re "t") (str.to.re "T"))) (re.++ ((_ re.capture 23) (re.union (str.to.re "x") (str.to.re "X"))) ((_ re.capture 24) (re.union (str.to.re "T") (str.to.re "x"))))))) ((_ re.capture 25) (re.++ ((_ re.capture 26) (re.union (str.to.re "m") (str.to.re "M"))) (re.++ ((_ re.capture 27) (re.union (str.to.re "S") (str.to.re "s"))) (re.++ ((_ re.capture 28) (re.union (str.to.re "P") (str.to.re "p"))) ((_ re.capture 29) (re.union (str.to.re "x") (str.to.re "X")))))))) ((_ re.capture 30) (re.++ ((_ re.capture 31) (re.union (str.to.re "g") (str.to.re "G"))) (re.++ ((_ re.capture 32) (re.union (str.to.re "i") (str.to.re "I"))) ((_ re.capture 33) (re.union (str.to.re "F") (str.to.re "f"))))))) ((_ re.capture 34) (re.++ ((_ re.capture 35) (re.union (str.to.re "d") (str.to.re "D"))) (re.++ ((_ re.capture 36) (re.union (str.to.re "o") (str.to.re "O"))) ((_ re.capture 37) (re.union (str.to.re "c") (str.to.re "C")))))))))) re.all))) (str.to.re "\x00"))))	
;match[1]!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.++ ((_ re.capture 1) (re.* (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.range "1" "9"))))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.union (re.union (re.union (re.union (re.union (re.union (re.union ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (str.to.re "a") (str.to.re "A"))) (re.++ ((_ re.capture 5) (re.union (str.to.re "s") (str.to.re "S"))) (re.++ ((_ re.capture 6) (re.union (str.to.re "p") (str.to.re "P"))) ((_ re.capture 7) (re.union (str.to.re "x") (str.to.re "X"))))))) ((_ re.capture 8) (re.++ ((_ re.capture 9) (re.union (str.to.re "h") (str.to.re "H"))) (re.++ ((_ re.capture 10) (re.union (str.to.re "T") (str.to.re "t"))) (re.++ ((_ re.capture 11) (re.union (str.to.re "m") (str.to.re "M"))) ((_ re.capture 12) (re.union (str.to.re "l") (str.to.re "L")))))))) ((_ re.capture 13) (re.++ ((_ re.capture 14) (re.union (str.to.re "h") (str.to.re "H"))) (re.++ ((_ re.capture 15) (re.union (str.to.re "t") (str.to.re "T"))) ((_ re.capture 16) (re.union (str.to.re "M") (str.to.re "m"))))))) ((_ re.capture 17) (re.++ ((_ re.capture 18) (re.union (str.to.re "a") (str.to.re "A"))) (re.++ ((_ re.capture 19) (re.union (str.to.re "s") (str.to.re "S"))) ((_ re.capture 20) (re.union (str.to.re "p") (str.to.re "P"))))))) ((_ re.capture 21) (re.++ ((_ re.capture 22) (re.union (str.to.re "t") (str.to.re "T"))) (re.++ ((_ re.capture 23) (re.union (str.to.re "x") (str.to.re "X"))) ((_ re.capture 24) (re.union (str.to.re "T") (str.to.re "x"))))))) ((_ re.capture 25) (re.++ ((_ re.capture 26) (re.union (str.to.re "m") (str.to.re "M"))) (re.++ ((_ re.capture 27) (re.union (str.to.re "S") (str.to.re "s"))) (re.++ ((_ re.capture 28) (re.union (str.to.re "P") (str.to.re "p"))) ((_ re.capture 29) (re.union (str.to.re "x") (str.to.re "X")))))))) ((_ re.capture 30) (re.++ ((_ re.capture 31) (re.union (str.to.re "g") (str.to.re "G"))) (re.++ ((_ re.capture 32) (re.union (str.to.re "i") (str.to.re "I"))) ((_ re.capture 33) (re.union (str.to.re "F") (str.to.re "f"))))))) ((_ re.capture 34) (re.++ ((_ re.capture 35) (re.union (str.to.re "d") (str.to.re "D"))) (re.++ ((_ re.capture 36) (re.union (str.to.re "o") (str.to.re "O"))) ((_ re.capture 37) (re.union (str.to.re "c") (str.to.re "C")))))))))) re.all))) (re.++ re.all(re.+ (re.range "a" "z")) re.all) )))
;/[a-z]+/.test(match[1]) == false	
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.*? re.allchar) (re.++ (re.++ ((_ re.capture 1) (re.* (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.range "1" "9"))))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.union (re.union (re.union (re.union (re.union (re.union (re.union ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (str.to.re "a") (str.to.re "A"))) (re.++ ((_ re.capture 5) (re.union (str.to.re "s") (str.to.re "S"))) (re.++ ((_ re.capture 6) (re.union (str.to.re "p") (str.to.re "P"))) ((_ re.capture 7) (re.union (str.to.re "x") (str.to.re "X"))))))) ((_ re.capture 8) (re.++ ((_ re.capture 9) (re.union (str.to.re "h") (str.to.re "H"))) (re.++ ((_ re.capture 10) (re.union (str.to.re "T") (str.to.re "t"))) (re.++ ((_ re.capture 11) (re.union (str.to.re "m") (str.to.re "M"))) ((_ re.capture 12) (re.union (str.to.re "l") (str.to.re "L")))))))) ((_ re.capture 13) (re.++ ((_ re.capture 14) (re.union (str.to.re "h") (str.to.re "H"))) (re.++ ((_ re.capture 15) (re.union (str.to.re "t") (str.to.re "T"))) ((_ re.capture 16) (re.union (str.to.re "M") (str.to.re "m"))))))) ((_ re.capture 17) (re.++ ((_ re.capture 18) (re.union (str.to.re "a") (str.to.re "A"))) (re.++ ((_ re.capture 19) (re.union (str.to.re "s") (str.to.re "S"))) ((_ re.capture 20) (re.union (str.to.re "p") (str.to.re "P"))))))) ((_ re.capture 21) (re.++ ((_ re.capture 22) (re.union (str.to.re "t") (str.to.re "T"))) (re.++ ((_ re.capture 23) (re.union (str.to.re "x") (str.to.re "X"))) ((_ re.capture 24) (re.union (str.to.re "T") (str.to.re "x"))))))) ((_ re.capture 25) (re.++ ((_ re.capture 26) (re.union (str.to.re "m") (str.to.re "M"))) (re.++ ((_ re.capture 27) (re.union (str.to.re "S") (str.to.re "s"))) (re.++ ((_ re.capture 28) (re.union (str.to.re "P") (str.to.re "p"))) ((_ re.capture 29) (re.union (str.to.re "x") (str.to.re "X")))))))) ((_ re.capture 30) (re.++ ((_ re.capture 31) (re.union (str.to.re "g") (str.to.re "G"))) (re.++ ((_ re.capture 32) (re.union (str.to.re "i") (str.to.re "I"))) ((_ re.capture 33) (re.union (str.to.re "F") (str.to.re "f"))))))) ((_ re.capture 34) (re.++ ((_ re.capture 35) (re.union (str.to.re "d") (str.to.re "D"))) (re.++ ((_ re.capture 36) (re.union (str.to.re "o") (str.to.re "O"))) ((_ re.capture 37) (re.union (str.to.re "c") (str.to.re "C")))))))))) re.all))))	; match!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.++ ((_ re.capture 1) (re.* (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.range "1" "9"))))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.union (re.union (re.union (re.union (re.union (re.union (re.union ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (str.to.re "a") (str.to.re "A"))) (re.++ ((_ re.capture 5) (re.union (str.to.re "s") (str.to.re "S"))) (re.++ ((_ re.capture 6) (re.union (str.to.re "p") (str.to.re "P"))) ((_ re.capture 7) (re.union (str.to.re "x") (str.to.re "X"))))))) ((_ re.capture 8) (re.++ ((_ re.capture 9) (re.union (str.to.re "h") (str.to.re "H"))) (re.++ ((_ re.capture 10) (re.union (str.to.re "T") (str.to.re "t"))) (re.++ ((_ re.capture 11) (re.union (str.to.re "m") (str.to.re "M"))) ((_ re.capture 12) (re.union (str.to.re "l") (str.to.re "L")))))))) ((_ re.capture 13) (re.++ ((_ re.capture 14) (re.union (str.to.re "h") (str.to.re "H"))) (re.++ ((_ re.capture 15) (re.union (str.to.re "t") (str.to.re "T"))) ((_ re.capture 16) (re.union (str.to.re "M") (str.to.re "m"))))))) ((_ re.capture 17) (re.++ ((_ re.capture 18) (re.union (str.to.re "a") (str.to.re "A"))) (re.++ ((_ re.capture 19) (re.union (str.to.re "s") (str.to.re "S"))) ((_ re.capture 20) (re.union (str.to.re "p") (str.to.re "P"))))))) ((_ re.capture 21) (re.++ ((_ re.capture 22) (re.union (str.to.re "t") (str.to.re "T"))) (re.++ ((_ re.capture 23) (re.union (str.to.re "x") (str.to.re "X"))) ((_ re.capture 24) (re.union (str.to.re "T") (str.to.re "x"))))))) ((_ re.capture 25) (re.++ ((_ re.capture 26) (re.union (str.to.re "m") (str.to.re "M"))) (re.++ ((_ re.capture 27) (re.union (str.to.re "S") (str.to.re "s"))) (re.++ ((_ re.capture 28) (re.union (str.to.re "P") (str.to.re "p"))) ((_ re.capture 29) (re.union (str.to.re "x") (str.to.re "X")))))))) ((_ re.capture 30) (re.++ ((_ re.capture 31) (re.union (str.to.re "g") (str.to.re "G"))) (re.++ ((_ re.capture 32) (re.union (str.to.re "i") (str.to.re "I"))) ((_ re.capture 33) (re.union (str.to.re "F") (str.to.re "f"))))))) ((_ re.capture 34) (re.++ ((_ re.capture 35) (re.union (str.to.re "d") (str.to.re "D"))) (re.++ ((_ re.capture 36) (re.union (str.to.re "o") (str.to.re "O"))) ((_ re.capture 37) (re.union (str.to.re "c") (str.to.re "C")))))))))) re.all))) (str.to.re "\x00")))
;match[1]==null
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (not (str.in.re var0 (re.++ (re.*? re.allchar) (re.++ (re.++ ((_ re.capture 1) (re.* (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.range "1" "9"))))) (re.++ (str.to.re ".") ((_ re.capture 2) (re.union (re.union (re.union (re.union (re.union (re.union (re.union ((_ re.capture 3) (re.++ ((_ re.capture 4) (re.union (str.to.re "a") (str.to.re "A"))) (re.++ ((_ re.capture 5) (re.union (str.to.re "s") (str.to.re "S"))) (re.++ ((_ re.capture 6) (re.union (str.to.re "p") (str.to.re "P"))) ((_ re.capture 7) (re.union (str.to.re "x") (str.to.re "X"))))))) ((_ re.capture 8) (re.++ ((_ re.capture 9) (re.union (str.to.re "h") (str.to.re "H"))) (re.++ ((_ re.capture 10) (re.union (str.to.re "T") (str.to.re "t"))) (re.++ ((_ re.capture 11) (re.union (str.to.re "m") (str.to.re "M"))) ((_ re.capture 12) (re.union (str.to.re "l") (str.to.re "L")))))))) ((_ re.capture 13) (re.++ ((_ re.capture 14) (re.union (str.to.re "h") (str.to.re "H"))) (re.++ ((_ re.capture 15) (re.union (str.to.re "t") (str.to.re "T"))) ((_ re.capture 16) (re.union (str.to.re "M") (str.to.re "m"))))))) ((_ re.capture 17) (re.++ ((_ re.capture 18) (re.union (str.to.re "a") (str.to.re "A"))) (re.++ ((_ re.capture 19) (re.union (str.to.re "s") (str.to.re "S"))) ((_ re.capture 20) (re.union (str.to.re "p") (str.to.re "P"))))))) ((_ re.capture 21) (re.++ ((_ re.capture 22) (re.union (str.to.re "t") (str.to.re "T"))) (re.++ ((_ re.capture 23) (re.union (str.to.re "x") (str.to.re "X"))) ((_ re.capture 24) (re.union (str.to.re "T") (str.to.re "x"))))))) ((_ re.capture 25) (re.++ ((_ re.capture 26) (re.union (str.to.re "m") (str.to.re "M"))) (re.++ ((_ re.capture 27) (re.union (str.to.re "S") (str.to.re "s"))) (re.++ ((_ re.capture 28) (re.union (str.to.re "P") (str.to.re "p"))) ((_ re.capture 29) (re.union (str.to.re "x") (str.to.re "X")))))))) ((_ re.capture 30) (re.++ ((_ re.capture 31) (re.union (str.to.re "g") (str.to.re "G"))) (re.++ ((_ re.capture 32) (re.union (str.to.re "i") (str.to.re "I"))) ((_ re.capture 33) (re.union (str.to.re "F") (str.to.re "f"))))))) ((_ re.capture 34) (re.++ ((_ re.capture 35) (re.union (str.to.re "d") (str.to.re "D"))) (re.++ ((_ re.capture 36) (re.union (str.to.re "o") (str.to.re "O"))) ((_ re.capture 37) (re.union (str.to.re "c") (str.to.re "C")))))))))) re.all)))))	; match == null
(check-sat)
(get-model)
(pop 1)
(exit)
