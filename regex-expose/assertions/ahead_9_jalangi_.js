J$.iids = {"8":[10,5,10,6],"9":[3,10,3,17],"17":[3,18,3,22],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,10,6,28],"105":[6,10,6,28],"113":[6,10,6,28],"121":[8,9,8,11],"129":[8,17,8,18],"137":[8,9,8,19],"139":[8,9,8,16],"145":[8,9,8,19],"153":[8,9,8,19],"161":[10,5,10,6],"169":[11,2,11,9],"177":[11,14,11,15],"185":[11,2,11,16],"187":[11,2,11,13],"193":[11,2,11,17],"201":[1,1,12,2],"209":[1,1,12,2],"217":[1,1,12,2],"225":[1,1,12,2],"233":[1,1,12,2],"241":[10,1,12,2],"249":[1,1,12,2],"257":[1,1,12,2],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/assertions/ahead_9.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/assertions/ahead_9_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nvar re = /^(?=(..))[a-z]+$/;\n\nvar r = re.exec(x);\n\nif (r) {\n\tconsole.log(1);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(201, '/home/popl2022/compare_aratha_expose/regex-expose/assertions/ahead_9_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/assertions/ahead_9.js');
            J$.N(209, 'S$', S$, 0);
            J$.N(217, 'x', x, 0);
            J$.N(225, 're', re, 0);
            J$.N(233, 'r', r, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            var re = J$.X1(113, J$.W(105, 're', J$.T(97, /^(?=(..))[a-z]+$/, 14, false), re, 3));
            var r = J$.X1(153, J$.W(145, 'r', J$.M(137, J$.R(121, 're', re, 1), 'exec', 0)(J$.R(129, 'x', x, 1)), r, 3));
            if (J$.X1(241, J$.C(8, J$.R(161, 'r', r, 1)))) {
                J$.X1(193, J$.M(185, J$.R(169, 'console', console, 2), 'log', 0)(J$.T(177, 1, 22, false)));
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
