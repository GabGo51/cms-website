import Footer from "./components/Footer";
import Header from "./components/Header";
import styled from "styled-components";
import Intro from "./components/Intro";
import Location from "./components/Location";

import Service from "./components/Service";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  return (
    <Container>
      <Header />
      <Intro />
      <Service />
      <Team />
      <Location />
      <Form />
      <Footer />
    </Container>
  );
}

const Container = styled.div``;

export default App;
