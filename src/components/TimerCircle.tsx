import styled from "@emotion/styled";
import { useEffect, useState } from "react";

// 10sかけてsvgのストロークが145に達するようにするローダー
const TimerCircle: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const tick = () => {
      if (count < 145) {
        setCount(prev => prev + 0.5);
      } else {
        setCount(0);
      }
    };
    const timer = setInterval(() => tick, 10000 / (145 / 0.5));
    return () => clearInterval(timer);
  }, [count]);
  return (
    <SAfterPie
      cx='50%'
      cy='50%'
      r='22.5'
      style={{ strokeDasharray: `${count} 145` }}
    />
  );
};
export default TimerCircle;

const SAfterPie = styled.circle`
  transform: rotate(-90deg);
  transform-origin: center;
  stroke: #ff4564;
  stroke-width: 45;
  stroke-dasharray: 0 145;
`;
