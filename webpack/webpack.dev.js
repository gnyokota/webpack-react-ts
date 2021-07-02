const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
  },
  //control de generation of source maps for our code
  //   Source maps solve this problem by providing a mapping between the original and the transformed source code.
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("DevMode"),
    }),
    //This will avoid to reload all the page, just the parts that were modified
    new ReactRefreshWebpackPlugin(),
  ],
};
