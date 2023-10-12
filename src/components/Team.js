import React from "react";
import marc from "../img/Marc.png";
import { styled } from "styled-components";

const Team = () => {
  return (
    <Container id="team">
      <Box>
        <p className="intro">Rencontrez</p>
        <h2>Notre Équipe</h2>
        <p>
          Le Centre de medecine Sportive des Laurentides regroupe une équipe de
          4 medecins passionnés de médecine sportive.
        </p>
        <CardBox>
          <TeamCard>
            <img src={marc} alt="profileigm" />
            <TextBox>
              <p>
                <span>Marc Gosselin MD</span>
              </p>
              <p>small description of ppl</p>
            </TextBox>
          </TeamCard>
          <TeamCard>
            <img src={marc} alt="profileigm" />
            <TextBox>
              <p>
                <span>Marc Gosselin MD</span>
              </p>
              <p>small description of ppl</p>
            </TextBox>
          </TeamCard>
          <TeamCard>
            <img src={marc} alt="profileigm" />
            <TextBox>
              <p>
                <span>Marc Gosselin MD</span>
              </p>
              <p>small description of ppl</p>
            </TextBox>
          </TeamCard>
          <TeamCard>
            <img src={marc} alt="profileigm" />
            <TextBox>
              <p>
                <span>Marc Gosselin MD</span>
              </p>
              <p>small description of ppl</p>
            </TextBox>
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

  flex-direction: column;
  padding-bottom: 100px;

  width: 70vw;
  @media (max-width: 850px) {
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
`;

const TeamCard = styled.div`
  margin: 10px;
`;

const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 850px) {
    justify-content: space-around;
    width: 90vw;
  }

  img {
    width: 270px;
    height: 290px;
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
  width: 270px;
  margin-top: -7px;
  padding-top: 10px;
`;

export default Team;
