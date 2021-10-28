J$.iids = {"nBranches":6,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/regex-aratha/replace/single/callback.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/regex-aratha/replace/single/callback_jalangi_.js"};
jalangiLabel7:
    while (true) {
        try {
            J$.Se(233, '/home/popl2022/compare_aratha_expose/regex-aratha/replace/single/callback_jalangi_.js', '/home/popl2022/compare_aratha_expose/regex-aratha/replace/single/callback.js');
            J$.N(241, 'x', x, 0);
            var x = J$.X1(25, J$.W(17, 'x', J$.M(9, J$, 'readString', 0)(), x, 3));
            ;
            J$.X1(225, J$.M(217, J$.R(33, 'x', x, 1), 'replace', 0)(J$.T(41, /^.+(.).+/, 14, false), J$.T(209, function (zero, one) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(177, arguments.callee, this, arguments);
                            arguments = J$.N(185, 'arguments', arguments, 4);
                            zero = J$.N(193, 'zero', zero, 4);
                            one = J$.N(201, 'one', one, 4);
                            if (J$.X1(265, J$.C(24, J$.B(10, '==', J$.R(49, 'one', one, 0), J$.T(57, 'p', 21, false), 0)))) {
                                throw J$.X1(81, J$.Th(73, J$.T(65, 'Reachable 1', 21, false)));
                            } else if (J$.X1(257, J$.C(16, J$.B(18, '==', J$.R(89, 'one', one, 0), J$.T(97, 'c', 21, false), 0)))) {
                                throw J$.X1(121, J$.Th(113, J$.T(105, 'Reachable 2', 21, false)));
                            } else if (J$.X1(249, J$.C(8, J$.B(26, '==', J$.R(129, 'one', one, 0), J$.T(137, "dog", 21, false), 0)))) {
                                J$.X1(169, J$.M(161, J$.R(145, 'console', console, 2), 'log', 0)(J$.T(153, 1, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(273, J$e);
                        } finally {
                            if (J$.Fr(281))
                                continue jalangiLabel6;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 177)));
        } catch (J$e) {
            J$.Ex(289, J$e);
        } finally {
            if (J$.Sr(297)) {
                J$.L();
                continue jalangiLabel7;
            } else {
                J$.L();
                break jalangiLabel7;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
