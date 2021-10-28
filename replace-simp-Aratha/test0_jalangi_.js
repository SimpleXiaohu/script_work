J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test0.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test0_jalangi_.js"};
jalangiLabel7:
    while (true) {
        try {
            J$.Se(441, '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test0_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test0.js');
            function fun(value) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(321, arguments.callee, this, arguments);
                            arguments = J$.N(329, 'arguments', arguments, 4);
                            value = J$.N(337, 'value', value, 4);
                            J$.N(345, 'FN_ARGS', FN_ARGS, 0);
                            J$.N(353, 'ARROW_FN_ARGS', ARROW_FN_ARGS, 0);
                            J$.N(361, 'STRIP_COMMENTS', STRIP_COMMENTS, 0);
                            J$.N(369, 'src', src, 0);
                            J$.N(377, 'match', match, 0);
                            var FN_ARGS = J$.X1(25, J$.W(17, 'FN_ARGS', J$.T(9, /^(?:async\s+)?(?:function)?\s*\w*\s*\(\s*([^)]+)\s*\)(?:\s*{)/, 14, false), FN_ARGS, 1));
                            var ARROW_FN_ARGS = J$.X1(49, J$.W(41, 'ARROW_FN_ARGS', J$.T(33, /^(?:async\s+)?\(?\s*([^)=]+)\s*\)?(?:\s*=>)/, 14, false), ARROW_FN_ARGS, 1));
                            var STRIP_COMMENTS = J$.X1(73, J$.W(65, 'STRIP_COMMENTS', J$.T(57, /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/g, 14, false), STRIP_COMMENTS, 1));
                            var src = J$.X1(121, J$.W(113, 'src', J$.M(105, J$.R(81, 'value', value, 0), 'replace', 0)(J$.R(89, 'STRIP_COMMENTS', STRIP_COMMENTS, 0), J$.T(97, '', 21, false)), src, 1));
                            var match = J$.X1(161, J$.W(153, 'match', J$.M(145, J$.R(129, 'src', src, 0), 'match', 0)(J$.R(137, 'FN_ARGS', FN_ARGS, 0)), match, 1));
                            if (J$.X1(481, J$.C(16, J$.U(10, '!', J$.R(169, 'match', match, 0))))) {
                                J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, 1, 22, false)));
                                J$.X1(241, match = J$.W(233, 'match', J$.M(225, J$.R(209, 'src', src, 0), 'match', 0)(J$.R(217, 'ARROW_FN_ARGS', ARROW_FN_ARGS, 0)), match, 0));
                                if (J$.X1(473, J$.C(8, J$.M(281, J$.T(249, /=/, 14, false), 'test', 0)(J$.G(273, J$.R(257, 'match', match, 0), J$.T(265, 0, 22, false), 4)))))
                                    J$.X1(313, J$.M(305, J$.R(289, 'console', console, 2), 'log', 0)(J$.T(297, 2, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(489, J$e);
                        } finally {
                            if (J$.Fr(497))
                                continue jalangiLabel6;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(457, 'fun', J$.T(449, fun, 12, false, 321), 0);
            J$.N(465, 'arg', arg, 0);
            var arg = J$.X1(401, J$.W(393, 'arg', J$.M(385, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(433, J$.F(425, J$.R(409, 'fun', fun, 1), 0)(J$.R(417, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(505, J$e);
        } finally {
            if (J$.Sr(513)) {
                J$.L();
                continue jalangiLabel7;
            } else {
                J$.L();
                break jalangiLabel7;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
