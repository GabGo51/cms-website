import React from "react";
import building from "../img/bulding.PNG";
import { styled } from "styled-components";

const Intro = () => {
  return (
    <Container >
      <img src={building} alt="Buillding" />
      <Text id="intro">
        <h1>
          Dédication a la santé des athletes et gens actifs de la région des
          Laurentides.
        </h1>
        <p>
          Nous nous spécialisons dans l’évaluation et le traitement de blessures
          sportives ainsi que dans le suivi médical préventif d’athlètes de tous
          âges.
        </p>
        
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
  width: 85vw;
  margin: 100px 0px;
  

  p {
    margin: 25px 0px;
    font-size: 1.2em;
    width: 50vw;
    @media (max-width: 800px) {
      font-size: 0.8em;
      width: 70vw;
    }
  }
`;



export default Intro;
