;;^([a-z][A-Z]){1,4}??

(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)

(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))

(assert (str.in.re var0 (re.++ re.begin-anchor (re.++ (re.opt ((_ re.loop? 1 4) ((_ re.capture 1) (re.++ (re.range "a" "z") (re.range "A" "Z"))))) re.all))))

(assert (> (str.len var0) 10))

(check-sat)
(get-model)
