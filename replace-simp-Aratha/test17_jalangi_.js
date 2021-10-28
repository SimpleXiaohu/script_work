J$.iids = {"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test17.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test17_jalangi_.js"};
jalangiLabel9:
    while (true) {
        try {
            J$.Se(193, '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test17_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Aratha/test17.js');
            function fun(currentNode) {
                jalangiLabel8:
                    while (true) {
                        try {
                            J$.Fe(105, arguments.callee, this, arguments);
                            arguments = J$.N(113, 'arguments', arguments, 4);
                            currentNode = J$.N(121, 'currentNode', currentNode, 4);
                            J$.N(129, 'currentNode1', currentNode1, 0);
                            var currentNode1 = J$.X1(41, J$.W(33, 'currentNode1', J$.M(25, J$.R(9, 'currentNode', currentNode, 0), 'replace', 0)(J$.T(17, /\\*(\$\{|`)/g, 14, false), `\\$1`), currentNode1, 1));
                            if (J$.X1(225, J$.C(8, J$.M(65, J$.T(49, /\\\\/, 14, false), 'test', 0)(J$.R(57, 'currentNode1', currentNode1, 0)))))
                                J$.X1(97, J$.M(89, J$.R(73, 'console', console, 2), 'log', 0)(J$.T(81, "1", 21, false)));
                        } catch (J$e) {
                            J$.Ex(233, J$e);
                        } finally {
                            if (J$.Fr(241))
                                continue jalangiLabel8;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(209, 'fun', J$.T(201, fun, 12, false, 105), 0);
            J$.N(217, 'arg', arg, 0);
            var arg = J$.X1(153, J$.W(145, 'arg', J$.M(137, J$, 'readString', 0)(), arg, 3));
            ;
            J$.X1(185, J$.F(177, J$.R(161, 'fun', fun, 1), 0)(J$.R(169, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(249, J$e);
        } finally {
            if (J$.Sr(257)) {
                J$.L();
                continue jalangiLabel9;
            } else {
                J$.L();
                break jalangiLabel9;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
