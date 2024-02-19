(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.createPromise = void 0;
    var createPromise = function (_) {
        var resolve;
        var reject;
        var promise = new Promise(function (resolveFn, rejectFn) {
            resolve = resolveFn;
            reject = rejectFn;
        });
        return {
            promise: promise,
            resolve: resolve,
            reject: reject
        };
    };
    exports.createPromise = createPromise;
    exports["default"] = createPromise;
});
