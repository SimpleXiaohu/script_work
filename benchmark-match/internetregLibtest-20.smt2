
(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)

(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.++ (str.to.re "h") (re.++ (str.to.re "t") (re.++ (str.to.re "t") (str.to.re "p")))) (re.++ (str.to.re "h") (re.++ (str.to.re "t") (re.++ (str.to.re "t") (re.++ (str.to.re "p") (str.to.re "s")))))) (re.++ (str.to.re "f") (re.++ (str.to.re "t") (str.to.re "p"))))) (re.++ (str.to.re ":") (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (str.to.re ".")))))) (re.++ (str.to.re ".") (re.++ (re.union (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.union (re.range "a" "z") (re.range "A" "Z")))) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.union (re.range "a" "z") (re.range "A" "Z")))) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ (str.to.re ":") (re.* (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.range "0" "9"))))))) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "/")) (str.to.re "")) (re.* ((_ re.capture 3) (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (re.union (str.to.re ".") (re.union (str.to.re "_") (re.union (str.to.re "?") (re.union (str.to.re ",") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "/") (re.union (str.to.re "\\") (re.union (str.to.re "+") (re.union (str.to.re "&") (re.union (str.to.re "a") (re.union (str.to.re "m") (re.union (str.to.re "p") (re.union (str.to.re ";") (re.union (str.to.re "%") (re.union (str.to.re "$") (re.union (str.to.re "#") (re.union (str.to.re "=") (str.to.re "~")))))))))))))))))))))))))))))))))))))) re.end-anchor)))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.++ (str.to.re "h") (re.++ (str.to.re "t") (re.++ (str.to.re "t") (str.to.re "p")))) (re.++ (str.to.re "h") (re.++ (str.to.re "t") (re.++ (str.to.re "t") (re.++ (str.to.re "p") (str.to.re "s")))))) (re.++ (str.to.re "f") (re.++ (str.to.re "t") (str.to.re "p"))))) (re.++ (str.to.re ":") (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (str.to.re ".")))))) (re.++ (str.to.re ".") (re.++ (re.union (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.union (re.range "a" "z") (re.range "A" "Z")))) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.union (re.range "a" "z") (re.range "A" "Z")))) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ (str.to.re ":") (re.* (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.range "0" "9"))))))) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "/")) (str.to.re "")) (re.* ((_ re.capture 3) (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (re.union (str.to.re ".") (re.union (str.to.re "_") (re.union (str.to.re "?") (re.union (str.to.re ",") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "/") (re.union (str.to.re "\\") (re.union (str.to.re "+") (re.union (str.to.re "&") (re.union (str.to.re "a") (re.union (str.to.re "m") (re.union (str.to.re "p") (re.union (str.to.re ";") (re.union (str.to.re "%") (re.union (str.to.re "$") (re.union (str.to.re "#") (re.union (str.to.re "=") (str.to.re "~")))))))))))))))))))))))))))))))))))))) re.end-anchor)) (str.to.re "\x00"))))
;match[1]!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.++ (str.to.re "h") (re.++ (str.to.re "t") (re.++ (str.to.re "t") (str.to.re "p")))) (re.++ (str.to.re "h") (re.++ (str.to.re "t") (re.++ (str.to.re "t") (re.++ (str.to.re "p") (str.to.re "s")))))) (re.++ (str.to.re "f") (re.++ (str.to.re "t") (str.to.re "p"))))) (re.++ (str.to.re ":") (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (str.to.re ".")))))) (re.++ (str.to.re ".") (re.++ (re.union (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.union (re.range "a" "z") (re.range "A" "Z")))) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.union (re.range "a" "z") (re.range "A" "Z")))) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ (str.to.re ":") (re.* (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.range "0" "9"))))))) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "/")) (str.to.re "")) (re.* ((_ re.capture 3) (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (re.union (str.to.re ".") (re.union (str.to.re "_") (re.union (str.to.re "?") (re.union (str.to.re ",") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "/") (re.union (str.to.re "\\") (re.union (str.to.re "+") (re.union (str.to.re "&") (re.union (str.to.re "a") (re.union (str.to.re "m") (re.union (str.to.re "p") (re.union (str.to.re ";") (re.union (str.to.re "%") (re.union (str.to.re "$") (re.union (str.to.re "#") (re.union (str.to.re "=") (str.to.re "~")))))))))))))))))))))))))))))))))))))) re.end-anchor)) (re.++ re.all(re.+ (re.range "a" "z")) re.all) ))
;/[a-z]+/.test(match[1]) == true
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.++ (str.to.re "h") (re.++ (str.to.re "t") (re.++ (str.to.re "t") (str.to.re "p")))) (re.++ (str.to.re "h") (re.++ (str.to.re "t") (re.++ (str.to.re "t") (re.++ (str.to.re "p") (str.to.re "s")))))) (re.++ (str.to.re "f") (re.++ (str.to.re "t") (str.to.re "p"))))) (re.++ (str.to.re ":") (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (str.to.re ".")))))) (re.++ (str.to.re ".") (re.++ (re.union (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.union (re.range "a" "z") (re.range "A" "Z")))) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.union (re.range "a" "z") (re.range "A" "Z")))) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ (str.to.re ":") (re.* (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.range "0" "9"))))))) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "/")) (str.to.re "")) (re.* ((_ re.capture 3) (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (re.union (str.to.re ".") (re.union (str.to.re "_") (re.union (str.to.re "?") (re.union (str.to.re ",") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "/") (re.union (str.to.re "\\") (re.union (str.to.re "+") (re.union (str.to.re "&") (re.union (str.to.re "a") (re.union (str.to.re "m") (re.union (str.to.re "p") (re.union (str.to.re ";") (re.union (str.to.re "%") (re.union (str.to.re "$") (re.union (str.to.re "#") (re.union (str.to.re "=") (str.to.re "~")))))))))))))))))))))))))))))))))))))) re.end-anchor)))	; match!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.++ (str.to.re "h") (re.++ (str.to.re "t") (re.++ (str.to.re "t") (str.to.re "p")))) (re.++ (str.to.re "h") (re.++ (str.to.re "t") (re.++ (str.to.re "t") (re.++ (str.to.re "p") (str.to.re "s")))))) (re.++ (str.to.re "f") (re.++ (str.to.re "t") (str.to.re "p"))))) (re.++ (str.to.re ":") (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (str.to.re ".")))))) (re.++ (str.to.re ".") (re.++ (re.union (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.union (re.range "a" "z") (re.range "A" "Z")))) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.union (re.range "a" "z") (re.range "A" "Z")))) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ (str.to.re ":") (re.* (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.range "0" "9"))))))) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "/")) (str.to.re "")) (re.* ((_ re.capture 3) (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (re.union (str.to.re ".") (re.union (str.to.re "_") (re.union (str.to.re "?") (re.union (str.to.re ",") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "/") (re.union (str.to.re "\\") (re.union (str.to.re "+") (re.union (str.to.re "&") (re.union (str.to.re "a") (re.union (str.to.re "m") (re.union (str.to.re "p") (re.union (str.to.re ";") (re.union (str.to.re "%") (re.union (str.to.re "$") (re.union (str.to.re "#") (re.union (str.to.re "=") (str.to.re "~")))))))))))))))))))))))))))))))))))))) re.end-anchor)) (str.to.re "\x00"))))	
;match[1]!==null
(assert (not (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.++ (str.to.re "h") (re.++ (str.to.re "t") (re.++ (str.to.re "t") (str.to.re "p")))) (re.++ (str.to.re "h") (re.++ (str.to.re "t") (re.++ (str.to.re "t") (re.++ (str.to.re "p") (str.to.re "s")))))) (re.++ (str.to.re "f") (re.++ (str.to.re "t") (str.to.re "p"))))) (re.++ (str.to.re ":") (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (str.to.re ".")))))) (re.++ (str.to.re ".") (re.++ (re.union (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.union (re.range "a" "z") (re.range "A" "Z")))) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.union (re.range "a" "z") (re.range "A" "Z")))) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ (str.to.re ":") (re.* (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.range "0" "9"))))))) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "/")) (str.to.re "")) (re.* ((_ re.capture 3) (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (re.union (str.to.re ".") (re.union (str.to.re "_") (re.union (str.to.re "?") (re.union (str.to.re ",") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "/") (re.union (str.to.re "\\") (re.union (str.to.re "+") (re.union (str.to.re "&") (re.union (str.to.re "a") (re.union (str.to.re "m") (re.union (str.to.re "p") (re.union (str.to.re ";") (re.union (str.to.re "%") (re.union (str.to.re "$") (re.union (str.to.re "#") (re.union (str.to.re "=") (str.to.re "~")))))))))))))))))))))))))))))))))))))) re.end-anchor)) (re.++ re.all(re.+ (re.range "a" "z")) re.all) )))
;/[a-z]+/.test(match[1]) == false	
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (str.in.re var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.++ (str.to.re "h") (re.++ (str.to.re "t") (re.++ (str.to.re "t") (str.to.re "p")))) (re.++ (str.to.re "h") (re.++ (str.to.re "t") (re.++ (str.to.re "t") (re.++ (str.to.re "p") (str.to.re "s")))))) (re.++ (str.to.re "f") (re.++ (str.to.re "t") (str.to.re "p"))))) (re.++ (str.to.re ":") (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (str.to.re ".")))))) (re.++ (str.to.re ".") (re.++ (re.union (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.union (re.range "a" "z") (re.range "A" "Z")))) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.union (re.range "a" "z") (re.range "A" "Z")))) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ (str.to.re ":") (re.* (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.range "0" "9"))))))) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "/")) (str.to.re "")) (re.* ((_ re.capture 3) (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (re.union (str.to.re ".") (re.union (str.to.re "_") (re.union (str.to.re "?") (re.union (str.to.re ",") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "/") (re.union (str.to.re "\\") (re.union (str.to.re "+") (re.union (str.to.re "&") (re.union (str.to.re "a") (re.union (str.to.re "m") (re.union (str.to.re "p") (re.union (str.to.re ";") (re.union (str.to.re "%") (re.union (str.to.re "$") (re.union (str.to.re "#") (re.union (str.to.re "=") (str.to.re "~")))))))))))))))))))))))))))))))))))))) re.end-anchor)))	; match!==null
(assert (str.in.re ((_ str.extract 1) var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.++ (str.to.re "h") (re.++ (str.to.re "t") (re.++ (str.to.re "t") (str.to.re "p")))) (re.++ (str.to.re "h") (re.++ (str.to.re "t") (re.++ (str.to.re "t") (re.++ (str.to.re "p") (str.to.re "s")))))) (re.++ (str.to.re "f") (re.++ (str.to.re "t") (str.to.re "p"))))) (re.++ (str.to.re ":") (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (str.to.re ".")))))) (re.++ (str.to.re ".") (re.++ (re.union (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.union (re.range "a" "z") (re.range "A" "Z")))) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.union (re.range "a" "z") (re.range "A" "Z")))) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ (str.to.re ":") (re.* (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.range "0" "9"))))))) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "/")) (str.to.re "")) (re.* ((_ re.capture 3) (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (re.union (str.to.re ".") (re.union (str.to.re "_") (re.union (str.to.re "?") (re.union (str.to.re ",") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "/") (re.union (str.to.re "\\") (re.union (str.to.re "+") (re.union (str.to.re "&") (re.union (str.to.re "a") (re.union (str.to.re "m") (re.union (str.to.re "p") (re.union (str.to.re ";") (re.union (str.to.re "%") (re.union (str.to.re "$") (re.union (str.to.re "#") (re.union (str.to.re "=") (str.to.re "~")))))))))))))))))))))))))))))))))))))) re.end-anchor)) (str.to.re "\x00")))
;match[1]==null
(check-sat)
(get-model)
(pop 1)
(push 1)
(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))
(assert (not (str.in.re var0 (re.++ (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.union (re.++ (str.to.re "h") (re.++ (str.to.re "t") (re.++ (str.to.re "t") (str.to.re "p")))) (re.++ (str.to.re "h") (re.++ (str.to.re "t") (re.++ (str.to.re "t") (re.++ (str.to.re "p") (str.to.re "s")))))) (re.++ (str.to.re "f") (re.++ (str.to.re "t") (str.to.re "p"))))) (re.++ (str.to.re ":") (re.++ (str.to.re "/") (re.++ (str.to.re "/") (re.++ (re.+ (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (str.to.re ".")))))) (re.++ (str.to.re ".") (re.++ (re.union (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.union (re.range "a" "z") (re.range "A" "Z")))) (re.++ (re.union (re.range "a" "z") (re.range "A" "Z")) (re.union (re.range "a" "z") (re.range "A" "Z")))) (re.++ (re.union (re.++ (str.to.re "") ((_ re.capture 2) (re.++ (str.to.re ":") (re.* (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.range "0" "9"))))))) (str.to.re "")) (re.++ (re.union (re.++ (str.to.re "") (str.to.re "/")) (str.to.re "")) (re.* ((_ re.capture 3) (re.union (re.range "a" "z") (re.union (re.range "A" "Z") (re.union (re.range "0" "9") (re.union (str.to.re "-") (re.union (str.to.re ".") (re.union (str.to.re "_") (re.union (str.to.re "?") (re.union (str.to.re ",") (re.union (str.to.re "&") (re.union (str.to.re "#") (re.union (str.to.re "3") (re.union (str.to.re "9") (re.union (str.to.re ";") (re.union (str.to.re "/") (re.union (str.to.re "\\") (re.union (str.to.re "+") (re.union (str.to.re "&") (re.union (str.to.re "a") (re.union (str.to.re "m") (re.union (str.to.re "p") (re.union (str.to.re ";") (re.union (str.to.re "%") (re.union (str.to.re "$") (re.union (str.to.re "#") (re.union (str.to.re "=") (str.to.re "~")))))))))))))))))))))))))))))))))))))) re.end-anchor))))	; match == null
(check-sat)
(get-model)
(pop 1)
(exit)
