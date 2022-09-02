import styled from "@emotion/styled";

type Props = {
  deg: number;
};
// 10sかけてsvgのストロークが145に達するようにするローダー
const TimerCircle: React.FC<Props> = ({ deg }) => {
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
