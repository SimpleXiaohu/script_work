J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test3.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test3_jalangi_.js"};
jalangiLabel11:
    while (true) {
        try {
            J$.Se(249, '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test3_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test3.js');
            function fun(value) {
                jalangiLabel10:
                    while (true) {
                        try {
                            J$.Fe(153, arguments.callee, this, arguments);
                            arguments = J$.N(161, 'arguments', arguments, 4);
                            value = J$.N(169, 'value', value, 4);
                            J$.N(177, 'stackFramePattern', stackFramePattern, 0);
                            J$.N(185, 'line', line, 0);
                            var stackFramePattern = J$.X1(25, J$.W(17, 'stackFramePattern', J$.T(9, /^\s*at\s*/, 14, false), stackFramePattern, 1));
                            var line = J$.X1(73, J$.W(65, 'line', J$.M(57, J$.R(33, 'value', value, 0), 'replace', 0)(J$.T(41, /\s+$/g, 14, false), J$.T(49, "", 21, false)), line, 1));
                            if (J$.X1(281, J$.C(16, J$.C(8, J$.B(10, '===', J$.T(81, "    (No stack trace)", 21, false), J$.R(89, 'line', line, 0), 0)) ? J$._() : J$.M(113, J$.R(97, 'stackFramePattern', stackFramePattern, 0), 'test', 0)(J$.R(105, 'line', line, 0))))) {
                                J$.X1(145, J$.M(137, J$.R(121, 'console', console, 2), 'log', 0)(J$.T(129, "1", 21, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(289, J$e);
                        } finally {
                            if (J$.Fr(297))
                                continue jalangiLabel10;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(265, 'fun', J$.T(257, fun, 12, false, 153), 0);
            J$.N(273, 'arg', arg, 0);
            var arg = J$.X1(209, J$.W(201, 'arg', J$.M(193, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(241, J$.F(233, J$.R(217, 'fun', fun, 1), 0)(J$.R(225, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(305, J$e);
        } finally {
            if (J$.Sr(313)) {
                J$.L();
                continue jalangiLabel11;
            } else {
                J$.L();
                break jalangiLabel11;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
