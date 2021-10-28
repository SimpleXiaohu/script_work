J$.iids = {"8":[10,6,10,14],"9":[3,10,3,17],"10":[10,6,10,14],"16":[14,6,14,14],"17":[3,18,3,22],"18":[14,6,14,14],"24":[18,6,18,14],"25":[3,10,3,23],"26":[18,6,18,14],"32":[22,6,22,14],"33":[3,10,3,23],"34":[22,6,22,14],"40":[8,5,8,16],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,11,6,27],"105":[6,11,6,27],"113":[6,11,6,27],"121":[8,5,8,8],"129":[8,14,8,15],"137":[8,5,8,16],"139":[8,5,8,13],"145":[10,6,10,7],"153":[10,11,10,14],"161":[11,3,11,10],"169":[11,15,11,16],"177":[11,3,11,17],"179":[11,3,11,14],"185":[11,3,11,18],"193":[14,6,14,7],"201":[14,11,14,14],"209":[15,3,15,10],"217":[15,15,15,16],"225":[15,3,15,17],"227":[15,3,15,14],"233":[15,3,15,18],"241":[18,6,18,7],"249":[18,11,18,14],"257":[19,3,19,10],"265":[19,15,19,16],"273":[19,3,19,17],"275":[19,3,19,14],"281":[19,3,19,18],"289":[22,6,22,7],"297":[22,11,22,14],"305":[23,3,23,10],"313":[23,15,23,16],"321":[23,3,23,17],"323":[23,3,23,14],"329":[23,3,23,18],"337":[26,2,26,9],"345":[26,14,26,15],"353":[26,2,26,16],"355":[26,2,26,13],"361":[26,2,26,17],"369":[1,1,27,2],"377":[1,1,27,2],"385":[1,1,27,2],"393":[1,1,27,2],"401":[10,2,12,3],"409":[14,2,16,3],"417":[18,2,20,3],"425":[22,2,24,3],"433":[8,1,27,2],"441":[1,1,27,2],"449":[1,1,27,2],"nBranches":10,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/assertions/ahead_4.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/assertions/ahead_4_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nvar re3 = /^(?=(a|b|c)).$/;\n\nif (re3.test(x)) {\n\t\n\tif (x == 'd') {\n\t\tconsole.log(1);\n\t}\n\n\tif (x == 'a') {\n\t\tconsole.log(2);\n\t}\n\n\tif (x == 'b') {\n\t\tconsole.log(3);\n\t}\n\n\tif (x == 'c') {\n\t\tconsole.log(4);\n\t}\n\n\tconsole.log(5);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(369, '/home/popl2022/compare_aratha_expose/regex-expose/assertions/ahead_4_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/assertions/ahead_4.js');
            J$.N(377, 'S$', S$, 0);
            J$.N(385, 'x', x, 0);
            J$.N(393, 're3', re3, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            var re3 = J$.X1(113, J$.W(105, 're3', J$.T(97, /^(?=(a|b|c)).$/, 14, false), re3, 3));
            if (J$.X1(433, J$.C(40, J$.M(137, J$.R(121, 're3', re3, 1), 'test', 0)(J$.R(129, 'x', x, 1))))) {
                if (J$.X1(401, J$.C(8, J$.B(10, '==', J$.R(145, 'x', x, 1), J$.T(153, 'd', 21, false), 0)))) {
                    J$.X1(185, J$.M(177, J$.R(161, 'console', console, 2), 'log', 0)(J$.T(169, 1, 22, false)));
                }
                if (J$.X1(409, J$.C(16, J$.B(18, '==', J$.R(193, 'x', x, 1), J$.T(201, 'a', 21, false), 0)))) {
                    J$.X1(233, J$.M(225, J$.R(209, 'console', console, 2), 'log', 0)(J$.T(217, 2, 22, false)));
                }
                if (J$.X1(417, J$.C(24, J$.B(26, '==', J$.R(241, 'x', x, 1), J$.T(249, 'b', 21, false), 0)))) {
                    J$.X1(281, J$.M(273, J$.R(257, 'console', console, 2), 'log', 0)(J$.T(265, 3, 22, false)));
                }
                if (J$.X1(425, J$.C(32, J$.B(34, '==', J$.R(289, 'x', x, 1), J$.T(297, 'c', 21, false), 0)))) {
                    J$.X1(329, J$.M(321, J$.R(305, 'console', console, 2), 'log', 0)(J$.T(313, 4, 22, false)));
                }
                J$.X1(361, J$.M(353, J$.R(337, 'console', console, 2), 'log', 0)(J$.T(345, 5, 22, false)));
            }
        } catch (J$e) {
            J$.Ex(441, J$e);
        } finally {
            if (J$.Sr(449)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
