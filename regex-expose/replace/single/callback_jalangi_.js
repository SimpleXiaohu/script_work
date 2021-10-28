J$.iids = {"8":[9,13,9,25],"9":[1,10,1,17],"10":[5,6,5,16],"16":[7,13,7,23],"17":[1,18,1,22],"18":[7,13,7,23],"24":[5,6,5,16],"25":[1,10,1,23],"26":[9,13,9,25],"33":[1,10,1,23],"41":[1,10,1,23],"49":[2,9,2,11],"57":[2,19,2,22],"65":[2,24,2,26],"73":[2,9,2,27],"75":[2,9,2,18],"81":[2,9,2,27],"89":[2,9,2,27],"97":[4,1,4,2],"105":[4,11,4,21],"113":[5,6,5,9],"121":[5,13,5,16],"129":[6,9,6,22],"137":[6,9,6,22],"145":[6,3,6,23],"153":[7,13,7,16],"161":[7,20,7,23],"169":[8,9,8,22],"177":[8,9,8,22],"185":[8,3,8,23],"193":[9,13,9,16],"201":[9,20,9,25],"209":[10,3,10,10],"217":[10,15,10,16],"225":[10,3,10,17],"227":[10,3,10,14],"233":[10,3,10,18],"241":[4,23,12,2],"249":[4,23,12,2],"257":[4,23,12,2],"265":[4,23,12,2],"273":[4,23,12,2],"281":[4,1,12,3],"283":[4,1,4,10],"289":[4,1,12,4],"297":[1,1,12,4],"305":[1,1,12,4],"313":[1,1,12,4],"321":[9,9,11,3],"329":[7,9,11,3],"337":[5,2,11,3],"345":[4,23,12,2],"353":[4,23,12,2],"361":[1,1,12,4],"369":[1,1,12,4],"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/replace/single/callback.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/replace/single/callback_jalangi_.js","code":"var S$ = require('S$');\nvar x = S$.symbol('A', '');\n\nx.replace(/^.+(.).+/, function(zero, one) {\n\tif (one == 'p') {\n\t\tthrow 'Reachable 1';\n\t} else if (one == 'c') {\n\t\tthrow 'Reachable 2';\n\t} else if (one == \"dog\") {\n\t\tconsole.log(1);\n\t}\n});\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(297, '/home/popl2022/compare_aratha_expose/regex-expose/replace/single/callback_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/replace/single/callback.js');
            J$.N(305, 'S$', S$, 0);
            J$.N(313, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'A', 21, false), J$.T(65, '', 21, false)), x, 3));
            J$.X1(289, J$.M(281, J$.R(97, 'x', x, 1), 'replace', 0)(J$.T(105, /^.+(.).+/, 14, false), J$.T(273, function (zero, one) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(241, arguments.callee, this, arguments);
                            arguments = J$.N(249, 'arguments', arguments, 4);
                            zero = J$.N(257, 'zero', zero, 4);
                            one = J$.N(265, 'one', one, 4);
                            if (J$.X1(337, J$.C(24, J$.B(10, '==', J$.R(113, 'one', one, 0), J$.T(121, 'p', 21, false), 0)))) {
                                throw J$.X1(145, J$.Th(137, J$.T(129, 'Reachable 1', 21, false)));
                            } else if (J$.X1(329, J$.C(16, J$.B(18, '==', J$.R(153, 'one', one, 0), J$.T(161, 'c', 21, false), 0)))) {
                                throw J$.X1(185, J$.Th(177, J$.T(169, 'Reachable 2', 21, false)));
                            } else if (J$.X1(321, J$.C(8, J$.B(26, '==', J$.R(193, 'one', one, 0), J$.T(201, "dog", 21, false), 0)))) {
                                J$.X1(233, J$.M(225, J$.R(209, 'console', console, 2), 'log', 0)(J$.T(217, 1, 22, false)));
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
            }, 12, false, 241)));
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
