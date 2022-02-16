"use strict";
var Unknown;
Unknown = "test";
var add2 = function (n1) {
    console.log(n1 + n1);
};
if (typeof (Unknown) === 'number') {
    add2(Unknown);
}
else {
    console.log(Unknown);
}
var combine = function (input1, input2, convert) {
    var result;
    if (convert == 'as-num') {
        result = +input1 + +input2;
        return result;
    }
    if (convert == 'as-str') {
        result = '' + input1 + input2;
        return result;
    }
    else {
        return "not a valid conversion";
    }
};
var Title;
(function (Title) {
    Title[Title["NEW"] = 0] = "NEW";
    Title[Title["EXPERIENCED"] = 1] = "EXPERIENCED";
    Title[Title["VET"] = 2] = "VET";
})(Title || (Title = {}));
function errorThrow(message, code) {
    throw new Error(message + ' ' + code);
}
//# sourceMappingURL=03-union-alias.js.map