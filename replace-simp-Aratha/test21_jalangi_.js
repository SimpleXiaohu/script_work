J$.iids = {"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test21.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test21_jalangi_.js"};
jalangiLabel9:
    while (true) {
        try {
            J$.Se(201, '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test21_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test21.js');
            function fun(value) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(113, arguments.callee, this, arguments);
                            arguments = J$.N(121, 'arguments', arguments, 4);
                            value = J$.N(129, 'value', value, 4);
                            J$.N(137, 'result', result, 0);
                            var result = J$.X1(49, J$.W(41, 'result', J$.M(33, J$.R(9, 'value', value, 0), 'replace', 0)(J$.T(17, /^.*\.propTypes\./, 14, false), J$.T(25, '', 21, false)), result, 1));
                            if (J$.X1(233, J$.C(8, J$.M(73, J$.T(57, /propTypes/, 14, false), 'test', 0)(J$.R(65, 'result', result, 0)))))
                                J$.X1(105, J$.M(97, J$.R(81, 'console', console, 2), 'log', 0)(J$.T(89, 1, 22, false)));
                        } catch (J$e) {
                            J$.Ex(241, J$e);
                        } finally {
                            if (J$.Fr(249))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(217, 'fun', J$.T(209, fun, 12, false, 113), 0);
            J$.N(225, 'arg', arg, 0);
            var arg = J$.X1(161, J$.W(153, 'arg', J$.M(145, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(193, J$.F(185, J$.R(169, 'fun', fun, 1), 0)(J$.R(177, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(257, J$e);
        } finally {
            if (J$.Sr(265)) {
                J$.L();
                continue jalangiLabel9;
            } else {
                J$.L();
                break jalangiLabel9;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT