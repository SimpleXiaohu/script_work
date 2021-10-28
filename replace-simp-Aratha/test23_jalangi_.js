J$.iids = {"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test23.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test23_jalangi_.js"};
jalangiLabel9:
    while (true) {
        try {
            J$.Se(225, '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test23_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test23.js');
            function fun(comment) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(137, arguments.callee, this, arguments);
                            arguments = J$.N(145, 'arguments', arguments, 4);
                            comment = J$.N(153, 'comment', comment, 4);
                            J$.N(161, 'result', result, 0);
                            var result = J$.X1(73, J$.W(65, 'result', J$.M(57, J$.M(33, J$.R(9, 'comment', comment, 0), 'replace', 0)(J$.T(17, /^\{\{~?!-?-?/, 14, false), J$.T(25, '', 21, false)), 'replace', 0)(J$.T(41, /-?-?~?\}\}$/, 14, false), J$.T(49, '', 21, false)), result, 1));
                            if (J$.X1(257, J$.C(8, J$.M(97, J$.T(81, /^\{\{/, 14, false), 'test', 0)(J$.R(89, 'result', result, 0)))))
                                J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(J$.T(113, "1", 21, false)));
                        } catch (J$e) {
                            J$.Ex(265, J$e);
                        } finally {
                            if (J$.Fr(273))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(241, 'fun', J$.T(233, fun, 12, false, 137), 0);
            J$.N(249, 'arg', arg, 0);
            var arg = J$.X1(185, J$.W(177, 'arg', J$.M(169, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(217, J$.F(209, J$.R(193, 'fun', fun, 1), 0)(J$.R(201, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(281, J$e);
        } finally {
            if (J$.Sr(289)) {
                J$.L();
                continue jalangiLabel9;
            } else {
                J$.L();
                break jalangiLabel9;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
