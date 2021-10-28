J$.iids = {"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test32.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test32_jalangi_.js"};
jalangiLabel9:
    while (true) {
        try {
            J$.Se(225, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test32_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test32.js');
            function test_match(opt) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(145, arguments.callee, this, arguments);
                            arguments = J$.N(153, 'arguments', arguments, 4);
                            opt = J$.N(161, 'opt', opt, 4);
                            if (J$.X1(257, J$.C(8, J$.M(25, J$.R(9, 'opt', opt, 0), 'match', 0)(J$.T(17, /^(es|es6|es7|esnext|web)\./, 14, false))))) {
                                J$.X1(49, target = J$.W(41, 'target', J$.T(33, "builtIns", 21, false), J$.I(typeof target === 'undefined' ? undefined : target), 4));
                                J$.X1(81, J$.M(73, J$.R(57, 'console', console, 2), 'log', 0)(J$.T(65, 1, 22, false)));
                            } else {
                                J$.X1(105, target = J$.W(97, 'target', J$.T(89, "plugins", 21, false), J$.I(typeof target === 'undefined' ? undefined : target), 4));
                                J$.X1(137, J$.M(129, J$.R(113, 'console', console, 2), 'log', 0)(J$.T(121, 2, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(265, J$e);
                        } finally {
                            if (J$.Fr(273))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(241, 'test_match', J$.T(233, test_match, 12, false, 145), 0);
            J$.N(249, 'arg', arg, 0);
            var arg = J$.X1(185, J$.W(177, 'arg', J$.M(169, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(217, J$.F(209, J$.R(193, 'test_match', test_match, 1), 0)(J$.R(201, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(281, J$e);
        } finally {
            if (J$.Sr(289)) {
                J$.L();
                continue jalangiLabel9;
            } else {
                J$.L();
                break jalangiLabel9;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
