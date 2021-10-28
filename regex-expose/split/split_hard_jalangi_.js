J$.iids = {"8":[14,6,14,32],"9":[5,10,5,17],"10":[11,11,11,25],"16":[13,5,13,19],"17":[5,18,5,22],"18":[13,5,13,19],"25":[5,10,5,23],"26":[14,8,14,20],"33":[5,10,5,23],"34":[14,6,14,32],"41":[5,10,5,23],"49":[6,9,6,11],"57":[6,19,6,22],"65":[6,24,6,26],"73":[6,9,6,27],"75":[6,9,6,18],"81":[6,9,6,27],"89":[6,9,6,27],"97":[7,9,7,14],"105":[7,9,7,14],"113":[7,9,7,14],"121":[9,5,9,6],"129":[9,13,9,14],"137":[9,5,9,15],"139":[9,5,9,12],"145":[9,5,9,15],"153":[9,1,9,16],"161":[11,1,11,3],"169":[11,11,11,12],"177":[11,11,11,19],"185":[11,22,11,25],"193":[11,1,11,26],"195":[11,1,11,10],"201":[11,1,11,27],"209":[13,5,13,6],"217":[13,5,13,13],"225":[13,17,13,19],"233":[14,6,14,7],"241":[14,8,14,9],"249":[14,8,14,16],"257":[14,19,14,20],"265":[14,6,14,21],"273":[14,25,14,32],"281":[15,3,15,10],"289":[15,15,15,16],"297":[15,3,15,17],"299":[15,3,15,14],"305":[15,3,15,18],"313":[1,1,17,2],"321":[1,1,17,2],"329":[1,1,17,2],"337":[1,1,17,2],"345":[14,2,16,3],"353":[13,1,17,2],"361":[1,1,17,2],"369":[1,1,17,2],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/split/split_hard.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/split/split_hard_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Tests replace on a global regex\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar b = /(a)/;\n\nx = x.split(b);\n\nS$.assume(x.length < 100);\n\nif (x.length == 16) {\n\tif (x[x.length - 1] == 'hello') {\n\t\tconsole.log(1); //Broken by the assumption on string length\n\t}\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(313, '/home/popl2022/compare_aratha_expose/regex-expose/split/split_hard_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/split/split_hard.js');
            J$.N(321, 'S$', S$, 0);
            J$.N(329, 'x', x, 0);
            J$.N(337, 'b', b, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            var b = J$.X1(113, J$.W(105, 'b', J$.T(97, /(a)/, 14, false), b, 3));
            J$.X1(153, x = J$.W(145, 'x', J$.M(137, J$.R(121, 'x', x, 1), 'split', 0)(J$.R(129, 'b', b, 1)), x, 2));
            J$.X1(201, J$.M(193, J$.R(161, 'S$', S$, 1), 'assume', 0)(J$.B(10, '<', J$.G(177, J$.R(169, 'x', x, 1), 'length', 0), J$.T(185, 100, 22, false), 0)));
            if (J$.X1(353, J$.C(16, J$.B(18, '==', J$.G(217, J$.R(209, 'x', x, 1), 'length', 0), J$.T(225, 16, 22, false), 0)))) {
                if (J$.X1(345, J$.C(8, J$.B(34, '==', J$.G(265, J$.R(233, 'x', x, 1), J$.B(26, '-', J$.G(249, J$.R(241, 'x', x, 1), 'length', 0), J$.T(257, 1, 22, false), 0), 4), J$.T(273, 'hello', 21, false), 0)))) {
                    J$.X1(305, J$.M(297, J$.R(281, 'console', console, 2), 'log', 0)(J$.T(289, 1, 22, false)));
                }
            }
        } catch (J$e) {
            J$.Ex(361, J$e);
        } finally {
            if (J$.Sr(369)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
