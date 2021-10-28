J$.iids = {"8":[10,5,10,27],"9":[1,10,1,17],"10":[4,11,4,24],"17":[1,18,1,22],"18":[8,11,8,24],"25":[1,10,1,23],"26":[10,5,10,27],"33":[1,10,1,23],"41":[1,10,1,23],"49":[2,9,2,11],"57":[2,19,2,22],"65":[2,24,2,26],"73":[2,9,2,27],"75":[2,9,2,18],"81":[2,9,2,27],"89":[2,9,2,27],"97":[4,1,4,3],"105":[4,11,4,12],"113":[4,11,4,19],"121":[4,23,4,24],"129":[4,1,4,25],"131":[4,1,4,10],"137":[4,1,4,26],"145":[6,9,6,10],"153":[6,17,6,20],"161":[6,9,6,21],"163":[6,9,6,16],"169":[6,9,6,21],"177":[6,9,6,21],"185":[8,1,8,3],"193":[8,11,8,12],"201":[8,11,8,19],"209":[8,23,8,24],"217":[8,1,8,25],"219":[8,1,8,10],"225":[8,1,8,26],"233":[10,5,10,6],"241":[10,13,10,16],"249":[10,5,10,17],"251":[10,5,10,12],"257":[10,18,10,19],"265":[10,5,10,20],"273":[10,24,10,27],"281":[11,8,11,21],"289":[11,8,11,21],"297":[11,2,11,22],"305":[1,1,12,2],"313":[1,1,12,2],"321":[1,1,12,2],"329":[1,1,12,2],"337":[10,1,12,2],"345":[1,1,12,2],"353":[1,1,12,2],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/split/split_lhs.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/split/split_lhs_jalangi_.js","code":"var S$ = require('S$');\nvar x = S$.symbol('A', '');\n\nS$.assume(x.length == 3);\n\nvar y = x.split(/a/);\n\nS$.assume(y.length == 2);\n\nif (x.split(/a/)[0] == \"h\") {\n\tthrow 'Reachable 1';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(305, '/home/popl2022/compare_aratha_expose/regex-expose/split/split_lhs_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/split/split_lhs.js');
            J$.N(313, 'S$', S$, 0);
            J$.N(321, 'x', x, 0);
            J$.N(329, 'y', y, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'A', 21, false), J$.T(65, '', 21, false)), x, 3));
            J$.X1(137, J$.M(129, J$.R(97, 'S$', S$, 1), 'assume', 0)(J$.B(10, '==', J$.G(113, J$.R(105, 'x', x, 1), 'length', 0), J$.T(121, 3, 22, false), 0)));
            var y = J$.X1(177, J$.W(169, 'y', J$.M(161, J$.R(145, 'x', x, 1), 'split', 0)(J$.T(153, /a/, 14, false)), y, 3));
            J$.X1(225, J$.M(217, J$.R(185, 'S$', S$, 1), 'assume', 0)(J$.B(18, '==', J$.G(201, J$.R(193, 'y', y, 1), 'length', 0), J$.T(209, 2, 22, false), 0)));
            if (J$.X1(337, J$.C(8, J$.B(26, '==', J$.G(265, J$.M(249, J$.R(233, 'x', x, 1), 'split', 0)(J$.T(241, /a/, 14, false)), J$.T(257, 0, 22, false), 4), J$.T(273, "h", 21, false), 0)))) {
                throw J$.X1(297, J$.Th(289, J$.T(281, 'Reachable 1', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(345, J$e);
        } finally {
            if (J$.Sr(353)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
