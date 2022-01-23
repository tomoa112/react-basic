// １        ★useState を使うときはここを指定
import React, { useState } from "react";
import ColorfulMessage from "./Components/ColorfulMessage";

const App = () => {
  // ５★numの状態変更のsetNum に num+1 を入れることで、動的に＋１の数値を入れられる。
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  // ２★変数に状態を持たせる。num が変数名、setNum がnum の状態を変更する関数名。
  // ★さらに分割代入で useState. と参照しなくていいように指定する。
  // ★useState()に値を持たせることで、状態の初期値を持たせられる。
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue" message="お元気ですか？" />
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      {/* ４★num はJavaScriptにするため、｛｝で囲む。ここで表示できる */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      {/* ３★num はJavaScriptにするため、｛｝で囲む。ここで表示できる */}
      <p>{num}</p>
    </>
  );
};
export default App;
