J$.iids = {"nBranches":8,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-aratha/core/loops/fixed_loop.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-aratha/core/loops/fixed_loop_jalangi_.js"};
jalangiLabel8:
    while (true) {
        try {
            J$.Se(241, '/home/popl2022/compare_aratha_expose/regex-aratha/core/loops/fixed_loop_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-aratha/core/loops/fixed_loop.js');
            J$.N(249, 'x', x, 0);
            var x = J$.X1(25, J$.W(17, 'x', J$.M(9, J$, 'readString', 0)(), x, 3));
            ;
            if (J$.X1(265, J$.C(16, J$.M(49, J$.T(33, /^(abc){3}$/, 14, false), 'test', 0)(J$.R(41, 'x', x, 1))))) {
                if (J$.X1(257, J$.C(8, J$.B(10, '==', J$.R(57, 'x', x, 1), J$.T(65, 'abcabcabc', 21, false), 0))))
                    J$.X1(97, J$.M(89, J$.R(73, 'console', console, 2), 'log', 0)(J$.T(81, 1, 22, false)));
                J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(J$.T(113, 2, 22, false)));
            }
            if (J$.X1(281, J$.C(32, J$.M(153, J$.T(137, /^a{3}$/, 14, false), 'test', 0)(J$.R(145, 'x', x, 1))))) {
                if (J$.X1(273, J$.C(24, J$.B(18, '==', J$.R(161, 'x', x, 1), J$.T(169, 'aaa', 21, false), 0))))
                    J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, 3, 22, false)));
                J$.X1(233, J$.M(225, J$.R(209, 'console', console, 2), 'log', 0)(J$.T(217, 4, 22, false)));
            }
        } catch (J$e) {
            J$.Ex(289, J$e);
        } finally {
            if (J$.Sr(297)) {
                J$.L();
                continue jalangiLabel8;
            } else {
                J$.L();
                break jalangiLabel8;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
