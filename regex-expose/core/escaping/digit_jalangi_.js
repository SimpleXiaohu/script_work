J$.iids = {"8":[8,6,8,24],"9":[3,10,3,17],"10":[8,6,8,24],"16":[6,5,6,19],"17":[3,18,3,22],"24":[17,6,17,23],"25":[3,10,3,23],"32":[15,5,15,19],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,5,6,11],"105":[6,17,6,18],"113":[6,5,6,19],"115":[6,5,6,16],"121":[8,7,8,16],"129":[8,22,8,23],"137":[8,7,8,24],"139":[8,7,8,21],"145":[9,3,9,10],"153":[9,15,9,16],"161":[9,3,9,17],"163":[9,3,9,14],"169":[9,3,9,18],"177":[12,2,12,9],"185":[12,14,12,15],"193":[12,2,12,16],"195":[12,2,12,13],"201":[12,2,12,17],"209":[15,5,15,11],"217":[15,17,15,18],"225":[15,5,15,19],"227":[15,5,15,16],"233":[17,6,17,15],"241":[17,21,17,22],"249":[17,6,17,23],"251":[17,6,17,20],"257":[18,3,18,10],"265":[18,15,18,16],"273":[18,3,18,17],"275":[18,3,18,14],"281":[18,3,18,18],"289":[21,2,21,9],"297":[21,14,21,15],"305":[21,2,21,16],"307":[21,2,21,13],"313":[21,2,21,17],"321":[1,1,22,2],"329":[1,1,22,2],"337":[1,1,22,2],"345":[8,2,10,3],"353":[6,1,13,2],"361":[17,2,19,3],"369":[15,1,22,2],"377":[1,1,22,2],"385":[1,1,22,2],"nBranches":8,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/escaping/digit.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/escaping/digit_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^\\d$/.test(x)) {\n\n\tif (!/^[0-9]$/.test(x)) {\n\t\tconsole.log(1);\n\t}\n\n\tconsole.log(2);\n}\n\nif (/^\\D$/.test(x)) {\n\n\tif (/^[0-9]$/.test(x)) {\n\t\tconsole.log(3);\n\t}\n\n\tconsole.log(4);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(321, '/home/popl2022/compare_aratha_expose/regex-expose/core/escaping/digit_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/core/escaping/digit.js');
            J$.N(329, 'S$', S$, 0);
            J$.N(337, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(353, J$.C(16, J$.M(113, J$.T(97, /^\d$/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                if (J$.X1(345, J$.C(8, J$.U(10, '!', J$.M(137, J$.T(121, /^[0-9]$/, 14, false), 'test', 0)(J$.R(129, 'x', x, 1)))))) {
                    J$.X1(169, J$.M(161, J$.R(145, 'console', console, 2), 'log', 0)(J$.T(153, 1, 22, false)));
                }
                J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, 2, 22, false)));
            }
            if (J$.X1(369, J$.C(32, J$.M(225, J$.T(209, /^\D$/, 14, false), 'test', 0)(J$.R(217, 'x', x, 1))))) {
                if (J$.X1(361, J$.C(24, J$.M(249, J$.T(233, /^[0-9]$/, 14, false), 'test', 0)(J$.R(241, 'x', x, 1))))) {
                    J$.X1(281, J$.M(273, J$.R(257, 'console', console, 2), 'log', 0)(J$.T(265, 3, 22, false)));
                }
                J$.X1(313, J$.M(305, J$.R(289, 'console', console, 2), 'log', 0)(J$.T(297, 4, 22, false)));
            }
        } catch (J$e) {
            J$.Ex(377, J$e);
        } finally {
            if (J$.Sr(385)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
