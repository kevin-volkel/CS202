"use strict";
var num = 5;
var user = 'test';
var add = function (n1, n2) {
    console.log(n1 + n2);
    return "The sum is ".concat(n1 + n2);
};
var addAndHandle = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(String(result));
};
addAndHandle(2, 67, function (result) {
    console.log("".concat(result, ": Nice"));
});
var concatAndHandle = function (str1, str2, cb) {
    var result = "".concat(str1, " ").concat(str2);
    cb(result);
};
concatAndHandle('nice', 'day', function (result) {
    console.log(result);
});
var concatAll = function (cb) {
    var strings = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        strings[_i - 1] = arguments[_i];
    }
    var result = strings.join(' ');
    cb(result);
};
concatAll(function (result) {
    console.log(result);
}, 'hello', 'my', 'name', 'is', 'Kevin');
//# sourceMappingURL=01-basics.js.map