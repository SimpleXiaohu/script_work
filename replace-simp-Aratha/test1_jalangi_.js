J$.iids = {"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test1.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test1_jalangi_.js"};
jalangiLabel9:
    while (true) {
        try {
            J$.Se(289, '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test1_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test1.js');
            function fun(value) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(209, arguments.callee, this, arguments);
                            arguments = J$.N(217, 'arguments', arguments, 4);
                            value = J$.N(225, 'value', value, 4);
                            J$.X1(145, value = J$.W(137, 'value', J$.M(129, J$.M(105, J$.M(81, J$.M(57, J$.M(33, J$.R(9, 'value', value, 0), 'replace', 0)(J$.T(17, /&/g, 14, false), J$.T(25, '&amp;', 21, false)), 'replace', 0)(J$.T(41, /'/g, 14, false), J$.T(49, '&apos;', 21, false)), 'replace', 0)(J$.T(65, /</g, 14, false), J$.T(73, '&lt;', 21, false)), 'replace', 0)(J$.T(89, />/g, 14, false), J$.T(97, '&gt;', 21, false)), 'replace', 0)(J$.T(113, /"/g, 14, false), J$.T(121, '&quot;', 21, false)), value, 0));
                            if (J$.X1(321, J$.C(8, J$.M(169, J$.T(153, /[a-z]+/, 14, false), 'test', 0)(J$.R(161, 'value', value, 0)))))
                                J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, "1", 21, false)));
                        } catch (J$e) {
                            J$.Ex(329, J$e);
                        } finally {
                            if (J$.Fr(337))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(305, 'fun', J$.T(297, fun, 12, false, 209), 0);
            J$.N(313, 'arg', arg, 0);
            var arg = J$.X1(249, J$.W(241, 'arg', J$.M(233, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(281, J$.F(273, J$.R(257, 'fun', fun, 1), 0)(J$.R(265, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(345, J$e);
        } finally {
            if (J$.Sr(353)) {
                J$.L();
                continue jalangiLabel9;
            } else {
                J$.L();
                break jalangiLabel9;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
