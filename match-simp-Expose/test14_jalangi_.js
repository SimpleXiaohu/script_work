J$.iids = {"8":[9,7,9,65],"9":[2,31,2,45],"10":[9,7,9,35],"16":[9,7,9,65],"17":[2,31,2,45],"18":[9,39,9,65],"24":[8,7,8,18],"25":[2,31,2,45],"32":[3,6,3,9],"33":[3,6,3,9],"41":[5,3,5,10],"49":[5,15,5,16],"57":[5,3,5,17],"59":[5,3,5,14],"65":[5,3,5,18],"73":[6,21,6,24],"81":[6,31,6,53],"89":[6,21,6,54],"91":[6,21,6,30],"97":[6,21,6,54],"105":[6,21,6,54],"113":[7,16,7,20],"121":[7,16,7,20],"129":[7,16,7,20],"137":[8,7,8,18],"145":[9,7,9,18],"153":[9,19,9,20],"161":[9,7,9,21],"169":[9,26,9,35],"177":[9,39,9,50],"185":[9,51,9,52],"193":[9,39,9,53],"201":[9,58,9,65],"209":[10,12,10,17],"217":[10,12,10,17],"225":[10,3,10,18],"233":[1,1,12,2],"241":[1,1,12,2],"249":[1,1,12,2],"257":[1,1,12,2],"265":[1,1,12,2],"273":[1,1,12,2],"281":[13,10,13,17],"289":[13,18,13,22],"297":[13,10,13,23],"305":[13,10,13,23],"313":[13,10,13,23],"321":[15,11,15,13],"329":[15,21,15,26],"337":[15,28,15,30],"345":[15,11,15,31],"347":[15,11,15,20],"353":[15,11,15,31],"361":[15,11,15,31],"369":[16,1,16,11],"377":[16,12,16,15],"385":[16,1,16,16],"393":[16,1,16,17],"401":[1,1,16,17],"409":[1,1,12,2],"417":[1,1,16,17],"425":[1,1,16,17],"433":[1,1,16,17],"441":[9,3,10,18],"449":[8,3,10,18],"457":[3,2,11,3],"465":[1,1,12,2],"473":[1,1,12,2],"481":[1,1,16,17],"489":[1,1,16,17],"nBranches":8,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test14.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test14_jalangi_.js","code":"function test_match(url){\nconst URL_WITH_SCHEMA_REGEXP = /^([^:/?#]+):/;\nif (url)\n{\n\tconsole.log(1);\n\tvar schemeMatch = url.match(URL_WITH_SCHEMA_REGEXP);\n\tvar result = true;\n\tif(schemeMatch)\n\t\tif(schemeMatch[1] !== 'package' && schemeMatch[1] !== 'asset')\n\t\t\tresult = false; \n}\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(401, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test14_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test14.js');
            function test_match(url) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(233, arguments.callee, this, arguments);
                            arguments = J$.N(241, 'arguments', arguments, 4);
                            url = J$.N(249, 'url', url, 4);
                            J$.N(257, 'URL_WITH_SCHEMA_REGEXP', URL_WITH_SCHEMA_REGEXP, 0);
                            J$.N(265, 'schemeMatch', schemeMatch, 0);
                            J$.N(273, 'result', result, 0);
                            var URL_WITH_SCHEMA_REGEXP = J$.X1(25, J$.W(17, 'URL_WITH_SCHEMA_REGEXP', J$.T(9, /^([^:/?#]+):/, 14, false), URL_WITH_SCHEMA_REGEXP, 1));
                            if (J$.X1(457, J$.C(32, J$.R(33, 'url', url, 0)))) {
                                J$.X1(65, J$.M(57, J$.R(41, 'console', console, 2), 'log', 0)(J$.T(49, 1, 22, false)));
                                var schemeMatch = J$.X1(105, J$.W(97, 'schemeMatch', J$.M(89, J$.R(73, 'url', url, 0), 'match', 0)(J$.R(81, 'URL_WITH_SCHEMA_REGEXP', URL_WITH_SCHEMA_REGEXP, 0)), schemeMatch, 1));
                                var result = J$.X1(129, J$.W(121, 'result', J$.T(113, true, 23, false), result, 1));
                                if (J$.X1(449, J$.C(24, J$.R(137, 'schemeMatch', schemeMatch, 0))))
                                    if (J$.X1(441, J$.C(16, J$.C(8, J$.B(10, '!==', J$.G(161, J$.R(145, 'schemeMatch', schemeMatch, 0), J$.T(153, 1, 22, false), 4), J$.T(169, 'package', 21, false), 0)) ? J$.B(18, '!==', J$.G(193, J$.R(177, 'schemeMatch', schemeMatch, 0), J$.T(185, 1, 22, false), 4), J$.T(201, 'asset', 21, false), 0) : J$._())))
                                    J$.X1(225, result = J$.W(217, 'result', J$.T(209, false, 23, false), result, 0));
                            }
                        } catch (J$e) {
                            J$.Ex(465, J$e);
                        } finally {
                            if (J$.Fr(473))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(417, 'test_match', J$.T(409, test_match, 12, false, 233), 0);
            J$.N(425, 'S$', S$, 0);
            J$.N(433, 'arg', arg, 0);
            var S$ = J$.X1(313, J$.W(305, 'S$', J$.F(297, J$.R(281, 'require', require, 2), 0)(J$.T(289, "S$", 21, false)), S$, 3));
            var arg = J$.X1(361, J$.W(353, 'arg', J$.M(345, J$.R(321, 'S$', S$, 1), 'symbol', 0)(J$.T(329, "arg", 21, false), J$.T(337, "", 21, false)), arg, 3));
            J$.X1(393, J$.F(385, J$.R(369, 'test_match', test_match, 1), 0)(J$.R(377, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(481, J$e);
        } finally {
            if (J$.Sr(489)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
