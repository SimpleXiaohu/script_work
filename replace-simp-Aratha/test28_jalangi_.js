J$.iids = {"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test28.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test28_jalangi_.js"};
jalangiLabel9:
    while (true) {
        try {
            J$.Se(233, '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test28_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test28.js');
            function fun(stringValue) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(153, arguments.callee, this, arguments);
                            arguments = J$.N(161, 'arguments', arguments, 4);
                            stringValue = J$.N(169, 'stringValue', stringValue, 4);
                            J$.X1(49, stringValue = J$.W(41, 'stringValue', J$.M(33, J$.R(9, 'stringValue', stringValue, 0), 'replace', 0)(J$.T(17, /^'|'$/g, 14, false), J$.T(25, '"', 21, false)), stringValue, 0));
                            if (J$.X1(265, J$.C(8, J$.U(10, '!', J$.M(73, J$.T(57, /^"/, 14, false), 'test', 0)(J$.R(65, 'stringValue', stringValue, 0)))))) {
                                J$.X1(105, J$.M(97, J$.R(81, 'console', console, 2), 'log', 0)(J$.T(89, 1, 22, false)));
                                J$.X1(145, stringValue = J$.W(137, 'stringValue', J$.B(26, '+', J$.B(18, '+', J$.T(113, '"', 21, false), J$.R(121, 'stringValue', stringValue, 0), 0), J$.T(129, '"', 21, false), 0), stringValue, 0));
                            }
                        } catch (J$e) {
                            J$.Ex(273, J$e);
                        } finally {
                            if (J$.Fr(281))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(249, 'fun', J$.T(241, fun, 12, false, 153), 0);
            J$.N(257, 'arg', arg, 0);
            var arg = J$.X1(193, J$.W(185, 'arg', J$.M(177, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(225, J$.F(217, J$.R(201, 'fun', fun, 1), 0)(J$.R(209, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(289, J$e);
        } finally {
            if (J$.Sr(297)) {
                J$.L();
                continue jalangiLabel9;
            } else {
                J$.L();
                break jalangiLabel9;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
