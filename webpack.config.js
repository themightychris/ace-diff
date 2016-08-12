var path = require("path");
var webpack = require("webpack");

module.exports = {

    entry: {
        main: "./src/brace-diff.js"
    },
    output: {
        path: path.join(__dirname, "demos/"),
        filename: "brace-diff.js",

        library: "AceDiff",
        libraryTarget: "var"
    }
};
