import Footer from "./components/Footer";
import Header from "./components/Header";
import styled from "styled-components"
import Intro from "./components/Intro";
import Location from "./components/Location";
function App() {
  return (
    <Container>
      <Header/>
      <Intro/>
      <Location/>
      <Footer/>
    </Container>
  );
}

const Container = styled.div`

` 

export default App;
