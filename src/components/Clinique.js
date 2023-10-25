import React from "react";
import styled from "styled-components";
import building from "../img/building.png";
import office from "../img/office.png";
const Clinique = () => {
  return (
    <Container id="intro">
      <Box>
        <ImageBox>
          <img className="building" src={building} />
          <Bottom>
            <div className="green"></div>
            <img className="office" src={office} />
          </Bottom>
        </ImageBox>
        <TextBox>
          <p className="intro">Bienvenue à</p>
          <h2>Notre Clinique</h2>
          <p className="subtitle">
            L'endroit où la passion du sport rencontre l'expertise médicale.
          </p>

          <p className="text">
            Fondée il y a plus de 20 ans au cœur des Laurentides, notre clinique
            émane de la passion d'une équipe médicale dévouée à la médecine
            sportive et aux pathologies musculosquelettiques. Forts d'une
            formation rigoureuse et d'une riche expérience, nous offrons une
            prise en charge personnalisée, combinant expertise et bienveillance.
          </p>
          <p className="text">
            La clinique se caractérise par une gamme étendue de traitements et
            services. Que ce soit pour la prévention auprès des athlètes
            débutants ou confirmés, le traitement des lésions sportives ou la
            prise en charge de pathologies musculo squelettiques telles que
            l'arthrose et les tendinopathies, notre objectif est de permettre à
            chacun de maintenir une vie active. Animés par l'innovation, nous
            avons adopté les techniques médicales les plus récentes, incluant
            les infiltrations échoguidées et des approches innovantes en
            médecine régénérative.
          </p>
          <p className="text">
            La mission de la Clinique de Médecine Sportive des Laurentides va
            bien au-delà de la simple prise en charge des athlètes d'élite. Nous
            aspirons à offrir à tous, quelle que soit leur activité ou leur âge,
            la possibilité de mener une vie dynamique, épanouie et sans douleur.
          </p>
        </TextBox>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  margin-top: 60px;
  .intro {
    color: #0c60f2;
    font-weight: 800;
    font-size: 14px;
  }
  h2 {
    font-weight: 600;
    font-size: 2.5em;

    @media (max-width: 850px) {
      font-size: 2em;
    }
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1225px;
  @media (max-width: 1120px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const ImageBox = styled.div`
  margin-bottom: 40px;
  margin-right: 110px;
  @media (max-width: 850px) {
    margin-right: 0;
  }
  .building {
    width: 460px;
    height: 322px;
    border-top-right-radius: 70px;
    border-bottom-left-radius: 70px;
    margin-bottom: 10px;

    @media (max-width: 850px) {
      height: 200px;
      object-fit: cover;
      object-position: 40%;
    }

    @media (max-width: 550px) {
      width: 355px;
      height: 170px;
      margin-right: 0px;
    }
  }

  .green {
    width: 175px;
    height: 150px;
    background-color: #c7d324;
    border-top-left-radius: 70px;
    border-bottom-right-radius: 70px;
    margin-right: 15px;
    @media (max-width: 550px) {
      width: 150px;
      height: 120px;
    }
  }

  .office {
    width: 270px;
    height: 180px;
    border-top-right-radius: 70px;
    border-bottom-left-radius: 70px;
    @media (max-width: 550px) {
      width: 190px;
      height: 120px;
    }
  }
`;
const Bottom = styled.div`
  display: flex;
`;
const TextBox = styled.div`
  max-width: 550px;

  @media (max-width: 1120px) {
    max-width: 90vw;
  }

  .subtitle {
    color: #737373;
    margin-bottom: 40px;
    font-size: 16px;
    max-width: 500px;
  }
  .text {
    max-width: 600px;
    font-size: 0.8em;
    text-align: justify;
    line-height: 22px;
    margin: 20px 0px;
    @media (max-width: 1120px) {
      max-width: 90vw;
    }
  }
`;
export default Clinique;
