import styled from "@emotion/styled";
import React, { useState } from "react";
import { CodeList } from "./CodeList";

const Action: React.FC = () => {
  const initItems: JSX.Element[] = [
    <CodeList id={1} key={1} />,
    <CodeList id={2} key={2} />,
    <CodeList id={3} key={3} />,
  ];
  const [codeList, setCodeList] = useState<JSX.Element[]>(initItems);
  const onClickPush = (): void => {
    setCodeList([
      ...codeList,
      <CodeList id={codeList.length + 1} key={codeList.length + 1} />,
    ]);
  };

  const onClickPop = (): void => {
    setCodeList(codeList.slice(0, codeList.length - 1));
  };

  return (
    <>
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
    </>
  );
};
export default Action;

const SBtnWrap = styled.div`
  width: 100%;
  text-align: center;
`;
const SCodeUl = styled.ul`
  list-style: none;
  padding: 0;
`;
