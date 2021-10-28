J$.iids = {"8":[6,6,6,26],"9":[3,30,3,45],"17":[3,30,3,45],"25":[3,30,3,45],"33":[4,23,4,54],"41":[4,23,4,54],"49":[4,23,4,54],"57":[5,15,5,25],"65":[5,34,5,51],"73":[5,53,5,58],"81":[5,15,5,59],"83":[5,15,5,33],"89":[5,68,5,89],"97":[5,91,5,94],"105":[5,15,5,95],"107":[5,15,5,67],"113":[5,104,5,118],"121":[5,120,5,123],"129":[5,15,5,124],"131":[5,15,5,103],"137":[5,133,5,138],"145":[5,140,5,143],"153":[5,15,5,144],"155":[5,15,5,132],"161":[5,15,5,144],"169":[5,2,5,145],"177":[6,6,6,9],"185":[6,15,6,25],"193":[6,6,6,26],"195":[6,6,6,14],"201":[6,28,6,35],"209":[6,40,6,43],"217":[6,28,6,44],"219":[6,28,6,39],"225":[6,28,6,45],"233":[1,1,7,2],"241":[1,1,7,2],"249":[1,1,7,2],"257":[1,1,7,2],"265":[1,1,7,2],"273":[10,10,10,17],"281":[10,18,10,22],"289":[10,10,10,23],"297":[10,10,10,23],"305":[10,10,10,23],"313":[12,11,12,13],"321":[12,21,12,26],"329":[12,28,12,30],"337":[12,11,12,31],"339":[12,11,12,20],"345":[12,11,12,31],"353":[12,11,12,31],"361":[13,1,13,4],"369":[13,5,13,8],"377":[13,1,13,9],"385":[13,1,13,10],"393":[1,1,13,10],"401":[1,1,7,2],"409":[1,1,13,10],"417":[1,1,13,10],"425":[1,1,13,10],"433":[6,2,6,45],"441":[1,1,7,2],"449":[1,1,7,2],"457":[1,1,13,10],"465":[1,1,13,10],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test10.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test10_jalangi_.js","code":"\nfunction fun(localident)\n{\n\tconst filenameReservedRegex = /[<>:\"/\\\\|?*]/g;\n\tconst reControlChars = /[\\u0000-\\u001f\\u0080-\\u009f]/g;\n\tlocalident = localident.replace(/^((-?[0-9])|--)/, \"_$1\").replace(filenameReservedRegex, \"-\").replace(reControlChars, \"-\").replace(/\\./g, \"-\");\n\tif(/</.test(localident)) console.log(\"1\");\n}\n\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(393, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test10_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test10.js');
            function fun(localident) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(233, arguments.callee, this, arguments);
                            arguments = J$.N(241, 'arguments', arguments, 4);
                            localident = J$.N(249, 'localident', localident, 4);
                            J$.N(257, 'filenameReservedRegex', filenameReservedRegex, 0);
                            J$.N(265, 'reControlChars', reControlChars, 0);
                            var filenameReservedRegex = J$.X1(25, J$.W(17, 'filenameReservedRegex', J$.T(9, /[<>:"/\\|?*]/g, 14, false), filenameReservedRegex, 1));
                            var reControlChars = J$.X1(49, J$.W(41, 'reControlChars', J$.T(33, /[\u0000-\u001f\u0080-\u009f]/g, 14, false), reControlChars, 1));
                            J$.X1(169, localident = J$.W(161, 'localident', J$.M(153, J$.M(129, J$.M(105, J$.M(81, J$.R(57, 'localident', localident, 0), 'replace', 0)(J$.T(65, /^((-?[0-9])|--)/, 14, false), J$.T(73, "_$1", 21, false)), 'replace', 0)(J$.R(89, 'filenameReservedRegex', filenameReservedRegex, 0), J$.T(97, "-", 21, false)), 'replace', 0)(J$.R(113, 'reControlChars', reControlChars, 0), J$.T(121, "-", 21, false)), 'replace', 0)(J$.T(137, /\./g, 14, false), J$.T(145, "-", 21, false)), localident, 0));
                            if (J$.X1(433, J$.C(8, J$.M(193, J$.T(177, /</, 14, false), 'test', 0)(J$.R(185, 'localident', localident, 0)))))
                                J$.X1(225, J$.M(217, J$.R(201, 'console', console, 2), 'log', 0)(J$.T(209, "1", 21, false)));
                        } catch (J$e) {
                            J$.Ex(441, J$e);
                        } finally {
                            if (J$.Fr(449))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(409, 'fun', J$.T(401, fun, 12, false, 233), 0);
            J$.N(417, 'S$', S$, 0);
            J$.N(425, 'arg', arg, 0);
            var S$ = J$.X1(305, J$.W(297, 'S$', J$.F(289, J$.R(273, 'require', require, 2), 0)(J$.T(281, "S$", 21, false)), S$, 3));
            var arg = J$.X1(353, J$.W(345, 'arg', J$.M(337, J$.R(313, 'S$', S$, 1), 'symbol', 0)(J$.T(321, "arg", 21, false), J$.T(329, "", 21, false)), arg, 3));
            J$.X1(385, J$.F(377, J$.R(361, 'fun', fun, 1), 0)(J$.R(369, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(457, J$e);
        } finally {
            if (J$.Sr(465)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
