J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test41.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test41_jalangi_.js"};
jalangiLabel11:
    while (true) {
        try {
            J$.Se(297, '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test41_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test41.js');
            function fun(query) {
                jalangiLabel10:
                    while (true) {
                        try {
                            J$.Fe(209, arguments.callee, this, arguments);
                            arguments = J$.N(217, 'arguments', arguments, 4);
                            query = J$.N(225, 'query', query, 4);
                            J$.N(233, 'res', res, 0);
                            var res = J$.X1(25, J$.W(17, 'res', J$.T(9, '', 21, false), res, 1));
                            J$.X1(81, query = J$.W(73, 'query', J$.M(65, J$.M(41, J$.R(33, 'query', query, 0), 'trim', 0)(), 'replace', 0)(J$.T(49, /^(\?|#|&)/, 14, false), J$.T(57, '', 21, false)), query, 0));
                            if (J$.X1(337, J$.C(16, J$.B(10, '!==', J$.R(89, 'query', query, 0), J$.T(97, '', 21, false), 0)))) {
                                J$.X1(145, res = J$.W(137, 'res', J$.M(129, J$.R(105, 'query', query, 0), 'replace', 0)(J$.T(113, /\+/g, 14, false), J$.T(121, ' ', 21, false)), res, 0));
                                if (J$.X1(329, J$.C(8, J$.M(169, J$.T(153, /\s/, 14, false), 'test', 0)(J$.R(161, 'res', res, 0)))))
                                    J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, "1", 21, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(345, J$e);
                        } finally {
                            if (J$.Fr(353))
                                continue jalangiLabel10;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(313, 'fun', J$.T(305, fun, 12, false, 209), 0);
            J$.N(321, 'arg', arg, 0);
            var arg = J$.X1(257, J$.W(249, 'arg', J$.M(241, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(289, J$.F(281, J$.R(265, 'fun', fun, 1), 0)(J$.R(273, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(361, J$e);
        } finally {
            if (J$.Sr(369)) {
                J$.L();
                continue jalangiLabel11;
            } else {
                J$.L();
                break jalangiLabel11;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
