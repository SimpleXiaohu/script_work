J$.iids = {"8":[4,6,4,30],"9":[3,15,3,20],"17":[3,29,3,47],"25":[3,49,3,51],"33":[3,15,3,52],"35":[3,15,3,28],"41":[3,15,3,52],"49":[3,15,3,52],"57":[4,6,4,17],"65":[4,23,4,29],"73":[4,6,4,30],"75":[4,6,4,22],"81":[4,32,4,39],"89":[4,44,4,45],"97":[4,32,4,46],"99":[4,32,4,43],"105":[4,32,4,47],"113":[1,1,5,2],"121":[1,1,5,2],"129":[1,1,5,2],"137":[1,1,5,2],"145":[8,10,8,17],"153":[8,18,8,22],"161":[8,10,8,23],"169":[8,10,8,23],"177":[8,10,8,23],"185":[10,11,10,13],"193":[10,21,10,26],"201":[10,28,10,30],"209":[10,11,10,31],"211":[10,11,10,20],"217":[10,11,10,31],"225":[10,11,10,31],"233":[11,1,11,4],"241":[11,5,11,8],"249":[11,1,11,9],"257":[11,1,11,10],"265":[1,1,11,10],"273":[1,1,5,2],"281":[1,1,11,10],"289":[1,1,11,10],"297":[1,1,11,10],"305":[4,2,4,47],"313":[1,1,5,2],"321":[1,1,5,2],"329":[1,1,11,10],"337":[1,1,11,10],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test21.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test21_jalangi_.js","code":"\nfunction fun(value)\n{ \n\tvar result = value.replace(/^.*\\.propTypes\\./, '');\n\tif(/propTypes/.test(result)) console.log(1);\n}\n\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(265, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test21_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test21.js');
            function fun(value) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(113, arguments.callee, this, arguments);
                            arguments = J$.N(121, 'arguments', arguments, 4);
                            value = J$.N(129, 'value', value, 4);
                            J$.N(137, 'result', result, 0);
                            var result = J$.X1(49, J$.W(41, 'result', J$.M(33, J$.R(9, 'value', value, 0), 'replace', 0)(J$.T(17, /^.*\.propTypes\./, 14, false), J$.T(25, '', 21, false)), result, 1));
                            if (J$.X1(305, J$.C(8, J$.M(73, J$.T(57, /propTypes/, 14, false), 'test', 0)(J$.R(65, 'result', result, 0)))))
                                J$.X1(105, J$.M(97, J$.R(81, 'console', console, 2), 'log', 0)(J$.T(89, 1, 22, false)));
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
