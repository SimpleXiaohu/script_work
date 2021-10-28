J$.iids = {"8":[4,9,4,26],"9":[3,18,3,24],"17":[3,33,3,44],"25":[3,46,3,48],"33":[3,18,3,49],"35":[3,18,3,32],"41":[3,18,3,49],"49":[3,18,3,49],"57":[4,9,4,13],"65":[4,19,4,25],"73":[4,9,4,26],"75":[4,9,4,18],"81":[4,28,4,35],"89":[4,40,4,43],"97":[4,28,4,44],"99":[4,28,4,39],"105":[4,28,4,45],"113":[1,1,5,2],"121":[1,1,5,2],"129":[1,1,5,2],"137":[8,10,8,17],"145":[8,18,8,22],"153":[8,10,8,23],"161":[8,10,8,23],"169":[8,10,8,23],"177":[10,11,10,13],"185":[10,21,10,26],"193":[10,28,10,30],"201":[10,11,10,31],"203":[10,11,10,20],"209":[10,11,10,31],"217":[10,11,10,31],"225":[11,1,11,4],"233":[11,5,11,8],"241":[11,1,11,9],"249":[11,1,11,10],"257":[1,1,11,10],"265":[1,1,5,2],"273":[1,1,11,10],"281":[1,1,11,10],"289":[1,1,11,10],"297":[4,5,4,45],"305":[1,1,5,2],"313":[1,1,5,2],"321":[1,1,11,10],"329":[1,1,11,10],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test34.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test34_jalangi_.js","code":"\nfunction fun(source)\n{\n    var source = source.replace(/^.*[\\\\\\/]/, '');\n    if(/\\//.test(source)) console.log(\"1\");\n}\n\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(257, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test34_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test34.js');
            function fun(source) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(113, arguments.callee, this, arguments);
                            arguments = J$.N(121, 'arguments', arguments, 4);
                            source = J$.N(129, 'source', source, 4);
                            var source = J$.X1(49, J$.W(41, 'source', J$.M(33, J$.R(9, 'source', source, 0), 'replace', 0)(J$.T(17, /^.*[\\\/]/, 14, false), J$.T(25, '', 21, false)), source, 1));
                            if (J$.X1(297, J$.C(8, J$.M(73, J$.T(57, /\//, 14, false), 'test', 0)(J$.R(65, 'source', source, 0)))))
                                J$.X1(105, J$.M(97, J$.R(81, 'console', console, 2), 'log', 0)(J$.T(89, "1", 21, false)));
                        } catch (J$e) {
                            J$.Ex(305, J$e);
                        } finally {
                            if (J$.Fr(313))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(273, 'fun', J$.T(265, fun, 12, false, 113), 0);
            J$.N(281, 'S$', S$, 0);
            J$.N(289, 'arg', arg, 0);
            var S$ = J$.X1(169, J$.W(161, 'S$', J$.F(153, J$.R(137, 'require', require, 2), 0)(J$.T(145, "S$", 21, false)), S$, 3));
            var arg = J$.X1(217, J$.W(209, 'arg', J$.M(201, J$.R(177, 'S$', S$, 1), 'symbol', 0)(J$.T(185, "arg", 21, false), J$.T(193, "", 21, false)), arg, 3));
            J$.X1(249, J$.F(241, J$.R(225, 'fun', fun, 1), 0)(J$.R(233, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(321, J$e);
        } finally {
            if (J$.Sr(329)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
