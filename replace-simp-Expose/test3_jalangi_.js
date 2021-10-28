J$.iids = {"8":[5,7,5,70],"9":[3,27,3,38],"10":[5,7,5,38],"16":[5,7,5,70],"17":[3,27,3,38],"25":[3,27,3,38],"33":[4,14,4,19],"41":[4,28,4,35],"49":[4,37,4,39],"57":[4,14,4,40],"59":[4,14,4,27],"65":[4,14,4,40],"73":[4,14,4,40],"81":[5,7,5,29],"89":[5,34,5,38],"97":[5,42,5,59],"105":[5,65,5,69],"113":[5,42,5,70],"115":[5,42,5,64],"121":[6,5,6,12],"129":[6,17,6,20],"137":[6,5,6,21],"139":[6,5,6,16],"145":[6,5,6,22],"153":[1,1,8,2],"161":[1,1,8,2],"169":[1,1,8,2],"177":[1,1,8,2],"185":[1,1,8,2],"193":[11,10,11,17],"201":[11,18,11,22],"209":[11,10,11,23],"217":[11,10,11,23],"225":[11,10,11,23],"233":[13,11,13,13],"241":[13,21,13,26],"249":[13,28,13,30],"257":[13,11,13,31],"259":[13,11,13,20],"265":[13,11,13,31],"273":[13,11,13,31],"281":[14,1,14,4],"289":[14,5,14,8],"297":[14,1,14,9],"305":[14,1,14,10],"313":[1,1,14,10],"321":[1,1,8,2],"329":[1,1,14,10],"337":[1,1,14,10],"345":[1,1,14,10],"353":[5,3,7,4],"361":[1,1,8,2],"369":[1,1,8,2],"377":[1,1,14,10],"385":[1,1,14,10],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test3.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test3_jalangi_.js","code":"\nfunction fun(value)\n{\n var stackFramePattern = /^\\s*at\\s*/;\n var line = value.replace(/\\s+$/g, \"\");\n if (\"    (No stack trace)\" === line || stackFramePattern.test(line)) {\n         console.log(\"1\");\n }\n}\n\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(313, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test3_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test3.js');
            function fun(value) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(153, arguments.callee, this, arguments);
                            arguments = J$.N(161, 'arguments', arguments, 4);
                            value = J$.N(169, 'value', value, 4);
                            J$.N(177, 'stackFramePattern', stackFramePattern, 0);
                            J$.N(185, 'line', line, 0);
                            var stackFramePattern = J$.X1(25, J$.W(17, 'stackFramePattern', J$.T(9, /^\s*at\s*/, 14, false), stackFramePattern, 1));
                            var line = J$.X1(73, J$.W(65, 'line', J$.M(57, J$.R(33, 'value', value, 0), 'replace', 0)(J$.T(41, /\s+$/g, 14, false), J$.T(49, "", 21, false)), line, 1));
                            if (J$.X1(353, J$.C(16, J$.C(8, J$.B(10, '===', J$.T(81, "    (No stack trace)", 21, false), J$.R(89, 'line', line, 0), 0)) ? J$._() : J$.M(113, J$.R(97, 'stackFramePattern', stackFramePattern, 0), 'test', 0)(J$.R(105, 'line', line, 0))))) {
                                J$.X1(145, J$.M(137, J$.R(121, 'console', console, 2), 'log', 0)(J$.T(129, "1", 21, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(361, J$e);
                        } finally {
                            if (J$.Fr(369))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(329, 'fun', J$.T(321, fun, 12, false, 153), 0);
            J$.N(337, 'S$', S$, 0);
            J$.N(345, 'arg', arg, 0);
            var S$ = J$.X1(225, J$.W(217, 'S$', J$.F(209, J$.R(193, 'require', require, 2), 0)(J$.T(201, "S$", 21, false)), S$, 3));
            var arg = J$.X1(273, J$.W(265, 'arg', J$.M(257, J$.R(233, 'S$', S$, 1), 'symbol', 0)(J$.T(241, "arg", 21, false), J$.T(249, "", 21, false)), arg, 3));
            J$.X1(305, J$.F(297, J$.R(281, 'fun', fun, 1), 0)(J$.R(289, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(377, J$e);
        } finally {
            if (J$.Sr(385)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
