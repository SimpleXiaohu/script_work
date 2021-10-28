J$.iids = {"8":[13,7,13,18],"9":[5,10,5,17],"10":[9,5,9,14],"16":[11,6,11,14],"17":[5,18,5,22],"18":[11,6,11,14],"24":[9,5,9,14],"25":[5,10,5,23],"26":[13,7,13,18],"33":[5,10,5,23],"41":[5,10,5,23],"49":[6,9,6,11],"57":[6,19,6,22],"65":[6,24,6,26],"73":[6,9,6,27],"75":[6,9,6,18],"81":[6,9,6,27],"89":[6,9,6,27],"97":[7,9,7,19],"105":[7,25,7,26],"113":[7,9,7,27],"115":[7,9,7,24],"121":[7,9,7,27],"129":[7,9,7,27],"137":[9,5,9,6],"145":[9,10,9,14],"153":[11,6,11,7],"161":[11,11,11,14],"169":[13,7,13,8],"177":[13,9,13,10],"185":[13,7,13,11],"193":[13,15,13,18],"201":[14,4,14,11],"209":[14,16,14,17],"217":[14,4,14,18],"219":[14,4,14,15],"225":[14,4,14,19],"233":[17,3,17,10],"241":[17,15,17,16],"249":[17,3,17,17],"251":[17,3,17,14],"257":[17,3,17,18],"265":[20,2,20,9],"273":[20,14,20,15],"281":[20,2,20,16],"283":[20,2,20,13],"289":[20,2,20,17],"297":[1,1,21,2],"305":[1,1,21,2],"313":[1,1,21,2],"321":[1,1,21,2],"329":[13,3,15,4],"337":[11,2,18,3],"345":[9,1,21,2],"353":[1,1,21,2],"361":[1,1,21,2],"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/lazy/lazy_3.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/lazy/lazy_3_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Test the lastIndex property of the sticky flag\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar b = /^(a)*?a$/.exec(x);\n\nif (b != null) {\n\t\n\tif (x == 'a') {\n\n\t\tif (b[1] == 'a') {\n\t\t\tconsole.log(1);\n\t\t}\n\n\t\tconsole.log(2);\n\t}\n\n\tconsole.log(3);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(297, '/home/popl2022/compare_aratha_expose/regex-expose/lazy/lazy_3_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/lazy/lazy_3.js');
            J$.N(305, 'S$', S$, 0);
            J$.N(313, 'x', x, 0);
            J$.N(321, 'b', b, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            var b = J$.X1(129, J$.W(121, 'b', J$.M(113, J$.T(97, /^(a)*?a$/, 14, false), 'exec', 0)(J$.R(105, 'x', x, 1)), b, 3));
            if (J$.X1(345, J$.C(24, J$.B(10, '!=', J$.R(137, 'b', b, 1), J$.T(145, null, 25, false), 0)))) {
                if (J$.X1(337, J$.C(16, J$.B(18, '==', J$.R(153, 'x', x, 1), J$.T(161, 'a', 21, false), 0)))) {
                    if (J$.X1(329, J$.C(8, J$.B(26, '==', J$.G(185, J$.R(169, 'b', b, 1), J$.T(177, 1, 22, false), 4), J$.T(193, 'a', 21, false), 0)))) {
                        J$.X1(225, J$.M(217, J$.R(201, 'console', console, 2), 'log', 0)(J$.T(209, 1, 22, false)));
                    }
                    J$.X1(257, J$.M(249, J$.R(233, 'console', console, 2), 'log', 0)(J$.T(241, 2, 22, false)));
                }
                J$.X1(289, J$.M(281, J$.R(265, 'console', console, 2), 'log', 0)(J$.T(273, 3, 22, false)));
            }
        } catch (J$e) {
            J$.Ex(353, J$e);
        } finally {
            if (J$.Sr(361)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
