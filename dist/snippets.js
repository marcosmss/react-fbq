"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Snippets = {
    tags: function (_a) {
        var id = _a.id, advancedMatching = _a.advancedMatching, title = _a.title, data = _a.data, args = _a.args;
        var script = "!(function(f, b, e, v, n, t, s) {\n        if (f.fbq) return;\n        n = f.fbq = function() {\n          n.callMethod\n            ? n.callMethod.apply(n, arguments)\n            : n.queue.push(arguments);\n        };\n        if (!f._fbq) f._fbq = n;\n        n.push = n;\n        n.loaded = !0;\n        n.version = \"2.0\";\n        n.queue = [];\n        t = b.createElement(e);\n        t.async = !0;\n        t.src = v;\n        s = b.getElementsByTagName(e)[0];\n        s.parentNode.insertBefore(t, s);\n      })(\n        window,\n        document,\n        \"script\",\n        \"https://connect.facebook.net/en_US/fbevents.js\"\n      );\n      fbq(\"init\", \"".concat(id, "\" ").concat(advancedMatching ? ",".concat(advancedMatching) : "", ");");
        var noscript = "<img height=\"1\" width=\"1\" style=\"display:none\"\n      src=\"https://www.facebook.com/tr?id=".concat(id, "&ev=PageView&noscript=1\" />");
        var pageView = "fbq(\"track\", \"PageView\");";
        var track = "fbq(\"track\", \"".concat(title, "\", ").concat(JSON.stringify(data), ");");
        var argsString = args ? args.map(function (arg) { return JSON.stringify(arg); }).join(',') : '';
        var fbq = "fbq(".concat(argsString, ");");
        return {
            script: script,
            noscript: noscript,
            pageView: pageView,
            track: track,
            fbq: fbq,
        };
    },
};
exports.default = Snippets;
//# sourceMappingURL=snippets.js.map