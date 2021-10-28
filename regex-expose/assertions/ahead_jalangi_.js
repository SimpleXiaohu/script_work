J$.iids = {"8":[8,5,8,16],"9":[3,10,3,17],"17":[3,18,3,22],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,11,6,22],"105":[6,11,6,22],"113":[6,11,6,22],"121":[8,5,8,8],"129":[8,14,8,15],"137":[8,5,8,16],"139":[8,5,8,13],"145":[9,2,9,9],"153":[9,14,9,15],"161":[9,2,9,16],"163":[9,2,9,13],"169":[9,2,9,17],"177":[1,1,10,2],"185":[1,1,10,2],"193":[1,1,10,2],"201":[1,1,10,2],"209":[8,1,10,2],"217":[1,1,10,2],"225":[1,1,10,2],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/assertions/ahead.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/assertions/ahead_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nvar re1 = /^a(?=b)c$/;\n\nif (re1.test(x)) {\n\tconsole.log(1);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(177, '/home/popl2022/compare_aratha_expose/regex-expose/assertions/ahead_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/assertions/ahead.js');
            J$.N(185, 'S$', S$, 0);
            J$.N(193, 'x', x, 0);
            J$.N(201, 're1', re1, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            var re1 = J$.X1(113, J$.W(105, 're1', J$.T(97, /^a(?=b)c$/, 14, false), re1, 3));
            if (J$.X1(209, J$.C(8, J$.M(137, J$.R(121, 're1', re1, 1), 'test', 0)(J$.R(129, 'x', x, 1))))) {
                J$.X1(169, J$.M(161, J$.R(145, 'console', console, 2), 'log', 0)(J$.T(153, 1, 22, false)));
            }
        } catch (J$e) {
            J$.Ex(217, J$e);
        } finally {
            if (J$.Sr(225)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
