import React from "react";
import building from "../img/bulding.PNG";
import { styled } from "styled-components";

const Intro = () => {
  return (
    <Container id="intro">
      <img src={building} alt="Buillding" />
      <Text>
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
    </Container>
  );
};

const Container = styled.section`
  width: 100vw;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
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
  padding: 5vw 8vw;

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
