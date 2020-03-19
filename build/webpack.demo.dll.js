const path = require("path");
const DllPlugin = require("webpack/lib/DllPlugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    name: "production",
    entry: {
        framework: [
            "vuex",
            "vue-router",
            "vue", 
            ]
    },
    output: {
        filename: "[name].dll.js",
        path: path.resolve(__dirname, "../sites/demo/dll"),
        library: "_dll_[name]"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new DllPlugin({
            name: "_dll_[name]",
            path: path.resolve(__dirname, "../sites/demo/dll", "[name].manifest.json")
        })

    ]
};