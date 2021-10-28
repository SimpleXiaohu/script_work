J$.iids = {"8":[7,6,7,18],"9":[3,10,3,17],"10":[7,6,7,18],"16":[8,6,8,20],"17":[3,18,3,22],"18":[8,6,8,20],"24":[9,6,9,21],"25":[3,10,3,23],"26":[9,6,9,21],"32":[6,5,6,39],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,5,6,31],"105":[6,37,6,38],"113":[6,5,6,39],"115":[6,5,6,36],"121":[7,6,7,7],"129":[7,11,7,18],"137":[7,20,7,27],"145":[7,32,7,33],"153":[7,20,7,34],"155":[7,20,7,31],"161":[7,20,7,35],"169":[8,6,8,7],"177":[8,11,8,20],"185":[8,22,8,29],"193":[8,34,8,35],"201":[8,22,8,36],"203":[8,22,8,33],"209":[8,22,8,37],"217":[9,6,9,7],"225":[9,11,9,21],"233":[9,23,9,30],"241":[9,35,9,36],"249":[9,23,9,37],"251":[9,23,9,34],"257":[9,23,9,38],"265":[10,2,10,9],"273":[10,14,10,15],"281":[10,2,10,16],"283":[10,2,10,13],"289":[10,2,10,17],"297":[13,1,13,8],"305":[13,13,13,14],"313":[13,1,13,15],"315":[13,1,13,12],"321":[13,1,13,16],"329":[1,1,13,16],"337":[1,1,13,16],"345":[1,1,13,16],"353":[7,2,7,35],"361":[8,2,8,37],"369":[9,2,9,38],"377":[6,1,11,2],"385":[1,1,13,16],"393":[1,1,13,16],"nBranches":8,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/alternation/words.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/core/alternation/words_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^Hello|Goodbye|Whats Up$/.test(x)) {\n\tif (x == 'Hello') console.log(1);\n\tif (x == 'Goodbye') console.log(2);\n\tif (x == 'Whats Up') console.log(3);\n\tconsole.log(4);\n}\n\nconsole.log(5);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(329, '/home/popl2022/compare_aratha_expose/regex-expose/core/alternation/words_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/core/alternation/words.js');
            J$.N(337, 'S$', S$, 0);
            J$.N(345, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(377, J$.C(32, J$.M(113, J$.T(97, /^Hello|Goodbye|Whats Up$/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                if (J$.X1(353, J$.C(8, J$.B(10, '==', J$.R(121, 'x', x, 1), J$.T(129, 'Hello', 21, false), 0))))
                    J$.X1(161, J$.M(153, J$.R(137, 'console', console, 2), 'log', 0)(J$.T(145, 1, 22, false)));
                if (J$.X1(361, J$.C(16, J$.B(18, '==', J$.R(169, 'x', x, 1), J$.T(177, 'Goodbye', 21, false), 0))))
                    J$.X1(209, J$.M(201, J$.R(185, 'console', console, 2), 'log', 0)(J$.T(193, 2, 22, false)));
                if (J$.X1(369, J$.C(24, J$.B(26, '==', J$.R(217, 'x', x, 1), J$.T(225, 'Whats Up', 21, false), 0))))
                    J$.X1(257, J$.M(249, J$.R(233, 'console', console, 2), 'log', 0)(J$.T(241, 3, 22, false)));
                J$.X1(289, J$.M(281, J$.R(265, 'console', console, 2), 'log', 0)(J$.T(273, 4, 22, false)));
            }
            J$.X1(321, J$.M(313, J$.R(297, 'console', console, 2), 'log', 0)(J$.T(305, 5, 22, false)));
        } catch (J$e) {
            J$.Ex(385, J$e);
        } finally {
            if (J$.Sr(393)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
