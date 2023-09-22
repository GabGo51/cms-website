import React from "react";
import { styled } from "styled-components";
const Location = () => {
  return (
    <Container id="location">
      <Top>
        <p className="intro">Venez nous Voir</p>
        <h2>Localisation</h2>

        <p className="adresse">
          305, rue du Docteur Charles Léonard, Suite 200 St-Jérôme, Qc, J7Y 0M9
        </p>
        <IconBox>
          <div>
            <p className="icon">P</p>
            <p>Parking disponible</p>
          </div>
          <div>
            <i class="fa-solid fa-wheelchair"></i>
            <p>Accessible</p>
          </div>
        </IconBox>
      </Top>
      <iframe
        title="CMS Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4680.808362806224!2d-74.00361897841884!3d45.76285226319088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccf2b950f2292f7%3A0xa1b2f2fc9657e2df!2sCentre%20de%20M%C3%A9decine%20sportive%20des%20Laurentides!5e0!3m2!1sen!2sca!4v1694030872312!5m2!1sen!2sca"
        width="600"
        height="450"
        style={{ border: "0" }}
        loading="lazy"
      ></iframe>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 100px;
  h2 {
    font-weight: 600;
    font-size: 3em;
    margin-bottom: 20px;
  
    @media (max-width: 500px) {
      font-size: 2em;
    }
  }
 

  iframe {
    width: 100vw;
    height: 400px;
    margin-top: 30px;
  }
`;

const Top = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;

  & :nth-child(3) {
    margin-bottom: 2vw;
  }

  .intro {
    color: #0c60f2;
    font-size: 14px;
    font-weight: 800;
  }
  .adresse {
    margin: 0;
  }
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .icon{
    font-size: 1.2em;
    font-weight: 900;
    margin-right: 25px;
  }

  i{
    margin-right: 50px;
  }
`;

export default Location;
