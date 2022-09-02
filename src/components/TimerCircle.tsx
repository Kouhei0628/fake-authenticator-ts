import styled from "@emotion/styled";
import { useContext } from "react";
import { CountContext } from "../App";

// 10sかけてsvgのストロークが145に達するようにするローダー
const TimerCircle: React.FC = () => {
  const deg = useContext(CountContext);
  return (
    <SAfterPie
      cx='50%'
      cy='50%'
      r='22.5'
      style={{ strokeDasharray: `${deg} 145` }}
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
