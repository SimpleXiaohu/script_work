J$.iids = {"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test25.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test25_jalangi_.js"};
jalangiLabel9:
    while (true) {
        try {
            J$.Se(217, '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test25_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test25.js');
            function fun(search) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(137, arguments.callee, this, arguments);
                            arguments = J$.N(145, 'arguments', arguments, 4);
                            search = J$.N(153, 'search', search, 4);
                            J$.X1(73, search = J$.W(65, 'search', J$.M(57, J$.M(33, J$.R(9, 'search', search, 0), 'replace', 0)(J$.T(17, /[?&]grep=[^&\s]*/g, 14, false), J$.T(25, '', 21, false)), 'replace', 0)(J$.T(41, /^&/, 14, false), J$.T(49, '?', 21, false)), search, 0));
                            if (J$.X1(249, J$.C(8, J$.M(97, J$.T(81, /=/, 14, false), 'test', 0)(J$.R(89, 'search', search, 0)))))
                                J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(J$.T(113, "1", 21, false)));
                        } catch (J$e) {
                            J$.Ex(257, J$e);
                        } finally {
                            if (J$.Fr(265))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(233, 'fun', J$.T(225, fun, 12, false, 137), 0);
            J$.N(241, 'arg', arg, 0);
            var arg = J$.X1(177, J$.W(169, 'arg', J$.M(161, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(209, J$.F(201, J$.R(185, 'fun', fun, 1), 0)(J$.R(193, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(273, J$e);
        } finally {
            if (J$.Sr(281)) {
                J$.L();
                continue jalangiLabel9;
            } else {
                J$.L();
                break jalangiLabel9;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
