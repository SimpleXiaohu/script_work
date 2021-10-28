J$.iids = {"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-aratha/test/flags/sticky2.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-aratha/test/flags/sticky2_jalangi_.js"};
jalangiLabel8:
    while (true) {
        try {
            J$.Se(193, '/home/popl2022/compare_aratha_expose/regex-aratha/test/flags/sticky2_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-aratha/test/flags/sticky2.js');
            J$.N(201, 'x', x, 0);
            J$.N(209, 're', re, 0);
            var x = J$.X1(25, J$.W(17, 'x', J$.M(9, J$, 'readString', 0)(), x, 3));
            ;
            var re = J$.X1(49, J$.W(41, 're', J$.T(33, /Hello/, 14, false), re, 3));
            J$.X1(89, J$.M(81, J$, 'assert', 0)(J$.B(10, '<', J$.G(65, J$.R(57, 'x', x, 1), 'length', 0), J$.T(73, 13, 22, false), 0)));
            if (J$.X1(225, J$.C(16, J$.M(113, J$.R(97, 're', re, 1), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                if (J$.X1(217, J$.C(8, J$.M(137, J$.R(121, 're', re, 1), 'test', 0)(J$.R(129, 'x', x, 1))))) {
                    throw J$.X1(161, J$.Th(153, J$.T(145, 'Reachable 2', 21, false)));
                }
                throw J$.X1(185, J$.Th(177, J$.T(169, 'Reachable 1', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(233, J$e);
        } finally {
            if (J$.Sr(241)) {
                J$.L();
                continue jalangiLabel8;
            } else {
                J$.L();
                break jalangiLabel8;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
