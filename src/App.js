import React from "react";
import ColorfulMessage from "./Components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* ★HTMLのコメントを JavaScript として｛｝で囲む。ColorfulMessageコンポーネントへprops の color と messageを指定する。 */}
      <ColorfulMessage color="blue" message="お元気ですか？" />
      {/* ★コンポーネントもタグのように文字列を囲んでその文字列を引数にできる */}
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
export default App;
