import "./App.css";
import styled from "@emotion/styled";
import { createContext, useEffect, useState } from "react";
import Action from "./components/Action";

export const CountContext = createContext<number>(0);

export default function App() {
  const [count, setCount] = useState<number>(0);
  // 円グラフの進捗管理
  useEffect(() => {
    const tick = () => {
      if (count < 145) {
        setCount(prev => prev + 0.5);
      } else {
        setCount(0);
      }
    };
    const timer = setInterval(() => tick(), 10000 / (145 / 0.5));
    return () => clearInterval(timer);
  }, [count]);
  return (
    <CountContext.Provider value={count}>
      <SMainDiv>
        <SMainTitle>Fake Authenticator</SMainTitle>
        <Action />
      </SMainDiv>
    </CountContext.Provider>
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
