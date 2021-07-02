const webpack = require("webpack");

module.exports = {
  mode: "development",
  //control de generation of source maps for our code
  //   Source maps solve this problem by providing a mapping between the original and the transformed source code.
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("DevMode"),
    }),
  ],
};