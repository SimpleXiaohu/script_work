J$.iids = {"8":[10,6,10,15],"9":[3,10,3,17],"10":[10,6,10,15],"16":[8,5,8,16],"17":[3,18,3,22],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,11,6,22],"105":[6,11,6,22],"113":[6,11,6,22],"121":[8,5,8,8],"129":[8,14,8,15],"137":[8,5,8,16],"139":[8,5,8,13],"145":[10,6,10,7],"153":[10,11,10,15],"161":[11,3,11,10],"169":[11,15,11,16],"177":[11,3,11,17],"179":[11,3,11,14],"185":[11,3,11,18],"193":[14,2,14,9],"201":[14,14,14,15],"209":[14,2,14,16],"211":[14,2,14,13],"217":[14,2,14,17],"225":[1,1,15,2],"233":[1,1,15,2],"241":[1,1,15,2],"249":[1,1,15,2],"257":[10,2,12,3],"265":[8,1,15,2],"273":[1,1,15,2],"281":[1,1,15,2],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/assertions/ahead_3.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/assertions/ahead_3_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nvar re3 = /^b(?=b).$/;\n\nif (re3.test(x)) {\n\t\n\tif (x != 'bb') {\n\t\tconsole.log(1);\n\t}\n\n\tconsole.log(2);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(225, '/home/popl2022/compare_aratha_expose/regex-expose/assertions/ahead_3_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/assertions/ahead_3.js');
            J$.N(233, 'S$', S$, 0);
            J$.N(241, 'x', x, 0);
            J$.N(249, 're3', re3, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            var re3 = J$.X1(113, J$.W(105, 're3', J$.T(97, /^b(?=b).$/, 14, false), re3, 3));
            if (J$.X1(265, J$.C(16, J$.M(137, J$.R(121, 're3', re3, 1), 'test', 0)(J$.R(129, 'x', x, 1))))) {
                if (J$.X1(257, J$.C(8, J$.B(10, '!=', J$.R(145, 'x', x, 1), J$.T(153, 'bb', 21, false), 0)))) {
                    J$.X1(185, J$.M(177, J$.R(161, 'console', console, 2), 'log', 0)(J$.T(169, 1, 22, false)));
                }
                J$.X1(217, J$.M(209, J$.R(193, 'console', console, 2), 'log', 0)(J$.T(201, 2, 22, false)));
            }
        } catch (J$e) {
            J$.Ex(273, J$e);
        } finally {
            if (J$.Sr(281)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
