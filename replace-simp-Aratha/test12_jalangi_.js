J$.iids = {"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test12.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test12_jalangi_.js"};
jalangiLabel9:
    while (true) {
        try {
            J$.Se(193, '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test12_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test12.js');
            function fun(str) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(113, arguments.callee, this, arguments);
                            arguments = J$.N(121, 'arguments', arguments, 4);
                            str = J$.N(129, 'str', str, 4);
                            J$.X1(49, str = J$.W(41, 'str', J$.M(33, J$.R(9, 'str', str, 0), 'replace', 0)(J$.T(17, /;(\s*$)/, 14, false), J$.T(25, '$1', 21, false)), str, 0));
                            if (J$.X1(225, J$.C(8, J$.M(73, J$.T(57, /;/, 14, false), 'test', 0)(J$.R(65, 'str', str, 0)))))
                                J$.X1(105, J$.M(97, J$.R(81, 'console', console, 2), 'log', 0)(J$.T(89, "1", 21, false)));
                        } catch (J$e) {
                            J$.Ex(233, J$e);
                        } finally {
                            if (J$.Fr(241))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(209, 'fun', J$.T(201, fun, 12, false, 113), 0);
            J$.N(217, 'arg', arg, 0);
            var arg = J$.X1(153, J$.W(145, 'arg', J$.M(137, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(185, J$.F(177, J$.R(161, 'fun', fun, 1), 0)(J$.R(169, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(249, J$e);
        } finally {
            if (J$.Sr(257)) {
                J$.L();
                continue jalangiLabel9;
            } else {
                J$.L();
                break jalangiLabel9;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
