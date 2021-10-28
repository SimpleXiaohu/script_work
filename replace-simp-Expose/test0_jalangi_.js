J$.iids = {"8":[11,13,11,31],"9":[3,19,3,82],"10":[8,9,8,15],"16":[8,9,8,15],"17":[3,19,3,82],"25":[3,19,3,82],"33":[4,25,4,70],"41":[4,25,4,70],"49":[4,25,4,70],"57":[5,26,5,59],"65":[5,26,5,59],"73":[5,26,5,59],"81":[6,15,6,20],"89":[6,29,6,43],"97":[6,45,6,47],"105":[6,15,6,48],"107":[6,15,6,28],"113":[6,15,6,48],"121":[6,15,6,48],"129":[7,17,7,20],"137":[7,27,7,34],"145":[7,17,7,35],"147":[7,17,7,26],"153":[7,17,7,35],"161":[7,17,7,35],"169":[8,10,8,15],"177":[9,9,9,16],"185":[9,21,9,22],"193":[9,9,9,23],"195":[9,9,9,20],"201":[9,9,9,24],"209":[10,17,10,20],"217":[10,27,10,40],"225":[10,17,10,41],"227":[10,17,10,26],"233":[10,17,10,41],"241":[10,9,10,42],"249":[11,13,11,16],"257":[11,22,11,27],"265":[11,28,11,29],"273":[11,22,11,30],"281":[11,13,11,31],"283":[11,13,11,21],"289":[11,33,11,40],"297":[11,45,11,46],"305":[11,33,11,47],"307":[11,33,11,44],"313":[11,33,11,48],"321":[1,1,13,2],"329":[1,1,13,2],"337":[1,1,13,2],"345":[1,1,13,2],"353":[1,1,13,2],"361":[1,1,13,2],"369":[1,1,13,2],"377":[1,1,13,2],"385":[16,10,16,17],"393":[16,18,16,22],"401":[16,10,16,23],"409":[16,10,16,23],"417":[16,10,16,23],"425":[18,11,18,13],"433":[18,21,18,26],"441":[18,28,18,30],"449":[18,11,18,31],"451":[18,11,18,20],"457":[18,11,18,31],"465":[18,11,18,31],"473":[19,1,19,4],"481":[19,5,19,8],"489":[19,1,19,9],"497":[19,1,19,10],"505":[1,1,19,10],"513":[1,1,13,2],"521":[1,1,19,10],"529":[1,1,19,10],"537":[1,1,19,10],"545":[11,9,11,48],"553":[8,5,12,6],"561":[1,1,13,2],"569":[1,1,13,2],"577":[1,1,19,10],"585":[1,1,19,10],"nBranches":4,"originalCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test0.js","instrumentedCodeFileName":"/home/popl2022/compare_aratha_expose/replace-simp-Expose/test0_jalangi_.js","code":"\nfunction fun(value)\n{\n    var FN_ARGS = /^(?:async\\s+)?(?:function)?\\s*\\w*\\s*\\(\\s*([^)]+)\\s*\\)(?:\\s*{)/;\n    var ARROW_FN_ARGS = /^(?:async\\s+)?\\(?\\s*([^)=]+)\\s*\\)?(?:\\s*=>)/;\n    var STRIP_COMMENTS = /((\\/\\/.*$)|(\\/\\*[\\s\\S]*?\\*\\/))/g;\n    const src = value.replace(STRIP_COMMENTS, '');\n    let match = src.match(FN_ARGS);\n    if (!match) {\n        console.log(1);\n        match = src.match(ARROW_FN_ARGS);\n\tif(/=/.test(match[0])) console.log(2);\n    }\n}\n\n\nvar S$ = require(\"S$\");\n\nvar arg = S$.symbol(\"arg\", \"\");\nfun(arg);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(505, '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test0_jalangi_.js', '/home/popl2022/compare_aratha_expose/replace-simp-Expose/test0.js');
            function fun(value) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(321, arguments.callee, this, arguments);
                            arguments = J$.N(329, 'arguments', arguments, 4);
                            value = J$.N(337, 'value', value, 4);
                            J$.N(345, 'FN_ARGS', FN_ARGS, 0);
                            J$.N(353, 'ARROW_FN_ARGS', ARROW_FN_ARGS, 0);
                            J$.N(361, 'STRIP_COMMENTS', STRIP_COMMENTS, 0);
                            J$.N(369, 'src', src, 0);
                            J$.N(377, 'match', match, 0);
                            var FN_ARGS = J$.X1(25, J$.W(17, 'FN_ARGS', J$.T(9, /^(?:async\s+)?(?:function)?\s*\w*\s*\(\s*([^)]+)\s*\)(?:\s*{)/, 14, false), FN_ARGS, 1));
                            var ARROW_FN_ARGS = J$.X1(49, J$.W(41, 'ARROW_FN_ARGS', J$.T(33, /^(?:async\s+)?\(?\s*([^)=]+)\s*\)?(?:\s*=>)/, 14, false), ARROW_FN_ARGS, 1));
                            var STRIP_COMMENTS = J$.X1(73, J$.W(65, 'STRIP_COMMENTS', J$.T(57, /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/g, 14, false), STRIP_COMMENTS, 1));
                            var src = J$.X1(121, J$.W(113, 'src', J$.M(105, J$.R(81, 'value', value, 0), 'replace', 0)(J$.R(89, 'STRIP_COMMENTS', STRIP_COMMENTS, 0), J$.T(97, '', 21, false)), src, 1));
                            var match = J$.X1(161, J$.W(153, 'match', J$.M(145, J$.R(129, 'src', src, 0), 'match', 0)(J$.R(137, 'FN_ARGS', FN_ARGS, 0)), match, 1));
                            if (J$.X1(553, J$.C(16, J$.U(10, '!', J$.R(169, 'match', match, 0))))) {
                                J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, 1, 22, false)));
                                J$.X1(241, match = J$.W(233, 'match', J$.M(225, J$.R(209, 'src', src, 0), 'match', 0)(J$.R(217, 'ARROW_FN_ARGS', ARROW_FN_ARGS, 0)), match, 0));
                                if (J$.X1(545, J$.C(8, J$.M(281, J$.T(249, /=/, 14, false), 'test', 0)(J$.G(273, J$.R(257, 'match', match, 0), J$.T(265, 0, 22, false), 4)))))
                                    J$.X1(313, J$.M(305, J$.R(289, 'console', console, 2), 'log', 0)(J$.T(297, 2, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(561, J$e);
                        } finally {
                            if (J$.Fr(569))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fun = J$.N(521, 'fun', J$.T(513, fun, 12, false, 321), 0);
            J$.N(529, 'S$', S$, 0);
            J$.N(537, 'arg', arg, 0);
            var S$ = J$.X1(417, J$.W(409, 'S$', J$.F(401, J$.R(385, 'require', require, 2), 0)(J$.T(393, "S$", 21, false)), S$, 3));
            var arg = J$.X1(465, J$.W(457, 'arg', J$.M(449, J$.R(425, 'S$', S$, 1), 'symbol', 0)(J$.T(433, "arg", 21, false), J$.T(441, "", 21, false)), arg, 3));
            J$.X1(497, J$.F(489, J$.R(473, 'fun', fun, 1), 0)(J$.R(481, 'arg', arg, 1)));
        } catch (J$e) {
            J$.Ex(577, J$e);
        } finally {
            if (J$.Sr(585)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
