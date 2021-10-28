J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-aratha/assertions/ahead_7.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-aratha/assertions/ahead_7_jalangi_.js"};
jalangiLabel7:
    while (true) {
        try {
            J$.Se(193, '/home/popl2022/compare_aratha_expose/regex-aratha/assertions/ahead_7_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-aratha/assertions/ahead_7.js');
            J$.N(201, 'x', x, 0);
            J$.N(209, 're', re, 0);
            J$.N(217, 're2', re2, 0);
            var x = J$.X1(25, J$.W(17, 'x', J$.M(9, J$, 'readString', 0)(), x, 3));
            ;
            var re = J$.X1(49, J$.W(41, 're', J$.T(33, /^(?=([0-9])).$/, 14, false), re, 3));
            var re2 = J$.X1(73, J$.W(65, 're2', J$.T(57, /^[0-9]$/, 14, false), re2, 3));
            if (J$.X1(233, J$.C(16, J$.M(97, J$.R(81, 're', re, 1), 'test', 0)(J$.R(89, 'x', x, 1))))) {
                if (J$.X1(225, J$.C(8, J$.U(10, '!', J$.M(121, J$.R(105, 're2', re2, 1), 'test', 0)(J$.R(113, 'x', x, 1)))))) {
                    J$.X1(153, J$.M(145, J$.R(129, 'console', console, 2), 'log', 0)(J$.T(137, 1, 22, false)));
                }
                J$.X1(185, J$.M(177, J$.R(161, 'console', console, 2), 'log', 0)(J$.T(169, 2, 22, false)));
            }
        } catch (J$e) {
            J$.Ex(241, J$e);
        } finally {
            if (J$.Sr(249)) {
                J$.L();
                continue jalangiLabel7;
            } else {
                J$.L();
                break jalangiLabel7;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
