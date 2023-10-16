import React from "react";
import styled from "styled-components";
import building from "../img/building.png";
import office from "../img/office.png";
const Clinique = () => {
  return (
    <Container id="intro">
      <Box>
        <ImageBox>
          <img className="building" src={building} />
          <Bottom>
            <div className="green"></div>
            <img className="office" src={office} />
          </Bottom>
        </ImageBox>
        <TextBox>
          <p className="intro">Bienvenue à</p>
          <h2>Notre Clinique</h2>
          <p className="subtitle">
            L'endroit où la passion du sport rencontre l'expertise médicale.
          </p>

          <p className="text">
            Le CMS Laurentides a émergé de la passion commune des Dr Gosselin et
            Higgins pour la médecine du sport et les pathologies
            musculo-squelettiques. Grâce à leur expérience au sein du
            département de chirurgie orthopédique du CSSS de St-Jérôme, ils ont
            acquis une solide expertise.
          </p>
          <p className="text">
            L'opportunité s'est présentée avec l'arrivée du programme
            sport-études de la polyvalente de St-Jérôme. Les médecins du CMS
            Laurentides ont rapidement compris qu'une collaboration était
            inévitable. Cela leur permettait de pratiquer une médecine
            préventive et curative tout en aidant les jeunes sportifs. De plus,
            la diversité des sports pratiqués offrait une occasion unique
            d'acquérir une expertise spécifique à chaque discipline.
          </p>
          <p className="text">
            Depuis lors, le programme sport-études a connu une croissance
            significative, tout comme le CMS Laurentides. Nos jeunes athlètes,
            qu'ils évoluent au niveau collégial, universitaire ou au sein
            d'équipes nationales, font notre fierté. Notre ambition pour
            l'avenir est d'élargir notre offre de services aux équipes sportives
            locales et aux athlètes de la région des Laurentides.
          </p>
        </TextBox>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  margin-top: 60px;
  .intro {
    color: #0c60f2;
    font-weight: 800;
    font-size: 14px;
  }
  h2 {
    font-weight: 600;
    font-size: 2.5em;
    

    @media (max-width: 850px) {
      font-size: 2em;
    }
  }
`;


const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1225px;
  @media (max-width: 850px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
    }
`;
const ImageBox = styled.div`
margin-bottom: 40px;
margin-right: 110px;
@media (max-width: 850px){
  margin-right: 0;
}
  .building {
    width: 460px;
    height: 322px;
    border-top-right-radius: 70px;
    border-bottom-left-radius: 70px;
    margin-bottom: 10px;

    @media (max-width:850px){
      height: 200px;
      object-fit: cover;
      object-position: 40%;
    }
    
    @media (max-width: 550px) {
      width: 355px;
      height: 170px;
      margin-right: 0px;
    }
  }

  .green {
    width: 175px;
    height: 150px;
    background-color: #c7d324;
    border-top-left-radius: 70px;
    border-bottom-right-radius: 70px;
    margin-right: 15px;
    @media (max-width: 550px) {
      width: 150px;
      height: 120px;
    }
  }

  .office {
    width: 270px;
    height: 180px;
    border-top-right-radius: 70px;
    border-bottom-left-radius: 70px;
    @media (max-width: 550px) {
      width: 190px;
      height: 120px;
    }
  }
`;
const Bottom = styled.div`
  display: flex;
`;
const TextBox = styled.div`
  max-width: 550px;
  
  @media (max-width: 850px) {
      max-width: 90vw;
    }

  .subtitle{
    color: #737373;
    margin-bottom: 40px;
    font-size: 14px;
    max-width: 500px;
   
    
  }
  .text {
    max-width: 600px;
    font-size: 0.8em;
    text-align: justify;
    line-height: 22px;
    margin: 20px 0px;
    @media (max-width: 850px) {
      max-width: 90vw;
    }
    
  }
`;
export default Clinique;
