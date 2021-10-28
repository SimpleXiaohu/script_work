J$.iids = {"8":[11,6,11,14],"9":[5,10,5,17],"10":[9,5,9,14],"16":[9,5,9,14],"17":[5,18,5,22],"18":[11,6,11,14],"25":[5,10,5,23],"33":[5,10,5,23],"41":[5,10,5,23],"49":[6,9,6,11],"57":[6,19,6,22],"65":[6,24,6,26],"73":[6,9,6,27],"75":[6,9,6,18],"81":[6,9,6,27],"89":[6,9,6,27],"97":[7,9,7,19],"105":[7,25,7,26],"113":[7,9,7,27],"115":[7,9,7,24],"121":[7,9,7,27],"129":[7,9,7,27],"137":[9,5,9,6],"145":[9,10,9,14],"153":[11,6,11,7],"161":[11,11,11,14],"169":[12,3,12,10],"177":[12,15,12,16],"185":[12,3,12,17],"187":[12,3,12,14],"193":[12,3,12,18],"201":[15,2,15,9],"209":[15,14,15,15],"217":[15,2,15,16],"219":[15,2,15,13],"225":[15,2,15,17],"233":[1,1,16,2],"241":[1,1,16,2],"249":[1,1,16,2],"257":[1,1,16,2],"265":[11,2,13,3],"273":[9,1,16,2],"281":[1,1,16,2],"289":[1,1,16,2],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/lazy/lazy_4.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/lazy/lazy_4_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Test the lastIndex property of the sticky flag\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar b = /^(a)+?a$/.exec(x);\n\nif (b != null) {\n\t\n\tif (x == 'a') {\n\t\tconsole.log(1);\n\t}\n\n\tconsole.log(2);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(233, '/home/popl2022/compare_aratha_expose/regex-expose/lazy/lazy_4_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/lazy/lazy_4.js');
            J$.N(241, 'S$', S$, 0);
            J$.N(249, 'x', x, 0);
            J$.N(257, 'b', b, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            var b = J$.X1(129, J$.W(121, 'b', J$.M(113, J$.T(97, /^(a)+?a$/, 14, false), 'exec', 0)(J$.R(105, 'x', x, 1)), b, 3));
            if (J$.X1(273, J$.C(16, J$.B(10, '!=', J$.R(137, 'b', b, 1), J$.T(145, null, 25, false), 0)))) {
                if (J$.X1(265, J$.C(8, J$.B(18, '==', J$.R(153, 'x', x, 1), J$.T(161, 'a', 21, false), 0)))) {
                    J$.X1(193, J$.M(185, J$.R(169, 'console', console, 2), 'log', 0)(J$.T(177, 1, 22, false)));
                }
                J$.X1(225, J$.M(217, J$.R(201, 'console', console, 2), 'log', 0)(J$.T(209, 2, 22, false)));
            }
        } catch (J$e) {
            J$.Ex(281, J$e);
        } finally {
            if (J$.Sr(289)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
