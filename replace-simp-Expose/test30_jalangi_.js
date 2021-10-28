J$.iids = {"8":[4,7,4,26],"9":[3,16,3,18],"10":[4,7,4,26],"16":[9,7,9,26],"17":[3,16,3,18],"25":[3,16,3,18],"33":[4,8,4,15],"41":[4,21,4,25],"49":[4,8,4,26],"51":[4,8,4,20],"57":[5,5,5,12],"65":[5,17,5,18],"73":[5,5,5,19],"75":[5,5,5,16],"81":[5,5,5,20],"89":[6,14,6,18],"97":[6,14,6,18],"105":[6,5,6,19],"113":[8,12,8,16],"121":[8,25,8,35],"129":[8,37,8,42],"137":[8,12,8,43],"139":[8,12,8,24],"145":[8,52,8,60],"153":[8,62,8,66],"161":[8,12,8,67],"163":[8,12,8,51],"169":[8,12,8,67],"177":[8,3,8,68],"185":[9,7,9,13],"193":[9,19,9,25],"201":[9,7,9,26],"203":[9,7,9,18],"209":[9,28,9,35],"217":[9,40,9,41],"225":[9,28,9,42],"227":[9,28,9,39],"233":[9,28,9,43],"241":[1,1,10,2],"249":[1,1,10,2],"257":[1,1,10,2],"265":[1,1,10,2],"273":[13,10,13,17],"281":[13,18,13,22],"289":[13,10,13,23],"297":[13,10,13,23],"305":[13,10,13,23],"313":[15,11,15,13],"321":[15,21,15,26],"329":[15,28,15,30],"337":[15,11,15,31],"339":[15,11,15,20],"345":[15,11,15,31],"353":[15,11,15,31],"361":[16,1,16,4],"369":[16,5,16,8],"377":[16,1,16,9],"385":[16,1,16,10],"393":[1,1,16,10],"401":[1,1,10,2],"409":[1,1,16,10],"417":[1,1,16,10],"425":[1,1,16,10],"433":[4,3,7,4],"441":[9,3,9,43],"449":[1,1,10,2],"457":[1,1,10,2],"465":[1,1,16,10],"473":[1,1,16,10],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test30.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test30_jalangi_.js","code":"\nfunction fun(path)\n{\n  var result = '';\n  if (!/\\.\\d+/.test(path)) {\n    console.log(1);\n    result = path;\n  }\n  result = path.replace(/\\.\\d+\\./g, '.$.').replace(/\\.\\d+$/, '.$');\n  if(/\\$\\$/.test(result)) console.log(2);\n}\n\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(393, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test30_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test30.js');
            function fun(path) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(241, arguments.callee, this, arguments);
                            arguments = J$.N(249, 'arguments', arguments, 4);
                            path = J$.N(257, 'path', path, 4);
                            J$.N(265, 'result', result, 0);
                            var result = J$.X1(25, J$.W(17, 'result', J$.T(9, '', 21, false), result, 1));
                            if (J$.X1(433, J$.C(8, J$.U(10, '!', J$.M(49, J$.T(33, /\.\d+/, 14, false), 'test', 0)(J$.R(41, 'path', path, 0)))))) {
                                J$.X1(81, J$.M(73, J$.R(57, 'console', console, 2), 'log', 0)(J$.T(65, 1, 22, false)));
                                J$.X1(105, result = J$.W(97, 'result', J$.R(89, 'path', path, 0), result, 0));
                            }
                            J$.X1(177, result = J$.W(169, 'result', J$.M(161, J$.M(137, J$.R(113, 'path', path, 0), 'replace', 0)(J$.T(121, /\.\d+\./g, 14, false), J$.T(129, '.$.', 21, false)), 'replace', 0)(J$.T(145, /\.\d+$/, 14, false), J$.T(153, '.$', 21, false)), result, 0));
                            if (J$.X1(441, J$.C(16, J$.M(201, J$.T(185, /\$\$/, 14, false), 'test', 0)(J$.R(193, 'result', result, 0)))))
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
