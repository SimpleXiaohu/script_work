J$.iids = {"8":[8,6,8,14],"9":[4,10,4,17],"10":[8,6,8,14],"16":[9,6,9,14],"17":[4,18,4,22],"18":[9,6,9,14],"24":[10,6,10,18],"25":[4,10,4,23],"26":[10,6,10,18],"32":[11,6,11,16],"33":[4,10,4,23],"34":[11,6,11,16],"40":[7,5,7,32],"41":[4,10,4,23],"49":[5,9,5,11],"57":[5,19,5,22],"65":[5,24,5,26],"73":[5,9,5,27],"75":[5,9,5,18],"81":[5,9,5,27],"89":[5,9,5,27],"97":[7,5,7,24],"105":[7,30,7,31],"113":[7,5,7,32],"115":[7,5,7,29],"121":[8,6,8,7],"129":[8,11,8,14],"137":[8,16,8,23],"145":[8,28,8,29],"153":[8,16,8,30],"155":[8,16,8,27],"161":[8,16,8,31],"169":[9,6,9,7],"177":[9,11,9,14],"185":[9,16,9,23],"193":[9,28,9,29],"201":[9,16,9,30],"203":[9,16,9,27],"209":[9,16,9,31],"217":[10,6,10,7],"225":[10,11,10,18],"233":[10,20,10,27],"241":[10,32,10,33],"249":[10,20,10,34],"251":[10,20,10,31],"257":[10,20,10,35],"265":[11,6,11,7],"273":[11,11,11,16],"281":[11,18,11,25],"289":[11,30,11,31],"297":[11,18,11,32],"299":[11,18,11,29],"305":[11,18,11,33],"313":[12,2,12,9],"321":[12,14,12,15],"329":[12,2,12,16],"331":[12,2,12,13],"337":[12,2,12,17],"345":[15,1,15,8],"353":[15,13,15,14],"361":[15,1,15,15],"363":[15,1,15,12],"369":[15,1,15,16],"377":[1,1,15,16],"385":[1,1,15,16],"393":[1,1,15,16],"401":[8,2,8,31],"409":[9,2,9,31],"417":[10,2,10,35],"425":[11,2,11,33],"433":[7,1,13,2],"441":[1,1,15,16],"449":[1,1,15,16],"nBranches":10,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/alternation/exhaustive_simple.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/alternation/exhaustive_simple_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Simple alternation test\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^(a|b|hello|dog)$/.test(x)) {\n\tif (x == 'a') console.log(1);\n\tif (x == 'b') console.log(2);\n\tif (x == 'hello') console.log(3);\n\tif (x == 'dog') console.log(4);\n\tconsole.log(5);\n}\n\nconsole.log(6);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(377, '/home/popl2022/compare_aratha_expose/regex-expose/core/alternation/exhaustive_simple_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/core/alternation/exhaustive_simple.js');
            J$.N(385, 'S$', S$, 0);
            J$.N(393, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(433, J$.C(40, J$.M(113, J$.T(97, /^(a|b|hello|dog)$/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                if (J$.X1(401, J$.C(8, J$.B(10, '==', J$.R(121, 'x', x, 1), J$.T(129, 'a', 21, false), 0))))
                    J$.X1(161, J$.M(153, J$.R(137, 'console', console, 2), 'log', 0)(J$.T(145, 1, 22, false)));
                if (J$.X1(409, J$.C(16, J$.B(18, '==', J$.R(169, 'x', x, 1), J$.T(177, 'b', 21, false), 0))))
                    J$.X1(209, J$.M(201, J$.R(185, 'console', console, 2), 'log', 0)(J$.T(193, 2, 22, false)));
                if (J$.X1(417, J$.C(24, J$.B(26, '==', J$.R(217, 'x', x, 1), J$.T(225, 'hello', 21, false), 0))))
                    J$.X1(257, J$.M(249, J$.R(233, 'console', console, 2), 'log', 0)(J$.T(241, 3, 22, false)));
                if (J$.X1(425, J$.C(32, J$.B(34, '==', J$.R(265, 'x', x, 1), J$.T(273, 'dog', 21, false), 0))))
                    J$.X1(305, J$.M(297, J$.R(281, 'console', console, 2), 'log', 0)(J$.T(289, 4, 22, false)));
                J$.X1(337, J$.M(329, J$.R(313, 'console', console, 2), 'log', 0)(J$.T(321, 5, 22, false)));
            }
            J$.X1(369, J$.M(361, J$.R(345, 'console', console, 2), 'log', 0)(J$.T(353, 6, 22, false)));
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
