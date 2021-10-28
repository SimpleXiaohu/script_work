J$.iids = {"8":[13,5,13,18],"9":[5,10,5,17],"10":[9,11,9,23],"17":[5,18,5,22],"18":[13,5,13,18],"25":[5,10,5,23],"33":[5,10,5,23],"41":[5,10,5,23],"49":[6,9,6,11],"57":[6,19,6,22],"65":[6,24,6,26],"73":[6,9,6,27],"75":[6,9,6,18],"81":[6,9,6,27],"89":[6,9,6,27],"97":[7,9,7,14],"105":[7,9,7,14],"113":[7,9,7,14],"121":[9,1,9,3],"129":[9,11,9,12],"137":[9,11,9,19],"145":[9,22,9,23],"153":[9,1,9,24],"155":[9,1,9,10],"161":[9,1,9,25],"169":[11,5,11,6],"177":[11,13,11,14],"185":[11,5,11,15],"187":[11,5,11,12],"193":[11,5,11,15],"201":[11,1,11,16],"209":[13,5,13,6],"217":[13,5,13,13],"225":[13,17,13,18],"233":[14,2,14,9],"241":[14,14,14,15],"249":[14,2,14,16],"251":[14,2,14,13],"257":[14,2,14,17],"265":[1,1,15,2],"273":[1,1,15,2],"281":[1,1,15,2],"289":[1,1,15,2],"297":[13,1,15,2],"305":[1,1,15,2],"313":[1,1,15,2],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/split/split_2.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/split/split_2_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Tests replace on a global regex\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar b = /(a)/;\n\nS$.assume(x.length < 5);\n\nx = x.split(b);\n\nif (x.length == 6) {\n\tconsole.log(1);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(265, '/home/popl2022/compare_aratha_expose/regex-expose/split/split_2_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/split/split_2.js');
            J$.N(273, 'S$', S$, 0);
            J$.N(281, 'x', x, 0);
            J$.N(289, 'b', b, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            var b = J$.X1(113, J$.W(105, 'b', J$.T(97, /(a)/, 14, false), b, 3));
            J$.X1(161, J$.M(153, J$.R(121, 'S$', S$, 1), 'assume', 0)(J$.B(10, '<', J$.G(137, J$.R(129, 'x', x, 1), 'length', 0), J$.T(145, 5, 22, false), 0)));
            J$.X1(201, x = J$.W(193, 'x', J$.M(185, J$.R(169, 'x', x, 1), 'split', 0)(J$.R(177, 'b', b, 1)), x, 2));
            if (J$.X1(297, J$.C(8, J$.B(18, '==', J$.G(217, J$.R(209, 'x', x, 1), 'length', 0), J$.T(225, 6, 22, false), 0)))) {
                J$.X1(257, J$.M(249, J$.R(233, 'console', console, 2), 'log', 0)(J$.T(241, 1, 22, false)));
            }
        } catch (J$e) {
            J$.Ex(305, J$e);
        } finally {
            if (J$.Sr(313)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
