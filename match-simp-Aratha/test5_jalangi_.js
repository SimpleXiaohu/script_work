J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test5.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test5_jalangi_.js"};
jalangiLabel9:
    while (true) {
        try {
            J$.Se(385, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test5_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test5.js');
            function test_match(constructorFn) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(281, arguments.callee, this, arguments);
                            arguments = J$.N(289, 'arguments', arguments, 4);
                            constructorFn = J$.N(297, 'constructorFn', constructorFn, 4);
                            J$.N(305, 'functionNameMatch', functionNameMatch, 0);
                            J$.N(313, 'name', name, 0);
                            J$.N(321, 'match', match, 0);
                            var functionNameMatch = J$.X1(25, J$.W(17, 'functionNameMatch', J$.T(9, /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\(\/]+)/, 14, false), functionNameMatch, 1));
                            var name = J$.X1(49, J$.W(41, 'name', J$.T(33, '', 21, false), name, 1));
                            var match = J$.X1(89, J$.W(81, 'match', J$.M(73, J$.R(57, 'constructorFn', constructorFn, 0), 'match', 0)(J$.R(65, 'functionNameMatch', functionNameMatch, 0)), match, 1));
                            if (J$.X1(417, J$.C(8, J$.R(97, 'match', match, 0)))) {
                                J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(J$.T(113, 1, 22, false)));
                                J$.X1(169, name = J$.W(161, 'name', J$.G(153, J$.R(137, 'match', match, 0), J$.T(145, 1, 22, false), 4), name, 0));
                            } else {
                                J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, 2, 22, false)));
                                J$.X1(225, name = J$.W(217, 'name', J$.T(209, '', 21, false), name, 0));
                            }
                            if (J$.X1(425, J$.C(16, J$.B(10, '!==', J$.R(233, 'name', name, 0), J$.T(241, '', 21, false), 0))))
                                J$.X1(273, J$.M(265, J$.R(249, 'console', console, 2), 'log', 0)(J$.T(257, 3, 22, false)));
                        } catch (J$e) {
                            J$.Ex(433, J$e);
                        } finally {
                            if (J$.Fr(441))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(401, 'test_match', J$.T(393, test_match, 12, false, 281), 0);
            J$.N(409, 'arg', arg, 0);
            var arg = J$.X1(345, J$.W(337, 'arg', J$.M(329, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(377, J$.F(369, J$.R(353, 'test_match', test_match, 1), 0)(J$.R(361, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(449, J$e);
        } finally {
            if (J$.Sr(457)) {
                J$.L();
                continue jalangiLabel9;
            } else {
                J$.L();
                break jalangiLabel9;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
