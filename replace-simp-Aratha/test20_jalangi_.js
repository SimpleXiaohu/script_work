J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test20.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test20_jalangi_.js"};
jalangiLabel9:
    while (true) {
        try {
            J$.Se(337, '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test20_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test20.js');
            function fun(replacementText) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(257, arguments.callee, this, arguments);
                            arguments = J$.N(265, 'arguments', arguments, 4);
                            replacementText = J$.N(273, 'replacementText', replacementText, 4);
                            if (J$.X1(369, J$.C(8, J$.B(10, '===', J$.R(9, 'replacementText', replacementText, 0), J$.T(17, 'start', 21, false), 0)))) {
                                J$.X1(49, J$.M(41, J$.R(25, 'console', console, 2), 'log', 0)(J$.T(33, 1, 22, false)));
                                J$.X1(105, replacementText = J$.W(97, 'replacementText', J$.B(18, '+', J$.M(81, J$.R(57, 'replacementText', replacementText, 0), 'replace', 0)(J$.T(65, /^\s+/g, 14, false), J$.T(73, '', 21, false)), J$.T(89, ' ', 21, false), 0), replacementText, 0));
                            } else {
                                J$.X1(137, J$.M(129, J$.R(113, 'console', console, 2), 'log', 0)(J$.T(121, 2, 22, false)));
                                J$.X1(193, replacementText = J$.W(185, 'replacementText', J$.B(26, '+', J$.T(145, ' ', 21, false), J$.M(177, J$.R(153, 'replacementText', replacementText, 0), 'replace', 0)(J$.T(161, /\s+$/g, 14, false), J$.T(169, '', 21, false)), 0), replacementText, 0));
                            }
                            if (J$.X1(377, J$.C(16, J$.M(217, J$.T(201, /\s\s$/, 14, false), 'test', 0)(J$.R(209, 'replacementText', replacementText, 0)))))
                                J$.X1(249, J$.M(241, J$.R(225, 'console', console, 2), 'log', 0)(J$.T(233, 3, 22, false)));
                        } catch (J$e) {
                            J$.Ex(385, J$e);
                        } finally {
                            if (J$.Fr(393))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(353, 'fun', J$.T(345, fun, 12, false, 257), 0);
            J$.N(361, 'arg', arg, 0);
            var arg = J$.X1(297, J$.W(289, 'arg', J$.M(281, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(329, J$.F(321, J$.R(305, 'fun', fun, 1), 0)(J$.R(313, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(401, J$e);
        } finally {
            if (J$.Sr(409)) {
                J$.L();
                continue jalangiLabel9;
            } else {
                J$.L();
                break jalangiLabel9;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
