import React from "react";
import { styled } from "styled-components";
import swim from "../img/swim.jpg";
import gnou from "../img/gnou.jpg";
import injection from "../img/injection.jpg";
import weights from "../img/weights.jpg";
import echo from "../img/echo.jpg";
import plaquette from "../img/plaquette.jpg"

//Displaying the different service in cards format with hover effect 
const Service = () => {
  return (
    <Container id="service">
      <Box>
        <p className="intro">Découvrez</p>
        <h2>Nos Services</h2>
        <p className="subtitle">
          Découvrez l'ensemble de nos services consacrés à l'optimisation de vos
          performances sportives et à la prise en charge de vos blessures.
        </p>
        <CardBox>
          <Card>
            <Content>
              <h3>Consultations en médecine musculosquelettique</h3>
              <div className="greenDiv"></div>
              <p>
                Sur recommandation de votre médecin, nous effectuons
                l'évaluation et la prise en charge de diverses lésions
                musculosquelettiques.
              </p>
              <img src={echo} alt="swimmming" />
            </Content>
          </Card>
          <Card>
            <Content>
              <h3>Suivi pour les athlètes de programmes d’équipes sportives</h3>
              <div className="greenDiv"></div>
              <p>
                Évaluation pré-saison, prise en charge multidisciplinaire,
                prévention et intervention en cas de blessures.
              </p>
              <img src={swim} alt="swimmming" />
            </Content>
          </Card>
          <Card>
            <Content>
              <h3>Clinique d’infiltrations échoguidées</h3>
              <div className="greenDiv"></div>
              <p>
                L'infiltration échoguidée est une technique médicale qui utilise
                l'échographie pour guider avec précision l'injection de
                médicaments dans une zone ciblée du corps.
              </p>
              <img src={injection} alt="swimmming" />
            </Content>
          </Card>
          <Card>
            <Content>
              <h3>Clinique d’arthrose</h3>
              <div className="greenDiv"></div>
              <p>
                La clinique d'arthrose se spécialise dans la prise en charge non
                chirurgicale et le suivi des affections articulaires
                dégénératives.
              </p>
              <img src={gnou} alt="swimmming" />
            </Content>
          </Card>
          <Card>
            <Content>
              <h3>Évaluation de la condition physique chez le Sportif</h3>
              <div className="greenDiv"></div>
              <p>
                Le service d'évaluation 
                se concentre sur la détection des facteurs de risque et la mise
                en place d'un plan adapté pour la préparation à un événement
                sportif ou une remise en forme.
              </p>
              <img src={weights} alt="swimmming" />
            </Content>
          </Card>
          <Card>
            <Content>
              <h3>Médecine régénérative (Plasma riche en plaquettes) </h3>
              <div className="greenDiv"></div>
              <p>
                Le service de médecine régénérative propose des injections de
                plasma riche en plaquettes pour traiter diverses affections,
                telles que les tendinopathies et les arthropathies.
              </p>
              <img src={plaquette} alt="seringue" />
            </Content>
          </Card>
        </CardBox>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .intro {
    color: #0c60f2;
    font-weight: 800;
    font-size: 14px;
  }
`;

const Box = styled.div`
  width: 1125px;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  @media (max-width: 1120px) {
    width: 90vw;
  }

  h2 {
    font-weight: 600;
    font-size: 2.5em;
    margin-bottom: 10px;

    @media (max-width: 850px) {
      font-size: 2em;
    }
  }
  .subtitle {
    color: #737373;
    margin-bottom: 40px;
    font-size: 16px;
    max-width: 90vw;
  }
`;

const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1125px;

  @media (max-width: 1120px) {
    justify-content: space-around;
    width: 90vw;
    gap: 15px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 345px;
  height: 340px;
  margin-bottom: 40px;
  background-color: white;
  border-radius: 10px;
  border: 2px solid #dbdbdb;
  transition: 300ms;

  &:hover {
    border: 2px solid #0c60f2;
  }

  h3 {
    height: 51px;
    width: 310px;
    font-weight: 600;
    font-size: 1em;
  }

  .greenDiv {
    background-color: #0c60f2;
    height: 3px;
    width: 40%;
    transition: 0.5s;
    margin-bottom: 10px;
    position: absolute;
    top: 80px;
  }

  &:hover .greenDiv {
    width: 90%;
  }

  p {
    font-size: 0.8em;
    margin-bottom: 15px;
    position: absolute;
    top: 100px;
    width: 300px;
    height: 102px;
    
  }

  img {
    width: 310px;
    height: 137px;
    object-fit: cover;

    border-radius: 10px;
    position: absolute;
    bottom: 15px;
    left: 16.5px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 380px;
  position: relative;
`;

export default Service;
