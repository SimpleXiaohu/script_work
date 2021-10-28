J$.iids = {"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-aratha/replace/single/replace_2.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-aratha/replace/single/replace_2_jalangi_.js"};
jalangiLabel7:
    while (true) {
        try {
            J$.Se(289, '/home/popl2022/compare_aratha_expose/regex-aratha/replace/single/replace_2_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-aratha/replace/single/replace_2.js');
            J$.N(297, 'x', x, 0);
            J$.N(305, 'b', b, 0);
            var x = J$.X1(25, J$.W(17, 'x', J$.M(9, J$, 'readString', 0)(), x, 3));
            ;
            var b = J$.X1(49, J$.W(41, 'b', J$.T(33, /^(a|b)$/, 14, false), b, 3));
            J$.X1(97, x = J$.W(89, 'x', J$.M(81, J$.R(57, 'x', x, 1), 'replace', 0)(J$.R(65, 'b', b, 1), J$.T(73, 'hello', 21, false)), x, 2));
            J$.X1(137, J$.M(129, J$.R(105, 'console', console, 2), 'log', 0)(J$.B(10, '+', J$.T(113, 'X is ', 21, false), J$.R(121, 'x', x, 1), 0)));
            if (J$.X1(313, J$.C(8, J$.B(18, '==', J$.R(145, 'x', x, 1), J$.T(153, 'hello', 21, false), 0)))) {
                J$.X1(185, J$.M(177, J$.R(161, 'console', console, 2), 'log', 0)(J$.T(169, 1, 22, false)));
            }
            if (J$.X1(321, J$.C(16, J$.B(26, '==', J$.R(193, 'x', x, 1), J$.T(201, 'a', 21, false), 0)))) {
                J$.X1(233, J$.M(225, J$.R(209, 'console', console, 2), 'log', 0)(J$.T(217, 2, 22, false)));
            }
            if (J$.X1(329, J$.C(24, J$.B(34, '==', J$.R(241, 'x', x, 1), J$.T(249, 'b', 21, false), 0)))) {
                J$.X1(281, J$.M(273, J$.R(257, 'console', console, 2), 'log', 0)(J$.T(265, 3, 22, false)));
            }
        } catch (J$e) {
            J$.Ex(337, J$e);
        } finally {
            if (J$.Sr(345)) {
                J$.L();
                continue jalangiLabel7;
            } else {
                J$.L();
                break jalangiLabel7;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
