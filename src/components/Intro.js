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
        <p>
          Nous sommes aussi le centre de référence auprès des médecins de la
          région pour tout ce qui touche aux pathologies musculo-squelettiques,
          que ce soit pour préciser un diagnostic, pour orienter un plan de
          traitement ou pour une infiltration écho-guidée.
        </p>
        <p>
          Venez nous voir à l’une de nos deux cliniques : Centre de Médecine
          Sportive des Laurentides située à St-Jérôme et à la Clinique Sport
          Santé Laurentides de St-Sauveur.
        </p>
      </Text>
      <Box>
        <p>Autre Localisation</p>
      </Box>
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
  width: 100vw;
  padding: 5vw 9vw;

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

const Box = styled.div`
background-color: #FAFBEB;
height: 150px;
width: 80vw;
position: relative;
border: 1px solid  #C7D324;
margin-bottom: 50px;
p{
  padding: 7px;
  width: 230px;
  background-color: #A5AA5B;
  border-radius: 30px;
  font-size: 1.2em;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -20px;
  left: 20px;
  
}
`

export default Intro;
