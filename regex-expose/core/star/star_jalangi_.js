J$.iids = {"8":[7,6,7,29],"9":[3,10,3,17],"10":[7,6,7,29],"16":[8,6,8,22],"17":[3,18,3,22],"18":[8,6,8,22],"24":[9,6,9,13],"25":[3,10,3,23],"26":[9,6,9,13],"32":[6,5,6,30],"33":[3,10,3,23],"34":[14,6,14,13],"40":[14,6,14,13],"41":[3,10,3,23],"42":[15,6,15,28],"48":[15,6,15,28],"49":[4,9,4,11],"50":[16,6,16,14],"56":[16,6,16,14],"57":[4,19,4,22],"58":[17,6,17,27],"64":[17,6,17,27],"65":[4,24,4,26],"66":[18,6,18,28],"72":[18,6,18,28],"73":[4,9,4,27],"75":[4,9,4,18],"80":[13,5,13,33],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,5,6,22],"105":[6,28,6,29],"113":[6,5,6,30],"115":[6,5,6,27],"121":[7,6,7,7],"129":[7,11,7,29],"137":[7,31,7,38],"145":[7,43,7,44],"153":[7,31,7,45],"155":[7,31,7,42],"161":[7,31,7,46],"169":[8,6,8,7],"177":[8,11,8,22],"185":[8,24,8,31],"193":[8,36,8,37],"201":[8,24,8,38],"203":[8,24,8,35],"209":[8,24,8,39],"217":[9,6,9,7],"225":[9,11,9,13],"233":[9,15,9,22],"241":[9,27,9,28],"249":[9,15,9,29],"251":[9,15,9,26],"257":[9,15,9,30],"265":[10,2,10,9],"273":[10,14,10,15],"281":[10,2,10,16],"283":[10,2,10,13],"289":[10,2,10,17],"297":[13,5,13,25],"305":[13,31,13,32],"313":[13,5,13,33],"315":[13,5,13,30],"321":[14,6,14,7],"329":[14,11,14,13],"337":[14,15,14,22],"345":[14,27,14,28],"353":[14,15,14,29],"355":[14,15,14,26],"361":[14,15,14,30],"369":[15,6,15,7],"377":[15,11,15,28],"385":[15,30,15,37],"393":[15,42,15,43],"401":[15,30,15,44],"403":[15,30,15,41],"409":[15,30,15,45],"417":[16,6,16,7],"425":[16,11,16,14],"433":[16,16,16,23],"441":[16,28,16,29],"449":[16,16,16,30],"451":[16,16,16,27],"457":[16,16,16,31],"465":[17,6,17,7],"473":[17,11,17,27],"481":[17,29,17,36],"489":[17,41,17,42],"497":[17,29,17,43],"499":[17,29,17,40],"505":[17,29,17,44],"513":[18,6,18,7],"521":[18,11,18,28],"529":[18,30,18,37],"537":[18,42,18,43],"545":[18,30,18,44],"547":[18,30,18,41],"553":[18,30,18,45],"561":[19,2,19,9],"569":[19,14,19,16],"577":[19,2,19,17],"579":[19,2,19,13],"585":[19,2,19,18],"593":[1,1,20,2],"601":[1,1,20,2],"609":[1,1,20,2],"617":[7,2,7,46],"625":[8,2,8,39],"633":[9,2,9,30],"641":[6,1,11,2],"649":[14,2,14,30],"657":[15,2,15,45],"665":[16,2,16,31],"673":[17,2,17,44],"681":[18,2,18,45],"689":[13,1,20,2],"697":[1,1,20,2],"705":[1,1,20,2],"nBranches":20,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/star/star.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/star/star_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^he*llo_world*$/.test(x)) {\n\tif (x == 'heello_worlddddd') console.log(1);\n\tif (x == 'hllo_worl') console.log(2);\n\tif (x == '') console.log(3);\n\tconsole.log(4);\n}\n\nif (/^(hello)*(world)*$/.test(x)) {\n\tif (x == '') console.log(5);\n\tif (x == 'hellohelloworld') console.log(6);\n\tif (x == 'd') console.log(7);\n\tif (x == 'hellohelloworl') console.log(8);\n\tif (x == 'worldworldworld') console.log(9);\n\tconsole.log(10);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(593, '/home/popl2022/compare_aratha_expose/regex-expose/core/star/star_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/core/star/star.js');
            J$.N(601, 'S$', S$, 0);
            J$.N(609, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(641, J$.C(32, J$.M(113, J$.T(97, /^he*llo_world*$/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                if (J$.X1(617, J$.C(8, J$.B(10, '==', J$.R(121, 'x', x, 1), J$.T(129, 'heello_worlddddd', 21, false), 0))))
                    J$.X1(161, J$.M(153, J$.R(137, 'console', console, 2), 'log', 0)(J$.T(145, 1, 22, false)));
                if (J$.X1(625, J$.C(16, J$.B(18, '==', J$.R(169, 'x', x, 1), J$.T(177, 'hllo_worl', 21, false), 0))))
                    J$.X1(209, J$.M(201, J$.R(185, 'console', console, 2), 'log', 0)(J$.T(193, 2, 22, false)));
                if (J$.X1(633, J$.C(24, J$.B(26, '==', J$.R(217, 'x', x, 1), J$.T(225, '', 21, false), 0))))
                    J$.X1(257, J$.M(249, J$.R(233, 'console', console, 2), 'log', 0)(J$.T(241, 3, 22, false)));
                J$.X1(289, J$.M(281, J$.R(265, 'console', console, 2), 'log', 0)(J$.T(273, 4, 22, false)));
            }
            if (J$.X1(689, J$.C(80, J$.M(313, J$.T(297, /^(hello)*(world)*$/, 14, false), 'test', 0)(J$.R(305, 'x', x, 1))))) {
                if (J$.X1(649, J$.C(40, J$.B(34, '==', J$.R(321, 'x', x, 1), J$.T(329, '', 21, false), 0))))
                    J$.X1(361, J$.M(353, J$.R(337, 'console', console, 2), 'log', 0)(J$.T(345, 5, 22, false)));
                if (J$.X1(657, J$.C(48, J$.B(42, '==', J$.R(369, 'x', x, 1), J$.T(377, 'hellohelloworld', 21, false), 0))))
                    J$.X1(409, J$.M(401, J$.R(385, 'console', console, 2), 'log', 0)(J$.T(393, 6, 22, false)));
                if (J$.X1(665, J$.C(56, J$.B(50, '==', J$.R(417, 'x', x, 1), J$.T(425, 'd', 21, false), 0))))
                    J$.X1(457, J$.M(449, J$.R(433, 'console', console, 2), 'log', 0)(J$.T(441, 7, 22, false)));
                if (J$.X1(673, J$.C(64, J$.B(58, '==', J$.R(465, 'x', x, 1), J$.T(473, 'hellohelloworl', 21, false), 0))))
                    J$.X1(505, J$.M(497, J$.R(481, 'console', console, 2), 'log', 0)(J$.T(489, 8, 22, false)));
                if (J$.X1(681, J$.C(72, J$.B(66, '==', J$.R(513, 'x', x, 1), J$.T(521, 'worldworldworld', 21, false), 0))))
                    J$.X1(553, J$.M(545, J$.R(529, 'console', console, 2), 'log', 0)(J$.T(537, 9, 22, false)));
                J$.X1(585, J$.M(577, J$.R(561, 'console', console, 2), 'log', 0)(J$.T(569, 10, 22, false)));
            }
        } catch (J$e) {
            J$.Ex(697, J$e);
        } finally {
            if (J$.Sr(705)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
