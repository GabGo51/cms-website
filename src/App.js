import Footer from "./components/Footer";
import Header from "./components/Header";
import styled from "styled-components"
import Intro from "./components/Intro";
import Location from "./components/Location";
import Booking from "./components/Booking";
import Service from "./components/Service";
import Form from "./components/Form";


function App() {
  return (
    <Container>
      <Header/>
      <Intro/>
      <Service/>
      <Location/>
      <Booking/>
      <Form/>
      <Footer/>
    </Container>
  );
}

const Container = styled.div`

` 

export default App;
