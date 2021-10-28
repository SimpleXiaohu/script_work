J$.iids = {"8":[3,7,3,34],"9":[3,7,3,22],"10":[3,7,3,34],"16":[10,7,10,36],"17":[3,27,3,34],"18":[5,23,5,65],"25":[4,5,4,12],"26":[8,23,8,65],"33":[4,17,4,18],"41":[4,5,4,19],"43":[4,5,4,16],"49":[4,5,4,20],"57":[5,23,5,38],"65":[5,47,5,54],"73":[5,56,5,58],"81":[5,23,5,59],"83":[5,23,5,46],"89":[5,62,5,65],"97":[5,23,5,65],"105":[5,5,5,66],"113":[7,5,7,12],"121":[7,17,7,18],"129":[7,5,7,19],"131":[7,5,7,16],"137":[7,5,7,20],"145":[8,23,8,26],"153":[8,29,8,44],"161":[8,53,8,60],"169":[8,62,8,64],"177":[8,29,8,65],"179":[8,29,8,52],"185":[8,23,8,65],"193":[8,5,8,66],"201":[10,7,10,14],"209":[10,20,10,35],"217":[10,7,10,36],"219":[10,7,10,19],"225":[10,38,10,45],"233":[10,50,10,51],"241":[10,38,10,52],"243":[10,38,10,49],"249":[10,38,10,53],"257":[1,1,11,2],"265":[1,1,11,2],"273":[1,1,11,2],"281":[14,10,14,17],"289":[14,18,14,22],"297":[14,10,14,23],"305":[14,10,14,23],"313":[14,10,14,23],"321":[16,11,16,13],"329":[16,21,16,26],"337":[16,28,16,30],"345":[16,11,16,31],"347":[16,11,16,20],"353":[16,11,16,31],"361":[16,11,16,31],"369":[17,1,17,4],"377":[17,5,17,8],"385":[17,1,17,9],"393":[17,1,17,10],"401":[1,1,17,10],"409":[1,1,11,2],"417":[1,1,17,10],"425":[1,1,17,10],"433":[1,1,17,10],"441":[3,3,9,4],"449":[10,3,10,53],"457":[1,1,11,2],"465":[1,1,11,2],"473":[1,1,17,10],"481":[1,1,17,10],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test20.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test20_jalangi_.js","code":"\nfunction fun(replacementText)\n{ \n       if (replacementText === 'start') {\n         console.log(1);\n        replacementText = replacementText.replace(/^\\s+/g, '') + ' ';\n      } else {\n        console.log(2);\n        replacementText = ' ' + replacementText.replace(/\\s+$/g, '');\n      }\n\tif(/\\s\\s$/.test(replacementText)) console.log(3);\n}\n\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(401, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test20_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test20.js');
            function fun(replacementText) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(257, arguments.callee, this, arguments);
                            arguments = J$.N(265, 'arguments', arguments, 4);
                            replacementText = J$.N(273, 'replacementText', replacementText, 4);
                            if (J$.X1(441, J$.C(8, J$.B(10, '===', J$.R(9, 'replacementText', replacementText, 0), J$.T(17, 'start', 21, false), 0)))) {
                                J$.X1(49, J$.M(41, J$.R(25, 'console', console, 2), 'log', 0)(J$.T(33, 1, 22, false)));
                                J$.X1(105, replacementText = J$.W(97, 'replacementText', J$.B(18, '+', J$.M(81, J$.R(57, 'replacementText', replacementText, 0), 'replace', 0)(J$.T(65, /^\s+/g, 14, false), J$.T(73, '', 21, false)), J$.T(89, ' ', 21, false), 0), replacementText, 0));
                            } else {
                                J$.X1(137, J$.M(129, J$.R(113, 'console', console, 2), 'log', 0)(J$.T(121, 2, 22, false)));
                                J$.X1(193, replacementText = J$.W(185, 'replacementText', J$.B(26, '+', J$.T(145, ' ', 21, false), J$.M(177, J$.R(153, 'replacementText', replacementText, 0), 'replace', 0)(J$.T(161, /\s+$/g, 14, false), J$.T(169, '', 21, false)), 0), replacementText, 0));
                            }
                            if (J$.X1(449, J$.C(16, J$.M(217, J$.T(201, /\s\s$/, 14, false), 'test', 0)(J$.R(209, 'replacementText', replacementText, 0)))))
                                J$.X1(249, J$.M(241, J$.R(225, 'console', console, 2), 'log', 0)(J$.T(233, 3, 22, false)));
                        } catch (J$e) {
                            J$.Ex(457, J$e);
                        } finally {
                            if (J$.Fr(465))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(417, 'fun', J$.T(409, fun, 12, false, 257), 0);
            J$.N(425, 'S$', S$, 0);
            J$.N(433, 'arg', arg, 0);
            var S$ = J$.X1(313, J$.W(305, 'S$', J$.F(297, J$.R(281, 'require', require, 2), 0)(J$.T(289, "S$", 21, false)), S$, 3));
            var arg = J$.X1(361, J$.W(353, 'arg', J$.M(345, J$.R(321, 'S$', S$, 1), 'symbol', 0)(J$.T(329, "arg", 21, false), J$.T(337, "", 21, false)), arg, 3));
            J$.X1(393, J$.F(385, J$.R(369, 'fun', fun, 1), 0)(J$.R(377, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(473, J$e);
        } finally {
            if (J$.Sr(481)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
