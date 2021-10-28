J$.iids = {"8":[8,6,8,22],"9":[4,10,4,17],"10":[8,6,8,22],"16":[7,5,7,25],"17":[4,18,4,22],"18":[13,6,13,16],"24":[13,6,13,16],"25":[4,10,4,23],"32":[12,5,12,21],"33":[4,10,4,23],"41":[4,10,4,23],"49":[5,9,5,11],"57":[5,19,5,22],"65":[5,24,5,26],"73":[5,9,5,27],"75":[5,9,5,18],"81":[5,9,5,27],"89":[5,9,5,27],"97":[7,5,7,17],"105":[7,23,7,24],"113":[7,5,7,25],"115":[7,5,7,22],"121":[8,6,8,7],"129":[8,11,8,22],"137":[8,24,8,31],"145":[8,36,8,37],"153":[8,24,8,38],"155":[8,24,8,35],"161":[8,24,8,39],"169":[9,2,9,9],"177":[9,14,9,15],"185":[9,2,9,16],"187":[9,2,9,13],"193":[9,2,9,17],"201":[12,5,12,13],"209":[12,19,12,20],"217":[12,5,12,21],"219":[12,5,12,18],"225":[13,6,13,7],"233":[13,11,13,16],"241":[13,18,13,25],"249":[13,30,13,31],"257":[13,18,13,32],"259":[13,18,13,29],"265":[13,18,13,33],"273":[14,2,14,9],"281":[14,14,14,15],"289":[14,2,14,16],"291":[14,2,14,13],"297":[14,2,14,17],"305":[1,1,15,2],"313":[1,1,15,2],"321":[1,1,15,2],"329":[8,2,8,39],"337":[7,1,10,2],"345":[13,2,13,33],"353":[12,1,15,2],"361":[1,1,15,2],"369":[1,1,15,2],"nBranches":8,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/loops/fixed_loop.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/loops/fixed_loop_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Simple test of Term {X}\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^(abc){3}$/.test(x)) {\n\tif (x == 'abcabcabc') console.log(1);\n\tconsole.log(2);\n}\n\nif (/^a{3}$/.test(x)) {\n\tif (x == 'aaa') console.log(3);\n\tconsole.log(4);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(305, '/home/popl2022/compare_aratha_expose/regex-expose/core/loops/fixed_loop_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/core/loops/fixed_loop.js');
            J$.N(313, 'S$', S$, 0);
            J$.N(321, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(337, J$.C(16, J$.M(113, J$.T(97, /^(abc){3}$/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                if (J$.X1(329, J$.C(8, J$.B(10, '==', J$.R(121, 'x', x, 1), J$.T(129, 'abcabcabc', 21, false), 0))))
                    J$.X1(161, J$.M(153, J$.R(137, 'console', console, 2), 'log', 0)(J$.T(145, 1, 22, false)));
                J$.X1(193, J$.M(185, J$.R(169, 'console', console, 2), 'log', 0)(J$.T(177, 2, 22, false)));
            }
            if (J$.X1(353, J$.C(32, J$.M(217, J$.T(201, /^a{3}$/, 14, false), 'test', 0)(J$.R(209, 'x', x, 1))))) {
                if (J$.X1(345, J$.C(24, J$.B(18, '==', J$.R(225, 'x', x, 1), J$.T(233, 'aaa', 21, false), 0))))
                    J$.X1(265, J$.M(257, J$.R(241, 'console', console, 2), 'log', 0)(J$.T(249, 3, 22, false)));
                J$.X1(297, J$.M(289, J$.R(273, 'console', console, 2), 'log', 0)(J$.T(281, 4, 22, false)));
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
