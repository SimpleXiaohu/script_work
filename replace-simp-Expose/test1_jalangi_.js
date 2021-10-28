J$.iids = {"8":[4,7,4,27],"9":[3,11,3,16],"17":[3,25,3,29],"25":[3,31,3,38],"33":[3,11,3,39],"35":[3,11,3,24],"41":[3,48,3,52],"49":[3,54,3,62],"57":[3,11,3,63],"59":[3,11,3,47],"65":[3,72,3,76],"73":[3,78,3,84],"81":[3,11,3,85],"83":[3,11,3,71],"89":[3,94,3,98],"97":[3,100,3,106],"105":[3,11,3,107],"107":[3,11,3,93],"113":[3,116,3,120],"121":[3,122,3,130],"129":[3,11,3,131],"131":[3,11,3,115],"137":[3,11,3,131],"145":[3,3,3,132],"153":[4,7,4,15],"161":[4,21,4,26],"169":[4,7,4,27],"171":[4,7,4,20],"177":[4,29,4,36],"185":[4,41,4,44],"193":[4,29,4,45],"195":[4,29,4,40],"201":[4,29,4,46],"209":[1,1,5,2],"217":[1,1,5,2],"225":[1,1,5,2],"233":[8,10,8,17],"241":[8,18,8,22],"249":[8,10,8,23],"257":[8,10,8,23],"265":[8,10,8,23],"273":[10,11,10,13],"281":[10,21,10,26],"289":[10,28,10,30],"297":[10,11,10,31],"299":[10,11,10,20],"305":[10,11,10,31],"313":[10,11,10,31],"321":[11,1,11,4],"329":[11,5,11,8],"337":[11,1,11,9],"345":[11,1,11,10],"353":[1,1,11,10],"361":[1,1,5,2],"369":[1,1,11,10],"377":[1,1,11,10],"385":[1,1,11,10],"393":[4,3,4,46],"401":[1,1,5,2],"409":[1,1,5,2],"417":[1,1,11,10],"425":[1,1,11,10],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test1.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test1_jalangi_.js","code":"\nfunction fun(value)\n{\n\t\tvalue = value.replace(/&/g, '&amp;').replace(/'/g, '&apos;').replace(/</g, \t\t'&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;');\n\t\tif(/[a-z]+/.test(value)) console.log(\"1\");\n}\n\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(353, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test1_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test1.js');
            function fun(value) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(209, arguments.callee, this, arguments);
                            arguments = J$.N(217, 'arguments', arguments, 4);
                            value = J$.N(225, 'value', value, 4);
                            J$.X1(145, value = J$.W(137, 'value', J$.M(129, J$.M(105, J$.M(81, J$.M(57, J$.M(33, J$.R(9, 'value', value, 0), 'replace', 0)(J$.T(17, /&/g, 14, false), J$.T(25, '&amp;', 21, false)), 'replace', 0)(J$.T(41, /'/g, 14, false), J$.T(49, '&apos;', 21, false)), 'replace', 0)(J$.T(65, /</g, 14, false), J$.T(73, '&lt;', 21, false)), 'replace', 0)(J$.T(89, />/g, 14, false), J$.T(97, '&gt;', 21, false)), 'replace', 0)(J$.T(113, /"/g, 14, false), J$.T(121, '&quot;', 21, false)), value, 0));
                            if (J$.X1(393, J$.C(8, J$.M(169, J$.T(153, /[a-z]+/, 14, false), 'test', 0)(J$.R(161, 'value', value, 0)))))
                                J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, "1", 21, false)));
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
            fun = J$.N(369, 'fun', J$.T(361, fun, 12, false, 209), 0);
            J$.N(377, 'S$', S$, 0);
            J$.N(385, 'arg', arg, 0);
            var S$ = J$.X1(265, J$.W(257, 'S$', J$.F(249, J$.R(233, 'require', require, 2), 0)(J$.T(241, "S$", 21, false)), S$, 3));
            var arg = J$.X1(313, J$.W(305, 'arg', J$.M(297, J$.R(273, 'S$', S$, 1), 'symbol', 0)(J$.T(281, "arg", 21, false), J$.T(289, "", 21, false)), arg, 3));
            J$.X1(345, J$.F(337, J$.R(321, 'fun', fun, 1), 0)(J$.R(329, 'arg', arg, 1)));
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
