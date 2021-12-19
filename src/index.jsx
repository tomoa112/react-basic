import React from "react"; //React17まではJSXを使う時にお作法でつけたが、それ以降は任意。
import ReactDom from "react-dom"; // html にコンポーネントを反映するもの
//import App from "./App"; // src配下の Appファイルから関数を読み込む。

// React では関数をコンポーネントに反映できる。アロー関数をかく。
const App = () => {
  const onClickButton = () => alert();

  // return で返す内容にHTMLを書いていく。関数内にHTMLを書く書き方がJSX記法と呼ぶ。
  // return の内容は必ず一つのタグで囲う必要がある（例：<div></dev>内に複数のタグを入れるなど)
  return (
    // <div>で囲むとエラー回避のためだけにHTMLにDivタグがレンダリングされるので、
    //  React.Fragmentタグで囲むとこのFragmentタグはレンダリングされない。
    //  <></>で囲んでもReact.Fragmentタグと同様のタグとして扱われる。
    <>
      <h1>こんにちは</h1>
      <p>お元気ですか？</p>
      <button onClick={onClickButton}></button>
    </>
  );
};

// html に反映するために、render関数を使う。
ReactDom.render(<App />, document.getElementById("root"));
