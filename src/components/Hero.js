import React from "react";
import styled from "styled-components";
import Marc from "../img/Marc.webp";

//Hero compo displaying Title, imgs and booking button
const Hero = () => {

  //function to make the booking button scroll to form 
  const scrollToRef = (id) => {
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
    }
  };

  
  return (
    <Container>
      <Box>
        <TextBox>
          <h1> Votre Santé Sportive, Notre Passion.</h1>
          <p>
            Nous nous spécialisons dans l’évaluation et le traitement de
            blessures sportives ainsi que dans le suivi médical préventif
            d’athlètes de tous âges.
          </p>
          <button onClick={() => scrollToRef("booking")}>
            {" "}
            PRENDRE RENDEZ VOUS
          </button>
        </TextBox>
        <ImageBox>
          <img src={Marc} />
          <div className="design">
            <div className="green"></div>
            <div className="white"></div>
          </div>
        </ImageBox>
      </Box>
    </Container>
  );
};

export default Hero;


const Container = styled.section`
  background-color: #0c60f2;
  color: white;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
 

  h1 {
    color: white;
    margin-bottom: 40px;
    max-width: 700px;
    font-weight: 600;
    font-family: Poppins;
    font-size: 60px;
    @media (max-width: 850px) {
      font-size: 32px;
    }
  }
  button {
    background-color: white;
    color: #0c60f2;
    font-weight: 600;
    padding: 10px 20px;
    border-radius: 10px;
    white-space: nowrap;
    border: 2px solid white;
    transition: 200ms;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      background-color: #0c60f2;
      color: white;
    }
  }

  p {
    margin-bottom: 40px;
    font-size: 20px;
    font-weight: 400;
    max-width: 650px;
    line-height: 30px;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  
  max-width: 1225px;

  @media (max-width: 850px) {
    width: 90vw;
    
  }

  @media (max-width: 550px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    
  }
`;

const TextBox = styled.div`
  max-width: 700px;
  min-width: 350px;
  margin-top: 70px;
  margin-right: 80px;

  @media (max-width: 850px) {
    margin-bottom: 50px;
    margin-right: 0px;

    p{
      font-size: 14px;
    }
  }
`;

const ImageBox = styled.div`
  position: relative;

  img {
    display: block;
    width: 340px;
    position: relative;
    z-index: 200;
    opacity: 0;
    animation: fadeIn 0.5s forwards; /* Apply the fade-in animation */
    animation-delay: 1s;
    @media (max-width: 850px) {
      width: 250px;
    }
  }
  .design {
    position: absolute;
    top: 20px;
    left: -10px;
    
    @media (max-width: 850px) {
      top: -5px;
    }
  }
  .green {
    width: 275px;
    height: 100px;
    opacity: 0;
    background-color: #c7d324;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
    margin-bottom: 15px;
    animation: fadeIn 0.5s forwards; /* Apply the fade-in animation */
    animation-delay: 600ms;
    @media (max-width: 850px) {
      width: 200px;
      height: 75px;
    }
  }

  .white {
    width: 365px;
    height: 375px;
    opacity: 0;
    background-color: white;
    border-top-right-radius: 30%;
    border-bottom-left-radius: 30%;
    animation: fadeIn 0.5s forwards; /* Apply the fade-in animation */
    animation-delay: 800ms;
    @media (max-width: 850px) {
      width: 280px;
      height: 290px;
    }
  }

  @keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`;
