;;^([a-z]|[A-Z])[0-9]

(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)
(declare-const res String)

(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))

(assert (str.in.re var0 (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.range "a" "z") (re.range "A" "Z"))) (re.++ (re.range "0" "9") re.all)))))

(assert (= res ((_ str.extract 1) var0 (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.union (re.range "a" "z") (re.range "A" "Z"))) (re.++ (re.range "0" "9") re.all))))))

(assert (= var0 "a0\u{1}\u{1}\u{1}\u{1}\u{1}\u{1}\u{1}\u{1}\u{1}"))

(check-sat)
(get-model)
