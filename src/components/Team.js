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
              <button onClick={() => togglePerson('marc')}>Info <div>+</div></button>
            </TextBox>
          </TeamCard>
          <TeamCard>
            <img src={marc} alt="profileigm" />
            <TextBox>
              <p>
                <span>Dr Mariève Lefebvre </span>
              </p>
              <button onClick={() => togglePerson('marie')}>Info <div>+</div></button>
            </TextBox>
          </TeamCard>
          <TeamCard>
            <img src={marc} alt="profileigm" />
            <TextBox>
              <p>
                <span>Dr Eric Higgins  </span>
              </p>
              <button onClick={() => togglePerson('eric')}>Info <div>+</div></button>
            </TextBox>
          </TeamCard>
          <TeamCard>
            <img src={marc} alt="profileigm" />
            <TextBox>
              <p>
                <span>Carolle Lauzon</span>
              </p>
              <button onClick={() => togglePerson('caro')}>Info <div>+</div></button>
            </TextBox>
          </TeamCard>
        </CardBox>
        <InfoBox>
          {selectedPerson === null && <p>yo</p>}


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
`;

const InfoBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid grey;
border-radius: 30px;
height: 50px;
width: 100%;
`

export default Team;
