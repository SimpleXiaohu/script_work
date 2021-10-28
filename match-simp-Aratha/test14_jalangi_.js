J$.iids = {"nBranches":8,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test14.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test14_jalangi_.js"};
jalangiLabel15:
    while (true) {
        try {
            J$.Se(337, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test14_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test14.js');
            function test_match(url) {
                jalangiLabel14:
                    while (true) {
                        try {
                            J$.Fe(233, arguments.callee, this, arguments);
                            arguments = J$.N(241, 'arguments', arguments, 4);
                            url = J$.N(249, 'url', url, 4);
                            J$.N(257, 'URL_WITH_SCHEMA_REGEXP', URL_WITH_SCHEMA_REGEXP, 0);
                            J$.N(265, 'schemeMatch', schemeMatch, 0);
                            J$.N(273, 'result', result, 0);
                            var URL_WITH_SCHEMA_REGEXP = J$.X1(25, J$.W(17, 'URL_WITH_SCHEMA_REGEXP', J$.T(9, /^([^:/?#]+):/, 14, false), URL_WITH_SCHEMA_REGEXP, 1));
                            if (J$.X1(385, J$.C(32, J$.R(33, 'url', url, 0)))) {
                                J$.X1(65, J$.M(57, J$.R(41, 'console', console, 2), 'log', 0)(J$.T(49, 1, 22, false)));
                                var schemeMatch = J$.X1(105, J$.W(97, 'schemeMatch', J$.M(89, J$.R(73, 'url', url, 0), 'match', 0)(J$.R(81, 'URL_WITH_SCHEMA_REGEXP', URL_WITH_SCHEMA_REGEXP, 0)), schemeMatch, 1));
                                var result = J$.X1(129, J$.W(121, 'result', J$.T(113, true, 23, false), result, 1));
                                if (J$.X1(377, J$.C(24, J$.R(137, 'schemeMatch', schemeMatch, 0))))
                                    if (J$.X1(369, J$.C(16, J$.C(8, J$.B(10, '!==', J$.G(161, J$.R(145, 'schemeMatch', schemeMatch, 0), J$.T(153, 1, 22, false), 4), J$.T(169, 'package', 21, false), 0)) ? J$.B(18, '!==', J$.G(193, J$.R(177, 'schemeMatch', schemeMatch, 0), J$.T(185, 1, 22, false), 4), J$.T(201, 'asset', 21, false), 0) : J$._())))
                                    J$.X1(225, result = J$.W(217, 'result', J$.T(209, false, 23, false), result, 0));
                            }
                        } catch (J$e) {
                            J$.Ex(393, J$e);
                        } finally {
                            if (J$.Fr(401))
                                continue jalangiLabel14;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(353, 'test_match', J$.T(345, test_match, 12, false, 233), 0);
            J$.N(361, 'arg', arg, 0);
            var arg = J$.X1(297, J$.W(289, 'arg', J$.M(281, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(329, J$.F(321, J$.R(305, 'test_match', test_match, 1), 0)(J$.R(313, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(409, J$e);
        } finally {
            if (J$.Sr(417)) {
                J$.L();
                continue jalangiLabel15;
            } else {
                J$.L();
                break jalangiLabel15;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
