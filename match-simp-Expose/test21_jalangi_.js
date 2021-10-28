J$.iids = {"8":[8,11,8,24],"9":[2,28,2,44],"10":[8,11,8,24],"16":[5,8,5,18],"17":[2,28,2,44],"25":[2,28,2,44],"33":[3,22,3,37],"41":[3,22,3,37],"49":[3,22,3,37],"57":[4,21,4,25],"65":[4,32,4,49],"73":[4,21,4,50],"75":[4,21,4,31],"81":[4,21,4,50],"89":[4,21,4,50],"97":[5,8,5,18],"105":[6,7,6,14],"113":[6,19,6,20],"121":[6,7,6,21],"123":[6,7,6,18],"129":[6,7,6,22],"137":[7,20,7,30],"145":[7,31,7,32],"153":[7,20,7,33],"161":[7,42,7,53],"169":[7,55,7,57],"177":[7,20,7,58],"179":[7,20,7,41],"185":[7,20,7,58],"193":[7,20,7,58],"201":[8,11,8,17],"209":[8,22,8,24],"217":[8,26,8,33],"225":[8,38,8,39],"233":[8,26,8,40],"235":[8,26,8,37],"241":[8,26,8,41],"249":[1,1,10,2],"257":[1,1,10,2],"265":[1,1,10,2],"273":[1,1,10,2],"281":[1,1,10,2],"289":[1,1,10,2],"297":[1,1,10,2],"305":[11,10,11,17],"313":[11,18,11,22],"321":[11,10,11,23],"329":[11,10,11,23],"337":[11,10,11,23],"345":[13,11,13,13],"353":[13,21,13,26],"361":[13,28,13,30],"369":[13,11,13,31],"371":[13,11,13,20],"377":[13,11,13,31],"385":[13,11,13,31],"393":[14,1,14,11],"401":[14,12,14,15],"409":[14,1,14,16],"417":[14,1,14,17],"425":[1,1,14,17],"433":[1,1,10,2],"441":[1,1,14,17],"449":[1,1,14,17],"457":[1,1,14,17],"465":[8,7,8,41],"473":[5,4,9,5],"481":[1,1,10,2],"489":[1,1,10,2],"497":[1,1,14,17],"505":[1,1,14,17],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test21.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test21_jalangi_.js","code":"function test_match(text){\n   const HTML_ENTITY_REGEX = /&[A-Za-z\\d#]+;/;\n   const HTML_ENTITY = '<HTML_ENTITY>';\n   const htmlEntity = text.match(HTML_ENTITY_REGEX);\n   if(htmlEntity){\n      console.log(1);\n      var result = htmlEntity[0].replace(HTML_ENTITY,'');\n      if(result!== '') console.log(2);\n   }\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(425, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test21_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test21.js');
            function test_match(text) {
                jalangiLabel0:
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
                            if (J$.X1(473, J$.C(16, J$.R(97, 'htmlEntity', htmlEntity, 0)))) {
                                J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(J$.T(113, 1, 22, false)));
                                var result = J$.X1(193, J$.W(185, 'result', J$.M(177, J$.G(153, J$.R(137, 'htmlEntity', htmlEntity, 0), J$.T(145, 0, 22, false), 4), 'replace', 0)(J$.R(161, 'HTML_ENTITY', HTML_ENTITY, 0), J$.T(169, '', 21, false)), result, 1));
                                if (J$.X1(465, J$.C(8, J$.B(10, '!==', J$.R(201, 'result', result, 0), J$.T(209, '', 21, false), 0))))
                                    J$.X1(241, J$.M(233, J$.R(217, 'console', console, 2), 'log', 0)(J$.T(225, 2, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(481, J$e);
                        } finally {
                            if (J$.Fr(489))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(441, 'test_match', J$.T(433, test_match, 12, false, 249), 0);
            J$.N(449, 'S$', S$, 0);
            J$.N(457, 'arg', arg, 0);
            var S$ = J$.X1(337, J$.W(329, 'S$', J$.F(321, J$.R(305, 'require', require, 2), 0)(J$.T(313, "S$", 21, false)), S$, 3));
            var arg = J$.X1(385, J$.W(377, 'arg', J$.M(369, J$.R(345, 'S$', S$, 1), 'symbol', 0)(J$.T(353, "arg", 21, false), J$.T(361, "", 21, false)), arg, 3));
            J$.X1(417, J$.F(409, J$.R(393, 'test_match', test_match, 1), 0)(J$.R(401, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(497, J$e);
        } finally {
            if (J$.Sr(505)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
