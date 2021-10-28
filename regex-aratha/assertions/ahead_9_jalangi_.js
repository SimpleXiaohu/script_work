J$.iids = {"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-aratha/assertions/ahead_9.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-aratha/assertions/ahead_9_jalangi_.js"};
jalangiLabel7:
    while (true) {
        try {
            J$.Se(137, '/home/popl2022/compare_aratha_expose/regex-aratha/assertions/ahead_9_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-aratha/assertions/ahead_9.js');
            J$.N(145, 'x', x, 0);
            J$.N(153, 're', re, 0);
            J$.N(161, 'r', r, 0);
            var x = J$.X1(25, J$.W(17, 'x', J$.M(9, J$, 'readString', 0)(), x, 3));
            ;
            var re = J$.X1(49, J$.W(41, 're', J$.T(33, /^(?=(..))[a-z]+$/, 14, false), re, 3));
            var r = J$.X1(89, J$.W(81, 'r', J$.M(73, J$.R(57, 're', re, 1), 'exec', 0)(J$.R(65, 'x', x, 1)), r, 3));
            if (J$.X1(169, J$.C(8, J$.R(97, 'r', r, 1)))) {
                J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(J$.T(113, 1, 22, false)));
            }
        } catch (J$e) {
            J$.Ex(177, J$e);
        } finally {
            if (J$.Sr(185)) {
                J$.L();
                continue jalangiLabel7;
            } else {
                J$.L();
                break jalangiLabel7;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
