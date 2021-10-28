J$.iids = {"8":[8,6,8,20],"9":[3,10,3,17],"10":[12,6,12,16],"16":[12,6,12,16],"17":[3,18,3,22],"18":[16,6,16,16],"24":[16,6,16,16],"25":[3,10,3,23],"26":[20,6,20,17],"32":[20,6,20,17],"33":[3,10,3,23],"34":[28,6,28,16],"40":[28,6,28,16],"41":[3,10,3,23],"48":[6,5,6,42],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,5,6,34],"105":[6,40,6,41],"113":[6,5,6,42],"115":[6,5,6,39],"121":[8,6,8,12],"129":[8,18,8,19],"137":[8,6,8,20],"139":[8,6,8,17],"145":[9,3,9,10],"153":[9,15,9,16],"161":[9,3,9,17],"163":[9,3,9,14],"169":[9,3,9,18],"177":[12,6,12,7],"185":[12,11,12,16],"193":[13,3,13,10],"201":[13,15,13,16],"209":[13,3,13,17],"211":[13,3,13,14],"217":[13,3,13,18],"225":[16,6,16,7],"233":[16,11,16,16],"241":[17,3,17,10],"249":[17,15,17,16],"257":[17,3,17,17],"259":[17,3,17,14],"265":[17,3,17,18],"273":[20,6,20,7],"281":[20,11,20,17],"289":[21,3,21,10],"297":[21,15,21,16],"305":[21,3,21,17],"307":[21,3,21,14],"313":[21,3,21,18],"321":[24,2,24,9],"329":[24,14,24,15],"337":[24,2,24,16],"339":[24,2,24,13],"345":[24,2,24,17],"353":[28,6,28,7],"361":[28,11,28,16],"369":[29,3,29,10],"377":[29,15,29,16],"385":[29,3,29,17],"387":[29,3,29,14],"393":[29,3,29,18],"401":[32,2,32,9],"409":[32,14,32,15],"417":[32,2,32,16],"419":[32,2,32,13],"425":[32,2,32,17],"433":[1,1,33,2],"441":[1,1,33,2],"449":[1,1,33,2],"457":[8,2,10,3],"465":[12,2,14,3],"473":[16,2,18,3],"481":[20,2,22,3],"489":[28,2,30,3],"497":[6,1,33,2],"505":[1,1,33,2],"513":[1,1,33,2],"nBranches":12,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/alternation/many.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/alternation/many_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n'use strict';\nvar S$ = require('S$');\nvar q = S$.symbol(\"q\", '');\n\nif (/^(a|b|c)(c|d)([a-z]|[0-9])$/.test(q)) {\n\n\tif (/^..$/.test(q)) {\n\t\tconsole.log(1);\n\t}\n\n\tif (q == 'ac3') {\n\t\tconsole.log(2);\n\t}\n\n\tif (q == 'ccp') {\n\t\tconsole.log(3);\n\t}\n\n\tif (q == 'ac4p') {\n\t\tconsole.log(4);\n\t}\n\n\tconsole.log(5);\n\n} else {\n\n\tif (q == 'ac5') {\n\t\tconsole.log(6);\n\t}\n\n\tconsole.log(7);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(433, '/home/popl2022/compare_aratha_expose/regex-expose/core/alternation/many_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/core/alternation/many.js');
            J$.N(441, 'S$', S$, 0);
            J$.N(449, 'q', q, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var q = J$.X1(89, J$.W(81, 'q', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "q", 21, false), J$.T(65, '', 21, false)), q, 3));
            if (J$.X1(497, J$.C(48, J$.M(113, J$.T(97, /^(a|b|c)(c|d)([a-z]|[0-9])$/, 14, false), 'test', 0)(J$.R(105, 'q', q, 1))))) {
                if (J$.X1(457, J$.C(8, J$.M(137, J$.T(121, /^..$/, 14, false), 'test', 0)(J$.R(129, 'q', q, 1))))) {
                    J$.X1(169, J$.M(161, J$.R(145, 'console', console, 2), 'log', 0)(J$.T(153, 1, 22, false)));
                }
                if (J$.X1(465, J$.C(16, J$.B(10, '==', J$.R(177, 'q', q, 1), J$.T(185, 'ac3', 21, false), 0)))) {
                    J$.X1(217, J$.M(209, J$.R(193, 'console', console, 2), 'log', 0)(J$.T(201, 2, 22, false)));
                }
                if (J$.X1(473, J$.C(24, J$.B(18, '==', J$.R(225, 'q', q, 1), J$.T(233, 'ccp', 21, false), 0)))) {
                    J$.X1(265, J$.M(257, J$.R(241, 'console', console, 2), 'log', 0)(J$.T(249, 3, 22, false)));
                }
                if (J$.X1(481, J$.C(32, J$.B(26, '==', J$.R(273, 'q', q, 1), J$.T(281, 'ac4p', 21, false), 0)))) {
                    J$.X1(313, J$.M(305, J$.R(289, 'console', console, 2), 'log', 0)(J$.T(297, 4, 22, false)));
                }
                J$.X1(345, J$.M(337, J$.R(321, 'console', console, 2), 'log', 0)(J$.T(329, 5, 22, false)));
            } else {
                if (J$.X1(489, J$.C(40, J$.B(34, '==', J$.R(353, 'q', q, 1), J$.T(361, 'ac5', 21, false), 0)))) {
                    J$.X1(393, J$.M(385, J$.R(369, 'console', console, 2), 'log', 0)(J$.T(377, 6, 22, false)));
                }
                J$.X1(425, J$.M(417, J$.R(401, 'console', console, 2), 'log', 0)(J$.T(409, 7, 22, false)));
            }
        } catch (J$e) {
            J$.Ex(505, J$e);
        } finally {
            if (J$.Sr(513)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
