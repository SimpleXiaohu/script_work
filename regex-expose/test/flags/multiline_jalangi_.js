J$.iids = {"8":[10,6,10,21],"9":[5,10,5,17],"10":[10,6,10,21],"16":[11,6,11,23],"17":[5,18,5,22],"18":[11,6,11,23],"24":[12,6,12,30],"25":[5,10,5,23],"26":[12,6,12,30],"32":[9,5,9,20],"33":[5,10,5,23],"41":[5,10,5,23],"49":[7,9,7,11],"57":[7,19,7,22],"65":[7,24,7,26],"73":[7,9,7,27],"75":[7,9,7,18],"81":[7,9,7,27],"89":[7,9,7,27],"97":[9,5,9,12],"105":[9,18,9,19],"113":[9,5,9,20],"115":[9,5,9,17],"121":[10,6,10,7],"129":[10,11,10,21],"137":[10,23,10,30],"145":[10,35,10,36],"153":[10,23,10,37],"155":[10,23,10,34],"161":[10,23,10,38],"169":[11,6,11,7],"177":[11,11,11,23],"185":[11,25,11,32],"193":[11,37,11,38],"201":[11,25,11,39],"203":[11,25,11,36],"209":[11,25,11,40],"217":[12,6,12,7],"225":[12,11,12,30],"233":[12,32,12,39],"241":[12,44,12,45],"249":[12,32,12,46],"251":[12,32,12,43],"257":[12,32,12,47],"265":[13,2,13,9],"273":[13,14,13,15],"281":[13,2,13,16],"283":[13,2,13,13],"289":[13,2,13,17],"297":[1,1,14,2],"305":[1,1,14,2],"313":[1,1,14,2],"321":[10,2,10,38],"329":[11,2,11,40],"337":[12,2,12,47],"345":[9,1,14,2],"353":[1,1,14,2],"361":[1,1,14,2],"nBranches":8,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/test/flags/multiline.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/test/flags/multiline_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Test that multiline changes ^ into (\\n or ^) and $ into (\\n or $)\n\nvar S$ = require(\"S$\");\n\nvar x = S$.symbol(\"X\", '');\n\nif (/^abc$/.test(x)) {\n\tif (x == 'helloabc') console.log(1);\n\tif (x == 'hello\\nabc') console.log(2);\n\tif (x == 'hello\\nabc\\nworld') console.log(3);\n\tconsole.log(4);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(297, '/home/popl2022/compare_aratha_expose/regex-expose/test/flags/multiline_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/test/flags/multiline.js');
            J$.N(305, 'S$', S$, 0);
            J$.N(313, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "S$", 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(345, J$.C(32, J$.M(113, J$.T(97, /^abc$/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                if (J$.X1(321, J$.C(8, J$.B(10, '==', J$.R(121, 'x', x, 1), J$.T(129, 'helloabc', 21, false), 0))))
                    J$.X1(161, J$.M(153, J$.R(137, 'console', console, 2), 'log', 0)(J$.T(145, 1, 22, false)));
                if (J$.X1(329, J$.C(16, J$.B(18, '==', J$.R(169, 'x', x, 1), J$.T(177, 'hello\nabc', 21, false), 0))))
                    J$.X1(209, J$.M(201, J$.R(185, 'console', console, 2), 'log', 0)(J$.T(193, 2, 22, false)));
                if (J$.X1(337, J$.C(24, J$.B(26, '==', J$.R(217, 'x', x, 1), J$.T(225, 'hello\nabc\nworld', 21, false), 0))))
                    J$.X1(257, J$.M(249, J$.R(233, 'console', console, 2), 'log', 0)(J$.T(241, 3, 22, false)));
                J$.X1(289, J$.M(281, J$.R(265, 'console', console, 2), 'log', 0)(J$.T(273, 4, 22, false)));
            }
        } catch (J$e) {
            J$.Ex(353, J$e);
        } finally {
            if (J$.Sr(361)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT