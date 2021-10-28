J$.iids = {"nBranches":8,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-aratha/split/split_1.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-aratha/split/split_1_jalangi_.js"};
jalangiLabel7:
    while (true) {
        try {
            J$.Se(337, '/home/popl2022/compare_aratha_expose/regex-aratha/split/split_1_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-aratha/split/split_1.js');
            J$.N(345, 'x', x, 0);
            J$.N(353, 'b', b, 0);
            var x = J$.X1(25, J$.W(17, 'x', J$.M(9, J$, 'readString', 0)(), x, 3));
            ;
            var b = J$.X1(49, J$.W(41, 'b', J$.T(33, /a/, 14, false), b, 3));
            J$.X1(89, J$.M(81, J$, 'assert', 0)(J$.B(10, '<', J$.G(65, J$.R(57, 'x', x, 1), 'length', 0), J$.T(73, 5, 22, false), 0)));
            J$.X1(129, x = J$.W(121, 'x', J$.M(113, J$.R(97, 'x', x, 1), 'split', 0)(J$.R(105, 'b', b, 1)), x, 2));
            if (J$.X1(385, J$.C(32, J$.B(18, '==', J$.G(145, J$.R(137, 'x', x, 1), 'length', 0), J$.T(153, 2, 22, false), 0)))) {
                if (J$.X1(361, J$.C(8, J$.B(26, '==', J$.G(177, J$.R(161, 'x', x, 1), J$.T(169, 0, 22, false), 4), J$.T(185, 'hello', 21, false), 0)))) {
                    J$.X1(217, J$.M(209, J$.R(193, 'console', console, 2), 'log', 0)(J$.T(201, 1, 22, false)));
                }
                if (J$.X1(369, J$.C(16, J$.B(34, '==', J$.G(241, J$.R(225, 'x', x, 1), J$.T(233, 1, 22, false), 4), J$.T(249, 'wh', 21, false), 0)))) {
                    throw J$.X1(273, J$.Th(265, J$.T(257, 'Reachable 1', 21, false)));
                }
                if (J$.X1(377, J$.C(24, J$.B(42, '==', J$.G(297, J$.R(281, 'x', x, 1), J$.T(289, 0, 22, false), 4), J$.T(305, 'w', 21, false), 0)))) {
                    throw J$.X1(329, J$.Th(321, J$.T(313, 'Reachable 1', 21, false)));
                }
            }
        } catch (J$e) {
            J$.Ex(393, J$e);
        } finally {
            if (J$.Sr(401)) {
                J$.L();
                continue jalangiLabel7;
            } else {
                J$.L();
                break jalangiLabel7;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
