J$.iids = {"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-aratha/core/literals/mixed_escaped.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-aratha/core/literals/mixed_escaped_jalangi_.js"};
jalangiLabel8:
    while (true) {
        try {
            J$.Se(193, '/home/popl2022/compare_aratha_expose/regex-aratha/core/literals/mixed_escaped_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-aratha/core/literals/mixed_escaped.js');
            J$.N(201, 'x', x, 0);
            J$.N(209, 'isIn', isIn, 0);
            var x = J$.X1(25, J$.W(17, 'x', J$.M(9, J$, 'readString', 0)(), x, 3));
            ;
            var isIn = J$.X1(65, J$.W(57, 'isIn', J$.M(49, J$.T(33, /^Hello(world)how are you\(today\)huh\?huh?$/, 14, false), 'test', 0)(J$.R(41, 'x', x, 1)), isIn, 3));
            if (J$.X1(225, J$.C(24, J$.R(73, 'isIn', isIn, 1)))) {
                if (J$.X1(217, J$.C(16, J$.C(8, J$.B(10, '!=', J$.R(81, 'x', x, 1), J$.T(89, 'Helloworldhow are you(today)huh?hu', 21, false), 0)) ? J$.B(18, '!=', J$.R(97, 'x', x, 1), J$.T(105, 'Helloworldhow are you(today)huh?huh', 21, false), 0) : J$._()))) {
                    J$.X1(137, J$.M(129, J$.R(113, 'console', console, 2), 'log', 0)(J$.T(121, 1, 22, false)));
                } else {
                    throw J$.X1(161, J$.Th(153, J$.T(145, 'Reachable 1', 21, false)));
                }
            } else {
                throw J$.X1(185, J$.Th(177, J$.T(169, 'Reachable 2', 21, false)));
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
