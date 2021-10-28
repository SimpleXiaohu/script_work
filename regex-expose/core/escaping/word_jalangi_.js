J$.iids = {"8":[7,6,7,31],"9":[3,10,3,17],"10":[7,6,7,31],"16":[6,5,6,19],"17":[3,18,3,22],"24":[15,6,15,30],"25":[3,10,3,23],"32":[14,5,14,19],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,5,6,11],"105":[6,17,6,18],"113":[6,5,6,19],"115":[6,5,6,16],"121":[7,7,7,23],"129":[7,29,7,30],"137":[7,7,7,31],"139":[7,7,7,28],"145":[8,3,8,10],"153":[8,15,8,16],"161":[8,3,8,17],"163":[8,3,8,14],"169":[8,3,8,18],"177":[10,3,10,10],"185":[10,15,10,16],"193":[10,3,10,17],"195":[10,3,10,14],"201":[10,3,10,18],"209":[14,5,14,11],"217":[14,17,14,18],"225":[14,5,14,19],"227":[14,5,14,16],"233":[15,6,15,22],"241":[15,28,15,29],"249":[15,6,15,30],"251":[15,6,15,27],"257":[16,3,16,10],"265":[16,15,16,16],"273":[16,3,16,17],"275":[16,3,16,14],"281":[16,3,16,18],"289":[18,3,18,10],"297":[18,15,18,16],"305":[18,3,18,17],"307":[18,3,18,14],"313":[18,3,18,18],"321":[1,1,20,2],"329":[1,1,20,2],"337":[1,1,20,2],"345":[7,2,11,3],"353":[6,1,12,2],"361":[15,2,19,3],"369":[14,1,20,2],"377":[1,1,20,2],"385":[1,1,20,2],"nBranches":8,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/escaping/word.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/escaping/word_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^\\w$/.test(x)) {\n\tif (!/^[a-zA-Z0-9_]$/.test(x)) {\n\t\tconsole.log(1);\n\t} else {\n\t\tconsole.log(2);\n\t}\n}\n\nif (/^\\W$/.test(x)) {\n\tif (/^[a-zA-Z0-9_]$/.test(x)) {\n\t\tconsole.log(3);\n\t} else {\n\t\tconsole.log(4);\n\t}\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(321, '/home/popl2022/compare_aratha_expose/regex-expose/core/escaping/word_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/core/escaping/word.js');
            J$.N(329, 'S$', S$, 0);
            J$.N(337, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(353, J$.C(16, J$.M(113, J$.T(97, /^\w$/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                if (J$.X1(345, J$.C(8, J$.U(10, '!', J$.M(137, J$.T(121, /^[a-zA-Z0-9_]$/, 14, false), 'test', 0)(J$.R(129, 'x', x, 1)))))) {
                    J$.X1(169, J$.M(161, J$.R(145, 'console', console, 2), 'log', 0)(J$.T(153, 1, 22, false)));
                } else {
                    J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, 2, 22, false)));
                }
            }
            if (J$.X1(369, J$.C(32, J$.M(225, J$.T(209, /^\W$/, 14, false), 'test', 0)(J$.R(217, 'x', x, 1))))) {
                if (J$.X1(361, J$.C(24, J$.M(249, J$.T(233, /^[a-zA-Z0-9_]$/, 14, false), 'test', 0)(J$.R(241, 'x', x, 1))))) {
                    J$.X1(281, J$.M(273, J$.R(257, 'console', console, 2), 'log', 0)(J$.T(265, 3, 22, false)));
                } else {
                    J$.X1(313, J$.M(305, J$.R(289, 'console', console, 2), 'log', 0)(J$.T(297, 4, 22, false)));
                }
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
