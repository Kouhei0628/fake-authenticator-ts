import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import { CodeList } from "./components/CodeList";

// 10sかけてsvgのストロークが145に達するようにするローダー
export const Timer: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const tick = () => {
    if (count < 145) {
      setCount(prev => prev + 0.5);
    } else {
      setCount(0);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 10000 / (145 / 0.5));
    return () => clearInterval(timer);
  });
  return (
    <SAfterPie
      cx='50%'
      cy='50%'
      r='22.5'
      style={{ strokeDasharray: `${count} 145` }}
    />
  );
};

// 10sごとに擬似乱数生成
export const FakeCode10s = () => {
  const [fakeCode, setFakeCode] = useState<string>(createFakeCodes());

  const changeFakeCode = () => {
    setFakeCode(createFakeCodes());
  };

  useEffect(() => {
    const timer = setInterval(() => changeFakeCode(), 10000);
    return () => clearInterval(timer);
  });

  return fakeCode;
};

// 疑似乱数
const createFakeCodes = () => {
  const randomNum = Math.floor(Math.random() * 1000000);
  const organizedNum = ("0" + randomNum).slice(-6);
  return organizedNum.slice(0, 3) + " " + organizedNum.slice(3, 6);
};

export default function App() {
  const number: React.MutableRefObject<number[]> = useRef([1, 2, 3]);
  const initList: JSX.Element[] = number.current.map(num => (
    <CodeList key={num} id={num} />
  ));
  let [codeElementList, setCodeElementList] = useState(initList);
  codeElementList = initList;

  const onClickPush = (): void => {
    const newNumbers = number.current.push(number.current.length + 1);
    const newCodeElementList = codeElementList.push(
      <CodeList key={newNumbers} id={newNumbers} />
    );
    setCodeElementList(newCodeElementList);
  };

  const onClickPop = (): void => {
    number.current.pop();
    const newCodeElementList = codeElementList.pop();
    setCodeElementList(newCodeElementList);
  };

  return (
    <>
      <SMainDiv>
        <SMainTitle>Fake Authenticator</SMainTitle>
        <SBtnWrap>
          <button
            onClick={() => onClickPop()}
            disabled={number.current.length ? false : true}>
            -
          </button>
          <button onClick={() => onClickPush()}>+</button>
        </SBtnWrap>
        {/* ここにリストを追加 */}
        <SCodeUl>{codeElementList}</SCodeUl>
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

const SAfterPie = styled.circle`
  transform: rotate(-90deg);
  transform-origin: center;
  stroke: #ff4564;
  stroke-width: 45;
  stroke-dasharray: 0 145;
`;
