import React from "react";
import { styled } from "styled-components";
const Location = () => {
  

  

  return (
    <Container>
      <Top>
        <h2>ICI POUR VOUS AIDER</h2>

        <p>
          305, rue du Docteur Charles Léonard, Suite 200 St-Jérôme, Qc, J7Y 0M9
        </p>
      </Top>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4680.808362806224!2d-74.00361897841884!3d45.76285226319088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccf2b950f2292f7%3A0xa1b2f2fc9657e2df!2sCentre%20de%20M%C3%A9decine%20sportive%20des%20Laurentides!5e0!3m2!1sen!2sca!4v1694030872312!5m2!1sen!2sca"
        width="600"
        height="450"
        style={{border: "0"}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

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

  iframe{
    width: 80vw;
    margin: 50px 0px;
  }
`;

const Top = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;

  h2 {
    font-weight: 400;
    font-size: 2em;
    margin-bottom: 20px;
    color: #002b54;
  }

  & :nth-child(3) {
    margin-bottom: 2vw;
  }
`;
const Map = styled.div`
  min-width: 80vw;

  min-height: 500px;
  @media (max-width: 800px) {
    min-height: 300px;
  }
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  margin-bottom: 25px;
`;
const Schedule = styled.div``;

export default Location;
