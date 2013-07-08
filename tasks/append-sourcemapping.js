module.exports = function (grunt) {

    "use strict";

    var fs = require("fs"),
        async = require("async");

    grunt.registerMultiTask("appendSourcemapping", "Append JavaScript sourcemapping URL comments to files", function () {
        var done = this.async(),
            files = this.data.files,
            options = this.options(),
            sourceMappingText = options.sourceMappingText || '@ sourceMappingURL=';
        async.forEach(Object.keys(files), function (file, callback) {
            fs.appendFile(file, "/*\n//" + sourceMappingText + files[file] + "\n*/", callback);
        }.bind(this), done);
    });

};