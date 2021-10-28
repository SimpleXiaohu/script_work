J$.iids = {"8":[15,6,15,21],"9":[5,10,5,17],"10":[9,11,9,23],"16":[19,6,19,18],"17":[5,18,5,22],"18":[13,5,13,18],"24":[23,6,23,17],"25":[5,10,5,23],"26":[15,6,15,21],"32":[13,5,13,18],"33":[5,10,5,23],"34":[19,6,19,18],"41":[5,10,5,23],"42":[23,6,23,17],"49":[6,9,6,11],"57":[6,19,6,22],"65":[6,24,6,26],"73":[6,9,6,27],"75":[6,9,6,18],"81":[6,9,6,27],"89":[6,9,6,27],"97":[7,9,7,12],"105":[7,9,7,12],"113":[7,9,7,12],"121":[9,1,9,3],"129":[9,11,9,12],"137":[9,11,9,19],"145":[9,22,9,23],"153":[9,1,9,24],"155":[9,1,9,10],"161":[9,1,9,25],"169":[11,5,11,6],"177":[11,13,11,14],"185":[11,5,11,15],"187":[11,5,11,12],"193":[11,5,11,15],"201":[11,1,11,16],"209":[13,5,13,6],"217":[13,5,13,13],"225":[13,17,13,18],"233":[15,6,15,7],"241":[15,8,15,9],"249":[15,6,15,10],"257":[15,14,15,21],"265":[16,3,16,10],"273":[16,15,16,16],"281":[16,3,16,17],"283":[16,3,16,14],"289":[16,3,16,18],"297":[19,6,19,7],"305":[19,8,19,9],"313":[19,6,19,10],"321":[19,14,19,18],"329":[20,9,20,22],"337":[20,9,20,22],"345":[20,3,20,23],"353":[23,6,23,7],"361":[23,8,23,9],"369":[23,6,23,10],"377":[23,14,23,17],"385":[24,9,24,22],"393":[24,9,24,22],"401":[24,3,24,23],"409":[1,1,26,2],"417":[1,1,26,2],"425":[1,1,26,2],"433":[1,1,26,2],"441":[15,2,17,3],"449":[19,2,21,3],"457":[23,2,25,3],"465":[13,1,26,2],"473":[1,1,26,2],"481":[1,1,26,2],"nBranches":8,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/split/split_1.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/split/split_1_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Tests replace on a global regex\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar b = /a/;\n\nS$.assume(x.length < 5);\n\nx = x.split(b);\n\nif (x.length == 2) {\n\n\tif (x[0] == 'hello') {\n\t\tconsole.log(1); //Broken by the assumption on string length\n\t}\n\n\tif (x[1] == 'wh') {\n\t\tthrow 'Reachable 1';\n\t}\n\n\tif (x[0] == 'w') {\n\t\tthrow 'Reachable 1';\n\t}\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(409, '/home/popl2022/compare_aratha_expose/regex-expose/split/split_1_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/split/split_1.js');
            J$.N(417, 'S$', S$, 0);
            J$.N(425, 'x', x, 0);
            J$.N(433, 'b', b, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            var b = J$.X1(113, J$.W(105, 'b', J$.T(97, /a/, 14, false), b, 3));
            J$.X1(161, J$.M(153, J$.R(121, 'S$', S$, 1), 'assume', 0)(J$.B(10, '<', J$.G(137, J$.R(129, 'x', x, 1), 'length', 0), J$.T(145, 5, 22, false), 0)));
            J$.X1(201, x = J$.W(193, 'x', J$.M(185, J$.R(169, 'x', x, 1), 'split', 0)(J$.R(177, 'b', b, 1)), x, 2));
            if (J$.X1(465, J$.C(32, J$.B(18, '==', J$.G(217, J$.R(209, 'x', x, 1), 'length', 0), J$.T(225, 2, 22, false), 0)))) {
                if (J$.X1(441, J$.C(8, J$.B(26, '==', J$.G(249, J$.R(233, 'x', x, 1), J$.T(241, 0, 22, false), 4), J$.T(257, 'hello', 21, false), 0)))) {
                    J$.X1(289, J$.M(281, J$.R(265, 'console', console, 2), 'log', 0)(J$.T(273, 1, 22, false)));
                }
                if (J$.X1(449, J$.C(16, J$.B(34, '==', J$.G(313, J$.R(297, 'x', x, 1), J$.T(305, 1, 22, false), 4), J$.T(321, 'wh', 21, false), 0)))) {
                    throw J$.X1(345, J$.Th(337, J$.T(329, 'Reachable 1', 21, false)));
                }
                if (J$.X1(457, J$.C(24, J$.B(42, '==', J$.G(369, J$.R(353, 'x', x, 1), J$.T(361, 0, 22, false), 4), J$.T(377, 'w', 21, false), 0)))) {
                    throw J$.X1(401, J$.Th(393, J$.T(385, 'Reachable 1', 21, false)));
                }
            }
        } catch (J$e) {
            J$.Ex(473, J$e);
        } finally {
            if (J$.Sr(481)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
