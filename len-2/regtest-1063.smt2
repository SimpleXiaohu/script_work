;;^([a-z][A-Z]){1,4}

(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)
(declare-const res String)

(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))

(assert (str.in.re var0 (re.++ re.begin-anchor (re.++ ((_ re.loop 1 4) ((_ re.capture 1) (re.++ (re.range "a" "z") (re.range "A" "Z")))) re.all))))

(assert (= res ((_ str.extract 1) var0 (re.++ re.begin-anchor (re.++ ((_ re.loop 1 4) ((_ re.capture 1) (re.++ (re.range "a" "z") (re.range "A" "Z")))) re.all)))))

(assert (= var0 "aAaAaAaA\u{1}\u{1}\u{1}"))

(check-sat)
(get-model)