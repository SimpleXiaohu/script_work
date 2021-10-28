J$.iids = {"8":[6,7,6,44],"9":[3,6,3,18],"10":[13,13,13,28],"16":[3,6,3,18],"17":[4,18,4,30],"25":[4,39,4,45],"33":[4,47,4,49],"41":[4,18,4,50],"43":[4,18,4,38],"49":[4,18,4,50],"57":[4,18,4,50],"65":[5,16,5,18],"73":[5,16,5,18],"81":[5,16,5,18],"89":[6,7,6,29],"97":[6,35,6,43],"105":[6,7,6,44],"107":[6,7,6,34],"113":[7,4,7,11],"121":[7,16,7,17],"129":[7,4,7,18],"131":[7,4,7,15],"137":[7,4,7,19],"145":[8,13,8,21],"153":[8,13,8,21],"161":[8,4,8,22],"169":[12,4,12,11],"177":[12,16,12,17],"185":[12,4,12,18],"187":[12,4,12,15],"193":[12,4,12,19],"201":[13,13,13,17],"209":[13,20,13,28],"217":[13,13,13,28],"225":[13,4,13,29],"233":[1,1,16,2],"241":[1,1,16,2],"249":[1,1,16,2],"257":[1,1,16,2],"265":[1,1,16,2],"273":[20,10,20,17],"281":[20,18,20,22],"289":[20,10,20,23],"297":[20,10,20,23],"305":[20,10,20,23],"313":[22,11,22,13],"321":[22,21,22,26],"329":[22,28,22,30],"337":[22,11,22,31],"339":[22,11,22,20],"345":[22,11,22,31],"353":[22,11,22,31],"361":[23,1,23,4],"369":[23,5,23,8],"377":[23,1,23,9],"385":[23,1,23,10],"393":[1,1,23,10],"401":[1,1,16,2],"409":[1,1,23,10],"417":[1,1,23,10],"425":[1,1,23,10],"433":[6,3,14,4],"441":[3,2,15,3],"449":[1,1,16,2],"457":[1,1,16,2],"465":[1,1,23,10],"473":[1,1,23,10],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test19.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test19_jalangi_.js","code":"\nfunction fun(relativePath)\n{ \n\tif(relativePath) {\n\t\tvar stripped = relativePath.replace(/\\/$/g, ''); \n\t\tvar result = '';\n\t\tif((/^((\\.\\.)|(\\.))($|\\/)/.test(stripped))){\n\t\t\tconsole.log(1);\n\t\t\tresult = stripped;\n  \t\t}\n  \t\telse\n  \t\t{\n\t\t\tconsole.log(2);\n\t\t\tresult =   './'+ stripped;\n  \t\t}\n\t}\n}\n\n\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(393, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test19_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test19.js');
            function fun(relativePath) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(233, arguments.callee, this, arguments);
                            arguments = J$.N(241, 'arguments', arguments, 4);
                            relativePath = J$.N(249, 'relativePath', relativePath, 4);
                            J$.N(257, 'stripped', stripped, 0);
                            J$.N(265, 'result', result, 0);
                            if (J$.X1(441, J$.C(16, J$.R(9, 'relativePath', relativePath, 0)))) {
                                var stripped = J$.X1(57, J$.W(49, 'stripped', J$.M(41, J$.R(17, 'relativePath', relativePath, 0), 'replace', 0)(J$.T(25, /\/$/g, 14, false), J$.T(33, '', 21, false)), stripped, 1));
                                var result = J$.X1(81, J$.W(73, 'result', J$.T(65, '', 21, false), result, 1));
                                if (J$.X1(433, J$.C(8, J$.M(105, J$.T(89, /^((\.\.)|(\.))($|\/)/, 14, false), 'test', 0)(J$.R(97, 'stripped', stripped, 0))))) {
                                    J$.X1(137, J$.M(129, J$.R(113, 'console', console, 2), 'log', 0)(J$.T(121, 1, 22, false)));
                                    J$.X1(161, result = J$.W(153, 'result', J$.R(145, 'stripped', stripped, 0), result, 0));
                                } else {
                                    J$.X1(193, J$.M(185, J$.R(169, 'console', console, 2), 'log', 0)(J$.T(177, 2, 22, false)));
                                    J$.X1(225, result = J$.W(217, 'result', J$.B(10, '+', J$.T(201, './', 21, false), J$.R(209, 'stripped', stripped, 0), 0), result, 0));
                                }
                            }
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
            fun = J$.N(409, 'fun', J$.T(401, fun, 12, false, 233), 0);
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
