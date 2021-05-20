
(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)

(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.*? re.allchar) (re.++ (re.++ (re.++ (str.to.re "[") (re.++ ((_ re.capture 1) (re.+ (re.range "\x01" "\xff"))) (re.++ (str.to.re "]") (re.++ (re.+ (re.range "\x01" "\xff")) (re.++ (str.to.re "[") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "n")) (str.to.re "")) (re.++ (str.to.re "v") (re.++ (str.to.re "a") (re.++ (str.to.re "r") (re.++ (str.to.re "c") (re.++ (str.to.re "h") (re.++ (str.to.re "a") (re.++ (str.to.re "r") (re.++ (str.to.re "]") (re.++ (re.+ (re.range "\x01" "\xff")) (re.++ (str.to.re "N") (re.++ (str.to.re "U") (re.++ (str.to.re "L") (str.to.re "L"))))))))))))))))))) (str.to.re ",")) re.all))))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.++ (re.++ (str.to.re "[") (re.++ ((_ re.capture 1) (re.+ (re.range "\x01" "\xff"))) (re.++ (str.to.re "]") (re.++ (re.+ (re.range "\x01" "\xff")) (re.++ (str.to.re "[") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "n")) (str.to.re "")) (re.++ (str.to.re "v") (re.++ (str.to.re "a") (re.++ (str.to.re "r") (re.++ (str.to.re "c") (re.++ (str.to.re "h") (re.++ (str.to.re "a") (re.++ (str.to.re "r") (re.++ (str.to.re "]") (re.++ (re.+ (re.range "\x01" "\xff")) (re.++ (str.to.re "N") (re.++ (str.to.re "U") (re.++ (str.to.re "L") (str.to.re "L"))))))))))))))))))) (str.to.re ",")) re.all))) (str.to.re "\x00"))))
;match[1]!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.++ (re.++ (str.to.re "[") (re.++ ((_ re.capture 1) (re.+ (re.range "\x01" "\xff"))) (re.++ (str.to.re "]") (re.++ (re.+ (re.range "\x01" "\xff")) (re.++ (str.to.re "[") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "n")) (str.to.re "")) (re.++ (str.to.re "v") (re.++ (str.to.re "a") (re.++ (str.to.re "r") (re.++ (str.to.re "c") (re.++ (str.to.re "h") (re.++ (str.to.re "a") (re.++ (str.to.re "r") (re.++ (str.to.re "]") (re.++ (re.+ (re.range "\x01" "\xff")) (re.++ (str.to.re "N") (re.++ (str.to.re "U") (re.++ (str.to.re "L") (str.to.re "L"))))))))))))))))))) (str.to.re ",")) re.all))) (re.++ re.all(re.+ (re.range "a" "z")) re.all) ))
;/[a-z]+/.test(match[1]) == true
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.*? re.allchar) (re.++ (re.++ (re.++ (str.to.re "[") (re.++ ((_ re.capture 1) (re.+ (re.range "\x01" "\xff"))) (re.++ (str.to.re "]") (re.++ (re.+ (re.range "\x01" "\xff")) (re.++ (str.to.re "[") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "n")) (str.to.re "")) (re.++ (str.to.re "v") (re.++ (str.to.re "a") (re.++ (str.to.re "r") (re.++ (str.to.re "c") (re.++ (str.to.re "h") (re.++ (str.to.re "a") (re.++ (str.to.re "r") (re.++ (str.to.re "]") (re.++ (re.+ (re.range "\x01" "\xff")) (re.++ (str.to.re "N") (re.++ (str.to.re "U") (re.++ (str.to.re "L") (str.to.re "L"))))))))))))))))))) (str.to.re ",")) re.all))))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.++ (re.++ (str.to.re "[") (re.++ ((_ re.capture 1) (re.+ (re.range "\x01" "\xff"))) (re.++ (str.to.re "]") (re.++ (re.+ (re.range "\x01" "\xff")) (re.++ (str.to.re "[") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "n")) (str.to.re "")) (re.++ (str.to.re "v") (re.++ (str.to.re "a") (re.++ (str.to.re "r") (re.++ (str.to.re "c") (re.++ (str.to.re "h") (re.++ (str.to.re "a") (re.++ (str.to.re "r") (re.++ (str.to.re "]") (re.++ (re.+ (re.range "\x01" "\xff")) (re.++ (str.to.re "N") (re.++ (str.to.re "U") (re.++ (str.to.re "L") (str.to.re "L"))))))))))))))))))) (str.to.re ",")) re.all))) (str.to.re "\x00"))))	
;match[1]!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.++ (re.++ (str.to.re "[") (re.++ ((_ re.capture 1) (re.+ (re.range "\x01" "\xff"))) (re.++ (str.to.re "]") (re.++ (re.+ (re.range "\x01" "\xff")) (re.++ (str.to.re "[") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "n")) (str.to.re "")) (re.++ (str.to.re "v") (re.++ (str.to.re "a") (re.++ (str.to.re "r") (re.++ (str.to.re "c") (re.++ (str.to.re "h") (re.++ (str.to.re "a") (re.++ (str.to.re "r") (re.++ (str.to.re "]") (re.++ (re.+ (re.range "\x01" "\xff")) (re.++ (str.to.re "N") (re.++ (str.to.re "U") (re.++ (str.to.re "L") (str.to.re "L"))))))))))))))))))) (str.to.re ",")) re.all))) (re.++ re.all(re.+ (re.range "a" "z")) re.all) )))
;/[a-z]+/.test(match[1]) == false	
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.*? re.allchar) (re.++ (re.++ (re.++ (str.to.re "[") (re.++ ((_ re.capture 1) (re.+ (re.range "\x01" "\xff"))) (re.++ (str.to.re "]") (re.++ (re.+ (re.range "\x01" "\xff")) (re.++ (str.to.re "[") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "n")) (str.to.re "")) (re.++ (str.to.re "v") (re.++ (str.to.re "a") (re.++ (str.to.re "r") (re.++ (str.to.re "c") (re.++ (str.to.re "h") (re.++ (str.to.re "a") (re.++ (str.to.re "r") (re.++ (str.to.re "]") (re.++ (re.+ (re.range "\x01" "\xff")) (re.++ (str.to.re "N") (re.++ (str.to.re "U") (re.++ (str.to.re "L") (str.to.re "L"))))))))))))))))))) (str.to.re ",")) re.all))))	; match!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.*? re.allchar) (re.++ (re.++ (re.++ (str.to.re "[") (re.++ ((_ re.capture 1) (re.+ (re.range "\x01" "\xff"))) (re.++ (str.to.re "]") (re.++ (re.+ (re.range "\x01" "\xff")) (re.++ (str.to.re "[") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "n")) (str.to.re "")) (re.++ (str.to.re "v") (re.++ (str.to.re "a") (re.++ (str.to.re "r") (re.++ (str.to.re "c") (re.++ (str.to.re "h") (re.++ (str.to.re "a") (re.++ (str.to.re "r") (re.++ (str.to.re "]") (re.++ (re.+ (re.range "\x01" "\xff")) (re.++ (str.to.re "N") (re.++ (str.to.re "U") (re.++ (str.to.re "L") (str.to.re "L"))))))))))))))))))) (str.to.re ",")) re.all))) (str.to.re "\x00")))
;match[1]==null
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (not (str.in.re var0 (re.++ (re.*? re.allchar) (re.++ (re.++ (re.++ (str.to.re "[") (re.++ ((_ re.capture 1) (re.+ (re.range "\x01" "\xff"))) (re.++ (str.to.re "]") (re.++ (re.+ (re.range "\x01" "\xff")) (re.++ (str.to.re "[") (re.++ (re.union (re.++ (str.to.re "") (str.to.re "n")) (str.to.re "")) (re.++ (str.to.re "v") (re.++ (str.to.re "a") (re.++ (str.to.re "r") (re.++ (str.to.re "c") (re.++ (str.to.re "h") (re.++ (str.to.re "a") (re.++ (str.to.re "r") (re.++ (str.to.re "]") (re.++ (re.+ (re.range "\x01" "\xff")) (re.++ (str.to.re "N") (re.++ (str.to.re "U") (re.++ (str.to.re "L") (str.to.re "L"))))))))))))))))))) (str.to.re ",")) re.all)))))	; match == null
(check-sat)
(get-model)
(pop 1)
(exit)
