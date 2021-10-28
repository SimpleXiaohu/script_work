J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test10.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test10_jalangi_.js"};
jalangiLabel11:
    while (true) {
        try {
            J$.Se(297, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test10_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test10.js');
            function test_match(bindingName) {
                jalangiLabel10:
                    while (true) {
                        try {
                            J$.Fe(201, arguments.callee, this, arguments);
                            arguments = J$.N(209, 'arguments', arguments, 4);
                            bindingName = J$.N(217, 'bindingName', bindingName, 4);
                            J$.N(225, 'ATTR_REGEX', ATTR_REGEX, 0);
                            J$.N(233, 'attrMatches', attrMatches, 0);
                            var ATTR_REGEX = J$.X1(25, J$.W(17, 'ATTR_REGEX', J$.T(9, /attr\.([^\]]+)/, 14, false), ATTR_REGEX, 1));
                            var attrMatches = J$.X1(65, J$.W(57, 'attrMatches', J$.M(49, J$.R(33, 'bindingName', bindingName, 0), 'match', 0)(J$.R(41, 'ATTR_REGEX', ATTR_REGEX, 0)), attrMatches, 1));
                            if (J$.X1(329, J$.C(8, J$.R(73, 'attrMatches', attrMatches, 0)))) {
                                J$.X1(105, J$.M(97, J$.R(81, 'console', console, 2), 'log', 0)(J$.T(89, 1, 22, false)));
                                J$.X1(145, bindingName = J$.W(137, 'bindingName', J$.G(129, J$.R(113, 'attrMatches', attrMatches, 0), J$.T(121, 1, 22, false), 4), bindingName, 0));
                            }
                            if (J$.X1(337, J$.C(16, J$.B(10, '!==', J$.R(153, 'bindingName', bindingName, 0), J$.T(161, '', 21, false), 0))))
                                J$.X1(193, J$.M(185, J$.R(169, 'console', console, 2), 'log', 0)(J$.T(177, 2, 22, false)));
                        } catch (J$e) {
                            J$.Ex(345, J$e);
                        } finally {
                            if (J$.Fr(353))
                                continue jalangiLabel10;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(313, 'test_match', J$.T(305, test_match, 12, false, 201), 0);
            J$.N(321, 'arg', arg, 0);
            var arg = J$.X1(257, J$.W(249, 'arg', J$.M(241, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(289, J$.F(281, J$.R(265, 'test_match', test_match, 1), 0)(J$.R(273, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(361, J$e);
        } finally {
            if (J$.Sr(369)) {
                J$.L();
                continue jalangiLabel11;
            } else {
                J$.L();
                break jalangiLabel11;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
