import React from "react";
import marc from "../img/Marc.png"
import { styled } from "styled-components";

const Team = () => {
  return (
    <Container id="team">
      <h2>Notre Équipe</h2>
      <p>Le Centre de Médecine Sportive des Laurentides regroupe une équipe de 4 Médecins passionnés de médecine sportive.</p>
      <Box>
        <TeamCard>
          <img src={marc} alt="profileigm"/>
          <TextBox>
            <p><span>Marc Gosselin MD</span></p>
            <p>small description of ppl</p>
          </TextBox> 
        </TeamCard>
        <TeamCard>
          <img src={marc} alt="profileigm"/>
          <TextBox>
            <p><span>Marc Gosselin MD</span></p>
            <p>small description of ppl</p>
          </TextBox>  
        </TeamCard>
        <TeamCard>
          <img src={marc} alt="profileigm"/>
          <TextBox>
            <p><span>Marc Gosselin MD</span></p>
            <p>small description of ppl</p>
          </TextBox>  
        </TeamCard>
        <TeamCard>
          <img src={marc} alt="profileigm"/>
          <TextBox>
            <p><span>Marc Gosselin MD</span></p>
            <p>small description of ppl</p>
          </TextBox> 
        </TeamCard>
        
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
    font-size: 2.5em;
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

const TeamCard = styled.div`
margin: 10px;
`

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  
  img {
    width: 270px;
    height: 290px;
    background-color: white;
    
    border-top-left-radius: 50px;
  }
  span{
    color: #0C60F2;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
  }

  p{
    margin-bottom: 20px;
  }

`;

const TextBox = styled.div`
background-color:rgba(12, 96, 242, 0.10) ;
padding-bottom: 20px;
border-bottom-right-radius: 50px;
width: 270px;
margin-top: -7px;
padding-top: 10px;
`

export default Team;
