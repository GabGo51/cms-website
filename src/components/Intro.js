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
      <Box>
        <div>Autre Localisation</div>
        <p><span>Venez nous voir à St-Sauveur!</span></p>
        <p>Nous proposons également nos services ici : <a target="#" href="https://www.cliniquesportsante.com/">Clinique Sport Santé Laurentides de St-Sauveur.</a> </p>
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
background-color: rgba(12, 96, 242, 0.10);
min-height: 150px;
padding: 20px 40px;
border-radius: 10px;
width: 83vw;
position: relative;
border: 1px solid  #0C60F2;
margin-bottom: 50px;
@media (max-width:500px){
  width: 88vw;
  }
div{
  padding: 7px;
  width: 230px;
  background-color: #0C60F2;
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
  @media (max-width:500px){
    font-size: 1em;
    width: 200px;
  }
}
p{
  margin-top: 15px;
}

span{
  font-family: Poppins;
  font-size: 1.2em;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 20px;
  @media (max-width:500px){
    font-size: 1em;
  }
}

a{
  color: black;
}
`

export default Intro;
