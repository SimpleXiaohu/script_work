J$.iids = {"8":[7,6,7,17],"9":[3,10,3,17],"10":[7,6,7,17],"16":[6,5,6,21],"17":[3,18,3,22],"18":[12,6,12,17],"24":[12,6,12,17],"25":[3,10,3,23],"26":[17,6,17,17],"32":[11,5,11,21],"33":[3,10,3,23],"40":[17,6,17,17],"41":[3,10,3,23],"48":[16,5,16,19],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,5,6,13],"105":[6,19,6,20],"113":[6,5,6,21],"115":[6,5,6,18],"121":[7,6,7,7],"129":[7,11,7,17],"137":[7,19,7,26],"145":[7,31,7,32],"153":[7,19,7,33],"155":[7,19,7,30],"161":[7,19,7,34],"169":[8,2,8,9],"177":[8,14,8,15],"185":[8,2,8,16],"187":[8,2,8,13],"193":[8,2,8,17],"201":[11,5,11,13],"209":[11,19,11,20],"217":[11,5,11,21],"219":[11,5,11,18],"225":[12,6,12,7],"233":[12,11,12,17],"241":[12,19,12,26],"249":[12,31,12,32],"257":[12,19,12,33],"259":[12,19,12,30],"265":[12,19,12,34],"273":[13,2,13,9],"281":[13,14,13,15],"289":[13,2,13,16],"291":[13,2,13,13],"297":[13,2,13,17],"305":[16,5,16,11],"313":[16,17,16,18],"321":[16,5,16,19],"323":[16,5,16,16],"329":[17,6,17,7],"337":[17,11,17,17],"345":[17,19,17,26],"353":[17,31,17,32],"361":[17,19,17,33],"363":[17,19,17,30],"369":[17,19,17,34],"377":[18,2,18,9],"385":[18,14,18,15],"393":[18,2,18,16],"395":[18,2,18,13],"401":[18,2,18,17],"409":[1,1,19,2],"417":[1,1,19,2],"425":[1,1,19,2],"433":[7,2,7,34],"441":[6,1,9,2],"449":[12,2,12,34],"457":[11,1,14,2],"465":[17,2,17,34],"473":[16,1,19,2],"481":[1,1,19,2],"489":[1,1,19,2],"nBranches":12,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/escaping/hex.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/escaping/hex_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^\\xFF$/.test(x)) {\n\tif (x != '\\xFF') console.log(1);\n\tconsole.log(2);\n}\n\nif (/^\\xEF$/.test(x)) {\n\tif (x != '\\xEF') console.log(3);\n\tconsole.log(4);\n}\n\nif (/^\\0$/.test(x)) {\n\tif (x == '\\x00') console.log(5);\n\tconsole.log(6);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(409, '/home/popl2022/compare_aratha_expose/regex-expose/core/escaping/hex_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/core/escaping/hex.js');
            J$.N(417, 'S$', S$, 0);
            J$.N(425, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(441, J$.C(16, J$.M(113, J$.T(97, /^\xFF$/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                if (J$.X1(433, J$.C(8, J$.B(10, '!=', J$.R(121, 'x', x, 1), J$.T(129, '\xFF', 21, false), 0))))
                    J$.X1(161, J$.M(153, J$.R(137, 'console', console, 2), 'log', 0)(J$.T(145, 1, 22, false)));
                J$.X1(193, J$.M(185, J$.R(169, 'console', console, 2), 'log', 0)(J$.T(177, 2, 22, false)));
            }
            if (J$.X1(457, J$.C(32, J$.M(217, J$.T(201, /^\xEF$/, 14, false), 'test', 0)(J$.R(209, 'x', x, 1))))) {
                if (J$.X1(449, J$.C(24, J$.B(18, '!=', J$.R(225, 'x', x, 1), J$.T(233, '\xEF', 21, false), 0))))
                    J$.X1(265, J$.M(257, J$.R(241, 'console', console, 2), 'log', 0)(J$.T(249, 3, 22, false)));
                J$.X1(297, J$.M(289, J$.R(273, 'console', console, 2), 'log', 0)(J$.T(281, 4, 22, false)));
            }
            if (J$.X1(473, J$.C(48, J$.M(321, J$.T(305, /^\0$/, 14, false), 'test', 0)(J$.R(313, 'x', x, 1))))) {
                if (J$.X1(465, J$.C(40, J$.B(26, '==', J$.R(329, 'x', x, 1), J$.T(337, '\x00', 21, false), 0))))
                    J$.X1(369, J$.M(361, J$.R(345, 'console', console, 2), 'log', 0)(J$.T(353, 5, 22, false)));
                J$.X1(401, J$.M(393, J$.R(377, 'console', console, 2), 'log', 0)(J$.T(385, 6, 22, false)));
            }
        } catch (J$e) {
            J$.Ex(481, J$e);
        } finally {
            if (J$.Sr(489)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
