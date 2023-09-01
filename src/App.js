import Footer from "./components/Footer";
import Header from "./components/Header";
import styled from "styled-components"
import Intro from "./components/Intro";
function App() {
  return (
    <Container>
      <Header/>
      <Intro/>
      <Footer/>
    </Container>
  );
}

const Container = styled.div`

` 

export default App;
