J$.iids = {"8":[4,7,4,26],"9":[3,16,3,17],"17":[3,26,3,45],"25":[3,47,3,50],"33":[3,16,3,51],"35":[3,16,3,25],"41":[3,60,3,70],"49":[3,72,3,75],"57":[3,16,3,76],"59":[3,16,3,59],"65":[3,85,3,93],"73":[3,95,3,97],"81":[3,16,3,98],"83":[3,16,3,84],"89":[3,107,3,115],"97":[3,117,3,119],"105":[3,16,3,120],"107":[3,16,3,106],"113":[3,16,3,120],"121":[3,16,3,120],"129":[4,7,4,13],"137":[4,19,4,25],"145":[4,7,4,26],"147":[4,7,4,18],"153":[4,28,4,35],"161":[4,40,4,43],"169":[4,28,4,44],"171":[4,28,4,39],"177":[4,28,4,45],"185":[1,1,5,2],"193":[1,1,5,2],"201":[1,1,5,2],"209":[1,1,5,2],"217":[8,10,8,17],"225":[8,18,8,22],"233":[8,10,8,23],"241":[8,10,8,23],"249":[8,10,8,23],"257":[10,11,10,13],"265":[10,21,10,26],"273":[10,28,10,30],"281":[10,11,10,31],"283":[10,11,10,20],"289":[10,11,10,31],"297":[10,11,10,31],"305":[11,1,11,4],"313":[11,5,11,8],"321":[11,1,11,9],"329":[11,1,11,10],"337":[1,1,11,10],"345":[1,1,5,2],"353":[1,1,11,10],"361":[1,1,11,10],"369":[1,1,11,10],"377":[4,3,4,45],"385":[1,1,5,2],"393":[1,1,5,2],"401":[1,1,11,10],"409":[1,1,11,10],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test27.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test27_jalangi_.js","code":"\nfunction fun(s)\n{\n \tvar result = s.replace(/\\([^)]*\\)|[\\n\\t]/g, ' ').replace(/(\\s\\s+)/g, ' ').replace(/^\\s\\s*/, '').replace(/\\s\\s*$/, '');\n\tif(/\\s\\s/.test(result)) console.log(\"1\");\n}\n\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(337, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test27_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test27.js');
            function fun(s) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(185, arguments.callee, this, arguments);
                            arguments = J$.N(193, 'arguments', arguments, 4);
                            s = J$.N(201, 's', s, 4);
                            J$.N(209, 'result', result, 0);
                            var result = J$.X1(121, J$.W(113, 'result', J$.M(105, J$.M(81, J$.M(57, J$.M(33, J$.R(9, 's', s, 0), 'replace', 0)(J$.T(17, /\([^)]*\)|[\n\t]/g, 14, false), J$.T(25, ' ', 21, false)), 'replace', 0)(J$.T(41, /(\s\s+)/g, 14, false), J$.T(49, ' ', 21, false)), 'replace', 0)(J$.T(65, /^\s\s*/, 14, false), J$.T(73, '', 21, false)), 'replace', 0)(J$.T(89, /\s\s*$/, 14, false), J$.T(97, '', 21, false)), result, 1));
                            if (J$.X1(377, J$.C(8, J$.M(145, J$.T(129, /\s\s/, 14, false), 'test', 0)(J$.R(137, 'result', result, 0)))))
                                J$.X1(177, J$.M(169, J$.R(153, 'console', console, 2), 'log', 0)(J$.T(161, "1", 21, false)));
                        } catch (J$e) {
                            J$.Ex(385, J$e);
                        } finally {
                            if (J$.Fr(393))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(353, 'fun', J$.T(345, fun, 12, false, 185), 0);
            J$.N(361, 'S$', S$, 0);
            J$.N(369, 'arg', arg, 0);
            var S$ = J$.X1(249, J$.W(241, 'S$', J$.F(233, J$.R(217, 'require', require, 2), 0)(J$.T(225, "S$", 21, false)), S$, 3));
            var arg = J$.X1(297, J$.W(289, 'arg', J$.M(281, J$.R(257, 'S$', S$, 1), 'symbol', 0)(J$.T(265, "arg", 21, false), J$.T(273, "", 21, false)), arg, 3));
            J$.X1(329, J$.F(321, J$.R(305, 'fun', fun, 1), 0)(J$.R(313, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(401, J$e);
        } finally {
            if (J$.Sr(409)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
