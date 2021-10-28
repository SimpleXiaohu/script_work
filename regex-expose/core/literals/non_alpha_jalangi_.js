J$.iids = {"8":[7,5,7,9],"9":[3,10,3,17],"17":[3,18,3,22],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[5,12,5,93],"105":[5,99,5,100],"113":[5,12,5,101],"115":[5,12,5,98],"121":[5,12,5,101],"129":[5,12,5,101],"137":[7,5,7,9],"145":[8,2,8,9],"153":[8,14,8,15],"161":[8,2,8,16],"163":[8,2,8,13],"169":[8,2,8,17],"177":[10,2,10,9],"185":[10,14,10,15],"193":[10,2,10,16],"195":[10,2,10,13],"201":[10,2,10,17],"209":[1,1,11,2],"217":[1,1,11,2],"225":[1,1,11,2],"233":[1,1,11,2],"241":[7,1,11,2],"249":[1,1,11,2],"257":[1,1,11,2],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/literals/non_alpha.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/literals/non_alpha_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar isIn = /^void helloWorld\\(\\) \\{\\{\\}\\} DOGDOGDOG console.log\\(HELLO WORLD\\) HOW ARE YOU$/.test(x);\n\nif (isIn) {\n\tconsole.log(1);\n} else {\n\tconsole.log(2);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(209, '/home/popl2022/compare_aratha_expose/regex-expose/core/literals/non_alpha_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/core/literals/non_alpha.js');
            J$.N(217, 'S$', S$, 0);
            J$.N(225, 'x', x, 0);
            J$.N(233, 'isIn', isIn, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            var isIn = J$.X1(129, J$.W(121, 'isIn', J$.M(113, J$.T(97, /^void helloWorld\(\) \{\{\}\} DOGDOGDOG console.log\(HELLO WORLD\) HOW ARE YOU$/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1)), isIn, 3));
            if (J$.X1(241, J$.C(8, J$.R(137, 'isIn', isIn, 1)))) {
                J$.X1(169, J$.M(161, J$.R(145, 'console', console, 2), 'log', 0)(J$.T(153, 1, 22, false)));
            } else {
                J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, 2, 22, false)));
            }
        } catch (J$e) {
            J$.Ex(249, J$e);
        } finally {
            if (J$.Sr(257)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
