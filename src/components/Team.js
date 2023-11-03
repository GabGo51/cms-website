import React from "react";
import marc from "../img/Marc.png";
import {css, styled, keyframes } from "styled-components";
import { useState } from "react";
import mork from '../img/mork pdp.webp'
import caro from '../img/caro pdp.webp'
import eric from '../img/eric pdp.webp'
import marie from '../img/avatar.jpg'

//display of the staff pictures and descriptions
const Team = () => {
  //tracking the selcted person to display the right description
  const [selectedPerson, setSelectedPerson] = useState(null);
  const togglePerson = (personName) => {
    setSelectedPerson(personName === selectedPerson ? null : personName);
  };

  return (
    <Container id="team">
      <Box>
        <p className="intro">Rencontrez</p>
        <h2>Notre Équipe</h2>
        <p className="subtitle">
          Le Centre de Médecine Sportive des Laurentides regroupe une équipe de
          médecins spécialisés en médecine du sport et de l’exercice.
        </p>
        <CardBox>
          <TeamCard>
            <ImgBox>
              <img className="mork-img" src={mork} alt="profileigm" />
              <div className="over"></div>
              <h3>
                <span>Dr Marc Gosselin </span>
              </h3>
            </ImgBox>
            <Info selectedPerson = {selectedPerson}>
              <button onClick={() => togglePerson("marc")}>
                {selectedPerson === 'marc' ? <p>Cacher la Bibliographie</p>: <p>Voir la Bibliographie</p>}
                
                <i className="fa-solid fa-angle-down marc"></i>
              </button>
              {selectedPerson === "marc" && (
                <div>
                  Le Dr Marc Gosselin est un médecin spécialisé en médecine
                  sportive. Au-delà de sa passion pour la santé et le bien-être,
                  il est aussi un aventurier dans l'âme, toujours en quête de
                  nouvelles expériences. Communicateur hors pair, il adore
                  partager ses connaissances et sa passion, tant à ses patients
                  qu'à un public plus large.
                </div>
              )}
            </Info>
          </TeamCard>
          <TeamCard>
            <ImgBox>
              <img className="marie-img" src={marie} alt="profileigm" />
              <div className="over"></div>
              <h3>
                <span>Dr Mariève Lefebvre </span>
              </h3>
            </ImgBox>
            <Info selectedPerson = {selectedPerson}>
              <button onClick={() => togglePerson("marie")}>
              {selectedPerson === 'marie' ? <p>Cacher la Bibliographie</p>: <p>Voir la Bibliographie</p>}
                <i className="fa-solid fa-angle-down marie"></i>
              </button>
              {selectedPerson === "marie" && (
                <div>
                  Le Dr Mariève Lefebvre, spécialisée en médecine sportive et
                  orthopédie de première ligne, est une véritable globetrotter.
                  C'est sa passion pour le ski de compétition qui l'a
                  naturellement orientée vers la médecine sportive, combinant
                  ainsi son amour pour le sport et son dévouement professionnel.
                </div>
              )}
            </Info>
          </TeamCard>
          <TeamCard>
            <ImgBox>
              <img src={eric} alt="profileigm" />
              <div className="over"></div>
              <h3>
                <span>Dr Eric Higgins </span>
              </h3>
            </ImgBox>
            <Info selectedPerson = {selectedPerson}>
              <button onClick={() => togglePerson("eric")}>
              {selectedPerson === 'eric' ? <p>Cacher la Bibliographie</p>: <p>Voir la Bibliographie</p>}
                <i className="fa-solid fa-angle-down eric"></i>
              </button>
              {selectedPerson === "eric" && (
                <div>
                  Le Dr Higgins se distingue par son expertise en médecine
                  sportive et son rôle en orthopédie de première ligne. Il est
                  également reconnu pour sa contribution en médecine du travail
                  et dans le suivi des TCCL (commotions cérébrales). Passionné
                  de triathlon et de vélo, il allie parfaitement sa profession à
                  ses passions, offrant ainsi une approche unique et engagée à
                  ses patients.
                </div>
              )}
            </Info>
          </TeamCard>
          <TeamCard>
            <ImgBox>
              <img src={caro} alt="profileigm" />
              <div className="over"></div>
              <h3>
                <span>Carolle Lauzon </span>
              </h3>
            </ImgBox>
            <Info selectedPerson = {selectedPerson}>
              <button onClick={() => togglePerson("caro")}>
              {selectedPerson === 'caro' ? <p>Cacher la Bibliographie</p>: <p>Voir la Bibliographie</p>}
                <i className="fa-solid fa-angle-down caro"></i>
              </button>
              {selectedPerson === "caro" && (
                <div>
                  Coordonnatrice de la clinique, se distingue par son efficacité
                  redoutable et son attention constante envers les patients.
                  Toujours de bonne humeur et en mouvement, son dévouement est
                  inégalé. Passionnée par le sport, elle allie dynamisme
                  professionnel et esprit sportif au quotidien.
                </div>
              )}
            </Info>
          </TeamCard>
        </CardBox>
      </Box>
    </Container>
  );
};




