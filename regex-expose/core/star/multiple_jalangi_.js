J$.iids = {"8":[6,5,6,30],"9":[3,10,3,17],"16":[10,5,10,33],"17":[3,18,3,22],"24":[14,5,14,30],"25":[3,10,3,23],"32":[18,5,18,33],"33":[3,10,3,23],"40":[22,5,22,19],"41":[3,10,3,23],"48":[26,5,26,19],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,5,6,22],"105":[6,28,6,29],"113":[6,5,6,30],"115":[6,5,6,27],"121":[7,2,7,9],"129":[7,14,7,15],"137":[7,2,7,16],"139":[7,2,7,13],"145":[7,2,7,17],"153":[10,5,10,25],"161":[10,31,10,32],"169":[10,5,10,33],"171":[10,5,10,30],"177":[11,2,11,9],"185":[11,14,11,15],"193":[11,2,11,16],"195":[11,2,11,13],"201":[11,2,11,17],"209":[14,5,14,22],"217":[14,28,14,29],"225":[14,5,14,30],"227":[14,5,14,27],"233":[15,2,15,9],"241":[15,14,15,15],"249":[15,2,15,16],"251":[15,2,15,13],"257":[15,2,15,17],"265":[18,5,18,25],"273":[18,31,18,32],"281":[18,5,18,33],"283":[18,5,18,30],"289":[19,2,19,9],"297":[19,14,19,15],"305":[19,2,19,16],"307":[19,2,19,13],"313":[19,2,19,17],"321":[22,5,22,11],"329":[22,17,22,18],"337":[22,5,22,19],"339":[22,5,22,16],"345":[23,2,23,9],"353":[23,14,23,15],"361":[23,2,23,16],"363":[23,2,23,13],"369":[23,2,23,17],"377":[26,5,26,11],"385":[26,17,26,18],"393":[26,5,26,19],"395":[26,5,26,16],"401":[27,2,27,9],"409":[27,14,27,15],"417":[27,2,27,16],"419":[27,2,27,13],"425":[27,2,27,17],"433":[30,1,30,8],"441":[30,13,30,14],"449":[30,1,30,15],"451":[30,1,30,12],"457":[30,1,30,16],"465":[1,1,30,16],"473":[1,1,30,16],"481":[1,1,30,16],"489":[6,1,8,2],"497":[10,1,12,2],"505":[14,1,16,2],"513":[18,1,20,2],"521":[22,1,24,2],"529":[26,1,28,2],"537":[1,1,30,16],"545":[1,1,30,16],"nBranches":12,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/star/multiple.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/star/multiple_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^he*llo_world*$/.test(x)) {\n\tconsole.log(1);\n}\n\nif (/^(hello)*(world)*$/.test(x)) {\n\tconsole.log(2);\n}\n\nif (/^he*llo_world*$/.test(x)) {\n\tconsole.log(3);\n}\n\nif (/^(hello)*(world)*$/.test(x)) {\n\tconsole.log(4);\n}\n\nif (/^a*$/.test(x)) {\n\tconsole.log(5);\n}\n\nif (/^b*$/.test(x)) {\n\tconsole.log(6);\n}\n\nconsole.log(7);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(465, '/home/popl2022/compare_aratha_expose/regex-expose/core/star/multiple_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/core/star/multiple.js');
            J$.N(473, 'S$', S$, 0);
            J$.N(481, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(489, J$.C(8, J$.M(113, J$.T(97, /^he*llo_world*$/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                J$.X1(145, J$.M(137, J$.R(121, 'console', console, 2), 'log', 0)(J$.T(129, 1, 22, false)));
            }
            if (J$.X1(497, J$.C(16, J$.M(169, J$.T(153, /^(hello)*(world)*$/, 14, false), 'test', 0)(J$.R(161, 'x', x, 1))))) {
                J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, 2, 22, false)));
            }
            if (J$.X1(505, J$.C(24, J$.M(225, J$.T(209, /^he*llo_world*$/, 14, false), 'test', 0)(J$.R(217, 'x', x, 1))))) {
                J$.X1(257, J$.M(249, J$.R(233, 'console', console, 2), 'log', 0)(J$.T(241, 3, 22, false)));
            }
            if (J$.X1(513, J$.C(32, J$.M(281, J$.T(265, /^(hello)*(world)*$/, 14, false), 'test', 0)(J$.R(273, 'x', x, 1))))) {
                J$.X1(313, J$.M(305, J$.R(289, 'console', console, 2), 'log', 0)(J$.T(297, 4, 22, false)));
            }
            if (J$.X1(521, J$.C(40, J$.M(337, J$.T(321, /^a*$/, 14, false), 'test', 0)(J$.R(329, 'x', x, 1))))) {
                J$.X1(369, J$.M(361, J$.R(345, 'console', console, 2), 'log', 0)(J$.T(353, 5, 22, false)));
            }
            if (J$.X1(529, J$.C(48, J$.M(393, J$.T(377, /^b*$/, 14, false), 'test', 0)(J$.R(385, 'x', x, 1))))) {
                J$.X1(425, J$.M(417, J$.R(401, 'console', console, 2), 'log', 0)(J$.T(409, 6, 22, false)));
            }
            J$.X1(457, J$.M(449, J$.R(433, 'console', console, 2), 'log', 0)(J$.T(441, 7, 22, false)));
        } catch (J$e) {
            J$.Ex(537, J$e);
        } finally {
            if (J$.Sr(545)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
