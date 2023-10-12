import React from "react";
import Hero from "./Hero";
import Clinique from "./Clinique";
import { styled } from "styled-components";

const Intro = () => {
  return (
    <Container >
      <Hero/>
      <Text id="intro">
        <Clinique/>
        
      </Text>
      
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  
  img {
    width: 100vw;
  }

  h1 {
    color: #002b54;
    font-weight: 500;
    font-size: 2.5em;

    @media (max-width: 800px) {
      font-size: 1.5em;
    }
  }
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
