J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test43.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test43_jalangi_.js"};
jalangiLabel7:
    while (true) {
        try {
            J$.Se(329, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test43_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test43.js');
            function test_match(exp) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(217, arguments.callee, this, arguments);
                            arguments = J$.N(225, 'arguments', arguments, 4);
                            exp = J$.N(233, 'exp', exp, 4);
                            J$.N(241, 'unaryOperatorsRE', unaryOperatorsRE, 0);
                            J$.N(249, 'stripStringRE', stripStringRE, 0);
                            J$.N(257, 'stripped', stripped, 0);
                            J$.N(265, 'keywordMatch', keywordMatch, 0);
                            var unaryOperatorsRE = J$.X1(25, J$.W(17, 'unaryOperatorsRE', J$.T(9, /\\s*\\([^\\)]*\\)|\\b\\s*\\([^\\)]*\\)/, 14, false), unaryOperatorsRE, 1));
                            var stripStringRE = J$.X1(49, J$.W(41, 'stripStringRE', J$.T(33, /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g, 14, false), stripStringRE, 1));
                            var stripped = J$.X1(97, J$.W(89, 'stripped', J$.M(81, J$.R(57, 'exp', exp, 0), 'replace', 0)(J$.R(65, 'stripStringRE', stripStringRE, 0), J$.T(73, '', 21, false)), stripped, 1));
                            var keywordMatch = J$.X1(137, J$.W(129, 'keywordMatch', J$.M(121, J$.R(105, 'stripped', stripped, 0), 'match', 0)(J$.R(113, 'unaryOperatorsRE', unaryOperatorsRE, 0)), keywordMatch, 1));
                            if (J$.X1(361, J$.C(16, J$.C(8, J$.R(145, 'keywordMatch', keywordMatch, 0)) ? J$.B(10, '!==', J$.M(169, J$.R(153, 'stripped', stripped, 0), 'charAt', 0)(J$.T(161, 0, 22, false)), J$.T(177, '$', 21, false), 0) : J$._()))) {
                                J$.X1(209, J$.M(201, J$.R(185, 'console', console, 2), 'log', 0)(J$.T(193, 1, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(369, J$e);
                        } finally {
                            if (J$.Fr(377))
                                continue jalangiLabel6;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(345, 'test_match', J$.T(337, test_match, 12, false, 217), 0);
            J$.N(353, 'arg', arg, 0);
            var arg = J$.X1(289, J$.W(281, 'arg', J$.M(273, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(321, J$.F(313, J$.R(297, 'test_match', test_match, 1), 0)(J$.R(305, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(385, J$e);
        } finally {
            if (J$.Sr(393)) {
                J$.L();
                continue jalangiLabel7;
            } else {
                J$.L();
                break jalangiLabel7;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
