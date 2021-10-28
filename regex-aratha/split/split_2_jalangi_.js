J$.iids = {"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-aratha/split/split_2.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-aratha/split/split_2_jalangi_.js"};
jalangiLabel7:
    while (true) {
        try {
            J$.Se(193, '/home/popl2022/compare_aratha_expose/regex-aratha/split/split_2_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-aratha/split/split_2.js');
            J$.N(201, 'x', x, 0);
            J$.N(209, 'b', b, 0);
            var x = J$.X1(25, J$.W(17, 'x', J$.M(9, J$, 'readString', 0)(), x, 3));
            ;
            var b = J$.X1(49, J$.W(41, 'b', J$.T(33, /(a)/, 14, false), b, 3));
            J$.X1(89, J$.M(81, J$, 'assert', 0)(J$.B(10, '<', J$.G(65, J$.R(57, 'x', x, 1), 'length', 0), J$.T(73, 5, 22, false), 0)));
            J$.X1(129, x = J$.W(121, 'x', J$.M(113, J$.R(97, 'x', x, 1), 'split', 0)(J$.R(105, 'b', b, 1)), x, 2));
            if (J$.X1(217, J$.C(8, J$.B(18, '==', J$.G(145, J$.R(137, 'x', x, 1), 'length', 0), J$.T(153, 6, 22, false), 0)))) {
                J$.X1(185, J$.M(177, J$.R(161, 'console', console, 2), 'log', 0)(J$.T(169, 1, 22, false)));
            }
        } catch (J$e) {
            J$.Ex(225, J$e);
        } finally {
            if (J$.Sr(233)) {
                J$.L();
                continue jalangiLabel7;
            } else {
                J$.L();
                break jalangiLabel7;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
