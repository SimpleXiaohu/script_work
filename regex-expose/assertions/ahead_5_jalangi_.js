J$.iids = {"8":[10,6,10,24],"9":[3,10,3,17],"10":[10,6,10,24],"16":[14,6,14,24],"17":[3,18,3,22],"18":[14,6,14,24],"24":[18,6,18,24],"25":[3,10,3,23],"26":[18,6,18,24],"32":[22,6,22,24],"33":[3,10,3,23],"34":[22,6,22,24],"40":[8,5,8,15],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,10,6,27],"105":[6,10,6,27],"113":[6,10,6,27],"121":[8,5,8,7],"129":[8,13,8,14],"137":[8,5,8,15],"139":[8,5,8,12],"145":[10,6,10,7],"153":[10,15,10,16],"161":[10,6,10,17],"163":[10,6,10,14],"169":[10,21,10,24],"177":[11,3,11,10],"185":[11,15,11,16],"193":[11,3,11,17],"195":[11,3,11,14],"201":[11,3,11,18],"209":[14,6,14,7],"217":[14,15,14,16],"225":[14,6,14,17],"227":[14,6,14,14],"233":[14,21,14,24],"241":[15,3,15,10],"249":[15,15,15,16],"257":[15,3,15,17],"259":[15,3,15,14],"265":[15,3,15,18],"273":[18,6,18,7],"281":[18,15,18,16],"289":[18,6,18,17],"291":[18,6,18,14],"297":[18,21,18,24],"305":[19,3,19,10],"313":[19,15,19,16],"321":[19,3,19,17],"323":[19,3,19,14],"329":[19,3,19,18],"337":[22,6,22,7],"345":[22,15,22,16],"353":[22,6,22,17],"355":[22,6,22,14],"361":[22,21,22,24],"369":[23,3,23,10],"377":[23,15,23,16],"385":[23,3,23,17],"387":[23,3,23,14],"393":[23,3,23,18],"401":[26,2,26,9],"409":[26,14,26,15],"417":[26,2,26,16],"419":[26,2,26,13],"425":[26,2,26,17],"433":[1,1,27,2],"441":[1,1,27,2],"449":[1,1,27,2],"457":[1,1,27,2],"465":[10,2,12,3],"473":[14,2,16,3],"481":[18,2,20,3],"489":[22,2,24,3],"497":[8,1,27,2],"505":[1,1,27,2],"513":[1,1,27,2],"nBranches":10,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/assertions/ahead_5.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/assertions/ahead_5_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nvar re = /^.(?=(a|b|c)).$/;\n\nif (re.test(x)) {\n\t\n\tif (x.charAt(1) == 'd') {\n\t\tconsole.log(1);\n\t}\n\n\tif (x.charAt(1) == 'a') {\n\t\tconsole.log(2);\n\t}\n\n\tif (x.charAt(1) == 'b') {\n\t\tconsole.log(3);\n\t}\n\n\tif (x.charAt(1) == 'c') {\n\t\tconsole.log(4);\n\t}\n\n\tconsole.log(5);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(433, '/home/popl2022/compare_aratha_expose/regex-expose/assertions/ahead_5_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/assertions/ahead_5.js');
            J$.N(441, 'S$', S$, 0);
            J$.N(449, 'x', x, 0);
            J$.N(457, 're', re, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            var re = J$.X1(113, J$.W(105, 're', J$.T(97, /^.(?=(a|b|c)).$/, 14, false), re, 3));
            if (J$.X1(497, J$.C(40, J$.M(137, J$.R(121, 're', re, 1), 'test', 0)(J$.R(129, 'x', x, 1))))) {
                if (J$.X1(465, J$.C(8, J$.B(10, '==', J$.M(161, J$.R(145, 'x', x, 1), 'charAt', 0)(J$.T(153, 1, 22, false)), J$.T(169, 'd', 21, false), 0)))) {
                    J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, 1, 22, false)));
                }
                if (J$.X1(473, J$.C(16, J$.B(18, '==', J$.M(225, J$.R(209, 'x', x, 1), 'charAt', 0)(J$.T(217, 1, 22, false)), J$.T(233, 'a', 21, false), 0)))) {
                    J$.X1(265, J$.M(257, J$.R(241, 'console', console, 2), 'log', 0)(J$.T(249, 2, 22, false)));
                }
                if (J$.X1(481, J$.C(24, J$.B(26, '==', J$.M(289, J$.R(273, 'x', x, 1), 'charAt', 0)(J$.T(281, 1, 22, false)), J$.T(297, 'b', 21, false), 0)))) {
                    J$.X1(329, J$.M(321, J$.R(305, 'console', console, 2), 'log', 0)(J$.T(313, 3, 22, false)));
                }
                if (J$.X1(489, J$.C(32, J$.B(34, '==', J$.M(353, J$.R(337, 'x', x, 1), 'charAt', 0)(J$.T(345, 1, 22, false)), J$.T(361, 'c', 21, false), 0)))) {
                    J$.X1(393, J$.M(385, J$.R(369, 'console', console, 2), 'log', 0)(J$.T(377, 4, 22, false)));
                }
                J$.X1(425, J$.M(417, J$.R(401, 'console', console, 2), 'log', 0)(J$.T(409, 5, 22, false)));
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