const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 100px;

  max-width: 1125px;
  @media (max-width: 1120px) {
    width: 90vw;
  }

  .intro {
    font-size: 14px;
    font-weight: 800;
    color: #0c60f2;
    margin-bottom: 10px;
    width: 100%;
  }
  h2 {
    width: 100%;
    font-weight: 600;
    font-size: 2.5em;
    margin-bottom: 20px;
    @media (max-width: 500px) {
      font-size: 2em;
    }
  }
  p {
    margin-bottom: 40px;
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
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1120px) {
    justify-content: space-around;
    width: 90vw;
  }
`;

const TeamCard = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const ImgBox = styled.div`
  position: relative;
  height: 270px;

  img {
    width: 250px;
    height: 270px;
    background-color: white;
    border-top-left-radius: 50px;
    filter: brightness(120%);
    object-fit: cover;
    
  }

  .mork-img{
    
  }

  .marie-img{
    filter: brightness(100%);
  }

  .over {
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
  }
  span {
    position: absolute;
    bottom: 5px;
    left: 5px;
    color: white;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
  }
`;
const fadeIn = keyframes`from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const rotate = keyframes`from {
  transform: rotate(0deg);
}
to {
  transform: rotate(180deg);
}
`
const rotateBack = keyframes`from {
  transform: rotate(180deg);
}
to {
  transform: rotate(180deg);
}`
  


const Info = styled.div`
  width: 250px;
  font-size: 13px;
  border: 1px solid rgba(12, 96, 242, 0.2);
  
  &:hover{
    i{
      transform: translateY(35%);
    }
  }

  button {
    cursor: pointer;
    color: #0c60f2;
    width: 100%;
    height: 40px;
    padding: 10px;
    background-color: rgba(12, 96, 242, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    border-bottom:1px solid rgba(12, 96, 242, 0.2) ;
    
    p {
      margin: 0;
    }

    .marc {
      transition: 500ms;
      animation: ${(props) =>
        props.selectedPerson === "marc" ? css`${rotate} 500ms forwards` : ''};
    }
    .marie {
      transition: 500ms;
      animation: ${(props) =>
        props.selectedPerson === "marie" ? css`${rotate} 500ms forwards` : ''};
    }
    .eric {
      transition: 500ms;
      animation: ${(props) =>
        props.selectedPerson === "eric" ? css`${rotate} 500ms forwards` : ''};
    }
    .caro {
      transition: 500ms;
      animation: ${(props) =>
        props.selectedPerson === "caro" ? css`${rotate} 500ms forwards` : ''};
    }
  
  }

  

  div {
    padding: 10px;
    background-color: rgba(12, 96, 242, 0.1);
    animation: ${fadeIn} 500ms forwards;
  }
`;

export default Team;
