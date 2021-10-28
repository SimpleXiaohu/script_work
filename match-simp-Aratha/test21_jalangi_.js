J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test21.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test21_jalangi_.js"};
jalangiLabel9:
    while (true) {
        try {
            J$.Se(361, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test21_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test21.js');
            function test_match(text) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(249, arguments.callee, this, arguments);
                            arguments = J$.N(257, 'arguments', arguments, 4);
                            text = J$.N(265, 'text', text, 4);
                            J$.N(273, 'HTML_ENTITY_REGEX', HTML_ENTITY_REGEX, 0);
                            J$.N(281, 'HTML_ENTITY', HTML_ENTITY, 0);
                            J$.N(289, 'htmlEntity', htmlEntity, 0);
                            J$.N(297, 'result', result, 0);
                            var HTML_ENTITY_REGEX = J$.X1(25, J$.W(17, 'HTML_ENTITY_REGEX', J$.T(9, /&[A-Za-z\d#]+;/, 14, false), HTML_ENTITY_REGEX, 1));
                            var HTML_ENTITY = J$.X1(49, J$.W(41, 'HTML_ENTITY', J$.T(33, '<HTML_ENTITY>', 21, false), HTML_ENTITY, 1));
                            var htmlEntity = J$.X1(89, J$.W(81, 'htmlEntity', J$.M(73, J$.R(57, 'text', text, 0), 'match', 0)(J$.R(65, 'HTML_ENTITY_REGEX', HTML_ENTITY_REGEX, 0)), htmlEntity, 1));
                            if (J$.X1(401, J$.C(16, J$.R(97, 'htmlEntity', htmlEntity, 0)))) {
                                J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(J$.T(113, 1, 22, false)));
                                var result = J$.X1(193, J$.W(185, 'result', J$.M(177, J$.G(153, J$.R(137, 'htmlEntity', htmlEntity, 0), J$.T(145, 0, 22, false), 4), 'replace', 0)(J$.R(161, 'HTML_ENTITY', HTML_ENTITY, 0), J$.T(169, '', 21, false)), result, 1));
                                if (J$.X1(393, J$.C(8, J$.B(10, '!==', J$.R(201, 'result', result, 0), J$.T(209, '', 21, false), 0))))
                                    J$.X1(241, J$.M(233, J$.R(217, 'console', console, 2), 'log', 0)(J$.T(225, 2, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(409, J$e);
                        } finally {
                            if (J$.Fr(417))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(377, 'test_match', J$.T(369, test_match, 12, false, 249), 0);
            J$.N(385, 'arg', arg, 0);
            var arg = J$.X1(321, J$.W(313, 'arg', J$.M(305, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(353, J$.F(345, J$.R(329, 'test_match', test_match, 1), 0)(J$.R(337, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(425, J$e);
        } finally {
            if (J$.Sr(433)) {
                J$.L();
                continue jalangiLabel9;
            } else {
                J$.L();
                break jalangiLabel9;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
