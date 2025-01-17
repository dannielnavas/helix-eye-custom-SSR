const path = require("path");
// const HTMLWebpackPlugin = require('html-webpack-plugin'); // crea un archivo html
const dotenv = require("dotenv");

const nodeExternals = require("webpack-node-externals");

dotenv.config();

const mode = process.env.NODE_ENV ?? "production";
const isDev = process.env.NODE_ENV !== "production";
// const PORT = process.env.PORT;

module.exports = {
  name: "server",
  entry: "./src/server/index.ts",
  mode,
  target: "node",
  // devtool: isDev ? 'eval-source-map' : undefined,
  stats: "errors-only",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
                tsx: true,
                minify: !isDev,
              },
            },
          },
        },
        exclude: /node_modules/,
      },
      // {
      //   test: /\.ico$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].[ext]",
      //       },
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    // new HTMLWebpackPlugin({
    //   template: './src/public/index.html',
    // })
  ],
  externals: [nodeExternals()],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  // devServer: {
  //   hot: true,
  //   port: PORT,
  //   open: true,
  //   historyApiFallback: true,
  // },
};
