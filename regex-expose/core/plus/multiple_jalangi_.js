J$.iids = {"8":[8,5,8,19],"9":[5,10,5,17],"10":[12,5,12,13],"16":[12,5,12,13],"17":[5,18,5,22],"18":[20,5,20,13],"24":[16,5,16,19],"25":[5,10,5,23],"26":[26,6,26,19],"32":[20,5,20,13],"33":[5,10,5,23],"34":[33,5,33,15],"40":[26,6,26,19],"41":[5,10,5,23],"48":[24,5,24,21],"49":[6,9,6,11],"56":[33,5,33,15],"57":[6,19,6,22],"65":[6,24,6,26],"73":[6,9,6,27],"75":[6,9,6,18],"81":[6,9,6,27],"89":[6,9,6,27],"97":[8,5,8,11],"105":[8,17,8,18],"113":[8,5,8,19],"115":[8,5,8,16],"121":[9,2,9,9],"129":[9,14,9,15],"137":[9,2,9,16],"139":[9,2,9,13],"145":[9,2,9,17],"153":[12,5,12,6],"161":[12,10,12,13],"169":[13,2,13,9],"177":[13,14,13,15],"185":[13,2,13,16],"187":[13,2,13,13],"193":[13,2,13,17],"201":[16,5,16,11],"209":[16,17,16,18],"217":[16,5,16,19],"219":[16,5,16,16],"225":[17,2,17,9],"233":[17,14,17,15],"241":[17,2,17,16],"243":[17,2,17,13],"249":[17,2,17,17],"257":[20,5,20,6],"265":[20,10,20,13],"273":[21,2,21,9],"281":[21,14,21,15],"289":[21,2,21,16],"291":[21,2,21,13],"297":[21,2,21,17],"305":[24,5,24,13],"313":[24,19,24,20],"321":[24,5,24,21],"323":[24,5,24,18],"329":[26,6,26,7],"337":[26,11,26,19],"345":[27,3,27,10],"353":[27,15,27,16],"361":[27,3,27,17],"363":[27,3,27,14],"369":[27,3,27,18],"377":[30,2,30,9],"385":[30,14,30,15],"393":[30,2,30,16],"395":[30,2,30,13],"401":[30,2,30,17],"409":[33,5,33,6],"417":[33,10,33,15],"425":[34,2,34,9],"433":[34,14,34,15],"441":[34,2,34,16],"443":[34,2,34,13],"449":[34,2,34,17],"457":[37,1,37,8],"465":[37,13,37,14],"473":[37,1,37,15],"475":[37,1,37,12],"481":[37,1,37,16],"489":[1,1,37,16],"497":[1,1,37,16],"505":[1,1,37,16],"513":[8,1,10,2],"521":[12,1,14,2],"529":[16,1,18,2],"537":[20,1,22,2],"545":[26,2,28,3],"553":[24,1,31,2],"561":[33,1,35,2],"569":[1,1,37,16],"577":[1,1,37,16],"nBranches":14,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/plus/multiple.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/plus/multiple_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Test the + operator\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^a+$/.test(x)) {\n\tconsole.log(1);\n}\n\nif (x == 'a') {\n\tconsole.log(2);\n}\n\nif (/^b+$/.test(x)) {\n\tconsole.log(3);\n}\n\nif (x == 'b') {\n\tconsole.log(4);\n}\n\nif (/^abc+$/.test(x)) {\n\n\tif (x == 'abcabc') {\n\t\tconsole.log(5);\n\t}\n\n\tconsole.log(6);\n}\n\nif (x == 'abc') {\n\tconsole.log(7);\n}\n\nconsole.log(8);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(489, '/home/popl2022/compare_aratha_expose/regex-expose/core/plus/multiple_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/core/plus/multiple.js');
            J$.N(497, 'S$', S$, 0);
            J$.N(505, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(513, J$.C(8, J$.M(113, J$.T(97, /^a+$/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                J$.X1(145, J$.M(137, J$.R(121, 'console', console, 2), 'log', 0)(J$.T(129, 1, 22, false)));
            }
            if (J$.X1(521, J$.C(16, J$.B(10, '==', J$.R(153, 'x', x, 1), J$.T(161, 'a', 21, false), 0)))) {
                J$.X1(193, J$.M(185, J$.R(169, 'console', console, 2), 'log', 0)(J$.T(177, 2, 22, false)));
            }
            if (J$.X1(529, J$.C(24, J$.M(217, J$.T(201, /^b+$/, 14, false), 'test', 0)(J$.R(209, 'x', x, 1))))) {
                J$.X1(249, J$.M(241, J$.R(225, 'console', console, 2), 'log', 0)(J$.T(233, 3, 22, false)));
            }
            if (J$.X1(537, J$.C(32, J$.B(18, '==', J$.R(257, 'x', x, 1), J$.T(265, 'b', 21, false), 0)))) {
                J$.X1(297, J$.M(289, J$.R(273, 'console', console, 2), 'log', 0)(J$.T(281, 4, 22, false)));
            }
            if (J$.X1(553, J$.C(48, J$.M(321, J$.T(305, /^abc+$/, 14, false), 'test', 0)(J$.R(313, 'x', x, 1))))) {
                if (J$.X1(545, J$.C(40, J$.B(26, '==', J$.R(329, 'x', x, 1), J$.T(337, 'abcabc', 21, false), 0)))) {
                    J$.X1(369, J$.M(361, J$.R(345, 'console', console, 2), 'log', 0)(J$.T(353, 5, 22, false)));
                }
                J$.X1(401, J$.M(393, J$.R(377, 'console', console, 2), 'log', 0)(J$.T(385, 6, 22, false)));
            }
            if (J$.X1(561, J$.C(56, J$.B(34, '==', J$.R(409, 'x', x, 1), J$.T(417, 'abc', 21, false), 0)))) {
                J$.X1(449, J$.M(441, J$.R(425, 'console', console, 2), 'log', 0)(J$.T(433, 7, 22, false)));
            }
            J$.X1(481, J$.M(473, J$.R(457, 'console', console, 2), 'log', 0)(J$.T(465, 8, 22, false)));
        } catch (J$e) {
            J$.Ex(569, J$e);
        } finally {
            if (J$.Sr(577)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
