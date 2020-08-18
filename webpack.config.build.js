const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./index.ts",
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          ecma: 6,
          keep_fnames: true,
          keep_classnames: true
        }
      })
    ]
  },
  output: {
    filename: "index.js",
    path: path.join(__dirname, "./dist"),
    library: "ABUtils",
    libraryTarget: "umd",
    globalObject: "this",
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts"]
  },
  node: {
    fs: "empty"
  },
  performance: {
    hints: false
  }
};
