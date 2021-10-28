J$.iids = {"8":[5,9,5,23],"9":[3,18,3,31],"17":[3,18,3,31],"25":[3,18,3,31],"33":[4,11,4,14],"41":[4,23,4,29],"49":[4,31,4,33],"57":[4,11,4,34],"59":[4,11,4,22],"65":[4,11,4,34],"73":[4,5,4,35],"81":[5,9,5,13],"89":[5,19,5,22],"97":[5,9,5,23],"99":[5,9,5,18],"105":[5,25,5,32],"113":[5,37,5,40],"121":[5,25,5,41],"123":[5,25,5,36],"129":[5,25,5,42],"137":[1,1,6,2],"145":[1,1,6,2],"153":[1,1,6,2],"161":[1,1,6,2],"169":[10,10,10,17],"177":[10,18,10,22],"185":[10,10,10,23],"193":[10,10,10,23],"201":[10,10,10,23],"209":[12,11,12,13],"217":[12,21,12,26],"225":[12,28,12,30],"233":[12,11,12,31],"235":[12,11,12,20],"241":[12,11,12,31],"249":[12,11,12,31],"257":[13,1,13,4],"265":[13,5,13,8],"273":[13,1,13,9],"281":[13,1,13,10],"289":[1,1,13,10],"297":[1,1,6,2],"305":[1,1,13,10],"313":[1,1,13,10],"321":[1,1,13,10],"329":[5,5,5,42],"337":[1,1,6,2],"345":[1,1,6,2],"353":[1,1,13,10],"361":[1,1,13,10],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test43.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test43_jalangi_.js","code":"\nfunction fun(cmd)\n{\n    const bregex = /\\.*[\\][<>]/g;\n    cmd = cmd.replace(bregex, '');\n    if(/<>/.test(cmd)) console.log(\"1\");\n}\n\n\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(289, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test43_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test43.js');
            function fun(cmd) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(137, arguments.callee, this, arguments);
                            arguments = J$.N(145, 'arguments', arguments, 4);
                            cmd = J$.N(153, 'cmd', cmd, 4);
                            J$.N(161, 'bregex', bregex, 0);
                            var bregex = J$.X1(25, J$.W(17, 'bregex', J$.T(9, /\.*[\][<>]/g, 14, false), bregex, 1));
                            J$.X1(73, cmd = J$.W(65, 'cmd', J$.M(57, J$.R(33, 'cmd', cmd, 0), 'replace', 0)(J$.R(41, 'bregex', bregex, 0), J$.T(49, '', 21, false)), cmd, 0));
                            if (J$.X1(329, J$.C(8, J$.M(97, J$.T(81, /<>/, 14, false), 'test', 0)(J$.R(89, 'cmd', cmd, 0)))))
                                J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(J$.T(113, "1", 21, false)));
                        } catch (J$e) {
                            J$.Ex(337, J$e);
                        } finally {
                            if (J$.Fr(345))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(305, 'fun', J$.T(297, fun, 12, false, 137), 0);
            J$.N(313, 'S$', S$, 0);
            J$.N(321, 'arg', arg, 0);
            var S$ = J$.X1(201, J$.W(193, 'S$', J$.F(185, J$.R(169, 'require', require, 2), 0)(J$.T(177, "S$", 21, false)), S$, 3));
            var arg = J$.X1(249, J$.W(241, 'arg', J$.M(233, J$.R(209, 'S$', S$, 1), 'symbol', 0)(J$.T(217, "arg", 21, false), J$.T(225, "", 21, false)), arg, 3));
            J$.X1(281, J$.F(273, J$.R(257, 'fun', fun, 1), 0)(J$.R(265, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(353, J$e);
        } finally {
            if (J$.Sr(361)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
