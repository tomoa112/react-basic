import React from "react";

// React では関数をコンポーネントに反映できる。アロー関数をかく。
const App = () => {
  // onClickButton 関数でボタン押された後のアクションを記載する。alert()など
  const onClickButton = () => alert();
  // css（スタイル）は、以下のように表記する。
  const contentStyle = {
    color: "blue",
    fontSize: "18px" // ふつうは font-size と書くが、Reactの場合キャメルケースで書く。
  };
  // return で返す内容にHTMLを書いていく。関数内にHTMLを書く書き方がJSX記法と呼ぶ。
  // return の内容は必ず一つのタグで囲う必要がある（例：<div></dev>内に複数のタグを入れるなど)
  return (
    // <div>で囲むとエラー回避のためだけにHTMLにDivタグがレンダリングされるので、
    //  React.Fragmentタグで囲むとこのFragmentタグはレンダリングされない。
    //  <></>で囲んでもReact.Fragmentタグと同様のタグとして扱われる。
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </React.Fragment>
    // ・Style は、style={{}} の外側｛｝はJavascriptの関数用の内側の｛｝がスタイル記載用。
    //		color: 'red' などプロパティ値は文字列として記載必要。
    // ・イベント（ボタンクリックなど）は、関数名を｛｝内に記載して押したら呼ばれるようにする。
  );
};
export default App; // Appファイル（コンポーネント）をほかのJSファイルで使えるようにする。
