J$.iids = {"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test11.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test11_jalangi_.js"};
jalangiLabel9:
    while (true) {
        try {
            J$.Se(249, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test11_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test11.js');
            function test_match(input) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(153, arguments.callee, this, arguments);
                            arguments = J$.N(161, 'arguments', arguments, 4);
                            input = J$.N(169, 'input', input, 4);
                            J$.N(177, '_commentWithHashRe', _commentWithHashRe, 0);
                            J$.N(185, 'match', match, 0);
                            var _commentWithHashRe = J$.X1(25, J$.W(17, '_commentWithHashRe', J$.T(9, /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g, 14, false), _commentWithHashRe, 1));
                            var match = J$.X1(73, J$.W(65, 'match', J$.C(8, J$.M(49, J$.R(33, 'input', input, 0), 'match', 0)(J$.R(41, '_commentWithHashRe', _commentWithHashRe, 0))) ? J$._() : J$.T(57, [], 10, false), match, 1));
                            if (J$.X1(281, J$.C(24, J$.C(16, J$.R(81, 'match', match, 0)) ? J$.B(10, '!==', J$.G(105, J$.R(89, 'match', match, 0), J$.T(97, 1, 22, false), 4), J$.T(113, '', 21, false), 0) : J$._())))
                                J$.X1(145, J$.M(137, J$.R(121, 'console', console, 2), 'log', 0)(J$.T(129, 1, 22, false)));
                        } catch (J$e) {
                            J$.Ex(289, J$e);
                        } finally {
                            if (J$.Fr(297))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(265, 'test_match', J$.T(257, test_match, 12, false, 153), 0);
            J$.N(273, 'arg', arg, 0);
            var arg = J$.X1(209, J$.W(201, 'arg', J$.M(193, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(241, J$.F(233, J$.R(217, 'test_match', test_match, 1), 0)(J$.R(225, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(305, J$e);
        } finally {
            if (J$.Sr(313)) {
                J$.L();
                continue jalangiLabel9;
            } else {
                J$.L();
                break jalangiLabel9;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
