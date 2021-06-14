;;^([a-z]?)??+?

(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)

(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))

(assert (str.in.re var0 (re.++ re.begin-anchor (re.++ (re.+? (re.opt? ((_ re.capture 1) (re.opt (re.range "a" "z"))))) re.all))))

(assert (> (str.len var0) 10))

(check-sat)
(get-model)
