//import
const path = require("path");

//export
module.exports = {
  //parcel index.html 과 같이 parcel main.js 가 진입점 기준이 된다.
  //파일을 읽어들이기 시작하는 진입점 설정
  entry: "./js/main.js",

  //결과물(번들)을 반환하는 설정
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
    clean: true
  },
};
