J$.iids = {"8":[4,9,4,30],"9":[3,15,3,17],"10":[7,11,7,20],"16":[8,9,8,24],"17":[3,15,3,17],"18":[7,11,7,47],"25":[3,15,3,17],"33":[4,9,4,20],"41":[4,26,4,29],"49":[4,9,4,30],"51":[4,9,4,25],"57":[5,9,5,16],"65":[5,21,5,24],"73":[5,9,5,25],"75":[5,9,5,20],"81":[5,9,5,26],"89":[7,11,7,14],"97":[7,17,7,20],"105":[7,23,7,26],"113":[7,35,7,39],"121":[7,41,7,46],"129":[7,23,7,47],"131":[7,23,7,34],"137":[7,11,7,47],"145":[7,5,7,48],"153":[8,9,8,14],"161":[8,20,8,23],"169":[8,9,8,24],"171":[8,9,8,19],"177":[8,26,8,33],"185":[8,38,8,41],"193":[8,26,8,42],"195":[8,26,8,37],"201":[8,26,8,43],"209":[1,1,9,2],"217":[1,1,9,2],"225":[1,1,9,2],"233":[1,1,9,2],"241":[12,10,12,17],"249":[12,18,12,22],"257":[12,10,12,23],"265":[12,10,12,23],"273":[12,10,12,23],"281":[14,11,14,13],"289":[14,21,14,26],"297":[14,28,14,30],"305":[14,11,14,31],"307":[14,11,14,20],"313":[14,11,14,31],"321":[14,11,14,31],"329":[15,1,15,4],"337":[15,5,15,8],"345":[15,1,15,9],"353":[15,1,15,10],"361":[1,1,15,10],"369":[1,1,9,2],"377":[1,1,15,10],"385":[1,1,15,10],"393":[1,1,15,10],"401":[4,5,6,6],"409":[8,5,8,43],"417":[1,1,9,2],"425":[1,1,9,2],"433":[1,1,15,10],"441":[1,1,15,10],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test5.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test5_jalangi_.js","code":"\nfunction fun(tag)\n{\n        var out = '';\n            if (/\\/\\*|\\*\\//.test(tag)) {\n                console.log(\"1\");\n            }\n            out = out + ' ' + tag.replace(/@/g, '\\\\@');\n\t    if(/\\d+/.test(out)) console.log(\"2\");\n}\n\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(361, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test5_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test5.js');
            function fun(tag) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(209, arguments.callee, this, arguments);
                            arguments = J$.N(217, 'arguments', arguments, 4);
                            tag = J$.N(225, 'tag', tag, 4);
                            J$.N(233, 'out', out, 0);
                            var out = J$.X1(25, J$.W(17, 'out', J$.T(9, '', 21, false), out, 1));
                            if (J$.X1(401, J$.C(8, J$.M(49, J$.T(33, /\/\*|\*\//, 14, false), 'test', 0)(J$.R(41, 'tag', tag, 0))))) {
                                J$.X1(81, J$.M(73, J$.R(57, 'console', console, 2), 'log', 0)(J$.T(65, "1", 21, false)));
                            }
                            J$.X1(145, out = J$.W(137, 'out', J$.B(18, '+', J$.B(10, '+', J$.R(89, 'out', out, 0), J$.T(97, ' ', 21, false), 0), J$.M(129, J$.R(105, 'tag', tag, 0), 'replace', 0)(J$.T(113, /@/g, 14, false), J$.T(121, '\\@', 21, false)), 0), out, 0));
                            if (J$.X1(409, J$.C(16, J$.M(169, J$.T(153, /\d+/, 14, false), 'test', 0)(J$.R(161, 'out', out, 0)))))
                                J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, "2", 21, false)));
                        } catch (J$e) {
                            J$.Ex(417, J$e);
                        } finally {
                            if (J$.Fr(425))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(377, 'fun', J$.T(369, fun, 12, false, 209), 0);
            J$.N(385, 'S$', S$, 0);
            J$.N(393, 'arg', arg, 0);
            var S$ = J$.X1(273, J$.W(265, 'S$', J$.F(257, J$.R(241, 'require', require, 2), 0)(J$.T(249, "S$", 21, false)), S$, 3));
            var arg = J$.X1(321, J$.W(313, 'arg', J$.M(305, J$.R(281, 'S$', S$, 1), 'symbol', 0)(J$.T(289, "arg", 21, false), J$.T(297, "", 21, false)), arg, 3));
            J$.X1(353, J$.F(345, J$.R(329, 'fun', fun, 1), 0)(J$.R(337, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(433, J$e);
        } finally {
            if (J$.Sr(441)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
