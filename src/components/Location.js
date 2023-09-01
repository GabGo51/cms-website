import React from "react";
import { styled } from "styled-components";

const Location = () => {
  return (
    <Container>
      <Top>
        <h3>ICI POUR VOUS AIDER</h3>
      <h4>Centre de médecine sportive des Laurentides</h4>
      <p>
        305, rue du Docteur Charles Léonard, Suite 200 St-Jérôme, Qc, J7Y 0M9
      </p>
      <p>Téléphone : 450 438-0911</p>
      <p>FAX : 450 436-2719</p>
      <p>Email:</p>
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
`;

const Top = styled.div`
display: flex;
flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom:25px ;
`
const Map = styled.div`
width: 60vw;
height: 60vw;
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
