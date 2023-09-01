import Footer from "./components/Footer";
import Header from "./components/Header";
import styled from "styled-components"
import Intro from "./components/Intro";
import Location from "./components/Location";
import Booking from "./components/Booking";
function App() {
  return (
    <Container>
      <Header/>
      <Intro/>
      <Location/>
      <Booking/>
      <Footer/>
    </Container>
  );
}

const Container = styled.div`

` 

export default App;
