J$.iids = {"8":[6,20,6,43],"9":[2,18,2,69],"10":[5,15,5,31],"16":[5,15,5,31],"17":[2,18,2,69],"24":[4,10,4,15],"25":[2,18,2,69],"33":[3,18,3,21],"41":[3,28,3,33],"49":[3,18,3,34],"51":[3,18,3,27],"57":[3,18,3,34],"65":[3,18,3,34],"73":[4,10,4,15],"81":[5,15,5,20],"89":[5,21,5,22],"97":[5,15,5,23],"105":[5,27,5,31],"113":[6,20,6,28],"121":[6,34,6,39],"129":[6,40,6,41],"137":[6,34,6,42],"145":[6,20,6,43],"147":[6,20,6,33],"153":[7,16,7,23],"161":[7,28,7,31],"169":[7,16,7,32],"171":[7,16,7,27],"177":[7,16,7,33],"185":[9,16,9,23],"193":[9,28,9,31],"201":[9,16,9,32],"203":[9,16,9,27],"209":[9,16,9,33],"217":[12,11,12,18],"225":[12,23,12,26],"233":[12,11,12,27],"235":[12,11,12,22],"241":[12,11,12,28],"249":[15,6,15,13],"257":[15,18,15,21],"265":[15,6,15,22],"267":[15,6,15,17],"273":[15,6,15,23],"281":[1,1,16,2],"289":[1,1,16,2],"297":[1,1,16,2],"305":[1,1,16,2],"313":[1,1,16,2],"321":[18,10,18,17],"329":[18,18,18,22],"337":[18,10,18,23],"345":[18,10,18,23],"353":[18,10,18,23],"361":[19,11,19,13],"369":[19,21,19,26],"377":[19,28,19,30],"385":[19,11,19,31],"387":[19,11,19,20],"393":[19,11,19,31],"401":[19,11,19,31],"409":[21,1,21,4],"417":[21,5,21,8],"425":[21,1,21,9],"433":[21,1,21,10],"441":[1,1,21,10],"449":[1,1,16,2],"457":[1,1,21,10],"465":[1,1,21,10],"473":[1,1,21,10],"481":[6,16,9,33],"489":[5,11,12,28],"497":[4,6,15,23],"505":[1,1,16,2],"513":[1,1,16,2],"521":[1,1,21,10],"529":[1,1,21,10],"nBranches":6,"originalCodeFileName":"/mnt/c/Users/xiaohu/Desktop/project_of_string_constraints/benchmark-match/internetregLibtest-1166.js","instrumentedCodeFileName":"/mnt/c/Users/xiaohu/Desktop/project_of_string_constraints/benchmark-match/internetregLibtest-1166_jalangi_.js","code":"\nfunction fun(str) {\n   var regex = /^[\\w]+[-\\.\\w]*@[-\\w]+\\.[a-z]{2,6}(\\.[a-z]{2,6})?$/;\n   var match = str.match(regex);\n   if (match) {\n      if(match[1]!=null) {\n\t if(/[a-z]+/.test(match[1])) \n\t    console.log(\"1\");\n\t else\n\t    console.log(\"2\");\n      \t }\n      else\n           console.log(\"3\");\n   }\n   else\n     console.log(\"4\");\n}\n\nvar S$ = require(\"S$\");\nvar str = S$.symbol(\"str\", \"\");\n//var str = J$.readString();\nfun(str);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(441, '/mnt/c/Users/xiaohu/Desktop/project_of_string_constraints/benchmark-match/internetregLibtest-1166_jalangi_.js', '/mnt/c/Users/xiaohu/Desktop/project_of_string_constraints/benchmark-match/internetregLibtest-1166.js');
            function fun(str) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(281, arguments.callee, this, arguments);
                            arguments = J$.N(289, 'arguments', arguments, 4);
                            str = J$.N(297, 'str', str, 4);
                            J$.N(305, 'regex', regex, 0);
                            J$.N(313, 'match', match, 0);
                            var regex = J$.X1(25, J$.W(17, 'regex', J$.T(9, /^[\w]+[-\.\w]*@[-\w]+\.[a-z]{2,6}(\.[a-z]{2,6})?$/, 14, false), regex, 1));
                            var match = J$.X1(65, J$.W(57, 'match', J$.M(49, J$.R(33, 'str', str, 0), 'match', 0)(J$.R(41, 'regex', regex, 0)), match, 1));
                            if (J$.X1(497, J$.C(24, J$.R(73, 'match', match, 0)))) {
                                if (J$.X1(489, J$.C(16, J$.B(10, '!=', J$.G(97, J$.R(81, 'match', match, 0), J$.T(89, 1, 22, false), 4), J$.T(105, null, 25, false), 0)))) {
                                    if (J$.X1(481, J$.C(8, J$.M(145, J$.T(113, /[a-z]+/, 14, false), 'test', 0)(J$.G(137, J$.R(121, 'match', match, 0), J$.T(129, 1, 22, false), 4)))))
                                        J$.X1(177, J$.M(169, J$.R(153, 'console', console, 2), 'log', 0)(J$.T(161, "1", 21, false)));
                                    else
                                        J$.X1(209, J$.M(201, J$.R(185, 'console', console, 2), 'log', 0)(J$.T(193, "2", 21, false)));
                                } else
                                    J$.X1(241, J$.M(233, J$.R(217, 'console', console, 2), 'log', 0)(J$.T(225, "3", 21, false)));
                            } else
                                J$.X1(273, J$.M(265, J$.R(249, 'console', console, 2), 'log', 0)(J$.T(257, "4", 21, false)));
                        } catch (J$e) {
                            J$.Ex(505, J$e);
                        } finally {
                            if (J$.Fr(513))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(457, 'fun', J$.T(449, fun, 12, false, 281), 0);
            J$.N(465, 'S$', S$, 0);
            J$.N(473, 'str', str, 0);
            var S$ = J$.X1(353, J$.W(345, 'S$', J$.F(337, J$.R(321, 'require', require, 2), 0)(J$.T(329, "S$", 21, false)), S$, 3));
            var str = J$.X1(401, J$.W(393, 'str', J$.M(385, J$.R(361, 'S$', S$, 1), 'symbol', 0)(J$.T(369, "str", 21, false), J$.T(377, "", 21, false)), str, 3));
            J$.X1(433, J$.F(425, J$.R(409, 'fun', fun, 1), 0)(J$.R(417, 'str', str, 1)));
        } catch (J$e) {
            J$.Ex(521, J$e);
        } finally {
            if (J$.Sr(529)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
