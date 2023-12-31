import Footer from "./components/Footer";
import Header from "./components/Header";
import styled from "styled-components";
import Intro from "./components/Intro";
import Location from "./components/Location";
import Service from "./components/Service";
import Form from "./components/Form";
import Team from "./components/Team";
import Clinique from "./components/Clinique";

//global components regrouping the whole website

function App() {
  return (
    <Container>
      <Header />
      <Intro  />
      <Service id="service" />
      <Team id="team" />
      <Form id="booking" />
      <Location id="location" />
      <Footer />
    </Container>
  );
}

const Container = styled.main`
width: 100vw;
`;

export default App;
