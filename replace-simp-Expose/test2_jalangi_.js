J$.iids = {"8":[4,6,4,27],"9":[3,13,3,16],"17":[3,25,3,31],"25":[3,33,3,35],"33":[3,13,3,36],"35":[3,13,3,24],"41":[3,45,3,51],"49":[3,53,3,55],"57":[3,13,3,56],"59":[3,13,3,44],"65":[3,13,3,56],"73":[3,13,3,56],"81":[4,6,4,16],"89":[4,22,4,26],"97":[4,6,4,27],"99":[4,6,4,21],"105":[4,29,4,36],"113":[4,41,4,44],"121":[4,29,4,45],"123":[4,29,4,40],"129":[4,29,4,46],"137":[1,1,5,2],"145":[1,1,5,2],"153":[1,1,5,2],"161":[1,1,5,2],"169":[8,10,8,17],"177":[8,18,8,22],"185":[8,10,8,23],"193":[8,10,8,23],"201":[8,10,8,23],"209":[10,11,10,13],"217":[10,21,10,26],"225":[10,28,10,30],"233":[10,11,10,31],"235":[10,11,10,20],"241":[10,11,10,31],"249":[10,11,10,31],"257":[11,1,11,4],"265":[11,5,11,8],"273":[11,1,11,9],"281":[11,1,11,10],"289":[1,1,11,10],"297":[1,1,5,2],"305":[1,1,11,10],"313":[1,1,11,10],"321":[1,1,11,10],"329":[4,2,4,46],"337":[1,1,5,2],"345":[1,1,5,2],"353":[1,1,11,10],"361":[1,1,11,10],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test2.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test2_jalangi_.js","code":"\nfunction fun(str)\n{\n\tvar str1 = str.replace(/^\\s*/, '').replace(/\\s*$/, '');\n\tif(/^\\s.*\\s$/.test(str1)) console.log(\"1\");\n}\n\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(289, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test2_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test2.js');
            function fun(str) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(137, arguments.callee, this, arguments);
                            arguments = J$.N(145, 'arguments', arguments, 4);
                            str = J$.N(153, 'str', str, 4);
                            J$.N(161, 'str1', str1, 0);
                            var str1 = J$.X1(73, J$.W(65, 'str1', J$.M(57, J$.M(33, J$.R(9, 'str', str, 0), 'replace', 0)(J$.T(17, /^\s*/, 14, false), J$.T(25, '', 21, false)), 'replace', 0)(J$.T(41, /\s*$/, 14, false), J$.T(49, '', 21, false)), str1, 1));
                            if (J$.X1(329, J$.C(8, J$.M(97, J$.T(81, /^\s.*\s$/, 14, false), 'test', 0)(J$.R(89, 'str1', str1, 0)))))
                                J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(J$.T(113, "1", 21, false)));
                        } catch (J$e) {
                            J$.Ex(337, J$e);
                        } finally {
                            if (J$.Fr(345))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(305, 'fun', J$.T(297, fun, 12, false, 137), 0);
            J$.N(313, 'S$', S$, 0);
            J$.N(321, 'arg', arg, 0);
            var S$ = J$.X1(201, J$.W(193, 'S$', J$.F(185, J$.R(169, 'require', require, 2), 0)(J$.T(177, "S$", 21, false)), S$, 3));
            var arg = J$.X1(249, J$.W(241, 'arg', J$.M(233, J$.R(209, 'S$', S$, 1), 'symbol', 0)(J$.T(217, "arg", 21, false), J$.T(225, "", 21, false)), arg, 3));
            J$.X1(281, J$.F(273, J$.R(257, 'fun', fun, 1), 0)(J$.R(265, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(353, J$e);
        } finally {
            if (J$.Sr(361)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
