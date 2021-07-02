const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { isBundle } = require("typescript");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        // asset/resource emits a separate file and exports the URL. Previously achievable by using file-loader
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        // asset/inline exports a data URI of the asset. Previously achievable by using url-loader.
        type: "asset/inline",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },
  mode: "development",
  plugins: [
    //   it injects the bundle.js file into the index.html file, so I don't need a acript tag in my index.html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
  ],
};
