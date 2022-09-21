import React from "react";
import { Moment } from "moment";
import "./App.css";
import { Container } from "./components/Container";
import { StripeDatePicker } from "./components/StripeDatePicker";

function App(): JSX.Element {
  const [date, setDate] = React.useState<Moment | null>(null);

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
            <StripeDatePicker
              name="date-picker"
              onSelectedDay={(day: Moment) => {
                setDate(day);
              }}
            />
          </div>
          <p>The selected date is: {date?.format("YYYY/MM/DD ddd")}</p>
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
