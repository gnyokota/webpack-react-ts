const webpack = require("webpack");

module.exports = {
  mode: "production",
  //control de generation of source maps for our code
  //   Source maps solve this problem by providing a mapping between the original and the transformed source code.
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("ProdMode"),
    }),
  ],
};
