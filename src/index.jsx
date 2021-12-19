import React from "react"; //React17まではJSXを使う時にお作法でつけたが、それ以降は任意。
import ReactDom from "react-dom"; // html にコンポーネントを反映するもの
import App from "./App"; // src配下の Appファイルから関数を読み込む。

// html に反映するために、render関数を使う。
ReactDom.render(<App />, document.getElementById("root"));
