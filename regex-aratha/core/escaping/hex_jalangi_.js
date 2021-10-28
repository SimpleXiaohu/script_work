J$.iids = {"nBranches":12,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-aratha/core/escaping/hex.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-aratha/core/escaping/hex_jalangi_.js"};
jalangiLabel8:
    while (true) {
        try {
            J$.Se(345, '/home/popl2022/compare_aratha_expose/regex-aratha/core/escaping/hex_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-aratha/core/escaping/hex.js');
            J$.N(353, 'x', x, 0);
            var x = J$.X1(25, J$.W(17, 'x', J$.M(9, J$, 'readString', 0)(), x, 3));
            ;
            if (J$.X1(369, J$.C(16, J$.M(49, J$.T(33, /^\xFF$/, 14, false), 'test', 0)(J$.R(41, 'x', x, 1))))) {
                if (J$.X1(361, J$.C(8, J$.B(10, '!=', J$.R(57, 'x', x, 1), J$.T(65, '\xFF', 21, false), 0))))
                    J$.X1(97, J$.M(89, J$.R(73, 'console', console, 2), 'log', 0)(J$.T(81, 1, 22, false)));
                J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(J$.T(113, 2, 22, false)));
            }
            if (J$.X1(385, J$.C(32, J$.M(153, J$.T(137, /^\xEF$/, 14, false), 'test', 0)(J$.R(145, 'x', x, 1))))) {
                if (J$.X1(377, J$.C(24, J$.B(18, '!=', J$.R(161, 'x', x, 1), J$.T(169, '\xEF', 21, false), 0))))
                    J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, 3, 22, false)));
                J$.X1(233, J$.M(225, J$.R(209, 'console', console, 2), 'log', 0)(J$.T(217, 4, 22, false)));
            }
            if (J$.X1(401, J$.C(48, J$.M(257, J$.T(241, /^\0$/, 14, false), 'test', 0)(J$.R(249, 'x', x, 1))))) {
                if (J$.X1(393, J$.C(40, J$.B(26, '==', J$.R(265, 'x', x, 1), J$.T(273, '\x00', 21, false), 0))))
                    J$.X1(305, J$.M(297, J$.R(281, 'console', console, 2), 'log', 0)(J$.T(289, 5, 22, false)));
                J$.X1(337, J$.M(329, J$.R(313, 'console', console, 2), 'log', 0)(J$.T(321, 6, 22, false)));
            }
        } catch (J$e) {
            J$.Ex(409, J$e);
        } finally {
            if (J$.Sr(417)) {
                J$.L();
                continue jalangiLabel8;
            } else {
                J$.L();
                break jalangiLabel8;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
