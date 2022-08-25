//import
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

//export
module.exports = {
  //parcel index.html 과 같이 parcel main.js 가 진입점 기준이 된다.
  //파일을 읽어들이기 시작하는 진입점 설정
  entry: "./js/main.js",

  //결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, "dist"),
    // filename: "main.js",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  //번들링 후 결과물의 처리방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }], //static/ 폴더 내의 파일들이 dist/ 내로 들어가게 하는 설정
    }),
  ],

  devServer: {
    host: "localhost",
  },
};
