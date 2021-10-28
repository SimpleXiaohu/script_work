J$.iids = {"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test31.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test31_jalangi_.js"};
jalangiLabel7:
    while (true) {
        try {
            J$.Se(233, '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test31_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test31.js');
            function fun(device) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(145, arguments.callee, this, arguments);
                            arguments = J$.N(153, 'arguments', arguments, 4);
                            device = J$.N(161, 'device', device, 4);
                            J$.N(169, 'result', result, 0);
                            var result = J$.X1(81, J$.W(73, 'result', J$.B(10, '+', J$.T(9, '\\\\', 21, false), J$.M(65, J$.M(41, J$.R(17, 'device', device, 0), 'replace', 0)(J$.T(25, /^[\\\/]+/, 14, false), J$.T(33, '', 21, false)), 'replace', 0)(J$.T(49, /[\\\/]+/g, 14, false), J$.T(57, '\\', 21, false)), 0), result, 1));
                            if (J$.X1(265, J$.C(8, J$.M(105, J$.T(89, /\//, 14, false), 'test', 0)(J$.R(97, 'result', result, 0)))))
                                J$.X1(137, J$.M(129, J$.R(113, 'console', console, 2), 'log', 0)(J$.T(121, "1", 21, false)));
                        } catch (J$e) {
                            J$.Ex(273, J$e);
                        } finally {
                            if (J$.Fr(281))
                                continue jalangiLabel6;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(249, 'fun', J$.T(241, fun, 12, false, 145), 0);
            J$.N(257, 'arg', arg, 0);
            var arg = J$.X1(193, J$.W(185, 'arg', J$.M(177, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(225, J$.F(217, J$.R(201, 'fun', fun, 1), 0)(J$.R(209, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(289, J$e);
        } finally {
            if (J$.Sr(297)) {
                J$.L();
                continue jalangiLabel7;
            } else {
                J$.L();
                break jalangiLabel7;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
