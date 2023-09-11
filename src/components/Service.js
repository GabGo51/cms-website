import React from "react";
import { styled } from "styled-components";
import swim from "../img/swim.jpg";
import gnou from "../img/gnou.jpg"
import injection from "../img/injection.jpg"
import weights from "../img/weights.jpg"
import elbow from "../img/elbow.jpg"
import feet from "../img/feet.jpg"
const Service = () => {
  return (
    <Container id="service">
      <h2>NOS SERVICES</h2>
      <Box>
        <Card>
          <Content>
            <h3>Consultation musculo-squeletique</h3>
            <div className="greenDiv"></div>
            <p>
              Sur référence de votre médecin.Évaluation et traitement de
              blessures musculo-squelettiques, soit occasionées par l’activité …
            </p>
          </Content>
          <img src={swim} alt="swimmming" />
        </Card>
        <Card>
          <Content>
            <h3>Clinique d'Arthrose</h3>
            <div className="greenDiv"></div>
            <p>
              Correction de problèmes biomécaniques. Évaluation de la condition par un
              physiothérapeute ou un kinésiologue. Injections de viscosuppléance
              ou de corticostéroïdes
            </p>
          </Content>
          <img src={gnou} alt="swimmming" />
        </Card>
        <Card>
          <Content>
            <h3>Injection de cortisone et de viscosuppléance sous guidage échographique</h3>
            <div className="greenDiv"></div>
            <p>
              Sur référence de votre médecin.Évaluation et traitement de
              blessures musculo-squelettiques, soit occasionées par l’activité …
            </p>
          </Content>
          <img src={injection} alt="swimmming" />
        </Card>
        <Card>
          <Content>
            <h3>Clinique d’évaluation de la condition physique chez le Sportif</h3>
            <div className="greenDiv"></div>
            <p>
              Sur référence de votre médecin.Évaluation et traitement de
              blessures musculo-squelettiques, soit occasionées par l’activité …
            </p>
          </Content>
          <img src={weights} alt="swimmming" />
        </Card>
        <Card>
          <Content>
            <h3>Clinique d’évaluation de la condition physique chez le Sportif</h3>
            <div className="greenDiv"></div>
            <p>
              Sur référence de votre médecin.Évaluation et traitement de
              blessures musculo-squelettiques, soit occasionées par l’activité …
            </p>
          </Content>
          <img src={elbow} alt="swimmming" />
        </Card>
        <Card>
          <Content>
            <h3>Clinique d’évaluation de la condition physique chez le Sportif</h3>
            <div className="greenDiv"></div>
            <p>
              Sur référence de votre médecin.Évaluation et traitement de
              blessures musculo-squelettiques, soit occasionées par l’activité …
            </p>
          </Content>
          <img src={feet} alt="swimmming" />
        </Card>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  
  h2 {
    font-weight: 400;
    font-size: 2em;
    margin-bottom: 40px;
    color: #002b54;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  /* width: 70vw; */

  /* @media (max-width:1500px){
    width: 100vw;
  } */
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  padding-bottom: 0;
  border: 1.8px solid #ededed;
  transition: 300ms;

  &:hover {
    border: 1.8px solid #a1ac00;
  }

  h3 {
    margin-bottom: 30px;
  }

  .greenDiv {
    background-color: #a1ac00;
    height: 3px;
    width: 40%;
    transition: 0.5s;
    margin-bottom: 20px;
  }

  &:hover .greenDiv {
    width: 100%;
  }

  p{
    font-size: 0.8em;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 250px;
`;

export default Service;
