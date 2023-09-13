import React from "react";
import { styled } from "styled-components";
import swim from "../img/swim.png";
import gnou from "../img/gnou.png"
import injection from "../img/injection.jpg"
import weights from "../img/weights.png"
import run from "../img/run.jpg"
import echo from "../img/echo.jpg"
const Service = () => {
  return (
    <Container id="service">
      <h2>Nos Services</h2>
      <Box>
        <Card>
          <Content>
            <h3>Consultation musculo-squeletique</h3>
            <div className="greenDiv"></div>
            <p>
              Sur référence de votre médecin.Évaluation et traitement de
              blessures musculo-squelettiques, soit occasionées par l’activité …
            </p>
            <img src={echo} alt="swimmming" />
          </Content>
        </Card>
        <Card>
          <Content>
            <h3>Suivi pour les athlètes de programmes d’équipes sportives</h3>
            <div className="greenDiv"></div>
            <p>
              Correction de problèmes biomécaniques. Évaluation de la condition par un
              physiothérapeute ou un kinésiologue. 
            </p>
            <img src={swim} alt="swimmming" />
          </Content>
          
        </Card>
        <Card>
          <Content>
            <h3>Injection de cortisone sous guidage échographique</h3>
            <div className="greenDiv"></div>
            <p>
              Sur référence de votre médecin.Évaluation et traitement de
              blessures musculo-squelettiques, soit occasionées par l’activité …
            </p>
            <img src={injection} alt="swimmming" />
          </Content>
          
        </Card>
        <Card>
          <Content>
            <h3>Clinique d’arthrose</h3>
            <div className="greenDiv"></div>
            <p>
              Sur référence de votre médecin.Évaluation et traitement de
              blessures musculo-squelettiques, soit occasionées par l’activité …
            </p>
            <img src={gnou} alt="swimmming" />
          </Content>
          
        </Card>
        <Card>
          <Content>
            <h3>Évaluation de la condition physique chez le Sportif</h3>
            <div className="greenDiv"></div>
            <p>
              Sur référence de votre médecin.Évaluation et traitement de
              blessures musculo-squelettiques, soit occasionées par l’activité …
            </p>
            <img src={weights} alt="swimmming" />
          </Content>
          
        </Card>
        <Card>
          <Content>
            <h3>Clinique d’évaluation du coureur</h3>
            <div className="greenDiv"></div>
            <p>
              Sur référence de votre médecin.Évaluation et traitement de
              blessures musculo-squelettiques, soit occasionées par l’activité …
            </p>
            <img src={run} alt="swimmming" />
          </Content>
          
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
    font-weight: 600;
    font-size: 3em;
    margin-bottom: 30px;
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
  width: 365px;
  height: 330px;
  background-color: white;
  border-radius: 10px;
  border: 1.8px solid #ededed;
  transition: 300ms;

  &:hover {
    border: 1.8px solid #a1ac00;
  }

  h3 {
    height: 51px;
    width: 321px;
    font-weight: 600;
    font-size: 1em;
  }

  .greenDiv {
    background-color: #a1ac00;
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

  p{
    font-size: 0.8em;
    margin-bottom: 15px;
    position: absolute;
    top: 100px;
    width: 321px;
    height: 102px;
  }

  img {
    
    width: 321px;
    height:137px ;
    object-fit: cover;
    
    border-radius: 10px;
    position: absolute;
    bottom: 20px;
   
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
