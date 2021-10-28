J$.iids = {"8":[6,5,6,20],"9":[3,9,3,11],"17":[3,19,3,22],"25":[3,24,3,26],"33":[3,9,3,27],"35":[3,9,3,18],"41":[3,9,3,27],"49":[3,9,3,27],"57":[6,5,6,12],"65":[6,18,6,19],"73":[6,5,6,20],"75":[6,5,6,17],"81":[1,1,6,24],"89":[1,1,6,24],"97":[6,1,6,24],"105":[1,1,6,24],"113":[1,1,6,24],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/old/simple_test.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-expose/old/simple_test_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar x = S$.symbol(\"X\", '');\n\n\nif (/a|b|c/.test(x)) {}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(81, '/home/popl2022/compare_aratha_expose/regex-expose/old/simple_test_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-expose/old/simple_test.js');
            J$.N(89, 'x', x, 0);
            var x = J$.X1(49, J$.W(41, 'x', J$.M(33, J$.R(9, 'S$', S$, 2), 'symbol', 0)(J$.T(17, "X", 21, false), J$.T(25, '', 21, false)), x, 3));
            if (J$.X1(97, J$.C(8, J$.M(73, J$.T(57, /a|b|c/, 14, false), 'test', 0)(J$.R(65, 'x', x, 1))))) {
            }
        } catch (J$e) {
            J$.Ex(105, J$e);
        } finally {
            if (J$.Sr(113)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
