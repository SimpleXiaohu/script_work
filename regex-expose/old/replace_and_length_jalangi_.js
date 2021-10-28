J$.iids = {"8":[6,5,6,23],"9":[4,9,4,11],"10":[6,5,6,23],"16":[10,5,10,51],"17":[4,19,4,22],"18":[10,5,10,17],"24":[10,5,10,51],"25":[4,24,4,26],"26":[10,21,10,51],"33":[4,9,4,27],"35":[4,9,4,18],"41":[4,9,4,27],"49":[4,9,4,27],"57":[6,5,6,6],"65":[6,10,6,23],"73":[10,5,10,6],"81":[10,5,10,13],"89":[10,16,10,17],"97":[10,21,10,22],"105":[10,31,10,39],"113":[10,41,10,43],"121":[10,21,10,44],"123":[10,21,10,30],"129":[10,49,10,51],"137":[11,2,11,9],"145":[11,14,11,19],"153":[11,2,11,20],"155":[11,2,11,13],"161":[11,2,11,21],"169":[1,1,12,2],"177":[1,1,12,2],"185":[6,1,8,2],"193":[10,1,12,2],"201":[1,1,12,2],"209":[1,1,12,2],"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/old/replace_and_length.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/old/replace_and_length_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n\"use strict\";\n\nvar x = S$.symbol(\"X\", '');\n\nif (x == 'HELLO WORLD') {\n\n}\n\nif (x.length > 4 && x.replace(/hello/g, '') === '') {\n\tconsole.log('Aah');\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(169, '/home/popl2022/compare_aratha_expose/regex-expose/old/replace_and_length_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/old/replace_and_length.js');
            J$.N(177, 'x', x, 0);
            var x = J$.X1(49, J$.W(41, 'x', J$.M(33, J$.R(9, 'S$', S$, 2), 'symbol', 0)(J$.T(17, "X", 21, false), J$.T(25, '', 21, false)), x, 3));
            if (J$.X1(185, J$.C(8, J$.B(10, '==', J$.R(57, 'x', x, 1), J$.T(65, 'HELLO WORLD', 21, false), 0)))) {
            }
            if (J$.X1(193, J$.C(24, J$.C(16, J$.B(18, '>', J$.G(81, J$.R(73, 'x', x, 1), 'length', 0), J$.T(89, 4, 22, false), 0)) ? J$.B(26, '===', J$.M(121, J$.R(97, 'x', x, 1), 'replace', 0)(J$.T(105, /hello/g, 14, false), J$.T(113, '', 21, false)), J$.T(129, '', 21, false), 0) : J$._()))) {
                J$.X1(161, J$.M(153, J$.R(137, 'console', console, 2), 'log', 0)(J$.T(145, 'Aah', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(201, J$e);
        } finally {
            if (J$.Sr(209)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
