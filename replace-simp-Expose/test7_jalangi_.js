J$.iids = {"8":[4,6,4,23],"9":[3,6,3,7],"17":[3,16,3,44],"25":[3,46,3,52],"33":[3,6,3,53],"35":[3,6,3,15],"41":[3,6,3,53],"49":[3,2,3,54],"57":[4,6,4,15],"65":[4,21,4,22],"73":[4,6,4,23],"75":[4,6,4,20],"81":[4,25,4,32],"89":[4,37,4,40],"97":[4,25,4,41],"99":[4,25,4,36],"105":[4,25,4,42],"113":[1,1,5,2],"121":[1,1,5,2],"129":[1,1,5,2],"137":[8,10,8,17],"145":[8,18,8,22],"153":[8,10,8,23],"161":[8,10,8,23],"169":[8,10,8,23],"177":[10,11,10,13],"185":[10,21,10,26],"193":[10,28,10,30],"201":[10,11,10,31],"203":[10,11,10,20],"209":[10,11,10,31],"217":[10,11,10,31],"225":[11,1,11,4],"233":[11,5,11,8],"241":[11,1,11,9],"249":[11,1,11,10],"257":[1,1,11,10],"265":[1,1,5,2],"273":[1,1,11,10],"281":[1,1,11,10],"289":[1,1,11,10],"297":[4,2,4,42],"305":[1,1,5,2],"313":[1,1,5,2],"321":[1,1,11,10],"329":[1,1,11,10],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test7.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test7_jalangi_.js","code":"\nfunction fun(s)\n{\n\ts = s.replace(/([.*+?^=!:${}()|[\\]\\/\\\\])/g, '\\\\$1');\n\tif(/[^\\\\]\\]/.test(s)) console.log(\"1\");\n}\n\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(257, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test7_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test7.js');
            function fun(s) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(113, arguments.callee, this, arguments);
                            arguments = J$.N(121, 'arguments', arguments, 4);
                            s = J$.N(129, 's', s, 4);
                            J$.X1(49, s = J$.W(41, 's', J$.M(33, J$.R(9, 's', s, 0), 'replace', 0)(J$.T(17, /([.*+?^=!:${}()|[\]\/\\])/g, 14, false), J$.T(25, '\\$1', 21, false)), s, 0));
                            if (J$.X1(297, J$.C(8, J$.M(73, J$.T(57, /[^\\]\]/, 14, false), 'test', 0)(J$.R(65, 's', s, 0)))))
                                J$.X1(105, J$.M(97, J$.R(81, 'console', console, 2), 'log', 0)(J$.T(89, "1", 21, false)));
                        } catch (J$e) {
                            J$.Ex(305, J$e);
                        } finally {
                            if (J$.Fr(313))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(273, 'fun', J$.T(265, fun, 12, false, 113), 0);
            J$.N(281, 'S$', S$, 0);
            J$.N(289, 'arg', arg, 0);
            var S$ = J$.X1(169, J$.W(161, 'S$', J$.F(153, J$.R(137, 'require', require, 2), 0)(J$.T(145, "S$", 21, false)), S$, 3));
            var arg = J$.X1(217, J$.W(209, 'arg', J$.M(201, J$.R(177, 'S$', S$, 1), 'symbol', 0)(J$.T(185, "arg", 21, false), J$.T(193, "", 21, false)), arg, 3));
            J$.X1(249, J$.F(241, J$.R(225, 'fun', fun, 1), 0)(J$.R(233, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(321, J$e);
        } finally {
            if (J$.Sr(329)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
