J$.iids = {"8":[5,6,5,18],"9":[3,19,3,64],"17":[3,19,3,64],"25":[3,19,3,64],"33":[4,10,4,15],"41":[4,24,4,34],"49":[4,36,4,46],"57":[4,10,4,47],"59":[4,10,4,23],"65":[4,10,4,47],"73":[4,10,4,47],"81":[5,6,5,10],"89":[5,16,5,17],"97":[5,6,5,18],"99":[5,6,5,15],"105":[5,20,5,27],"113":[5,32,5,35],"121":[5,20,5,36],"123":[5,20,5,31],"129":[5,20,5,37],"137":[1,1,6,2],"145":[1,1,6,2],"153":[1,1,6,2],"161":[1,1,6,2],"169":[1,1,6,2],"177":[8,10,8,17],"185":[8,18,8,22],"193":[8,10,8,23],"201":[8,10,8,23],"209":[8,10,8,23],"217":[10,11,10,13],"225":[10,21,10,26],"233":[10,28,10,30],"241":[10,11,10,31],"243":[10,11,10,20],"249":[10,11,10,31],"257":[10,11,10,31],"265":[11,1,11,4],"273":[11,5,11,8],"281":[11,1,11,9],"289":[11,1,11,10],"297":[1,1,11,10],"305":[1,1,6,2],"313":[1,1,11,10],"321":[1,1,11,10],"329":[1,1,11,10],"337":[5,2,5,37],"345":[1,1,6,2],"353":[1,1,6,2],"361":[1,1,11,10],"369":[1,1,11,10],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test39.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test39_jalangi_.js","code":"\nfunction fun(trace)\n{\n\tconst filenameRE = /\\(^webpack:\\/\\/\\/([^)]+\\.js):(\\d+):(\\d+)\\)$/;\n\tvar m =  trace.replace(filenameRE, '$1:$2:$3');\n\tif(/::/.test(m)) console.log(\"1\");\n}\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(297, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test39_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test39.js');
            function fun(trace) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(137, arguments.callee, this, arguments);
                            arguments = J$.N(145, 'arguments', arguments, 4);
                            trace = J$.N(153, 'trace', trace, 4);
                            J$.N(161, 'filenameRE', filenameRE, 0);
                            J$.N(169, 'm', m, 0);
                            var filenameRE = J$.X1(25, J$.W(17, 'filenameRE', J$.T(9, /\(^webpack:\/\/\/([^)]+\.js):(\d+):(\d+)\)$/, 14, false), filenameRE, 1));
                            var m = J$.X1(73, J$.W(65, 'm', J$.M(57, J$.R(33, 'trace', trace, 0), 'replace', 0)(J$.R(41, 'filenameRE', filenameRE, 0), J$.T(49, '$1:$2:$3', 21, false)), m, 1));
                            if (J$.X1(337, J$.C(8, J$.M(97, J$.T(81, /::/, 14, false), 'test', 0)(J$.R(89, 'm', m, 0)))))
                                J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(J$.T(113, "1", 21, false)));
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
            fun = J$.N(313, 'fun', J$.T(305, fun, 12, false, 137), 0);
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
