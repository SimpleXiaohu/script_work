J$.iids = {"8":[7,9,7,23],"9":[3,13,3,15],"10":[5,7,5,19],"16":[5,7,5,19],"17":[3,13,3,15],"25":[3,13,3,15],"33":[4,11,4,16],"41":[4,11,4,23],"43":[4,11,4,21],"49":[4,32,4,43],"57":[4,45,4,47],"65":[4,11,4,48],"67":[4,11,4,31],"73":[4,11,4,48],"81":[4,3,4,49],"89":[5,7,5,12],"97":[5,17,5,19],"105":[6,11,6,16],"113":[6,25,6,30],"121":[6,32,6,35],"129":[6,11,6,36],"131":[6,11,6,24],"137":[6,11,6,36],"145":[6,5,6,37],"153":[7,9,7,13],"161":[7,19,7,22],"169":[7,9,7,23],"171":[7,9,7,18],"177":[7,25,7,32],"185":[7,37,7,40],"193":[7,25,7,41],"195":[7,25,7,36],"201":[7,25,7,42],"209":[1,1,9,2],"217":[1,1,9,2],"225":[1,1,9,2],"233":[1,1,9,2],"241":[12,10,12,17],"249":[12,18,12,22],"257":[12,10,12,23],"265":[12,10,12,23],"273":[12,10,12,23],"281":[14,11,14,13],"289":[14,21,14,26],"297":[14,28,14,30],"305":[14,11,14,31],"307":[14,11,14,20],"313":[14,11,14,31],"321":[14,11,14,31],"329":[15,1,15,4],"337":[15,5,15,8],"345":[15,1,15,9],"353":[15,1,15,10],"361":[1,1,15,10],"369":[1,1,9,2],"377":[1,1,15,10],"385":[1,1,15,10],"393":[1,1,15,10],"401":[7,5,7,42],"409":[5,3,8,4],"417":[1,1,9,2],"425":[1,1,9,2],"433":[1,1,15,10],"441":[1,1,15,10],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test41.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test41_jalangi_.js","code":"\nfunction fun(query)\n{\n  var res = '';\n  query = query.trim().replace(/^(\\?|#|&)/, '');\n  if (query!=='') {\n    res = query.replace(/\\+/g, ' ');\n    if(/\\s/.test(res)) console.log(\"1\");\n  }\n}\n\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(361, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test41_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test41.js');
            function fun(query) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(209, arguments.callee, this, arguments);
                            arguments = J$.N(217, 'arguments', arguments, 4);
                            query = J$.N(225, 'query', query, 4);
                            J$.N(233, 'res', res, 0);
                            var res = J$.X1(25, J$.W(17, 'res', J$.T(9, '', 21, false), res, 1));
                            J$.X1(81, query = J$.W(73, 'query', J$.M(65, J$.M(41, J$.R(33, 'query', query, 0), 'trim', 0)(), 'replace', 0)(J$.T(49, /^(\?|#|&)/, 14, false), J$.T(57, '', 21, false)), query, 0));
                            if (J$.X1(409, J$.C(16, J$.B(10, '!==', J$.R(89, 'query', query, 0), J$.T(97, '', 21, false), 0)))) {
                                J$.X1(145, res = J$.W(137, 'res', J$.M(129, J$.R(105, 'query', query, 0), 'replace', 0)(J$.T(113, /\+/g, 14, false), J$.T(121, ' ', 21, false)), res, 0));
                                if (J$.X1(401, J$.C(8, J$.M(169, J$.T(153, /\s/, 14, false), 'test', 0)(J$.R(161, 'res', res, 0)))))
                                    J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, "1", 21, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(417, J$e);
                        } finally {
                            if (J$.Fr(425))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(377, 'fun', J$.T(369, fun, 12, false, 209), 0);
            J$.N(385, 'S$', S$, 0);
            J$.N(393, 'arg', arg, 0);
            var S$ = J$.X1(273, J$.W(265, 'S$', J$.F(257, J$.R(241, 'require', require, 2), 0)(J$.T(249, "S$", 21, false)), S$, 3));
            var arg = J$.X1(321, J$.W(313, 'arg', J$.M(305, J$.R(281, 'S$', S$, 1), 'symbol', 0)(J$.T(289, "arg", 21, false), J$.T(297, "", 21, false)), arg, 3));
            J$.X1(353, J$.F(345, J$.R(329, 'fun', fun, 1), 0)(J$.R(337, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(433, J$e);
        } finally {
            if (J$.Sr(441)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
