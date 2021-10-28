J$.iids = {"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-aratha/split/split_lhs.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-aratha/split/split_lhs_jalangi_.js"};
jalangiLabel7:
    while (true) {
        try {
            J$.Se(225, '/home/popl2022/compare_aratha_expose/regex-aratha/split/split_lhs_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-aratha/split/split_lhs.js');
            J$.N(233, 'x', x, 0);
            J$.N(241, 'y', y, 0);
            var x = J$.X1(25, J$.W(17, 'x', J$.M(9, J$, 'readString', 0)(), x, 3));
            ;
            J$.X1(65, J$.M(57, J$, 'assert', 0)(J$.B(10, '==', J$.G(41, J$.R(33, 'x', x, 1), 'length', 0), J$.T(49, 3, 22, false), 0)));
            var y = J$.X1(105, J$.W(97, 'y', J$.M(89, J$.R(73, 'x', x, 1), 'split', 0)(J$.T(81, /a/, 14, false)), y, 3));
            J$.X1(145, J$.M(137, J$, 'assert', 0)(J$.B(18, '==', J$.G(121, J$.R(113, 'y', y, 1), 'length', 0), J$.T(129, 2, 22, false), 0)));
            if (J$.X1(249, J$.C(8, J$.B(26, '==', J$.G(185, J$.M(169, J$.R(153, 'x', x, 1), 'split', 0)(J$.T(161, /a/, 14, false)), J$.T(177, 0, 22, false), 4), J$.T(193, "h", 21, false), 0)))) {
                throw J$.X1(217, J$.Th(209, J$.T(201, 'Reachable 1', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(257, J$e);
        } finally {
            if (J$.Sr(265)) {
                J$.L();
                continue jalangiLabel7;
            } else {
                J$.L();
                break jalangiLabel7;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
