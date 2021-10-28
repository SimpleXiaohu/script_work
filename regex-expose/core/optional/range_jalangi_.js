J$.iids = {"8":[7,6,7,24],"9":[3,10,3,17],"10":[7,6,7,24],"16":[6,5,6,26],"17":[3,18,3,22],"24":[14,5,14,22],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,5,6,18],"105":[6,24,6,25],"113":[6,5,6,26],"115":[6,5,6,23],"121":[7,7,7,16],"129":[7,22,7,23],"137":[7,7,7,24],"139":[7,7,7,21],"145":[8,3,8,10],"153":[8,15,8,16],"161":[8,3,8,17],"163":[8,3,8,14],"169":[8,3,8,18],"177":[10,3,10,10],"185":[10,15,10,16],"193":[10,3,10,17],"195":[10,3,10,14],"201":[10,3,10,18],"209":[14,5,14,14],"217":[14,20,14,21],"225":[14,5,14,22],"227":[14,5,14,19],"233":[15,2,15,9],"241":[15,14,15,15],"249":[15,2,15,16],"251":[15,2,15,13],"257":[15,2,15,17],"265":[1,1,16,2],"273":[1,1,16,2],"281":[1,1,16,2],"289":[7,2,11,3],"297":[6,1,12,2],"305":[14,1,16,2],"313":[1,1,16,2],"321":[1,1,16,2],"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/optional/range.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/optional/range_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^[a-zA-Z]?$/.test(x)) {\n\tif (!/^[a-z]$/.test(x)) {\n\t\tconsole.log(1);\n\t} else {\n\t\tconsole.log(2);\n\t}\n}\n\nif (/^[a-z]$/.test(x)) {\n\tconsole.log(3);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(265, '/home/popl2022/compare_aratha_expose/regex-expose/core/optional/range_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/core/optional/range.js');
            J$.N(273, 'S$', S$, 0);
            J$.N(281, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(297, J$.C(16, J$.M(113, J$.T(97, /^[a-zA-Z]?$/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                if (J$.X1(289, J$.C(8, J$.U(10, '!', J$.M(137, J$.T(121, /^[a-z]$/, 14, false), 'test', 0)(J$.R(129, 'x', x, 1)))))) {
                    J$.X1(169, J$.M(161, J$.R(145, 'console', console, 2), 'log', 0)(J$.T(153, 1, 22, false)));
                } else {
                    J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, 2, 22, false)));
                }
            }
            if (J$.X1(305, J$.C(24, J$.M(225, J$.T(209, /^[a-z]$/, 14, false), 'test', 0)(J$.R(217, 'x', x, 1))))) {
                J$.X1(257, J$.M(249, J$.R(233, 'console', console, 2), 'log', 0)(J$.T(241, 3, 22, false)));
            }
        } catch (J$e) {
            J$.Ex(313, J$e);
        } finally {
            if (J$.Sr(321)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
