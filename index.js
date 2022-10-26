"use strict";
exports.__esModule = true;
var path_1 = require("path");
var fs_1 = require("fs");
var mjml_core_1 = require("mjml-core");
var examples = ['example-1.mjml', 'example-2.mjml', 'example-3.mjml'];
var results = [];
var errors = [];
examples.forEach(function (filename) {
    var src = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, filename), 'utf8');
    try {
        var html = (0, mjml_core_1["default"])(src);
        results.push(html);
    }
    catch (err) {
        errors.push(err);
        console.error(err);
    }
});
console.log("".concat(results.length, " examples succeeded."));
console.log("".concat(errors.length, " examples failed."));
