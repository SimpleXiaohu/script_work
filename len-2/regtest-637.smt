;;^([a-z]?){1,4}??

(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)
(declare-const res String)

(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))

(assert (str.in.re var0 (re.++ re.begin-anchor (re.++ (re.opt ((_ re.loop? 1 4) ((_ re.capture 1) (re.opt (re.range "a" "z"))))) re.all))))

(assert (= res ((_ str.extract 1) var0 (re.++ re.begin-anchor (re.++ (re.opt ((_ re.loop? 1 4) ((_ re.capture 1) (re.opt (re.range "a" "z"))))) re.all)))))

(hu add something)

(check-sat)
(get-model)
