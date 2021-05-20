
(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)

(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ ((_ re.capture 1) (re.union ((_ re.capture 2) (re.++ re.begin-anchor (re.++ ((_ re.capture 3) (re.union (re.union (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9"))) (re.++ (re.range "0" "9") (re.range "0" "9"))) (re.range "0" "9"))) (re.* ((_ re.capture 4) (re.++ (str.to.re ",") ((_ re.capture 5) (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9")))))))))) ((_ re.capture 6) (re.++ re.begin-anchor (re.* (re.range "0" "9")))))) ((_ re.capture 7) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 8) (re.++ (str.to.re ".") (re.++ (re.range "0" "9") (re.range "0" "9"))))) (str.to.re "")) re.end-anchor)))))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ ((_ re.capture 1) (re.union ((_ re.capture 2) (re.++ re.begin-anchor (re.++ ((_ re.capture 3) (re.union (re.union (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9"))) (re.++ (re.range "0" "9") (re.range "0" "9"))) (re.range "0" "9"))) (re.* ((_ re.capture 4) (re.++ (str.to.re ",") ((_ re.capture 5) (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9")))))))))) ((_ re.capture 6) (re.++ re.begin-anchor (re.* (re.range "0" "9")))))) ((_ re.capture 7) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 8) (re.++ (str.to.re ".") (re.++ (re.range "0" "9") (re.range "0" "9"))))) (str.to.re "")) re.end-anchor)))) (str.to.re "\x00"))))
;match[1]!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ ((_ re.capture 1) (re.union ((_ re.capture 2) (re.++ re.begin-anchor (re.++ ((_ re.capture 3) (re.union (re.union (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9"))) (re.++ (re.range "0" "9") (re.range "0" "9"))) (re.range "0" "9"))) (re.* ((_ re.capture 4) (re.++ (str.to.re ",") ((_ re.capture 5) (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9")))))))))) ((_ re.capture 6) (re.++ re.begin-anchor (re.* (re.range "0" "9")))))) ((_ re.capture 7) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 8) (re.++ (str.to.re ".") (re.++ (re.range "0" "9") (re.range "0" "9"))))) (str.to.re "")) re.end-anchor)))) (re.++ re.all(re.+ (re.range "a" "z")) re.all) ))
;/[a-z]+/.test(match[1]) == true
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ ((_ re.capture 1) (re.union ((_ re.capture 2) (re.++ re.begin-anchor (re.++ ((_ re.capture 3) (re.union (re.union (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9"))) (re.++ (re.range "0" "9") (re.range "0" "9"))) (re.range "0" "9"))) (re.* ((_ re.capture 4) (re.++ (str.to.re ",") ((_ re.capture 5) (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9")))))))))) ((_ re.capture 6) (re.++ re.begin-anchor (re.* (re.range "0" "9")))))) ((_ re.capture 7) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 8) (re.++ (str.to.re ".") (re.++ (re.range "0" "9") (re.range "0" "9"))))) (str.to.re "")) re.end-anchor)))))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ ((_ re.capture 1) (re.union ((_ re.capture 2) (re.++ re.begin-anchor (re.++ ((_ re.capture 3) (re.union (re.union (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9"))) (re.++ (re.range "0" "9") (re.range "0" "9"))) (re.range "0" "9"))) (re.* ((_ re.capture 4) (re.++ (str.to.re ",") ((_ re.capture 5) (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9")))))))))) ((_ re.capture 6) (re.++ re.begin-anchor (re.* (re.range "0" "9")))))) ((_ re.capture 7) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 8) (re.++ (str.to.re ".") (re.++ (re.range "0" "9") (re.range "0" "9"))))) (str.to.re "")) re.end-anchor)))) (str.to.re "\x00"))))	
;match[1]!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ ((_ re.capture 1) (re.union ((_ re.capture 2) (re.++ re.begin-anchor (re.++ ((_ re.capture 3) (re.union (re.union (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9"))) (re.++ (re.range "0" "9") (re.range "0" "9"))) (re.range "0" "9"))) (re.* ((_ re.capture 4) (re.++ (str.to.re ",") ((_ re.capture 5) (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9")))))))))) ((_ re.capture 6) (re.++ re.begin-anchor (re.* (re.range "0" "9")))))) ((_ re.capture 7) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 8) (re.++ (str.to.re ".") (re.++ (re.range "0" "9") (re.range "0" "9"))))) (str.to.re "")) re.end-anchor)))) (re.++ re.all(re.+ (re.range "a" "z")) re.all) )))
;/[a-z]+/.test(match[1]) == false	
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ ((_ re.capture 1) (re.union ((_ re.capture 2) (re.++ re.begin-anchor (re.++ ((_ re.capture 3) (re.union (re.union (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9"))) (re.++ (re.range "0" "9") (re.range "0" "9"))) (re.range "0" "9"))) (re.* ((_ re.capture 4) (re.++ (str.to.re ",") ((_ re.capture 5) (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9")))))))))) ((_ re.capture 6) (re.++ re.begin-anchor (re.* (re.range "0" "9")))))) ((_ re.capture 7) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 8) (re.++ (str.to.re ".") (re.++ (re.range "0" "9") (re.range "0" "9"))))) (str.to.re "")) re.end-anchor)))))	; match!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ ((_ re.capture 1) (re.union ((_ re.capture 2) (re.++ re.begin-anchor (re.++ ((_ re.capture 3) (re.union (re.union (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9"))) (re.++ (re.range "0" "9") (re.range "0" "9"))) (re.range "0" "9"))) (re.* ((_ re.capture 4) (re.++ (str.to.re ",") ((_ re.capture 5) (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9")))))))))) ((_ re.capture 6) (re.++ re.begin-anchor (re.* (re.range "0" "9")))))) ((_ re.capture 7) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 8) (re.++ (str.to.re ".") (re.++ (re.range "0" "9") (re.range "0" "9"))))) (str.to.re "")) re.end-anchor)))) (str.to.re "\x00")))
;match[1]==null
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (not (str.in.re var0 (re.++ ((_ re.capture 1) (re.union ((_ re.capture 2) (re.++ re.begin-anchor (re.++ ((_ re.capture 3) (re.union (re.union (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9"))) (re.++ (re.range "0" "9") (re.range "0" "9"))) (re.range "0" "9"))) (re.* ((_ re.capture 4) (re.++ (str.to.re ",") ((_ re.capture 5) (re.++ (re.range "0" "9") (re.++ (re.range "0" "9") (re.range "0" "9")))))))))) ((_ re.capture 6) (re.++ re.begin-anchor (re.* (re.range "0" "9")))))) ((_ re.capture 7) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 8) (re.++ (str.to.re ".") (re.++ (re.range "0" "9") (re.range "0" "9"))))) (str.to.re "")) re.end-anchor))))))	; match == null
(check-sat)
(get-model)
(pop 1)
(exit)
