J$.iids = {"8":[4,7,4,34],"9":[3,18,3,20],"10":[4,21,4,23],"16":[8,7,8,22],"17":[3,18,3,20],"18":[4,7,4,34],"25":[3,18,3,20],"26":[8,7,8,22],"33":[4,7,4,14],"41":[4,22,4,23],"49":[4,7,4,24],"51":[4,7,4,20],"57":[4,29,4,34],"65":[5,5,5,12],"73":[5,17,5,18],"81":[5,5,5,19],"83":[5,5,5,16],"89":[5,5,5,20],"97":[6,20,6,27],"105":[6,36,6,48],"113":[6,50,6,52],"121":[6,20,6,53],"123":[6,20,6,35],"129":[6,20,6,53],"137":[6,20,6,53],"145":[8,7,8,15],"153":[8,20,8,22],"161":[8,24,8,31],"169":[8,36,8,37],"177":[8,24,8,38],"179":[8,24,8,35],"185":[8,24,8,39],"193":[1,1,9,2],"201":[1,1,9,2],"209":[1,1,9,2],"217":[1,1,9,2],"225":[12,10,12,17],"233":[12,18,12,22],"241":[12,10,12,23],"249":[12,10,12,23],"257":[12,10,12,23],"265":[14,11,14,13],"273":[14,21,14,26],"281":[14,28,14,30],"289":[14,11,14,31],"291":[14,11,14,20],"297":[14,11,14,31],"305":[14,11,14,31],"313":[15,1,15,4],"321":[15,5,15,8],"329":[15,1,15,9],"337":[15,1,15,10],"345":[1,1,15,10],"353":[1,1,9,2],"361":[1,1,15,10],"369":[1,1,15,10],"377":[1,1,15,10],"385":[4,3,7,4],"393":[8,3,8,39],"401":[1,1,9,2],"409":[1,1,9,2],"417":[1,1,15,10],"425":[1,1,15,10],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test22.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test22_jalangi_.js","code":"\nfunction fun(pattern)\n{ \n  var gpattern = '';\n  if (pattern.slice(-3) === '/**') {\n    console.log(1);\n    var gpattern = pattern.replace(/(\\/\\*\\*)+$/, '');\n  }\n  if(gpattern!=='') console.log(2);\n}\n\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(345, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test22_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test22.js');
            function fun(pattern) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(193, arguments.callee, this, arguments);
                            arguments = J$.N(201, 'arguments', arguments, 4);
                            pattern = J$.N(209, 'pattern', pattern, 4);
                            J$.N(217, 'gpattern', gpattern, 0);
                            var gpattern = J$.X1(25, J$.W(17, 'gpattern', J$.T(9, '', 21, false), gpattern, 1));
                            if (J$.X1(385, J$.C(8, J$.B(18, '===', J$.M(49, J$.R(33, 'pattern', pattern, 0), 'slice', 0)(J$.U(10, '-', J$.T(41, 3, 22, false))), J$.T(57, '/**', 21, false), 0)))) {
                                J$.X1(89, J$.M(81, J$.R(65, 'console', console, 2), 'log', 0)(J$.T(73, 1, 22, false)));
                                var gpattern = J$.X1(137, J$.W(129, 'gpattern', J$.M(121, J$.R(97, 'pattern', pattern, 0), 'replace', 0)(J$.T(105, /(\/\*\*)+$/, 14, false), J$.T(113, '', 21, false)), gpattern, 1));
                            }
                            if (J$.X1(393, J$.C(16, J$.B(26, '!==', J$.R(145, 'gpattern', gpattern, 0), J$.T(153, '', 21, false), 0))))
                                J$.X1(185, J$.M(177, J$.R(161, 'console', console, 2), 'log', 0)(J$.T(169, 2, 22, false)));
                        } catch (J$e) {
                            J$.Ex(401, J$e);
                        } finally {
                            if (J$.Fr(409))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(361, 'fun', J$.T(353, fun, 12, false, 193), 0);
            J$.N(369, 'S$', S$, 0);
            J$.N(377, 'arg', arg, 0);
            var S$ = J$.X1(257, J$.W(249, 'S$', J$.F(241, J$.R(225, 'require', require, 2), 0)(J$.T(233, "S$", 21, false)), S$, 3));
            var arg = J$.X1(305, J$.W(297, 'arg', J$.M(289, J$.R(265, 'S$', S$, 1), 'symbol', 0)(J$.T(273, "arg", 21, false), J$.T(281, "", 21, false)), arg, 3));
            J$.X1(337, J$.F(329, J$.R(313, 'fun', fun, 1), 0)(J$.R(321, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(417, J$e);
        } finally {
            if (J$.Sr(425)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
