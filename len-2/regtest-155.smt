;;^([a-z]*)|[0-9]

(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)
(declare-const res String)

(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))

(assert (str.in.re var0 (re.union (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.* (re.range "a" "z"))) re.all)) (re.++ (re.*? re.allchar) (re.++ (re.range "0" "9") re.all)))))

(assert (= res ((_ str.extract 1) var0 (re.union (re.++ re.begin-anchor (re.++ ((_ re.capture 1) (re.* (re.range "a" "z"))) re.all)) (re.++ (re.*? re.allchar) (re.++ (re.range "0" "9") re.all))))))

(hu add something)

(check-sat)
(get-model)
