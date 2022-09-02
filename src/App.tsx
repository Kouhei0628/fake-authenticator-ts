import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import { CodeList } from "./components/CodeList";

// 疑似乱数
// const createFakeCodes = (): string => {
//   const randomNum = Math.floor(Math.random() * 1000000);
//   const organizedNum = ("000000" + randomNum).slice(-6);
//   return organizedNum.slice(0, 3) + " " + organizedNum.slice(3, 6);
// };

export default function App() {
  // const [fakeCode, setFakeCode] = useState<string>(createFakeCodes());
  // // 10sごとに擬似乱数生成
  // const changeFakeCode = () => setFakeCode(createFakeCodes());
  // useEffect(() => {
  //   const timer = setInterval(() => changeFakeCode, 10000);
  //   return () => clearInterval(timer);
  // });
  const initItems: JSX.Element[] = [
    <CodeList id={1} key={1} />,
    <CodeList id={2} key={2} />,
    <CodeList id={3} key={3} />,
  ];
  const [codeList, setCodeList] = useState<JSX.Element[]>(initItems);
  const onClickPush = (): void => {
    const newCodeList = [
      ...codeList,
      <CodeList id={codeList.length + 1} key={codeList.length + 1} />,
    ];
    setCodeList(newCodeList);
  };

  const onClickPop = (): void => {
    const newCodeList = codeList.pop();
  };

  return (
    <>
      <SMainDiv>
        <SMainTitle>Fake Authenticator</SMainTitle>
        <SBtnWrap>
          <button
            onClick={() => onClickPop()}
            disabled={codeList.length ? false : true}>
            -
          </button>
          <button onClick={() => onClickPush()}>+</button>
        </SBtnWrap>
        {/* ここにリストを追加 */}
        <SCodeUl>{codeList}</SCodeUl>
      </SMainDiv>
    </>
  );
}

// style
const SMainDiv = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  width: 85%;
  margin: 0 auto;
`;
const SMainTitle = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  width: 100%;
  font-size: 34px;
`;
const SBtnWrap = styled.div`
  width: 100%;
  text-align: center;
`;
const SCodeUl = styled.ul`
  list-style: none;
  padding: 0;
`;
