J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test19.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test19_jalangi_.js"};
jalangiLabel11:
    while (true) {
        try {
            J$.Se(329, '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test19_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test19.js');
            function fun(relativePath) {
                jalangiLabel10:
                    while (true) {
                        try {
                            J$.Fe(233, arguments.callee, this, arguments);
                            arguments = J$.N(241, 'arguments', arguments, 4);
                            relativePath = J$.N(249, 'relativePath', relativePath, 4);
                            J$.N(257, 'stripped', stripped, 0);
                            J$.N(265, 'result', result, 0);
                            if (J$.X1(369, J$.C(16, J$.R(9, 'relativePath', relativePath, 0)))) {
                                var stripped = J$.X1(57, J$.W(49, 'stripped', J$.M(41, J$.R(17, 'relativePath', relativePath, 0), 'replace', 0)(J$.T(25, /\/$/g, 14, false), J$.T(33, '', 21, false)), stripped, 1));
                                var result = J$.X1(81, J$.W(73, 'result', J$.T(65, '', 21, false), result, 1));
                                if (J$.X1(361, J$.C(8, J$.M(105, J$.T(89, /^((\.\.)|(\.))($|\/)/, 14, false), 'test', 0)(J$.R(97, 'stripped', stripped, 0))))) {
                                    J$.X1(137, J$.M(129, J$.R(113, 'console', console, 2), 'log', 0)(J$.T(121, 1, 22, false)));
                                    J$.X1(161, result = J$.W(153, 'result', J$.R(145, 'stripped', stripped, 0), result, 0));
                                } else {
                                    J$.X1(193, J$.M(185, J$.R(169, 'console', console, 2), 'log', 0)(J$.T(177, 2, 22, false)));
                                    J$.X1(225, result = J$.W(217, 'result', J$.B(10, '+', J$.T(201, './', 21, false), J$.R(209, 'stripped', stripped, 0), 0), result, 0));
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(377, J$e);
                        } finally {
                            if (J$.Fr(385))
                                continue jalangiLabel10;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(345, 'fun', J$.T(337, fun, 12, false, 233), 0);
            J$.N(353, 'arg', arg, 0);
            var arg = J$.X1(289, J$.W(281, 'arg', J$.M(273, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(321, J$.F(313, J$.R(297, 'fun', fun, 1), 0)(J$.R(305, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(393, J$e);
        } finally {
            if (J$.Sr(401)) {
                J$.L();
                continue jalangiLabel11;
            } else {
                J$.L();
                break jalangiLabel11;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
