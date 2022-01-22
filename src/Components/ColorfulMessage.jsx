import React from "react";

const ColorfulMessage = (props) => {
  // 分割代入を使って、 props の修飾子をつけずに済むようにする。
  const { color, children } = props;
  const contentStyle = {
    // props から color を取得する。分割代入で指定されているので props で修飾しないでよい。
    color: color,
    fontSize: "18px"
  };
  // props.message は、JavaScriptとして取得する必要があるので、｛｝で囲む。
  return (
    <>
      <p style={contentStyle}>{props.message}</p>
      {/* ★コンポーネントタグで囲んだ文字列をchildrenで参照できる */}
      <p style={contentStyle}>{children}</p>
    </>
  );
};
export default ColorfulMessage;
