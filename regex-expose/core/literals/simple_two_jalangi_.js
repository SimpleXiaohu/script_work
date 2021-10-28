J$.iids = {"8":[7,6,7,24],"9":[3,10,3,17],"10":[7,6,7,24],"16":[6,5,6,28],"17":[3,18,3,22],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,5,6,20],"105":[6,26,6,27],"113":[6,5,6,28],"115":[6,5,6,25],"121":[7,6,7,7],"129":[7,11,7,24],"137":[7,26,7,33],"145":[7,38,7,39],"153":[7,26,7,40],"155":[7,26,7,37],"161":[7,26,7,41],"169":[8,2,8,9],"177":[8,14,8,15],"185":[8,2,8,16],"187":[8,2,8,13],"193":[8,2,8,17],"201":[1,1,9,2],"209":[1,1,9,2],"217":[1,1,9,2],"225":[7,2,7,41],"233":[6,1,9,2],"241":[1,1,9,2],"249":[1,1,9,2],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/literals/simple_two.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/literals/simple_two_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^hello_world$/.test(x)) {\n\tif (x == 'hello_world') console.log(1);\n\tconsole.log(2);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(201, '/home/popl2022/compare_aratha_expose/regex-expose/core/literals/simple_two_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/core/literals/simple_two.js');
            J$.N(209, 'S$', S$, 0);
            J$.N(217, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(233, J$.C(16, J$.M(113, J$.T(97, /^hello_world$/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                if (J$.X1(225, J$.C(8, J$.B(10, '==', J$.R(121, 'x', x, 1), J$.T(129, 'hello_world', 21, false), 0))))
                    J$.X1(161, J$.M(153, J$.R(137, 'console', console, 2), 'log', 0)(J$.T(145, 1, 22, false)));
                J$.X1(193, J$.M(185, J$.R(169, 'console', console, 2), 'log', 0)(J$.T(177, 2, 22, false)));
            }
        } catch (J$e) {
            J$.Ex(241, J$e);
        } finally {
            if (J$.Sr(249)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
