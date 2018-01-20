var path = require("path")
var webpack = require("webpack")

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "[name].css",
  disable: process.env.NODE_ENV === "development"
});

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
    },
    {

      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }],
        fallback: "style-loader"
      })
    }]
  },
  plugins: [
    extractSass
  ],
  resolve: {
    alias: {},
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },  
  performance: {
    hints: false
  },
  devtool: 'inline-source-map',
  watch: true
}
