
(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)

(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ ((_ re.capture 1) (re.++ (re.++ re.begin-anchor (re.++ (re.+ (re.union (re.range "a" "f") (re.range "A" "F"))) (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")))) re.end-anchor)) (re.++ (str.to.re "\u{0a}") re.all))))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ ((_ re.capture 1) (re.++ (re.++ re.begin-anchor (re.++ (re.+ (re.union (re.range "a" "f") (re.range "A" "F"))) (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")))) re.end-anchor)) (re.++ (str.to.re "\u{0a}") re.all))) (str.to.re "\x00"))))
;match[1]!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ ((_ re.capture 1) (re.++ (re.++ re.begin-anchor (re.++ (re.+ (re.union (re.range "a" "f") (re.range "A" "F"))) (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")))) re.end-anchor)) (re.++ (str.to.re "\u{0a}") re.all))) (re.++ re.all(re.+ (re.range "a" "z")) re.all) ))
;/[a-z]+/.test(match[1]) == true
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ ((_ re.capture 1) (re.++ (re.++ re.begin-anchor (re.++ (re.+ (re.union (re.range "a" "f") (re.range "A" "F"))) (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")))) re.end-anchor)) (re.++ (str.to.re "\u{0a}") re.all))))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ ((_ re.capture 1) (re.++ (re.++ re.begin-anchor (re.++ (re.+ (re.union (re.range "a" "f") (re.range "A" "F"))) (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")))) re.end-anchor)) (re.++ (str.to.re "\u{0a}") re.all))) (str.to.re "\x00"))))	
;match[1]!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ ((_ re.capture 1) (re.++ (re.++ re.begin-anchor (re.++ (re.+ (re.union (re.range "a" "f") (re.range "A" "F"))) (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")))) re.end-anchor)) (re.++ (str.to.re "\u{0a}") re.all))) (re.++ re.all(re.+ (re.range "a" "z")) re.all) )))
;/[a-z]+/.test(match[1]) == false	
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ ((_ re.capture 1) (re.++ (re.++ re.begin-anchor (re.++ (re.+ (re.union (re.range "a" "f") (re.range "A" "F"))) (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")))) re.end-anchor)) (re.++ (str.to.re "\u{0a}") re.all))))	; match!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ ((_ re.capture 1) (re.++ (re.++ re.begin-anchor (re.++ (re.+ (re.union (re.range "a" "f") (re.range "A" "F"))) (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")))) re.end-anchor)) (re.++ (str.to.re "\u{0a}") re.all))) (str.to.re "\x00")))
;match[1]==null
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (not (str.in.re var0 (re.++ ((_ re.capture 1) (re.++ (re.++ re.begin-anchor (re.++ (re.+ (re.union (re.range "a" "f") (re.range "A" "F"))) (re.union (re.++ (str.to.re "") (re.union (str.to.re "+") (str.to.re "-"))) (str.to.re "")))) re.end-anchor)) (re.++ (str.to.re "\u{0a}") re.all)))))	; match == null
(check-sat)
(get-model)
(pop 1)
(exit)
