J$.iids = {"8":[13,5,13,17],"9":[5,10,5,17],"10":[11,13,11,24],"16":[17,5,17,13],"17":[5,18,5,22],"18":[13,5,13,17],"24":[21,5,21,13],"25":[5,10,5,23],"26":[17,5,17,13],"33":[5,10,5,23],"34":[21,5,21,13],"41":[5,10,5,23],"49":[6,9,6,11],"57":[6,19,6,22],"65":[6,24,6,27],"73":[6,9,6,28],"75":[6,9,6,18],"81":[6,9,6,28],"89":[6,9,6,28],"97":[7,9,7,18],"105":[7,9,7,18],"113":[7,9,7,18],"121":[9,5,9,6],"129":[9,15,9,16],"137":[9,18,9,25],"145":[9,5,9,26],"147":[9,5,9,14],"153":[9,5,9,26],"161":[9,1,9,27],"169":[11,1,11,8],"177":[11,13,11,20],"185":[11,23,11,24],"193":[11,1,11,25],"195":[11,1,11,12],"201":[11,1,11,26],"209":[13,5,13,6],"217":[13,10,13,17],"225":[14,2,14,9],"233":[14,14,14,15],"241":[14,2,14,16],"243":[14,2,14,13],"249":[14,2,14,17],"257":[17,5,17,6],"265":[17,10,17,13],"273":[18,2,18,9],"281":[18,14,18,15],"289":[18,2,18,16],"291":[18,2,18,13],"297":[18,2,18,17],"305":[21,5,21,6],"313":[21,10,21,13],"321":[22,2,22,9],"329":[22,14,22,15],"337":[22,2,22,16],"339":[22,2,22,13],"345":[22,2,22,17],"353":[1,1,23,2],"361":[1,1,23,2],"369":[1,1,23,2],"377":[1,1,23,2],"385":[13,1,15,2],"393":[17,1,19,2],"401":[21,1,23,2],"409":[1,1,23,2],"417":[1,1,23,2],"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/replace/single/replace_2.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/replace/single/replace_2_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Tests a replace on a non global regex\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", 'a');\nvar b = /^(a|b)$/;\n\nx = x.replace(b, 'hello');\n\nconsole.log('X is ' + x);\n\nif (x == 'hello') {\n\tconsole.log(1);\n}\n\nif (x == 'a') {\n\tconsole.log(2);\n}\n\nif (x == 'b') {\n\tconsole.log(3);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(353, '/home/popl2022/compare_aratha_expose/regex-expose/replace/single/replace_2_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/replace/single/replace_2.js');
            J$.N(361, 'S$', S$, 0);
            J$.N(369, 'x', x, 0);
            J$.N(377, 'b', b, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, 'a', 21, false)), x, 3));
            var b = J$.X1(113, J$.W(105, 'b', J$.T(97, /^(a|b)$/, 14, false), b, 3));
            J$.X1(161, x = J$.W(153, 'x', J$.M(145, J$.R(121, 'x', x, 1), 'replace', 0)(J$.R(129, 'b', b, 1), J$.T(137, 'hello', 21, false)), x, 2));
            J$.X1(201, J$.M(193, J$.R(169, 'console', console, 2), 'log', 0)(J$.B(10, '+', J$.T(177, 'X is ', 21, false), J$.R(185, 'x', x, 1), 0)));
            if (J$.X1(385, J$.C(8, J$.B(18, '==', J$.R(209, 'x', x, 1), J$.T(217, 'hello', 21, false), 0)))) {
                J$.X1(249, J$.M(241, J$.R(225, 'console', console, 2), 'log', 0)(J$.T(233, 1, 22, false)));
            }
            if (J$.X1(393, J$.C(16, J$.B(26, '==', J$.R(257, 'x', x, 1), J$.T(265, 'a', 21, false), 0)))) {
                J$.X1(297, J$.M(289, J$.R(273, 'console', console, 2), 'log', 0)(J$.T(281, 2, 22, false)));
            }
            if (J$.X1(401, J$.C(24, J$.B(34, '==', J$.R(305, 'x', x, 1), J$.T(313, 'b', 21, false), 0)))) {
                J$.X1(345, J$.M(337, J$.R(321, 'console', console, 2), 'log', 0)(J$.T(329, 3, 22, false)));
            }
        } catch (J$e) {
            J$.Ex(409, J$e);
        } finally {
            if (J$.Sr(417)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
