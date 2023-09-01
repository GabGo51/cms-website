import React from "react";
import { styled } from "styled-components";

const Location = () => {
  return (
    <Container>
      <Top>
        <h3>ICI POUR VOUS AIDER</h3>
      
      <p>
        305, rue du Docteur Charles Léonard, Suite 200 St-Jérôme, Qc, J7Y 0M9
      </p>
      
      </Top>
      <Map> MAP</Map>
      <Schedule>
        <h4>HORAIRE</h4>
        <p>Dimanche | 9 AM - 2PM</p>
        <p>Lundi | 9 AM - 2PM</p>
        <p>Mardi | 9 AM - 2PM</p>
        <p>Mercredi | 9 AM - 2PM</p>
        <p>Jeudi | 9 AM - 2PM</p>
        <p>Vendredi | 9 AM - 2PM</p>
        <p>Samedi | 9 AM - 2PM</p>
        
      </Schedule>
      
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const Top = styled.div`
display: flex;

flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom:25px ;

  h3{
    font-weight: 400;
    font-size: 3em;
    margin-bottom: 20px;
  }

  & :nth-child(3) {
    margin-bottom: 2vw;
}
`
const Map = styled.div`
min-width: 80vw;

min-height: 500px;
@media (max-width:800px){
  min-height: 300px;
}
background-color: grey;
display: flex;
align-items: center;
justify-content: center;
color: white;
font-weight: bold;
margin-bottom:25px ;
`
const Schedule = styled.div`

`

export default Location;
