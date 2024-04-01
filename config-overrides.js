const path = require("path");
const {
    override,
    addBabelPlugins,
    babelInclude,
    addWebpackResolve,
} = require("customize-cra");

module.exports = override(
    ...addBabelPlugins([
        "@babel/plugin-proposal-class-properties",
        { loose: true },
    ]),
    addWebpackResolve({
        alias: {
            "react-native": "react-native-web",
        },
    })
);
