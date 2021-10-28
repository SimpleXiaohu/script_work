J$.iids = {"8":[11,5,11,17],"9":[5,10,5,17],"10":[11,5,11,17],"16":[15,5,15,15],"17":[5,18,5,22],"18":[15,5,15,15],"24":[19,5,19,15],"25":[5,10,5,23],"26":[19,5,19,15],"32":[23,5,23,17],"33":[5,10,5,23],"34":[23,5,23,17],"41":[5,10,5,23],"49":[6,9,6,11],"57":[6,19,6,22],"65":[6,24,6,27],"73":[6,9,6,28],"75":[6,9,6,18],"81":[6,9,6,28],"89":[6,9,6,28],"97":[7,9,7,16],"105":[7,9,7,16],"113":[7,9,7,16],"121":[9,5,9,6],"129":[9,15,9,16],"137":[9,18,9,25],"145":[9,5,9,26],"147":[9,5,9,14],"153":[9,5,9,26],"161":[9,1,9,27],"169":[11,5,11,6],"177":[11,10,11,17],"185":[12,8,12,21],"193":[12,8,12,21],"201":[12,2,12,22],"209":[15,5,15,6],"217":[15,10,15,15],"225":[16,2,16,9],"233":[16,14,16,15],"241":[16,2,16,16],"243":[16,2,16,13],"249":[16,2,16,17],"257":[19,5,19,6],"265":[19,10,19,15],"273":[20,2,20,9],"281":[20,14,20,15],"289":[20,2,20,16],"291":[20,2,20,13],"297":[20,2,20,17],"305":[23,5,23,6],"313":[23,10,23,17],"321":[24,8,24,21],"329":[24,8,24,21],"337":[24,2,24,22],"345":[1,1,25,2],"353":[1,1,25,2],"361":[1,1,25,2],"369":[1,1,25,2],"377":[11,1,13,2],"385":[15,1,17,2],"393":[19,1,21,2],"401":[23,1,25,2],"409":[1,1,25,2],"417":[1,1,25,2],"nBranches":8,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/replace/single/replace_3.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/replace/single/replace_3_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Tests a replace on a non global regex\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", 'a');\nvar b = /^...$/;\n\nx = x.replace(b, 'abdef');\n\nif (x == 'hello') {\n\tthrow 'Reachable 1';\n}\n\nif (x == 'abc') {\n\tconsole.log(1);\n}\n\nif (x == 'def') {\n\tconsole.log(2);\n}\n\nif (x == 'abdef') {\n\tthrow 'Reachable 2';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(345, '/home/popl2022/compare_aratha_expose/regex-expose/replace/single/replace_3_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/replace/single/replace_3.js');
            J$.N(353, 'S$', S$, 0);
            J$.N(361, 'x', x, 0);
            J$.N(369, 'b', b, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, 'a', 21, false)), x, 3));
            var b = J$.X1(113, J$.W(105, 'b', J$.T(97, /^...$/, 14, false), b, 3));
            J$.X1(161, x = J$.W(153, 'x', J$.M(145, J$.R(121, 'x', x, 1), 'replace', 0)(J$.R(129, 'b', b, 1), J$.T(137, 'abdef', 21, false)), x, 2));
            if (J$.X1(377, J$.C(8, J$.B(10, '==', J$.R(169, 'x', x, 1), J$.T(177, 'hello', 21, false), 0)))) {
                throw J$.X1(201, J$.Th(193, J$.T(185, 'Reachable 1', 21, false)));
            }
            if (J$.X1(385, J$.C(16, J$.B(18, '==', J$.R(209, 'x', x, 1), J$.T(217, 'abc', 21, false), 0)))) {
                J$.X1(249, J$.M(241, J$.R(225, 'console', console, 2), 'log', 0)(J$.T(233, 1, 22, false)));
            }
            if (J$.X1(393, J$.C(24, J$.B(26, '==', J$.R(257, 'x', x, 1), J$.T(265, 'def', 21, false), 0)))) {
                J$.X1(297, J$.M(289, J$.R(273, 'console', console, 2), 'log', 0)(J$.T(281, 2, 22, false)));
            }
            if (J$.X1(401, J$.C(32, J$.B(34, '==', J$.R(305, 'x', x, 1), J$.T(313, 'abdef', 21, false), 0)))) {
                throw J$.X1(337, J$.Th(329, J$.T(321, 'Reachable 2', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(409, J$e);
        } finally {
            if (J$.Sr(417)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
