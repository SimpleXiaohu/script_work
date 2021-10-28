J$.iids = {"8":[12,6,12,17],"9":[3,10,3,17],"10":[8,11,8,24],"16":[16,6,16,28],"17":[3,18,3,22],"18":[12,6,12,17],"24":[10,5,10,22],"25":[3,10,3,23],"26":[16,8,16,20],"33":[3,10,3,23],"34":[16,6,16,28],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[8,1,8,3],"105":[8,11,8,12],"113":[8,11,8,19],"121":[8,22,8,24],"129":[8,1,8,25],"131":[8,1,8,10],"137":[8,1,8,26],"145":[10,5,10,14],"153":[10,20,10,21],"161":[10,5,10,22],"163":[10,5,10,19],"169":[12,6,12,7],"177":[12,8,12,9],"185":[12,6,12,10],"193":[12,14,12,17],"201":[13,3,13,10],"209":[13,15,13,16],"217":[13,3,13,17],"219":[13,3,13,14],"225":[13,3,13,18],"233":[16,6,16,7],"241":[16,8,16,9],"249":[16,8,16,16],"257":[16,19,16,20],"265":[16,6,16,21],"273":[16,25,16,28],"281":[17,3,17,10],"289":[17,15,17,16],"297":[17,3,17,17],"299":[17,3,17,14],"305":[17,3,17,18],"313":[20,2,20,9],"321":[20,14,20,15],"329":[20,2,20,16],"331":[20,2,20,13],"337":[20,2,20,17],"345":[1,1,21,2],"353":[1,1,21,2],"361":[1,1,21,2],"369":[12,2,14,3],"377":[16,2,18,3],"385":[10,1,21,2],"393":[1,1,21,2],"401":[1,1,21,2],"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/anchors/both.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/anchors/both_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n'use strict';\nvar S$ = require('S$');\nvar q = S$.symbol(\"q\", '');\n\n//This assumption is required to make the testcase solve in reasonable time with Z3\n//This is not due to the regular expression but in fact due to the q.length and str.at\nS$.assume(q.length < 10);\n\nif (/^--.+=$/.test(q)) {\n\n\tif (q[0] != '-') {\n\t\tconsole.log(1);\n\t}\n\n\tif (q[q.length - 1] != '=') {\n\t\tconsole.log(2);\n\t}\n\n\tconsole.log(3);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(345, '/home/popl2022/compare_aratha_expose/regex-expose/anchors/both_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/anchors/both.js');
            J$.N(353, 'S$', S$, 0);
            J$.N(361, 'q', q, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var q = J$.X1(89, J$.W(81, 'q', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "q", 21, false), J$.T(65, '', 21, false)), q, 3));
            J$.X1(137, J$.M(129, J$.R(97, 'S$', S$, 1), 'assume', 0)(J$.B(10, '<', J$.G(113, J$.R(105, 'q', q, 1), 'length', 0), J$.T(121, 10, 22, false), 0)));
            if (J$.X1(385, J$.C(24, J$.M(161, J$.T(145, /^--.+=$/, 14, false), 'test', 0)(J$.R(153, 'q', q, 1))))) {
                if (J$.X1(369, J$.C(8, J$.B(18, '!=', J$.G(185, J$.R(169, 'q', q, 1), J$.T(177, 0, 22, false), 4), J$.T(193, '-', 21, false), 0)))) {
                    J$.X1(225, J$.M(217, J$.R(201, 'console', console, 2), 'log', 0)(J$.T(209, 1, 22, false)));
                }
                if (J$.X1(377, J$.C(16, J$.B(34, '!=', J$.G(265, J$.R(233, 'q', q, 1), J$.B(26, '-', J$.G(249, J$.R(241, 'q', q, 1), 'length', 0), J$.T(257, 1, 22, false), 0), 4), J$.T(273, '=', 21, false), 0)))) {
                    J$.X1(305, J$.M(297, J$.R(281, 'console', console, 2), 'log', 0)(J$.T(289, 2, 22, false)));
                }
                J$.X1(337, J$.M(329, J$.R(313, 'console', console, 2), 'log', 0)(J$.T(321, 3, 22, false)));
            }
        } catch (J$e) {
            J$.Ex(393, J$e);
        } finally {
            if (J$.Sr(401)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
