J$.iids = {"nBranches":8,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-aratha/replace/single/replace_3.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-aratha/replace/single/replace_3_jalangi_.js"};
jalangiLabel8:
    while (true) {
        try {
            J$.Se(281, '/home/popl2022/compare_aratha_expose/regex-aratha/replace/single/replace_3_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-aratha/replace/single/replace_3.js');
            J$.N(289, 'x', x, 0);
            J$.N(297, 'b', b, 0);
            var x = J$.X1(25, J$.W(17, 'x', J$.M(9, J$, 'readString', 0)(), x, 3));
            ;
            var b = J$.X1(49, J$.W(41, 'b', J$.T(33, /^...$/, 14, false), b, 3));
            J$.X1(97, x = J$.W(89, 'x', J$.M(81, J$.R(57, 'x', x, 1), 'replace', 0)(J$.R(65, 'b', b, 1), J$.T(73, 'abdef', 21, false)), x, 2));
            if (J$.X1(305, J$.C(8, J$.B(10, '==', J$.R(105, 'x', x, 1), J$.T(113, 'hello', 21, false), 0)))) {
                throw J$.X1(137, J$.Th(129, J$.T(121, 'Reachable 1', 21, false)));
            }
            if (J$.X1(313, J$.C(16, J$.B(18, '==', J$.R(145, 'x', x, 1), J$.T(153, 'abc', 21, false), 0)))) {
                J$.X1(185, J$.M(177, J$.R(161, 'console', console, 2), 'log', 0)(J$.T(169, 1, 22, false)));
            }
            if (J$.X1(321, J$.C(24, J$.B(26, '==', J$.R(193, 'x', x, 1), J$.T(201, 'def', 21, false), 0)))) {
                J$.X1(233, J$.M(225, J$.R(209, 'console', console, 2), 'log', 0)(J$.T(217, 2, 22, false)));
            }
            if (J$.X1(329, J$.C(32, J$.B(34, '==', J$.R(241, 'x', x, 1), J$.T(249, 'abdef', 21, false), 0)))) {
                throw J$.X1(273, J$.Th(265, J$.T(257, 'Reachable 2', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(337, J$e);
        } finally {
            if (J$.Sr(345)) {
                J$.L();
                continue jalangiLabel8;
            } else {
                J$.L();
                break jalangiLabel8;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
