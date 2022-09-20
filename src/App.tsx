import styled from "styled-components";
import { Container } from "./components/Container";
import { StripeDatePicker } from "./components/StripeDatePicker";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 15px;
  height: 60px;
  background-color: #0970ce;
  color: #fff;
`;

const Footer = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  height: calc(100vh - 100px);
`;

function App(): JSX.Element {
  return (
    <div>
      <Header>
        <Container>
          <h1> Ergeon Challange! </h1>
        </Container>
      </Header>
      <Main>
        <Container>
          <StripeDatePicker />
        </Container>
      </Main>
      <Footer>
        <div>Author: Rafael Castro&#60;rccastrorafael@gmail.com&#62; 2022</div>
      </Footer>
    </div>
  );
}

export default App;
