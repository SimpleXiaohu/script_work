J$.iids = {"8":[16,9,16,16],"9":[3,28,3,92],"16":[10,9,10,16],"17":[3,28,3,92],"25":[3,28,3,92],"33":[5,5,5,139],"41":[5,5,5,139],"49":[5,5,5,139],"57":[7,19,7,22],"65":[7,29,7,45],"73":[7,19,7,46],"75":[7,19,7,28],"81":[7,19,7,46],"89":[7,19,7,46],"97":[8,19,8,22],"105":[8,29,8,45],"113":[8,19,8,46],"115":[8,19,8,28],"121":[8,19,8,46],"129":[8,19,8,46],"137":[9,18,9,20],"145":[9,18,9,20],"153":[9,18,9,20],"161":[10,9,10,16],"169":[12,9,12,16],"177":[12,21,12,22],"185":[12,9,12,23],"187":[12,9,12,20],"193":[12,9,12,24],"201":[13,18,13,25],"209":[13,26,13,27],"217":[13,18,13,28],"225":[13,18,13,28],"233":[13,9,13,29],"241":[16,9,16,16],"249":[18,9,18,16],"257":[18,21,18,22],"265":[18,9,18,23],"267":[18,9,18,20],"273":[18,9,18,24],"281":[19,18,19,25],"289":[19,26,19,27],"297":[19,18,19,28],"305":[19,18,19,28],"313":[19,9,19,29],"321":[1,1,21,2],"329":[1,1,21,2],"337":[1,1,21,2],"345":[1,1,21,2],"353":[1,1,21,2],"361":[1,1,21,2],"369":[1,1,21,2],"377":[1,1,21,2],"385":[22,10,22,17],"393":[22,18,22,22],"401":[22,10,22,23],"409":[22,10,22,23],"417":[22,10,22,23],"425":[24,11,24,13],"433":[24,21,24,26],"441":[24,28,24,30],"449":[24,11,24,31],"451":[24,11,24,20],"457":[24,11,24,31],"465":[24,11,24,31],"473":[25,1,25,11],"481":[25,12,25,15],"489":[25,1,25,16],"497":[25,1,25,17],"505":[1,1,25,17],"513":[1,1,21,2],"521":[1,1,25,17],"529":[1,1,25,17],"537":[1,1,25,17],"545":[16,5,20,6],"553":[10,5,20,6],"561":[1,1,21,2],"569":[1,1,21,2],"577":[1,1,25,17],"585":[1,1,25,17],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test15.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test15_jalangi_.js","code":"function test_match(url){\n\nconst SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/i;\nconst DATA_URL_PATTERN =\n    /^data:(?:image\\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\\/(?:mpeg|mp4|ogg|webm)|audio\\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\\/]+=*$/i;\n\nvar result1 = url.match(SAFE_URL_PATTERN);\nvar result2 = url.match(DATA_URL_PATTERN);\nvar result = '';\nif (result1)\n{\n    console.log(1);\n\tresult = result1[0]; \n\t\n}\nelse if(result2)\n{\n    console.log(2);\n     result = result2[0];\t\n}\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(505, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test15_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test15.js');
            function test_match(url) {
                jalangiLabel0:
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
                            if (J$.X1(553, J$.C(16, J$.R(161, 'result1', result1, 0)))) {
                                J$.X1(193, J$.M(185, J$.R(169, 'console', console, 2), 'log', 0)(J$.T(177, 1, 22, false)));
                                J$.X1(233, result = J$.W(225, 'result', J$.G(217, J$.R(201, 'result1', result1, 0), J$.T(209, 0, 22, false), 4), result, 0));
                            } else if (J$.X1(545, J$.C(8, J$.R(241, 'result2', result2, 0)))) {
                                J$.X1(273, J$.M(265, J$.R(249, 'console', console, 2), 'log', 0)(J$.T(257, 2, 22, false)));
                                J$.X1(313, result = J$.W(305, 'result', J$.G(297, J$.R(281, 'result2', result2, 0), J$.T(289, 0, 22, false), 4), result, 0));
                            }
                        } catch (J$e) {
                            J$.Ex(561, J$e);
                        } finally {
                            if (J$.Fr(569))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(521, 'test_match', J$.T(513, test_match, 12, false, 321), 0);
            J$.N(529, 'S$', S$, 0);
            J$.N(537, 'arg', arg, 0);
            var S$ = J$.X1(417, J$.W(409, 'S$', J$.F(401, J$.R(385, 'require', require, 2), 0)(J$.T(393, "S$", 21, false)), S$, 3));
            var arg = J$.X1(465, J$.W(457, 'arg', J$.M(449, J$.R(425, 'S$', S$, 1), 'symbol', 0)(J$.T(433, "arg", 21, false), J$.T(441, "", 21, false)), arg, 3));
            J$.X1(497, J$.F(489, J$.R(473, 'test_match', test_match, 1), 0)(J$.R(481, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(577, J$e);
        } finally {
            if (J$.Sr(585)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
