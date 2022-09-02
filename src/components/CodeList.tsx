import React, { FC, useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import TimerCircle from "./TimerCircle";
import { CountContext } from "../App";

// 疑似乱数
const createFakeCodes = (): string => {
  // 少し堅牢な擬似乱数生成
  const random = Array.from(
    crypto.getRandomValues(new Uint32Array(1))
  )[0].toString();
  // 強引に6桁の数字にする
  return random.slice(0, 3) + " " + random.slice(3, 6);
};

type props = {
  id: number;
  className?: string;
};

// liタグ
export const CodeList: FC<props> = React.memo(({ id, className }) => {
  const [fakeCode, setFakeCode] = useState<string>(createFakeCodes());
  const count = useContext(CountContext);

  useEffect(() => {
    if (count === 145) setFakeCode(createFakeCodes());
  }, [count]);
  return (
    <SCodeLi className={className}>
      <p>Fake Code No.{id}</p>
      <SFlexBox>
        <SFakeCodes>{fakeCode}</SFakeCodes>
        <SPies>
          <svg viewBox='0 0 90 90' style={{ fill: "none" }}>
            <TimerCircle />
          </svg>
        </SPies>
      </SFlexBox>
    </SCodeLi>
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
  border-top: 1px solid white;
  margin-bottom: 20px;
  &.visible {
    animation: slideIn 0.3s linear forwards;
    @keyframes slideIn {
      0% {
        opacity: 0;
        clip-path: inset(0 0 100% 0);
      }
      70% {
        opacity: 1;
        clip-path: inset(0 0 0 0);
        color: white;
        background-color: #000;
      }
      86% {
        color: #000;
        background-color: #fff;
      }
      100% {
        color: white;
        background-color: #000;
      }
    }
  }
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
