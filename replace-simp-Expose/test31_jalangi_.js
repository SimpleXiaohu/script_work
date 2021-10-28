J$.iids = {"8":[4,7,4,24],"9":[3,16,3,22],"10":[3,16,3,81],"17":[3,25,3,31],"25":[3,40,3,50],"33":[3,52,3,54],"41":[3,25,3,55],"43":[3,25,3,39],"49":[3,64,3,74],"57":[3,76,3,80],"65":[3,25,3,81],"67":[3,25,3,63],"73":[3,16,3,81],"81":[3,16,3,81],"89":[4,7,4,11],"97":[4,17,4,23],"105":[4,7,4,24],"107":[4,7,4,16],"113":[4,26,4,33],"121":[4,38,4,41],"129":[4,26,4,42],"131":[4,26,4,37],"137":[4,26,4,43],"145":[1,1,5,2],"153":[1,1,5,2],"161":[1,1,5,2],"169":[1,1,5,2],"177":[7,10,7,17],"185":[7,18,7,22],"193":[7,10,7,23],"201":[7,10,7,23],"209":[7,10,7,23],"217":[9,11,9,13],"225":[9,21,9,26],"233":[9,28,9,30],"241":[9,11,9,31],"243":[9,11,9,20],"249":[9,11,9,31],"257":[9,11,9,31],"265":[10,1,10,4],"273":[10,5,10,8],"281":[10,1,10,9],"289":[10,1,10,10],"297":[1,1,10,10],"305":[1,1,5,2],"313":[1,1,10,10],"321":[1,1,10,10],"329":[1,1,10,10],"337":[4,3,4,43],"345":[1,1,5,2],"353":[1,1,5,2],"361":[1,1,10,10],"369":[1,1,10,10],"nBranches":2,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test31.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test31_jalangi_.js","code":"\nfunction fun(device)\n{\n  var result = '\\\\\\\\' + device.replace(/^[\\\\\\/]+/, '').replace(/[\\\\\\/]+/g, '\\\\');\n  if(/\\//.test(result)) console.log(\"1\");\n}\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(297, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test31_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test31.js');
            function fun(device) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(145, arguments.callee, this, arguments);
                            arguments = J$.N(153, 'arguments', arguments, 4);
                            device = J$.N(161, 'device', device, 4);
                            J$.N(169, 'result', result, 0);
                            var result = J$.X1(81, J$.W(73, 'result', J$.B(10, '+', J$.T(9, '\\\\', 21, false), J$.M(65, J$.M(41, J$.R(17, 'device', device, 0), 'replace', 0)(J$.T(25, /^[\\\/]+/, 14, false), J$.T(33, '', 21, false)), 'replace', 0)(J$.T(49, /[\\\/]+/g, 14, false), J$.T(57, '\\', 21, false)), 0), result, 1));
                            if (J$.X1(337, J$.C(8, J$.M(105, J$.T(89, /\//, 14, false), 'test', 0)(J$.R(97, 'result', result, 0)))))
                                J$.X1(137, J$.M(129, J$.R(113, 'console', console, 2), 'log', 0)(J$.T(121, "1", 21, false)));
                        } catch (J$e) {
                            J$.Ex(345, J$e);
                        } finally {
                            if (J$.Fr(353))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(313, 'fun', J$.T(305, fun, 12, false, 145), 0);
            J$.N(321, 'S$', S$, 0);
            J$.N(329, 'arg', arg, 0);
            var S$ = J$.X1(209, J$.W(201, 'S$', J$.F(193, J$.R(177, 'require', require, 2), 0)(J$.T(185, "S$", 21, false)), S$, 3));
            var arg = J$.X1(257, J$.W(249, 'arg', J$.M(241, J$.R(217, 'S$', S$, 1), 'symbol', 0)(J$.T(225, "arg", 21, false), J$.T(233, "", 21, false)), arg, 3));
            J$.X1(289, J$.F(281, J$.R(265, 'fun', fun, 1), 0)(J$.R(273, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(361, J$e);
        } finally {
            if (J$.Sr(369)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
