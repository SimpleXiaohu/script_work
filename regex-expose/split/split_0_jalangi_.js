J$.iids = {"8":[7,5,7,16],"9":[1,10,1,17],"10":[4,11,4,24],"17":[1,18,1,22],"18":[7,5,7,16],"25":[1,10,1,23],"33":[1,10,1,23],"41":[1,10,1,23],"49":[3,9,3,11],"57":[3,19,3,22],"65":[3,24,3,27],"73":[3,9,3,28],"75":[3,9,3,18],"81":[3,9,3,28],"89":[3,9,3,28],"97":[4,1,4,3],"105":[4,11,4,12],"113":[4,11,4,19],"121":[4,23,4,24],"129":[4,1,4,25],"131":[4,1,4,10],"137":[4,1,4,26],"145":[5,9,5,10],"153":[5,17,5,20],"161":[5,9,5,21],"163":[5,9,5,16],"169":[5,9,5,21],"177":[5,9,5,21],"185":[7,5,7,6],"193":[7,7,7,8],"201":[7,5,7,9],"209":[7,13,7,16],"217":[8,2,8,9],"225":[8,14,8,15],"233":[8,2,8,16],"235":[8,2,8,13],"241":[8,2,8,17],"249":[1,1,9,2],"257":[1,1,9,2],"265":[1,1,9,2],"273":[1,1,9,2],"281":[7,1,9,2],"289":[1,1,9,2],"297":[1,1,9,2],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/split/split_0.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/split/split_0_jalangi_.js","code":"var S$ = require('S$');\n\nvar x = S$.symbol('A', 'a');\nS$.assume(x.length == 2);\nvar k = x.split(/e/);\n\nif (k[0] == 'j') {\n\tconsole.log(1);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(249, '/home/popl2022/compare_aratha_expose/regex-expose/split/split_0_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/split/split_0.js');
            J$.N(257, 'S$', S$, 0);
            J$.N(265, 'x', x, 0);
            J$.N(273, 'k', k, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'A', 21, false), J$.T(65, 'a', 21, false)), x, 3));
            J$.X1(137, J$.M(129, J$.R(97, 'S$', S$, 1), 'assume', 0)(J$.B(10, '==', J$.G(113, J$.R(105, 'x', x, 1), 'length', 0), J$.T(121, 2, 22, false), 0)));
            var k = J$.X1(177, J$.W(169, 'k', J$.M(161, J$.R(145, 'x', x, 1), 'split', 0)(J$.T(153, /e/, 14, false)), k, 3));
            if (J$.X1(281, J$.C(8, J$.B(18, '==', J$.G(201, J$.R(185, 'k', k, 1), J$.T(193, 0, 22, false), 4), J$.T(209, 'j', 21, false), 0)))) {
                J$.X1(241, J$.M(233, J$.R(217, 'console', console, 2), 'log', 0)(J$.T(225, 1, 22, false)));
            }
        } catch (J$e) {
            J$.Ex(289, J$e);
        } finally {
            if (J$.Sr(297)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
