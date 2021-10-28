J$.iids = {"8":[5,7,5,29],"9":[4,10,4,14],"10":[5,7,5,29],"17":[4,23,4,43],"18":[7,12,7,22],"25":[4,45,4,47],"33":[4,10,4,48],"35":[4,10,4,22],"41":[4,10,4,48],"49":[4,3,4,49],"57":[5,7,5,11],"65":[5,19,5,20],"73":[5,7,5,21],"75":[5,7,5,18],"81":[5,26,5,29],"89":[6,5,6,12],"97":[6,17,6,18],"105":[6,5,6,19],"107":[6,5,6,16],"113":[6,5,6,20],"121":[7,12,7,15],"129":[7,18,7,22],"137":[7,12,7,22],"145":[7,5,7,23],"153":[2,1,9,2],"161":[2,1,9,2],"169":[2,1,9,2],"177":[12,10,12,17],"185":[12,18,12,22],"193":[12,10,12,23],"201":[12,10,12,23],"209":[12,10,12,23],"217":[14,11,14,13],"225":[14,21,14,26],"233":[14,28,14,30],"241":[14,11,14,31],"243":[14,11,14,20],"249":[14,11,14,31],"257":[14,11,14,31],"265":[15,1,15,4],"273":[15,5,15,8],"281":[15,1,15,9],"289":[15,1,15,10],"297":[1,1,15,10],"305":[2,1,9,2],"313":[1,1,15,10],"321":[1,1,15,10],"329":[1,1,15,10],"337":[5,3,8,4],"345":[2,1,9,2],"353":[2,1,9,2],"361":[1,1,15,10],"369":[1,1,15,10],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test42.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test42_jalangi_.js","code":"\n\nfunction fun(base)\n{\n      base = base.replace(/^https?:\\/\\/[^\\/]+/, '');\n  if (base.charAt(0) !== '/') {\n    console.log(1);\n    base = '/' + base\n}\n}\n\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(297, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test42_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test42.js');
            function fun(base) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(153, arguments.callee, this, arguments);
                            arguments = J$.N(161, 'arguments', arguments, 4);
                            base = J$.N(169, 'base', base, 4);
                            J$.X1(49, base = J$.W(41, 'base', J$.M(33, J$.R(9, 'base', base, 0), 'replace', 0)(J$.T(17, /^https?:\/\/[^\/]+/, 14, false), J$.T(25, '', 21, false)), base, 0));
                            if (J$.X1(337, J$.C(8, J$.B(10, '!==', J$.M(73, J$.R(57, 'base', base, 0), 'charAt', 0)(J$.T(65, 0, 22, false)), J$.T(81, '/', 21, false), 0)))) {
                                J$.X1(113, J$.M(105, J$.R(89, 'console', console, 2), 'log', 0)(J$.T(97, 1, 22, false)));
                                J$.X1(145, base = J$.W(137, 'base', J$.B(18, '+', J$.T(121, '/', 21, false), J$.R(129, 'base', base, 0), 0), base, 0));
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
