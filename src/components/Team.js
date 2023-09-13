import React from "react";
import marc from "../img/Marc.png"
import { styled } from "styled-components";

const Team = () => {
  return (
    <Container id="team">
      <h2>NOTRE ÉQUIPE</h2>
      <p>Le Centre de Médecine Sportive des Laurentides regroupe une équipe de 4 Médecins passionnés de médecine sportive.</p>
      <Box>
        <div>
          <img src={marc} alt="profileigm"/>
          <p><span>Marc Gosselin MD</span></p>
          <p>small description of ppl</p>
        </div>
        <div>
          <img src={marc} alt="profileigm"/>
          <p><span>Marc Gosselin MD</span></p>
          <p>small description of ppl</p>
        </div>
        <div>
          <img src={marc} alt="profileigm"/>
          <p><span>Marc Gosselin MD</span></p>
          <p>small description of ppl</p>
        </div>
        <div>
          <img src={marc} alt="profileigm"/>
          <p><span>Marc Gosselin MD</span></p>
          <p>small description of ppl</p>
        </div>
        
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 100px;
  h2 {
    font-weight: 600;
    font-size: 3em;
    margin-bottom: 20px;
    @media (max-width:500px){
      font-size: 2em;
    }
  }
  p{
    max-width: 650px;
    text-align: center;
    margin-bottom: 40px;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  div{
    width: 270px;
    height: 267px;
    margin: 10px;
    margin-bottom: 150px;
  }
  img {
    width: 270px;
    height: 290px;
    background-color: white;
    margin: 20px 10px;
    border-radius: 10px;
  }
  span{
    color: #87943B;
    text-align: center;
    font-size: 20px;
    font-weight: 500;


  }

`;

export default Team;
