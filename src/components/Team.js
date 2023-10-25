import React from "react";
import marc from "../img/Marc.png";
import { styled } from "styled-components";
import { useState } from "react";

const Team = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const togglePerson = (personName) => {
    setSelectedPerson(personName === selectedPerson ? null : personName);
  };

  console.log(selectedPerson);

  const scrollToRef = (id) => {
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const targetScrollPosition = elementPosition - 50;

      window.scrollTo({
          top: targetScrollPosition,
          behavior: "smooth"
      });
  }
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
            <img src={marc} alt="profileigm" />
            <TextBox>
              <p>
                <span>Dr Marc Gosselin </span>
              </p>
              <button onClick={() => [togglePerson("marc"),scrollToRef("info")]}
              >
                Info <div>+</div>
              </button>
            </TextBox>
          </TeamCard>
          <TeamCard>
            <img src={marc} alt="profileigm" />
            <TextBox>
              <p>
                <span>Dr Mariève Lefebvre </span>
              </p>
              <button onClick={() => togglePerson("marie")}>
                Info <div>+</div>
              </button>
            </TextBox>
          </TeamCard>
          <TeamCard>
            <img src={marc} alt="profileigm" />
            <TextBox>
              <p>
                <span>Dr Eric Higgins </span>
              </p>
              <button onClick={() => togglePerson("eric")}>
                Info <div>+</div>
              </button>
            </TextBox>
          </TeamCard>
          <TeamCard>
            <img src={marc} alt="profileigm" />
            <TextBox>
              <p>
                <span>Carolle Lauzon</span>
              </p>
              <button onClick={() => togglePerson("caro")}>
                Info <div>+</div>
              </button>
            </TextBox>
          </TeamCard>
        </CardBox>
        <InfoBox id="info">
          {selectedPerson === null && <p>Utiliser le </p>}
          {selectedPerson === "marc" && (
            <p>
              Le Dr Marc Gosselin est un médecin spécialisé en médecine
              sportive. Au-delà de sa passion pour la santé et le bien-être, il
              est aussi un aventurier dans l'âme, toujours en quête de nouvelles
              expériences. Communicateur hors pair, il adore partager ses
              connaissances et sa passion, tant à ses patients qu'à un public
              plus large.
            </p>
          )}
          {selectedPerson === "marie" && (
            <p>
              Le Dr Higgins se distingue par son expertise en médecine sportive
              et son rôle en orthopédie de première ligne. Il est également
              reconnu pour sa contribution en médecine du travail et dans le
              suivi des TCCL (commotions cérébrales). Passionné de triathlon et
              de vélo, il allie parfaitement sa profession à ses passions,
              offrant ainsi une approche unique et engagée à ses patients.
            </p>
          )}
          {selectedPerson === "eric" && (
            <p>
              Le Dr Mariève Lefebvre, spécialisée en médecine sportive et
              orthopédie de première ligne, est une véritable globetrotter.
              C'est sa passion pour le ski de compétition qui l'a naturellement
              orientée vers la médecine sportive, combinant ainsi son amour pour
              le sport et son dévouement professionnel.
            </p>
          )}
          {selectedPerson === "caro" && (
            <p>
              Carolle Lauzon, coordonnatrice de la clinique, se distingue par son efficacité
              redoutable et son attention constante envers les patients.
              Toujours de bonne humeur et en mouvement, son dévouement est
              inégalé. Passionnée par le sport, elle allie dynamisme
              professionnel et esprit sportif au quotidien.
            </p>
          )}
        </InfoBox>
      </Box>
    </Container>
  );
};

const Container = styled.div`
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

const TeamCard = styled.div`
  margin: 10px;
`;

const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1120px) {
    justify-content: space-around;
    width: 90vw;
  }

  img {
    width: 250px;
    height: 270px;
    background-color: white;
    border-top-left-radius: 50px;
  }
  span {
    color: #0c60f2;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
  }

  p {
    margin-bottom: 20px;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(12, 96, 242, 0.1);
  padding-bottom: 20px;
  border-bottom-right-radius: 50px;
  width: 250px;
  margin-top: -7px;
  padding-top: 10px;
  margin-bottom: 30px;

  button{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#0c60f2 ;
    color: white;
    font-weight: 600;
    border: none;
    width: 80px;
    height: 40px;
    border-radius: 20px;
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      background-color: white;
      color: #0c60f2;
      border-radius: 50%;
      width: 20px;
      height: 20px;
    }

  }
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #dbdbdb;
  border-radius: 30px;
  padding: 20px;
  width: 95%;

  p{
    font-size: 14px;
    max-height: 130px;
    margin: 0;
  }
`;

export default Team;
