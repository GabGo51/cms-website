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
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const targetScrollPosition = elementPosition - 50;

      window.scrollTo({
        top: targetScrollPosition,
        behavior: "smooth",
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
            <ImgBox>
              <img src={marc} alt="profileigm" />
              <div className="over"></div>
              <p>
                <span>Dr Marc Gosselin </span>
              </p>
            </ImgBox>
            <Info>
              <button onClick={() => togglePerson("marc")}>
                <p>Voir la Bibliographie</p>{" "}
                <i className="fa-solid fa-angle-down"></i>
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
              <img src={marc} alt="profileigm" />
              <div className="over"></div>
              <p>
                <span>Dr Mariève Lefebvre </span>
              </p>
            </ImgBox>
            <Info>
              <button onClick={() => togglePerson("marie")}>
                <p>Voir la Bibliographie</p>{" "}
                <i className="fa-solid fa-angle-down"></i>
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
              <img src={marc} alt="profileigm" />
              <div className="over"></div>
              <p>
                <span>Dr Eric Higgins </span>
              </p>
            </ImgBox>
            <Info>
              <button onClick={() => togglePerson("eric")}>
                <p>Voir la Bibliographie</p>{" "}
                <i className="fa-solid fa-angle-down"></i>
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
              <img src={marc} alt="profileigm" />
              <div className="over"></div>
              <p>
                <span>Carolle Lauzon </span>
              </p>
            </ImgBox>
            <Info>
              <button onClick={() => togglePerson("caro")}>
                <p>Voir la Bibliographie</p>{" "}
                <i className="fa-solid fa-angle-down"></i>
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

const Info = styled.div`
  width: 250px;
  font-size: 13px;

  button {
    cursor: pointer;
    width: 100%;
    padding: 10px;
    background-color: rgba(12, 96, 242, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    p {
      margin: 0;
    }
  }

  div {
    padding: 10px;
    background-color: rgba(12, 96, 242, 0.1);
  }
`;

export default Team;
