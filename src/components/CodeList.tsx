import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import TimerCircle from "./TimerCircle";

// 疑似乱数
const createFakeCodes = (): string => {
  const randomNum = Math.floor(Math.random() * 1000000);
  const organizedNum = ("000000" + randomNum).slice(-6);
  return organizedNum.slice(0, 3) + " " + organizedNum.slice(3, 6);
};

type props = {
  id: number;
};

// コードのリスト（子要素）
export const CodeList: FC<props> = React.memo(({ id }) => {
  const [fakeCode, setFakeCode] = useState<string>(createFakeCodes());
  const [count, setCount] = useState<number>(0);

  // 10sごとに擬似乱数生成
  useEffect(() => {
    const tick = () => {
      if (count < 145) {
        setCount(prev => prev + 0.5);
      } else {
        setCount(0);
        setFakeCode(createFakeCodes());
      }
    };
    const timer = setInterval(() => tick(), 10000 / (145 / 0.5));
    return () => clearInterval(timer);
  }, [count]);
  return (
    <>
      <SCodeLi>
        <p>Fake Code No.{id}</p>
        <SFlexBox>
          <SFakeCodes>{fakeCode}</SFakeCodes>
          <SPies>
            <svg viewBox='0 0 90 90' style={{ fill: "none" }}>
              <TimerCircle deg={count} />
            </svg>
          </SPies>
        </SFlexBox>
      </SCodeLi>
    </>
  );
});

const SFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SFakeCodes = styled.p`
  font-size: 42px;
  margin: 0;
`;
const SCodeLi = styled.li`
  border-top: 1px solid black;
  margin-bottom: 20px;
  &:first-of-type {
    border-top: none;
  }
`;
const SPies = styled.div`
  margin-right: 20px;
  display: inline-block;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  position: relative;
`;
