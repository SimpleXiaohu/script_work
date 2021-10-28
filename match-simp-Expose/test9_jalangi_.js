J$.iids = {"8":[5,13,5,36],"9":[2,15,2,17],"10":[9,16,9,47],"16":[3,9,3,13],"17":[2,15,2,17],"18":[9,16,9,47],"24":[11,9,11,19],"25":[2,15,2,17],"26":[11,9,11,19],"33":[3,9,3,13],"41":[4,9,4,16],"49":[4,21,4,22],"57":[4,9,4,23],"59":[4,9,4,20],"65":[4,9,4,24],"73":[5,13,5,17],"81":[5,24,5,35],"89":[5,13,5,36],"91":[5,13,5,23],"97":[6,13,6,20],"105":[6,25,6,26],"113":[6,13,6,27],"115":[6,13,6,24],"121":[6,13,6,28],"129":[7,23,7,28],"137":[7,29,7,70],"145":[7,19,7,71],"153":[7,19,7,71],"161":[7,13,7,72],"169":[9,16,9,19],"177":[9,22,9,26],"185":[9,35,9,39],"193":[9,41,9,46],"201":[9,22,9,47],"203":[9,22,9,34],"209":[9,9,9,12],"217":[9,9,9,47],"225":[9,9,9,48],"233":[11,9,11,12],"241":[11,17,11,19],"249":[11,21,11,28],"257":[11,33,11,34],"265":[11,21,11,35],"267":[11,21,11,32],"273":[11,21,11,36],"281":[1,1,12,2],"289":[1,1,12,2],"297":[1,1,12,2],"305":[1,1,12,2],"313":[13,10,13,17],"321":[13,18,13,22],"329":[13,10,13,23],"337":[13,10,13,23],"345":[13,10,13,23],"353":[15,11,15,13],"361":[15,21,15,26],"369":[15,28,15,30],"377":[15,11,15,31],"379":[15,11,15,20],"385":[15,11,15,31],"393":[15,11,15,31],"401":[16,1,16,11],"409":[16,12,16,15],"417":[16,1,16,16],"425":[16,1,16,17],"433":[1,1,16,17],"441":[1,1,12,2],"449":[1,1,16,17],"457":[1,1,16,17],"465":[1,1,16,17],"473":[5,9,8,10],"481":[3,5,10,6],"489":[11,5,11,36],"497":[1,1,12,2],"505":[1,1,12,2],"513":[1,1,16,17],"521":[1,1,16,17],"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test9.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/match-simp-Expose/test9_jalangi_.js","code":"function test_match(text){\n        var out = '';\n        if (text) {\n            console.log(1);\n            if (text.match(/\\/\\*|\\*\\//)) {\n                console.log(2);\n                throw new Error('JSDoc text cannot contain \"/*\" and \"*/\"');\n            }\n            out += ' ' + text.replace(/@/g, '\\\\@');\n        }\n        if(out!== '') console.log(3);\n}\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\ntest_match(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(433, '/home/popl2022/compare_aratha_expose/match-simp-Expose/test9_jalangi_.js', '/home/popl2022/compare_aratha_expose/match-simp-Expose/test9.js');
            function test_match(text) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(281, arguments.callee, this, arguments);
                            arguments = J$.N(289, 'arguments', arguments, 4);
                            text = J$.N(297, 'text', text, 4);
                            J$.N(305, 'out', out, 0);
                            var out = J$.X1(25, J$.W(17, 'out', J$.T(9, '', 21, false), out, 1));
                            if (J$.X1(481, J$.C(16, J$.R(33, 'text', text, 0)))) {
                                J$.X1(65, J$.M(57, J$.R(41, 'console', console, 2), 'log', 0)(J$.T(49, 1, 22, false)));
                                if (J$.X1(473, J$.C(8, J$.M(89, J$.R(73, 'text', text, 0), 'match', 0)(J$.T(81, /\/\*|\*\//, 14, false))))) {
                                    J$.X1(121, J$.M(113, J$.R(97, 'console', console, 2), 'log', 0)(J$.T(105, 2, 22, false)));
                                    throw J$.X1(161, J$.Th(153, J$.F(145, J$.R(129, 'Error', Error, 2), 1)(J$.T(137, 'JSDoc text cannot contain "/*" and "*/"', 21, false))));
                                }
                                J$.X1(225, out = J$.W(217, 'out', J$.B(18, '+', J$.R(209, 'out', out, 0), J$.B(10, '+', J$.T(169, ' ', 21, false), J$.M(201, J$.R(177, 'text', text, 0), 'replace', 0)(J$.T(185, /@/g, 14, false), J$.T(193, '\\@', 21, false)), 0), 0), out, 0));
                            }
                            if (J$.X1(489, J$.C(24, J$.B(26, '!==', J$.R(233, 'out', out, 0), J$.T(241, '', 21, false), 0))))
                                J$.X1(273, J$.M(265, J$.R(249, 'console', console, 2), 'log', 0)(J$.T(257, 3, 22, false)));
                        } catch (J$e) {
                            J$.Ex(497, J$e);
                        } finally {
                            if (J$.Fr(505))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            test_match = J$.N(449, 'test_match', J$.T(441, test_match, 12, false, 281), 0);
            J$.N(457, 'S$', S$, 0);
            J$.N(465, 'arg', arg, 0);
            var S$ = J$.X1(345, J$.W(337, 'S$', J$.F(329, J$.R(313, 'require', require, 2), 0)(J$.T(321, "S$", 21, false)), S$, 3));
            var arg = J$.X1(393, J$.W(385, 'arg', J$.M(377, J$.R(353, 'S$', S$, 1), 'symbol', 0)(J$.T(361, "arg", 21, false), J$.T(369, "", 21, false)), arg, 3));
            J$.X1(425, J$.F(417, J$.R(401, 'test_match', test_match, 1), 0)(J$.R(409, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(513, J$e);
        } finally {
            if (J$.Sr(521)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
