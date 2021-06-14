;;^(([a-z][A-Z])+)

(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)
(declare-const res String)

(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))

(assert (str.in.re var0 (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.+ ((_ re.capture 2) (re.++ (re.range "a" "z") (re.range "A" "Z"))))) re.all))))

(assert (= res ((_ str.extract 1) var0 (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.+ ((_ re.capture 2) (re.++ (re.range "a" "z") (re.range "A" "Z"))))) re.all)))))

(assert (= var0 "aAaAaAaAaA\u{1}"))

(check-sat)
(get-model)