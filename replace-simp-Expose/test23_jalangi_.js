J$.iids = {"8":[4,9,4,29],"9":[3,18,3,25],"17":[3,34,3,48],"25":[3,50,3,52],"33":[3,18,3,53],"35":[3,18,3,33],"41":[3,62,3,75],"49":[3,77,3,79],"57":[3,18,3,80],"59":[3,18,3,61],"65":[3,18,3,80],"73":[3,18,3,80],"81":[4,9,4,16],"89":[4,22,4,28],"97":[4,9,4,29],"99":[4,9,4,21],"105":[4,31,4,38],"113":[4,43,4,46],"121":[4,31,4,47],"123":[4,31,4,42],"129":[4,31,4,48],"137":[1,1,5,2],"145":[1,1,5,2],"153":[1,1,5,2],"161":[1,1,5,2],"169":[8,10,8,17],"177":[8,18,8,22],"185":[8,10,8,23],"193":[8,10,8,23],"201":[8,10,8,23],"209":[10,11,10,13],"217":[10,21,10,26],"225":[10,28,10,30],"233":[10,11,10,31],"235":[10,11,10,20],"241":[10,11,10,31],"249":[10,11,10,31],"257":[11,1,11,4],"265":[11,5,11,8],"273":[11,1,11,9],"281":[11,1,11,10],"289":[1,1,11,10],"297":[1,1,5,2],"305":[1,1,11,10],"313":[1,1,11,10],"321":[1,1,11,10],"329":[4,5,4,48],"337":[1,1,5,2],"345":[1,1,5,2],"353":[1,1,11,10],"361":[1,1,11,10],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test23.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test23_jalangi_.js","code":"\nfunction fun(comment)\n{ \n    var result = comment.replace(/^\\{\\{~?!-?-?/, '').replace(/-?-?~?\\}\\}$/, '');\n    if(/^\\{\\{/.test(result)) console.log(\"1\");\n}\n\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(289, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test23_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test23.js');
            function fun(comment) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(137, arguments.callee, this, arguments);
                            arguments = J$.N(145, 'arguments', arguments, 4);
                            comment = J$.N(153, 'comment', comment, 4);
                            J$.N(161, 'result', result, 0);
                            var result = J$.X1(73, J$.W(65, 'result', J$.M(57, J$.M(33, J$.R(9, 'comment', comment, 0), 'replace', 0)(J$.T(17, /^\{\{~?!-?-?/, 14, false), J$.T(25, '', 21, false)), 'replace', 0)(J$.T(41, /-?-?~?\}\}$/, 14, false), J$.T(49, '', 21, false)), result, 1));
                            if (J$.X1(329, J$.C(8, J$.M(97, J$.T(81, /^\{\{/, 14, false), 'test', 0)(J$.R(89, 'result', result, 0)))))
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
