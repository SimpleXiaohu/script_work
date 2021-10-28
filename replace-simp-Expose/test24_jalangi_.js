J$.iids = {"8":[4,8,4,27],"9":[3,17,3,22],"17":[3,31,3,44],"25":[3,46,3,50],"33":[3,17,3,51],"35":[3,17,3,30],"41":[3,17,3,51],"49":[3,17,3,51],"57":[4,8,4,14],"65":[4,20,4,26],"73":[4,8,4,27],"75":[4,8,4,19],"81":[4,29,4,36],"89":[4,41,4,44],"97":[4,29,4,45],"99":[4,29,4,40],"105":[4,29,4,46],"113":[1,1,5,2],"121":[1,1,5,2],"129":[1,1,5,2],"137":[1,1,5,2],"145":[8,10,8,17],"153":[8,18,8,22],"161":[8,10,8,23],"169":[8,10,8,23],"177":[8,10,8,23],"185":[10,11,10,13],"193":[10,21,10,26],"201":[10,28,10,30],"209":[10,11,10,31],"211":[10,11,10,20],"217":[10,11,10,31],"225":[10,11,10,31],"233":[11,1,11,4],"241":[11,5,11,8],"249":[11,1,11,9],"257":[11,1,11,10],"265":[1,1,11,10],"273":[1,1,5,2],"281":[1,1,11,10],"289":[1,1,11,10],"297":[1,1,11,10],"305":[4,4,4,46],"313":[1,1,5,2],"321":[1,1,5,2],"329":[1,1,11,10],"337":[1,1,11,10],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test24.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test24_jalangi_.js","code":"\nfunction fun(value)\n{ \n   var value1 = value.replace(/\\\\([\\\\\\]])/g, '$1');\n   if(/\\\\\\\\/.test(value1)) console.log(\"1\");\n}\n\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(265, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test24_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test24.js');
            function fun(value) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(113, arguments.callee, this, arguments);
                            arguments = J$.N(121, 'arguments', arguments, 4);
                            value = J$.N(129, 'value', value, 4);
                            J$.N(137, 'value1', value1, 0);
                            var value1 = J$.X1(49, J$.W(41, 'value1', J$.M(33, J$.R(9, 'value', value, 0), 'replace', 0)(J$.T(17, /\\([\\\]])/g, 14, false), J$.T(25, '$1', 21, false)), value1, 1));
                            if (J$.X1(305, J$.C(8, J$.M(73, J$.T(57, /\\\\/, 14, false), 'test', 0)(J$.R(65, 'value1', value1, 0)))))
                                J$.X1(105, J$.M(97, J$.R(81, 'console', console, 2), 'log', 0)(J$.T(89, "1", 21, false)));
                        } catch (J$e) {
                            J$.Ex(313, J$e);
                        } finally {
                            if (J$.Fr(321))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(281, 'fun', J$.T(273, fun, 12, false, 113), 0);
            J$.N(289, 'S$', S$, 0);
            J$.N(297, 'arg', arg, 0);
            var S$ = J$.X1(177, J$.W(169, 'S$', J$.F(161, J$.R(145, 'require', require, 2), 0)(J$.T(153, "S$", 21, false)), S$, 3));
            var arg = J$.X1(225, J$.W(217, 'arg', J$.M(209, J$.R(185, 'S$', S$, 1), 'symbol', 0)(J$.T(193, "arg", 21, false), J$.T(201, "", 21, false)), arg, 3));
            J$.X1(257, J$.F(249, J$.R(233, 'fun', fun, 1), 0)(J$.R(241, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(329, J$e);
        } finally {
            if (J$.Sr(337)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
