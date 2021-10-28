J$.iids = {"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test40.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test40_jalangi_.js"};
jalangiLabel9:
    while (true) {
        try {
            J$.Se(305, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test40_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test40.js');
            function test_match(obj) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(209, arguments.callee, this, arguments);
                            arguments = J$.N(217, 'arguments', arguments, 4);
                            obj = J$.N(225, 'obj', obj, 4);
                            J$.N(233, 'reStrSymbol', reStrSymbol, 0);
                            J$.N(241, 'result', result, 0);
                            var reStrSymbol = J$.X1(25, J$.W(17, 'reStrSymbol', J$.T(9, /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/, 14, false), reStrSymbol, 1));
                            var result = J$.X1(49, J$.W(41, 'result', J$.T(33, '', 21, false), result, 1));
                            if (J$.X1(345, J$.C(24, J$.R(57, 'obj', obj, 0)))) {
                                J$.X1(89, J$.M(81, J$.R(65, 'console', console, 2), 'log', 0)(J$.T(73, 1, 22, false)));
                                J$.X1(129, result = J$.W(121, 'result', J$.M(113, J$.R(97, 'obj', obj, 0), 'match', 0)(J$.R(105, 'reStrSymbol', reStrSymbol, 0)), result, 0));
                                if (J$.X1(337, J$.C(16, J$.C(8, J$.R(137, 'result', result, 0)) ? J$.B(10, '!==', J$.G(161, J$.R(145, 'result', result, 0), J$.T(153, 0, 22, false), 4), J$.T(169, "", 21, false), 0) : J$._())))
                                    J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, 2, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(353, J$e);
                        } finally {
                            if (J$.Fr(361))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(321, 'test_match', J$.T(313, test_match, 12, false, 209), 0);
            J$.N(329, 'arg', arg, 0);
            var arg = J$.X1(265, J$.W(257, 'arg', J$.M(249, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(297, J$.F(289, J$.R(273, 'test_match', test_match, 1), 0)(J$.R(281, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(369, J$e);
        } finally {
            if (J$.Sr(377)) {
                J$.L();
                continue jalangiLabel9;
            } else {
                J$.L();
                break jalangiLabel9;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
