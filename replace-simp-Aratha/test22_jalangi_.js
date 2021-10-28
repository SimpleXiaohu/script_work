J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test22.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test22_jalangi_.js"};
jalangiLabel11:
    while (true) {
        try {
            J$.Se(281, '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test22_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test22.js');
            function fun(pattern) {
                jalangiLabel10:
                    while (true) {
                        try {
                            J$.Fe(193, arguments.callee, this, arguments);
                            arguments = J$.N(201, 'arguments', arguments, 4);
                            pattern = J$.N(209, 'pattern', pattern, 4);
                            J$.N(217, 'gpattern', gpattern, 0);
                            var gpattern = J$.X1(25, J$.W(17, 'gpattern', J$.T(9, '', 21, false), gpattern, 1));
                            if (J$.X1(313, J$.C(8, J$.B(18, '===', J$.M(49, J$.R(33, 'pattern', pattern, 0), 'slice', 0)(J$.U(10, '-', J$.T(41, 3, 22, false))), J$.T(57, '/**', 21, false), 0)))) {
                                J$.X1(89, J$.M(81, J$.R(65, 'console', console, 2), 'log', 0)(J$.T(73, 1, 22, false)));
                                var gpattern = J$.X1(137, J$.W(129, 'gpattern', J$.M(121, J$.R(97, 'pattern', pattern, 0), 'replace', 0)(J$.T(105, /(\/\*\*)+$/, 14, false), J$.T(113, '', 21, false)), gpattern, 1));
                            }
                            if (J$.X1(321, J$.C(16, J$.B(26, '!==', J$.R(145, 'gpattern', gpattern, 0), J$.T(153, '', 21, false), 0))))
                                J$.X1(185, J$.M(177, J$.R(161, 'console', console, 2), 'log', 0)(J$.T(169, 2, 22, false)));
                        } catch (J$e) {
                            J$.Ex(329, J$e);
                        } finally {
                            if (J$.Fr(337))
                                continue jalangiLabel10;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(297, 'fun', J$.T(289, fun, 12, false, 193), 0);
            J$.N(305, 'arg', arg, 0);
            var arg = J$.X1(241, J$.W(233, 'arg', J$.M(225, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(273, J$.F(265, J$.R(249, 'fun', fun, 1), 0)(J$.R(257, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(345, J$e);
        } finally {
            if (J$.Sr(353)) {
                J$.L();
                continue jalangiLabel11;
            } else {
                J$.L();
                break jalangiLabel11;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
