J$.iids = {"8":[11,6,11,17],"9":[3,10,3,17],"16":[9,5,9,15],"17":[3,18,3,22],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,10,6,26],"105":[6,10,6,26],"113":[6,10,6,26],"121":[7,11,7,20],"129":[7,11,7,20],"137":[7,11,7,20],"145":[9,5,9,7],"153":[9,13,9,14],"161":[9,5,9,15],"163":[9,5,9,12],"169":[11,6,11,9],"177":[11,15,11,16],"185":[11,6,11,17],"187":[11,6,11,14],"193":[12,3,12,10],"201":[12,15,12,16],"209":[12,3,12,17],"211":[12,3,12,14],"217":[12,3,12,18],"225":[15,2,15,9],"233":[15,14,15,15],"241":[15,2,15,16],"243":[15,2,15,13],"249":[15,2,15,17],"257":[1,1,16,2],"265":[1,1,16,2],"273":[1,1,16,2],"281":[1,1,16,2],"289":[1,1,16,2],"297":[11,2,13,3],"305":[9,1,16,2],"313":[1,1,16,2],"321":[1,1,16,2],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/assertions/ahead_6.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/assertions/ahead_6_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nvar re = /^(?=([a-z])).$/;\nvar re2 = /^[0-9]$/;\n\nif (re.test(x)) {\n\t\n\tif (re2.test(x)) {\n\t\tconsole.log(1);\n\t}\n\n\tconsole.log(2);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(257, '/home/popl2022/compare_aratha_expose/regex-expose/assertions/ahead_6_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/assertions/ahead_6.js');
            J$.N(265, 'S$', S$, 0);
            J$.N(273, 'x', x, 0);
            J$.N(281, 're', re, 0);
            J$.N(289, 're2', re2, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            var re = J$.X1(113, J$.W(105, 're', J$.T(97, /^(?=([a-z])).$/, 14, false), re, 3));
            var re2 = J$.X1(137, J$.W(129, 're2', J$.T(121, /^[0-9]$/, 14, false), re2, 3));
            if (J$.X1(305, J$.C(16, J$.M(161, J$.R(145, 're', re, 1), 'test', 0)(J$.R(153, 'x', x, 1))))) {
                if (J$.X1(297, J$.C(8, J$.M(185, J$.R(169, 're2', re2, 1), 'test', 0)(J$.R(177, 'x', x, 1))))) {
                    J$.X1(217, J$.M(209, J$.R(193, 'console', console, 2), 'log', 0)(J$.T(201, 1, 22, false)));
                }
                J$.X1(249, J$.M(241, J$.R(225, 'console', console, 2), 'log', 0)(J$.T(233, 2, 22, false)));
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
