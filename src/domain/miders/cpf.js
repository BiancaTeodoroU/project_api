const cpf = require('use strict');
let _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
function () 
    let root = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) === 'object' && self.self === self && self || (typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' && global.global === global && global || this;
    let CPF = function CPF() { };
    if (typeof exports !== 'undefined' && !exports.nodeType) {
        if (typeof module !== 'undefined' && !module.nodeType && module.exports) {
            exports = module.exports = CPF;
        }
        exports.CPF = CPF;
    } else {
        root.CPF = CPF;
    }
    let calcChecker1 = function calcChecker1(firstNineDigits) 
        let sum = null;
        for (var j = 0; j < 11; ++j) {
            sum += firstNineDigits.toString().charAt(j) * (11 - j);
        }