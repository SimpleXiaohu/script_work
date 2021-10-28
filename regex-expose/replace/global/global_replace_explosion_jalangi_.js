J$.iids = {"8":[14,6,14,50],"9":[5,9,5,11],"10":[8,11,8,26],"16":[14,6,14,50],"17":[5,19,5,22],"18":[11,5,11,35],"24":[18,6,18,19],"25":[5,24,5,26],"26":[14,24,14,26],"32":[11,5,11,35],"33":[5,9,5,27],"34":[14,6,14,26],"35":[5,9,5,18],"41":[5,9,5,27],"42":[14,48,14,50],"49":[5,9,5,27],"50":[14,30,14,50],"57":[6,9,6,17],"58":[18,6,18,19],"65":[6,9,6,17],"73":[6,9,6,17],"81":[8,1,8,3],"89":[8,11,8,12],"97":[8,11,8,19],"105":[8,22,8,26],"113":[8,1,8,27],"115":[8,1,8,10],"121":[8,1,8,28],"129":[9,1,9,3],"137":[9,11,9,12],"145":[9,13,9,16],"153":[9,20,9,23],"161":[9,11,9,23],"169":[9,1,9,24],"171":[9,1,9,10],"177":[9,1,9,25],"185":[11,5,11,6],"193":[11,15,11,16],"201":[11,18,11,24],"209":[11,5,11,25],"211":[11,5,11,14],"217":[11,29,11,35],"225":[14,6,14,7],"233":[14,16,14,19],"241":[14,6,14,20],"243":[14,6,14,15],"249":[14,25,14,26],"257":[14,30,14,31],"265":[14,40,14,43],"273":[14,30,14,44],"275":[14,30,14,39],"281":[14,49,14,50],"289":[15,3,15,10],"297":[15,15,15,16],"305":[15,3,15,17],"307":[15,3,15,14],"313":[15,3,15,18],"321":[18,6,18,7],"329":[18,8,18,11],"337":[18,6,18,12],"345":[18,16,18,19],"353":[19,3,19,10],"361":[19,15,19,16],"369":[19,3,19,17],"371":[19,3,19,14],"377":[19,3,19,18],"385":[22,2,22,9],"393":[22,14,22,15],"401":[22,2,22,16],"403":[22,2,22,13],"409":[22,2,22,17],"417":[25,1,25,8],"425":[25,13,25,14],"433":[25,1,25,15],"435":[25,1,25,12],"441":[25,1,25,16],"449":[1,1,25,16],"457":[1,1,25,16],"465":[1,1,25,16],"473":[14,2,16,3],"481":[18,2,20,3],"489":[11,1,23,2],"497":[1,1,25,16],"505":[1,1,25,16],"nBranches":8,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/replace/global/global_replace_explosion.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/replace/global/global_replace_explosion_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Generate a test case \n\nvar x = S$.symbol(\"X\", '');\nvar b = /(a|b)/g;\n\nS$.assume(x.length > 1000);\nS$.assume(x[786] = 'b');\n\nif (x.replace(b, 'Test') == 'Test') {\n\t\n\t//In a global replace all instances should go\n\tif (x.indexOf('a') != -1 || x.indexOf('b') != -1) {\n\t\tconsole.log(1);\n\t}\n\n\tif (x[768] != 'T') {\n\t\tconsole.log(2);\n\t}\n\n\tconsole.log(3);\n}\n\nconsole.log(4);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(449, '/home/popl2022/compare_aratha_expose/regex-expose/replace/global/global_replace_explosion_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/replace/global/global_replace_explosion.js');
            J$.N(457, 'x', x, 0);
            J$.N(465, 'b', b, 0);
            var x = J$.X1(49, J$.W(41, 'x', J$.M(33, J$.R(9, 'S$', S$, 2), 'symbol', 0)(J$.T(17, "X", 21, false), J$.T(25, '', 21, false)), x, 3));
            var b = J$.X1(73, J$.W(65, 'b', J$.T(57, /(a|b)/g, 14, false), b, 3));
            J$.X1(121, J$.M(113, J$.R(81, 'S$', S$, 2), 'assume', 0)(J$.B(10, '>', J$.G(97, J$.R(89, 'x', x, 1), 'length', 0), J$.T(105, 1000, 22, false), 0)));
            J$.X1(177, J$.M(169, J$.R(129, 'S$', S$, 2), 'assume', 0)(J$.P(161, J$.R(137, 'x', x, 1), J$.T(145, 786, 22, false), J$.T(153, 'b', 21, false), 2)));
            if (J$.X1(489, J$.C(32, J$.B(18, '==', J$.M(209, J$.R(185, 'x', x, 1), 'replace', 0)(J$.R(193, 'b', b, 1), J$.T(201, 'Test', 21, false)), J$.T(217, 'Test', 21, false), 0)))) {
                if (J$.X1(473, J$.C(16, J$.C(8, J$.B(34, '!=', J$.M(241, J$.R(225, 'x', x, 1), 'indexOf', 0)(J$.T(233, 'a', 21, false)), J$.U(26, '-', J$.T(249, 1, 22, false)), 0)) ? J$._() : J$.B(50, '!=', J$.M(273, J$.R(257, 'x', x, 1), 'indexOf', 0)(J$.T(265, 'b', 21, false)), J$.U(42, '-', J$.T(281, 1, 22, false)), 0)))) {
                    J$.X1(313, J$.M(305, J$.R(289, 'console', console, 2), 'log', 0)(J$.T(297, 1, 22, false)));
                }
                if (J$.X1(481, J$.C(24, J$.B(58, '!=', J$.G(337, J$.R(321, 'x', x, 1), J$.T(329, 768, 22, false), 4), J$.T(345, 'T', 21, false), 0)))) {
                    J$.X1(377, J$.M(369, J$.R(353, 'console', console, 2), 'log', 0)(J$.T(361, 2, 22, false)));
                }
                J$.X1(409, J$.M(401, J$.R(385, 'console', console, 2), 'log', 0)(J$.T(393, 3, 22, false)));
            }
            J$.X1(441, J$.M(433, J$.R(417, 'console', console, 2), 'log', 0)(J$.T(425, 4, 22, false)));
        } catch (J$e) {
            J$.Ex(497, J$e);
        } finally {
            if (J$.Sr(505)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
