J$.iids = {"8":[5,7,5,20],"9":[3,16,3,18],"10":[5,7,5,20],"17":[3,16,3,18],"25":[3,16,3,18],"33":[4,12,4,15],"41":[4,24,4,50],"49":[4,52,4,54],"57":[4,12,4,55],"59":[4,12,4,23],"65":[4,12,4,55],"73":[4,3,4,56],"81":[5,7,5,13],"89":[5,18,5,20],"97":[5,22,5,29],"105":[5,34,5,37],"113":[5,22,5,38],"115":[5,22,5,33],"121":[5,22,5,39],"129":[1,1,6,2],"137":[1,1,6,2],"145":[1,1,6,2],"153":[1,1,6,2],"161":[9,10,9,17],"169":[9,18,9,22],"177":[9,10,9,23],"185":[9,10,9,23],"193":[9,10,9,23],"201":[11,11,11,13],"209":[11,21,11,26],"217":[11,28,11,30],"225":[11,11,11,31],"227":[11,11,11,20],"233":[11,11,11,31],"241":[11,11,11,31],"249":[12,1,12,4],"257":[12,5,12,8],"265":[12,1,12,9],"273":[12,1,12,10],"281":[1,1,12,10],"289":[1,1,6,2],"297":[1,1,12,10],"305":[1,1,12,10],"313":[1,1,12,10],"321":[5,3,5,39],"329":[1,1,6,2],"337":[1,1,6,2],"345":[1,1,12,10],"353":[1,1,12,10],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test38.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test38_jalangi_.js","code":"\nfunction fun(tag)\n{\n\tvar result = '';\n \tresult = tag.replace(/vue\\-component\\-(\\d+\\-)?/, '');\n  \tif(result!=='') console.log(\"1\");   \n}\n\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(281, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test38_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test38.js');
            function fun(tag) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(129, arguments.callee, this, arguments);
                            arguments = J$.N(137, 'arguments', arguments, 4);
                            tag = J$.N(145, 'tag', tag, 4);
                            J$.N(153, 'result', result, 0);
                            var result = J$.X1(25, J$.W(17, 'result', J$.T(9, '', 21, false), result, 1));
                            J$.X1(73, result = J$.W(65, 'result', J$.M(57, J$.R(33, 'tag', tag, 0), 'replace', 0)(J$.T(41, /vue\-component\-(\d+\-)?/, 14, false), J$.T(49, '', 21, false)), result, 0));
                            if (J$.X1(321, J$.C(8, J$.B(10, '!==', J$.R(81, 'result', result, 0), J$.T(89, '', 21, false), 0))))
                                J$.X1(121, J$.M(113, J$.R(97, 'console', console, 2), 'log', 0)(J$.T(105, "1", 21, false)));
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
            fun = J$.N(297, 'fun', J$.T(289, fun, 12, false, 129), 0);
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
