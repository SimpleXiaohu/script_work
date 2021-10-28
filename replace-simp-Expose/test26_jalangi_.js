J$.iids = {"8":[4,9,4,32],"9":[3,18,3,20],"16":[9,9,9,26],"17":[3,18,3,20],"25":[3,18,3,20],"33":[4,9,4,14],"41":[4,21,4,31],"49":[4,9,4,32],"51":[4,9,4,20],"57":[5,9,5,16],"65":[5,21,5,22],"73":[5,9,5,23],"75":[5,9,5,20],"81":[5,9,5,24],"89":[6,18,6,23],"97":[6,32,6,42],"105":[6,44,6,46],"113":[6,18,6,47],"115":[6,18,6,31],"121":[6,18,6,47],"129":[6,9,6,48],"137":[8,14,8,19],"145":[8,28,8,33],"153":[8,35,8,37],"161":[8,14,8,38],"163":[8,14,8,27],"169":[8,14,8,38],"177":[8,5,8,39],"185":[9,9,9,13],"193":[9,19,9,25],"201":[9,9,9,26],"203":[9,9,9,18],"209":[9,28,9,35],"217":[9,40,9,41],"225":[9,28,9,42],"227":[9,28,9,39],"233":[9,28,9,43],"241":[1,1,10,2],"249":[1,1,10,2],"257":[1,1,10,2],"265":[1,1,10,2],"273":[13,10,13,17],"281":[13,18,13,22],"289":[13,10,13,23],"297":[13,10,13,23],"305":[13,10,13,23],"313":[15,11,15,13],"321":[15,21,15,26],"329":[15,28,15,30],"337":[15,11,15,31],"339":[15,11,15,20],"345":[15,11,15,31],"353":[15,11,15,31],"361":[16,1,16,4],"369":[16,5,16,8],"377":[16,1,16,9],"385":[16,1,16,10],"393":[1,1,16,10],"401":[1,1,10,2],"409":[1,1,16,10],"417":[1,1,16,10],"425":[1,1,16,10],"433":[4,5,7,6],"441":[9,5,9,43],"449":[1,1,10,2],"457":[1,1,10,2],"465":[1,1,16,10],"473":[1,1,16,10],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test26.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test26_jalangi_.js","code":"\nfunction fun(input)\n{\n    var result = '';\n    if (input.match(/\\[[\\s\\S]/)) {\n        console.log(1);\n        result = input.replace(/^\\[|\\]$/g, '');\n    }\n    result = input.replace(/\\\\/g, '');\n    if(/\\[/.test(result)) console.log(2);\n}\n\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(393, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test26_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test26.js');
            function fun(input) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(241, arguments.callee, this, arguments);
                            arguments = J$.N(249, 'arguments', arguments, 4);
                            input = J$.N(257, 'input', input, 4);
                            J$.N(265, 'result', result, 0);
                            var result = J$.X1(25, J$.W(17, 'result', J$.T(9, '', 21, false), result, 1));
                            if (J$.X1(433, J$.C(8, J$.M(49, J$.R(33, 'input', input, 0), 'match', 0)(J$.T(41, /\[[\s\S]/, 14, false))))) {
                                J$.X1(81, J$.M(73, J$.R(57, 'console', console, 2), 'log', 0)(J$.T(65, 1, 22, false)));
                                J$.X1(129, result = J$.W(121, 'result', J$.M(113, J$.R(89, 'input', input, 0), 'replace', 0)(J$.T(97, /^\[|\]$/g, 14, false), J$.T(105, '', 21, false)), result, 0));
                            }
                            J$.X1(177, result = J$.W(169, 'result', J$.M(161, J$.R(137, 'input', input, 0), 'replace', 0)(J$.T(145, /\\/g, 14, false), J$.T(153, '', 21, false)), result, 0));
                            if (J$.X1(441, J$.C(16, J$.M(201, J$.T(185, /\[/, 14, false), 'test', 0)(J$.R(193, 'result', result, 0)))))
                                J$.X1(233, J$.M(225, J$.R(209, 'console', console, 2), 'log', 0)(J$.T(217, 2, 22, false)));
                        } catch (J$e) {
                            J$.Ex(449, J$e);
                        } finally {
                            if (J$.Fr(457))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(409, 'fun', J$.T(401, fun, 12, false, 241), 0);
            J$.N(417, 'S$', S$, 0);
            J$.N(425, 'arg', arg, 0);
            var S$ = J$.X1(305, J$.W(297, 'S$', J$.F(289, J$.R(273, 'require', require, 2), 0)(J$.T(281, "S$", 21, false)), S$, 3));
            var arg = J$.X1(353, J$.W(345, 'arg', J$.M(337, J$.R(313, 'S$', S$, 1), 'symbol', 0)(J$.T(321, "arg", 21, false), J$.T(329, "", 21, false)), arg, 3));
            J$.X1(385, J$.F(377, J$.R(361, 'fun', fun, 1), 0)(J$.R(369, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(465, J$e);
        } finally {
            if (J$.Sr(473)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
