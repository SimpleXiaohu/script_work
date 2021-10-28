J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test15.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Aratha/test15_jalangi_.js"};
jalangiLabel7:
    while (true) {
        try {
            J$.Se(441, '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test15_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Aratha/test15.js');
            function test_match(url) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(321, arguments.callee, this, arguments);
                            arguments = J$.N(329, 'arguments', arguments, 4);
                            url = J$.N(337, 'url', url, 4);
                            J$.N(345, 'SAFE_URL_PATTERN', SAFE_URL_PATTERN, 0);
                            J$.N(353, 'DATA_URL_PATTERN', DATA_URL_PATTERN, 0);
                            J$.N(361, 'result1', result1, 0);
                            J$.N(369, 'result2', result2, 0);
                            J$.N(377, 'result', result, 0);
                            var SAFE_URL_PATTERN = J$.X1(25, J$.W(17, 'SAFE_URL_PATTERN', J$.T(9, /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/i, 14, false), SAFE_URL_PATTERN, 1));
                            var DATA_URL_PATTERN = J$.X1(49, J$.W(41, 'DATA_URL_PATTERN', J$.T(33, /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i, 14, false), DATA_URL_PATTERN, 1));
                            var result1 = J$.X1(89, J$.W(81, 'result1', J$.M(73, J$.R(57, 'url', url, 0), 'match', 0)(J$.R(65, 'SAFE_URL_PATTERN', SAFE_URL_PATTERN, 0)), result1, 1));
                            var result2 = J$.X1(129, J$.W(121, 'result2', J$.M(113, J$.R(97, 'url', url, 0), 'match', 0)(J$.R(105, 'DATA_URL_PATTERN', DATA_URL_PATTERN, 0)), result2, 1));
                            var result = J$.X1(153, J$.W(145, 'result', J$.T(137, '', 21, false), result, 1));
                            if (J$.X1(481, J$.C(16, J$.R(161, 'result1', result1, 0)))) {
                                J$.X1(193, J$.M(185, J$.R(169, 'console', console, 2), 'log', 0)(J$.T(177, 1, 22, false)));
                                J$.X1(233, result = J$.W(225, 'result', J$.G(217, J$.R(201, 'result1', result1, 0), J$.T(209, 0, 22, false), 4), result, 0));
                            } else if (J$.X1(473, J$.C(8, J$.R(241, 'result2', result2, 0)))) {
                                J$.X1(273, J$.M(265, J$.R(249, 'console', console, 2), 'log', 0)(J$.T(257, 2, 22, false)));
                                J$.X1(313, result = J$.W(305, 'result', J$.G(297, J$.R(281, 'result2', result2, 0), J$.T(289, 0, 22, false), 4), result, 0));
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
            test_match = J$.N(457, 'test_match', J$.T(449, test_match, 12, false, 321), 0);
            J$.N(465, 'arg', arg, 0);
            var arg = J$.X1(401, J$.W(393, 'arg', J$.M(385, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(433, J$.F(425, J$.R(409, 'test_match', test_match, 1), 0)(J$.R(417, 'arg', arg, 1)));
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
