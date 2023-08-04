"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.arraysEqual = void 0;
function arraysEqual(a, b) {
    if (a === b)
        return true;
    if (a == null || b == null)
        return false;
    if (a.length !== b.length)
        return false;
    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i])
            return false;
    }
    return true;
}
exports.arraysEqual = arraysEqual;
exports.test = "This is a test";
//# sourceMappingURL=utils.js.map