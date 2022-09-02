import styled from "@emotion/styled";
import Action from "./components/Action";

export default function App() {
  return (
    <>
      <SMainDiv>
        <SMainTitle>Fake Authenticator</SMainTitle>
        <Action />
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
