var path = require("path")
var webpack = require("webpack")

module.exports = {
  entry: "./app/main.ts",
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: "/dist/",
    filename: "build.js"
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/
    }]
  },
  resolve: {
    alias: { },
    extensions: [ ".tsx", ".ts", ".js" ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: 'inline-source-map',
  watch: true
}
