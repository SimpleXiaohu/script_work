J$.iids = {"8":[9,6,9,17],"9":[3,10,3,17],"10":[9,6,9,17],"16":[13,6,13,28],"17":[3,18,3,22],"18":[13,8,13,20],"24":[7,5,7,21],"25":[3,10,3,23],"26":[13,6,13,28],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[7,5,7,13],"105":[7,19,7,20],"113":[7,5,7,21],"115":[7,5,7,18],"121":[9,6,9,7],"129":[9,8,9,9],"137":[9,6,9,10],"145":[9,14,9,17],"153":[10,3,10,10],"161":[10,15,10,16],"169":[10,3,10,17],"171":[10,3,10,14],"177":[10,3,10,18],"185":[13,6,13,7],"193":[13,8,13,9],"201":[13,8,13,16],"209":[13,19,13,20],"217":[13,6,13,21],"225":[13,25,13,28],"233":[14,3,14,10],"241":[14,15,14,16],"249":[14,3,14,17],"251":[14,3,14,14],"257":[14,3,14,18],"265":[17,2,17,9],"273":[17,14,17,15],"281":[17,2,17,16],"283":[17,2,17,13],"289":[17,2,17,17],"297":[20,1,20,8],"305":[20,13,20,14],"313":[20,1,20,15],"315":[20,1,20,12],"321":[20,1,20,16],"329":[1,1,20,16],"337":[1,1,20,16],"345":[1,1,20,16],"353":[9,2,11,3],"361":[13,2,15,3],"369":[7,1,18,2],"377":[1,1,20,16],"385":[1,1,20,16],"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/anchors/left.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/anchors/left_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n'use strict';\nvar S$ = require('S$');\nvar q = S$.symbol(\"q\", '');\n\n//Implict anchor => /--.+=.*?/ (will let anything in after the =)\nif (/^--.+=/.test(q)) {\n\n\tif (q[0] != '-') {\n\t\tconsole.log(1);\n\t}\n\n\tif (q[q.length - 1] != '=') {\n\t\tconsole.log(2);\n\t}\n\n\tconsole.log(3);\n}\n\nconsole.log(4);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(329, '/home/popl2022/compare_aratha_expose/regex-expose/anchors/left_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/anchors/left.js');
            J$.N(337, 'S$', S$, 0);
            J$.N(345, 'q', q, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var q = J$.X1(89, J$.W(81, 'q', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "q", 21, false), J$.T(65, '', 21, false)), q, 3));
            if (J$.X1(369, J$.C(24, J$.M(113, J$.T(97, /^--.+=/, 14, false), 'test', 0)(J$.R(105, 'q', q, 1))))) {
                if (J$.X1(353, J$.C(8, J$.B(10, '!=', J$.G(137, J$.R(121, 'q', q, 1), J$.T(129, 0, 22, false), 4), J$.T(145, '-', 21, false), 0)))) {
                    J$.X1(177, J$.M(169, J$.R(153, 'console', console, 2), 'log', 0)(J$.T(161, 1, 22, false)));
                }
                if (J$.X1(361, J$.C(16, J$.B(26, '!=', J$.G(217, J$.R(185, 'q', q, 1), J$.B(18, '-', J$.G(201, J$.R(193, 'q', q, 1), 'length', 0), J$.T(209, 1, 22, false), 0), 4), J$.T(225, '=', 21, false), 0)))) {
                    J$.X1(257, J$.M(249, J$.R(233, 'console', console, 2), 'log', 0)(J$.T(241, 2, 22, false)));
                }
                J$.X1(289, J$.M(281, J$.R(265, 'console', console, 2), 'log', 0)(J$.T(273, 3, 22, false)));
            }
            J$.X1(321, J$.M(313, J$.R(297, 'console', console, 2), 'log', 0)(J$.T(305, 4, 22, false)));
        } catch (J$e) {
            J$.Ex(377, J$e);
        } finally {
            if (J$.Sr(385)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
