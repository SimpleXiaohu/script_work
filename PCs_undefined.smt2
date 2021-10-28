(set-option :produce-models true)
(set-option :inline-size-limit 10000)

(define-fun Split2 ((x String) (delim String)) String
  (let ((n (str.indexof x delim 0)))
       (ite (= n (- 1)) x
            (str.substr x 0 n))))

(declare-const var0 String)
(assert (str.in.re var0 (re.* (re.range "\u{0001}" "\u{FFFF}"))))
(assert (str.in.re var0 (re.++ re.allchar re.allchar)))
;(assert (= (str.len var0) 2))
(assert (= (Split2 var0 "/e/") "j"))
(check-sat)
(get-model)

