J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test5.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test5_jalangi_.js"};
jalangiLabel13:
    while (true) {
        try {
            J$.Se(297, '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test5_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test5.js');
            function fun(tag) {
                jalangiLabel12:
                    while (true) {
                        try {
                            J$.Fe(209, arguments.callee, this, arguments);
                            arguments = J$.N(217, 'arguments', arguments, 4);
                            tag = J$.N(225, 'tag', tag, 4);
                            J$.N(233, 'out', out, 0);
                            var out = J$.X1(25, J$.W(17, 'out', J$.T(9, '', 21, false), out, 1));
                            if (J$.X1(329, J$.C(8, J$.M(49, J$.T(33, /\/\*|\*\//, 14, false), 'test', 0)(J$.R(41, 'tag', tag, 0))))) {
                                J$.X1(81, J$.M(73, J$.R(57, 'console', console, 2), 'log', 0)(J$.T(65, "1", 21, false)));
                            }
                            J$.X1(145, out = J$.W(137, 'out', J$.B(18, '+', J$.B(10, '+', J$.R(89, 'out', out, 0), J$.T(97, ' ', 21, false), 0), J$.M(129, J$.R(105, 'tag', tag, 0), 'replace', 0)(J$.T(113, /@/g, 14, false), J$.T(121, '\\@', 21, false)), 0), out, 0));
                            if (J$.X1(337, J$.C(16, J$.M(169, J$.T(153, /\d+/, 14, false), 'test', 0)(J$.R(161, 'out', out, 0)))))
                                J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, "2", 21, false)));
                        } catch (J$e) {
                            J$.Ex(345, J$e);
                        } finally {
                            if (J$.Fr(353))
                                continue jalangiLabel12;
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
                continue jalangiLabel13;
            } else {
                J$.L();
                break jalangiLabel13;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
