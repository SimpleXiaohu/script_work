J$.iids = {"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test10.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test10_jalangi_.js"};
jalangiLabel7:
    while (true) {
        try {
            J$.Se(329, '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test10_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test10.js');
            function fun(localident) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(233, arguments.callee, this, arguments);
                            arguments = J$.N(241, 'arguments', arguments, 4);
                            localident = J$.N(249, 'localident', localident, 4);
                            J$.N(257, 'filenameReservedRegex', filenameReservedRegex, 0);
                            J$.N(265, 'reControlChars', reControlChars, 0);
                            var filenameReservedRegex = J$.X1(25, J$.W(17, 'filenameReservedRegex', J$.T(9, /[<>:"/\\|?*]/g, 14, false), filenameReservedRegex, 1));
                            var reControlChars = J$.X1(49, J$.W(41, 'reControlChars', J$.T(33, /[\u0000-\u001f\u0080-\u009f]/g, 14, false), reControlChars, 1));
                            J$.X1(169, localident = J$.W(161, 'localident', J$.M(153, J$.M(129, J$.M(105, J$.M(81, J$.R(57, 'localident', localident, 0), 'replace', 0)(J$.T(65, /^((-?[0-9])|--)/, 14, false), J$.T(73, "_$1", 21, false)), 'replace', 0)(J$.R(89, 'filenameReservedRegex', filenameReservedRegex, 0), J$.T(97, "-", 21, false)), 'replace', 0)(J$.R(113, 'reControlChars', reControlChars, 0), J$.T(121, "-", 21, false)), 'replace', 0)(J$.T(137, /\./g, 14, false), J$.T(145, "-", 21, false)), localident, 0));
                            if (J$.X1(361, J$.C(8, J$.M(193, J$.T(177, /</, 14, false), 'test', 0)(J$.R(185, 'localident', localident, 0)))))
                                J$.X1(225, J$.M(217, J$.R(201, 'console', console, 2), 'log', 0)(J$.T(209, "1", 21, false)));
                        } catch (J$e) {
                            J$.Ex(369, J$e);
                        } finally {
                            if (J$.Fr(377))
                                continue jalangiLabel6;
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
            J$.Ex(385, J$e);
        } finally {
            if (J$.Sr(393)) {
                J$.L();
                continue jalangiLabel7;
            } else {
                J$.L();
                break jalangiLabel7;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
