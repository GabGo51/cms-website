import React from "react";
import Hero from "./Hero";
import Clinique from "./Clinique";
import { styled } from "styled-components";

//compo where I fit both hero and clinique components (need to do that in the form section)
const Intro = () => {
  return (
    <Container >
      <Hero />
      <Clinique id="intro"/>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const Text = styled.div`
  width: 70vw;
  margin: 100px 0px;
  @media (max-width: 850px) {
    width: 90vw;
  }

  p {
    margin: 25px 0px;
    font-size: 1.2em;
    width: 50vw;
    @media (max-width: 850px) {
      font-size: 0.8em;
      width: 70vw;
    }
  }
`;

export default Intro;
