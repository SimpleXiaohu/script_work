J$.iids = {"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test39.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test39_jalangi_.js"};
jalangiLabel9:
    while (true) {
        try {
            J$.Se(233, '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test39_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test39.js');
            function fun(trace) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(137, arguments.callee, this, arguments);
                            arguments = J$.N(145, 'arguments', arguments, 4);
                            trace = J$.N(153, 'trace', trace, 4);
                            J$.N(161, 'filenameRE', filenameRE, 0);
                            J$.N(169, 'm', m, 0);
                            var filenameRE = J$.X1(25, J$.W(17, 'filenameRE', J$.T(9, /\(^webpack:\/\/\/([^)]+\.js):(\d+):(\d+)\)$/, 14, false), filenameRE, 1));
                            var m = J$.X1(73, J$.W(65, 'm', J$.M(57, J$.R(33, 'trace', trace, 0), 'replace', 0)(J$.R(41, 'filenameRE', filenameRE, 0), J$.T(49, '$1:$2:$3', 21, false)), m, 1));
                            if (J$.X1(265, J$.C(8, J$.M(97, J$.T(81, /::/, 14, false), 'test', 0)(J$.R(89, 'm', m, 0)))))
                                J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(J$.T(113, "1", 21, false)));
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
            fun = J$.N(249, 'fun', J$.T(241, fun, 12, false, 137), 0);
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
