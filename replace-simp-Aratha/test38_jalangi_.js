J$.iids = {"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test38.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test38_jalangi_.js"};
jalangiLabel9:
    while (true) {
        try {
            J$.Se(217, '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test38_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test38.js');
            function fun(tag) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(129, arguments.callee, this, arguments);
                            arguments = J$.N(137, 'arguments', arguments, 4);
                            tag = J$.N(145, 'tag', tag, 4);
                            J$.N(153, 'result', result, 0);
                            var result = J$.X1(25, J$.W(17, 'result', J$.T(9, '', 21, false), result, 1));
                            J$.X1(73, result = J$.W(65, 'result', J$.M(57, J$.R(33, 'tag', tag, 0), 'replace', 0)(J$.T(41, /vue\-component\-(\d+\-)?/, 14, false), J$.T(49, '', 21, false)), result, 0));
                            if (J$.X1(249, J$.C(8, J$.B(10, '!==', J$.R(81, 'result', result, 0), J$.T(89, '', 21, false), 0))))
                                J$.X1(121, J$.M(113, J$.R(97, 'console', console, 2), 'log', 0)(J$.T(105, "1", 21, false)));
                        } catch (J$e) {
                            J$.Ex(257, J$e);
                        } finally {
                            if (J$.Fr(265))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(233, 'fun', J$.T(225, fun, 12, false, 129), 0);
            J$.N(241, 'arg', arg, 0);
            var arg = J$.X1(177, J$.W(169, 'arg', J$.M(161, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(209, J$.F(201, J$.R(185, 'fun', fun, 1), 0)(J$.R(193, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(273, J$e);
        } finally {
            if (J$.Sr(281)) {
                J$.L();
                continue jalangiLabel9;
            } else {
                J$.L();
                break jalangiLabel9;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
