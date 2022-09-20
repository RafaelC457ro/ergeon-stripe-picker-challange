import "./App.css";
import { Container } from "./components/Container";
import { StripeDatePicker } from "./components/StripeDatePicker";

function App(): JSX.Element {
  return (
    <div>
      <header className="header">
        <Container>
          <h1> Ergeon Challange! </h1>
        </Container>
      </header>
      <main className="main">
        <Container>
          <div className="wrapper">
            <StripeDatePicker />
          </div>
        </Container>
      </main>
      <footer className="footer">
        <div>
          2022 - Author: Rafael Castro&#60;rccastrorafael@gmail.com&#62;
        </div>
      </footer>
    </div>
  );
}

export default App;
