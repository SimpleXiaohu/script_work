J$.iids = {"8":[4,7,4,30],"9":[3,17,3,28],"10":[4,7,4,30],"17":[3,37,3,45],"18":[6,19,6,36],"25":[3,47,3,50],"26":[6,19,6,42],"33":[3,17,3,51],"35":[3,17,3,36],"41":[3,17,3,51],"49":[3,3,3,52],"57":[4,8,4,12],"65":[4,18,4,29],"73":[4,8,4,30],"75":[4,8,4,17],"81":[5,5,5,12],"89":[5,17,5,18],"97":[5,5,5,19],"99":[5,5,5,16],"105":[5,5,5,20],"113":[6,19,6,22],"121":[6,25,6,36],"129":[6,39,6,42],"137":[6,19,6,42],"145":[6,5,6,43],"153":[1,1,8,2],"161":[1,1,8,2],"169":[1,1,8,2],"177":[11,10,11,17],"185":[11,18,11,22],"193":[11,10,11,23],"201":[11,10,11,23],"209":[11,10,11,23],"217":[13,11,13,13],"225":[13,21,13,26],"233":[13,28,13,30],"241":[13,11,13,31],"243":[13,11,13,20],"249":[13,11,13,31],"257":[13,11,13,31],"265":[14,1,14,4],"273":[14,5,14,8],"281":[14,1,14,9],"289":[14,1,14,10],"297":[1,1,14,10],"305":[1,1,8,2],"313":[1,1,14,10],"321":[1,1,14,10],"329":[1,1,14,10],"337":[4,3,7,4],"345":[1,1,8,2],"353":[1,1,8,2],"361":[1,1,14,10],"369":[1,1,14,10],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test28.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test28_jalangi_.js","code":"\nfunction fun(stringValue)\n{\n  stringValue = stringValue.replace(/^'|'$/g, '\"');\n  if (!/^\"/.test(stringValue)) {\n    console.log(1);\n    stringValue = '\"' + stringValue + '\"';\n  }\n}\n\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(297, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test28_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test28.js');
            function fun(stringValue) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(153, arguments.callee, this, arguments);
                            arguments = J$.N(161, 'arguments', arguments, 4);
                            stringValue = J$.N(169, 'stringValue', stringValue, 4);
                            J$.X1(49, stringValue = J$.W(41, 'stringValue', J$.M(33, J$.R(9, 'stringValue', stringValue, 0), 'replace', 0)(J$.T(17, /^'|'$/g, 14, false), J$.T(25, '"', 21, false)), stringValue, 0));
                            if (J$.X1(337, J$.C(8, J$.U(10, '!', J$.M(73, J$.T(57, /^"/, 14, false), 'test', 0)(J$.R(65, 'stringValue', stringValue, 0)))))) {
                                J$.X1(105, J$.M(97, J$.R(81, 'console', console, 2), 'log', 0)(J$.T(89, 1, 22, false)));
                                J$.X1(145, stringValue = J$.W(137, 'stringValue', J$.B(26, '+', J$.B(18, '+', J$.T(113, '"', 21, false), J$.R(121, 'stringValue', stringValue, 0), 0), J$.T(129, '"', 21, false), 0), stringValue, 0));
                            }
                        } catch (J$e) {
                            J$.Ex(345, J$e);
                        } finally {
                            if (J$.Fr(353))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(313, 'fun', J$.T(305, fun, 12, false, 153), 0);
            J$.N(321, 'S$', S$, 0);
            J$.N(329, 'arg', arg, 0);
            var S$ = J$.X1(209, J$.W(201, 'S$', J$.F(193, J$.R(177, 'require', require, 2), 0)(J$.T(185, "S$", 21, false)), S$, 3));
            var arg = J$.X1(257, J$.W(249, 'arg', J$.M(241, J$.R(217, 'S$', S$, 1), 'symbol', 0)(J$.T(225, "arg", 21, false), J$.T(233, "", 21, false)), arg, 3));
            J$.X1(289, J$.F(281, J$.R(265, 'fun', fun, 1), 0)(J$.R(273, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(361, J$e);
        } finally {
            if (J$.Sr(369)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
