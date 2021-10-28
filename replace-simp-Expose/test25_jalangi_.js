J$.iids = {"8":[4,9,4,25],"9":[3,14,3,20],"17":[3,29,3,48],"25":[3,50,3,52],"33":[3,14,3,53],"35":[3,14,3,28],"41":[3,62,3,66],"49":[3,68,3,71],"57":[3,14,3,72],"59":[3,14,3,61],"65":[3,14,3,72],"73":[3,5,3,73],"81":[4,9,4,12],"89":[4,18,4,24],"97":[4,9,4,25],"99":[4,9,4,17],"105":[4,27,4,34],"113":[4,39,4,42],"121":[4,27,4,43],"123":[4,27,4,38],"129":[4,27,4,44],"137":[1,1,5,2],"145":[1,1,5,2],"153":[1,1,5,2],"161":[8,10,8,17],"169":[8,18,8,22],"177":[8,10,8,23],"185":[8,10,8,23],"193":[8,10,8,23],"201":[10,11,10,13],"209":[10,21,10,26],"217":[10,28,10,30],"225":[10,11,10,31],"227":[10,11,10,20],"233":[10,11,10,31],"241":[10,11,10,31],"249":[11,1,11,4],"257":[11,5,11,8],"265":[11,1,11,9],"273":[11,1,11,10],"281":[1,1,11,10],"289":[1,1,5,2],"297":[1,1,11,10],"305":[1,1,11,10],"313":[1,1,11,10],"321":[4,5,4,44],"329":[1,1,5,2],"337":[1,1,5,2],"345":[1,1,11,10],"353":[1,1,11,10],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test25.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test25_jalangi_.js","code":"\nfunction fun(search)\n{\n    search = search.replace(/[?&]grep=[^&\\s]*/g, '').replace(/^&/, '?');\n    if(/=/.test(search)) console.log(\"1\");\n}\n\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(281, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test25_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test25.js');
            function fun(search) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(137, arguments.callee, this, arguments);
                            arguments = J$.N(145, 'arguments', arguments, 4);
                            search = J$.N(153, 'search', search, 4);
                            J$.X1(73, search = J$.W(65, 'search', J$.M(57, J$.M(33, J$.R(9, 'search', search, 0), 'replace', 0)(J$.T(17, /[?&]grep=[^&\s]*/g, 14, false), J$.T(25, '', 21, false)), 'replace', 0)(J$.T(41, /^&/, 14, false), J$.T(49, '?', 21, false)), search, 0));
                            if (J$.X1(321, J$.C(8, J$.M(97, J$.T(81, /=/, 14, false), 'test', 0)(J$.R(89, 'search', search, 0)))))
                                J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(J$.T(113, "1", 21, false)));
                        } catch (J$e) {
                            J$.Ex(329, J$e);
                        } finally {
                            if (J$.Fr(337))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(297, 'fun', J$.T(289, fun, 12, false, 137), 0);
            J$.N(305, 'S$', S$, 0);
            J$.N(313, 'arg', arg, 0);
            var S$ = J$.X1(193, J$.W(185, 'S$', J$.F(177, J$.R(161, 'require', require, 2), 0)(J$.T(169, "S$", 21, false)), S$, 3));
            var arg = J$.X1(241, J$.W(233, 'arg', J$.M(225, J$.R(201, 'S$', S$, 1), 'symbol', 0)(J$.T(209, "arg", 21, false), J$.T(217, "", 21, false)), arg, 3));
            J$.X1(273, J$.F(265, J$.R(249, 'fun', fun, 1), 0)(J$.R(257, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(345, J$e);
        } finally {
            if (J$.Sr(353)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
