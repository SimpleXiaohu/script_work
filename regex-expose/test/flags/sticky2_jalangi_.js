J$.iids = {"8":[12,6,12,16],"9":[4,10,4,17],"10":[8,11,8,24],"16":[10,5,10,15],"17":[4,18,4,22],"25":[4,10,4,23],"33":[4,10,4,23],"41":[4,10,4,23],"49":[5,9,5,11],"57":[5,19,5,22],"65":[5,24,5,26],"73":[5,9,5,27],"75":[5,9,5,18],"81":[5,9,5,27],"89":[5,9,5,27],"97":[6,10,6,17],"105":[6,10,6,17],"113":[6,10,6,17],"121":[8,1,8,3],"129":[8,11,8,12],"137":[8,11,8,19],"145":[8,22,8,24],"153":[8,1,8,25],"155":[8,1,8,10],"161":[8,1,8,26],"169":[10,5,10,7],"177":[10,13,10,14],"185":[10,5,10,15],"187":[10,5,10,12],"193":[12,6,12,8],"201":[12,14,12,15],"209":[12,6,12,16],"211":[12,6,12,13],"217":[14,9,14,22],"225":[14,9,14,22],"233":[14,3,14,23],"241":[17,8,17,21],"249":[17,8,17,21],"257":[17,2,17,22],"265":[1,1,18,2],"273":[1,1,18,2],"281":[1,1,18,2],"289":[1,1,18,2],"297":[12,2,15,3],"305":[10,1,18,2],"313":[1,1,18,2],"321":[1,1,18,2],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/test/flags/sticky2.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/test/flags/sticky2_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Test that multiline changes ^ into (\\n or ^) and $ into (\\n or $)\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar re = /Hello/;\n\nS$.assume(x.length < 13);\n\nif (re.test(x)) {\n\t\n\tif (re.test(x)) {\n\t\t//Length < 4, sticky is set, lastIndex should be 3, cant match again\n\t\tthrow 'Reachable 2';\n\t}\n\n\tthrow 'Reachable 1';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(265, '/home/popl2022/compare_aratha_expose/regex-expose/test/flags/sticky2_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/test/flags/sticky2.js');
            J$.N(273, 'S$', S$, 0);
            J$.N(281, 'x', x, 0);
            J$.N(289, 're', re, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            var re = J$.X1(113, J$.W(105, 're', J$.T(97, /Hello/, 14, false), re, 3));
            J$.X1(161, J$.M(153, J$.R(121, 'S$', S$, 1), 'assume', 0)(J$.B(10, '<', J$.G(137, J$.R(129, 'x', x, 1), 'length', 0), J$.T(145, 13, 22, false), 0)));
            if (J$.X1(305, J$.C(16, J$.M(185, J$.R(169, 're', re, 1), 'test', 0)(J$.R(177, 'x', x, 1))))) {
                if (J$.X1(297, J$.C(8, J$.M(209, J$.R(193, 're', re, 1), 'test', 0)(J$.R(201, 'x', x, 1))))) {
                    throw J$.X1(233, J$.Th(225, J$.T(217, 'Reachable 2', 21, false)));
                }
                throw J$.X1(257, J$.Th(249, J$.T(241, 'Reachable 1', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(313, J$e);
        } finally {
            if (J$.Sr(321)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
