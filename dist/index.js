"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var snippets_1 = __importDefault(require("./snippets"));
var snippets = {};
var PixelCode = {
    pixelCode: function (args) {
        snippets = snippets_1.default.tags(args);
        var script = function (s) {
            var script = document.createElement("script");
            script.innerHTML = s || snippets.script;
            return script;
        };
        var noScript = function () {
            var noscript = document.createElement("noscript");
            noscript.innerHTML = snippets.noscript;
            return noscript;
        };
        return { script: script, noScript: noScript };
    },
    initialize: function (_a) {
        var id = _a.id, advancedMatching = _a.advancedMatching, args = _a.args;
        var pixelCode = this.pixelCode({ id: id, advancedMatching: advancedMatching, args: args });
        document.head.insertBefore(pixelCode.script(), document.head.childNodes[0]);
        document.head.insertBefore(pixelCode.noScript(), document.head.childNodes[0]);
    },
    pageView: function () {
        var pixelCode = this.pixelCode({});
        document.head.insertBefore(pixelCode.script(snippets.pageView), document.head.childNodes[0]);
    },
    track: function (_a) {
        var title = _a.title, data = _a.data;
        var pixelCode = this.pixelCode({ title: title, data: data });
        document.head.insertBefore(pixelCode.script(snippets.track), document.head.childNodes[0]);
    },
    fbq: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var pixelCode = this.pixelCode({ args: args });
        document.head.insertBefore(pixelCode.script(snippets.fbq), document.head.childNodes[0]);
    }
};
exports.default = PixelCode;
//# sourceMappingURL=index.js.map