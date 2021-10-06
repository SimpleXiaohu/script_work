;;^(([a-z]??))|[^A-Za-z0-9]

(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(declare-const var0 String)

(assert (str.in.re var0 (re.* (re.range "\x01" "\xff"))))

(assert (str.in.re var0 (re.union (re.++ re.begin-anchor (re.++ ((_ re.capture 1) ((_ re.capture 2) (re.opt? (re.range "a" "z")))) re.all)) (re.++ (re.*? re.allchar) (re.++ (re.inter (re.diff (re.range "\x01" "\xff") (re.range "A" "Z")) (re.inter (re.diff (re.range "\x01" "\xff") (re.range "a" "z")) (re.diff (re.range "\x01" "\xff") (re.range "0" "9")))) re.all)))))

(assert (> (str.len var0) 10))

(check-sat)
(get-model)
