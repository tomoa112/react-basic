/* eslint react-hooks/exhaustive-deps: off */
// useEffect を追加
import React, { useState, useEffect } from "react";
import ColorfulMessage from "./Components/ColorfulMessage";
const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // ★useEffect の第2引数に [] の空の配列を指定すると、最初の画面表示の時だけ
  //  useEffect内が実行される。そのため、初期値を最初の1回だけ設定したい場合には、ここに設定する。
  //useEffect(() => {
  //  console.log("useEffect!!");
  //}, []);

  // ★useEffect の中に num を入れることで、num の状態が変化した時だけ、useEffect内の文
  // （num）の状態によって、変化させたい構文を入れる）が実行される。
  // この構文の場合、第2引数の num に波線の注意書きが表示され、Codesandboxの eslint が以下の注意を出し、useEffect内で使用しているもう一つの状態変数 faceShowFlag も第2引数に設定すべきでは？と怒られる。ただ、今回は、faceShowFlagと分離したいので、指定する必要なし。正常に実行も可能。
  // React Hook useEffect has a missing dependency: 'faceShowFlag'. Either include it or remove the dependency array. (react-hooks/exhaustive-deps)eslint
  useEffect(() => {
    console.log("useEffect!!");
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue" message="お元気ですか？" />
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickSwitchShowFlag}>On/Off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ﾟДﾟ)</p>}
    </>
  );
};
export default App;
