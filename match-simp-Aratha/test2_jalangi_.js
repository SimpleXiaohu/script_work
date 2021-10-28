J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test2.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test2_jalangi_.js"};
jalangiLabel9:
    while (true) {
        try {
            J$.Se(321, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test2_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test2.js');
            function test_match(presetName) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(217, arguments.callee, this, arguments);
                            arguments = J$.N(225, 'arguments', arguments, 4);
                            presetName = J$.N(233, 'presetName', presetName, 4);
                            J$.N(241, 'matches', matches, 0);
                            J$.N(249, 'orgName', orgName, 0);
                            J$.N(257, 'presetPath', presetPath, 0);
                            var matches = J$.X1(41, J$.W(33, 'matches', J$.M(25, J$.R(9, 'presetName', presetName, 0), 'match', 0)(J$.T(17, /^(@[^/]+)\/(.+)$/, 14, false)), matches, 1));
                            if (J$.X1(361, J$.C(16, J$.R(49, 'matches', matches, 0)))) {
                                J$.X1(81, J$.M(73, J$.R(57, 'console', console, 2), 'log', 0)(J$.T(65, 1, 22, false)));
                                var orgName = J$.X1(145, J$.W(137, 'orgName', J$.G(105, J$.R(89, 'matches', matches, 0), J$.T(97, 1, 22, false), 4), orgName, 1)), presetPath = J$.X1(161, J$.W(153, 'presetPath', J$.G(129, J$.R(113, 'matches', matches, 0), J$.T(121, 2, 22, false), 4), presetPath, 1));
                                if (J$.X1(353, J$.C(8, J$.B(10, '!==', J$.R(169, 'presetPath', presetPath, 0), J$.T(177, '', 21, false), 0))))
                                    J$.X1(209, J$.M(201, J$.R(185, 'console', console, 2), 'log', 0)(J$.T(193, 2, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(369, J$e);
                        } finally {
                            if (J$.Fr(377))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(337, 'test_match', J$.T(329, test_match, 12, false, 217), 0);
            J$.N(345, 'arg', arg, 0);
            var arg = J$.X1(281, J$.W(273, 'arg', J$.M(265, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(313, J$.F(305, J$.R(289, 'test_match', test_match, 1), 0)(J$.R(297, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(385, J$e);
        } finally {
            if (J$.Sr(393)) {
                J$.L();
                continue jalangiLabel9;
            } else {
                J$.L();
                break jalangiLabel9;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
