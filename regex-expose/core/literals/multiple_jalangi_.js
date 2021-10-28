J$.iids = {"8":[6,5,6,26],"9":[3,10,3,17],"16":[10,5,10,28],"17":[3,18,3,22],"24":[14,5,14,21],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,5,6,18],"105":[6,24,6,25],"113":[6,5,6,26],"115":[6,5,6,23],"121":[7,2,7,9],"129":[7,14,7,15],"137":[7,2,7,16],"139":[7,2,7,13],"145":[7,2,7,17],"153":[10,5,10,20],"161":[10,26,10,27],"169":[10,5,10,28],"171":[10,5,10,25],"177":[11,2,11,9],"185":[11,14,11,15],"193":[11,2,11,16],"195":[11,2,11,13],"201":[11,2,11,17],"209":[14,5,14,13],"217":[14,19,14,20],"225":[14,5,14,21],"227":[14,5,14,18],"233":[15,2,15,9],"241":[15,14,15,15],"249":[15,2,15,16],"251":[15,2,15,13],"257":[15,2,15,17],"265":[18,1,18,8],"273":[18,13,18,14],"281":[18,1,18,15],"283":[18,1,18,12],"289":[18,1,18,16],"297":[1,1,18,16],"305":[1,1,18,16],"313":[1,1,18,16],"321":[6,1,8,2],"329":[10,1,12,2],"337":[14,1,16,2],"345":[1,1,18,16],"353":[1,1,18,16],"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/literals/multiple.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/literals/multiple_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/HELLO WORLD/.test(x)) {\n\tconsole.log(1);\n}\n\nif (/GOODBYE WORLD/.test(x)) {\n\tconsole.log(2);\n}\n\nif (/AND ME/.test(x)) {\n\tconsole.log(3);\n}\n\nconsole.log(4);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(297, '/home/popl2022/compare_aratha_expose/regex-expose/core/literals/multiple_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/core/literals/multiple.js');
            J$.N(305, 'S$', S$, 0);
            J$.N(313, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(321, J$.C(8, J$.M(113, J$.T(97, /HELLO WORLD/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                J$.X1(145, J$.M(137, J$.R(121, 'console', console, 2), 'log', 0)(J$.T(129, 1, 22, false)));
            }
            if (J$.X1(329, J$.C(16, J$.M(169, J$.T(153, /GOODBYE WORLD/, 14, false), 'test', 0)(J$.R(161, 'x', x, 1))))) {
                J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, 2, 22, false)));
            }
            if (J$.X1(337, J$.C(24, J$.M(225, J$.T(209, /AND ME/, 14, false), 'test', 0)(J$.R(217, 'x', x, 1))))) {
                J$.X1(257, J$.M(249, J$.R(233, 'console', console, 2), 'log', 0)(J$.T(241, 3, 22, false)));
            }
            J$.X1(289, J$.M(281, J$.R(265, 'console', console, 2), 'log', 0)(J$.T(273, 4, 22, false)));
        } catch (J$e) {
            J$.Ex(345, J$e);
        } finally {
            if (J$.Sr(353)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
