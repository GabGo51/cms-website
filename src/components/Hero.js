import React from "react";
import styled from "styled-components";
import photo from "../img/photo.png";
import mountain from '../img/mountain.png'
import { useState, useEffect } from "react";



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
            PRENDRE RENDEZ-VOUS
          </button>
        </TextBox>
        <ImageBox>
          
          <img className="photo" src={photo}/>
          <img className="mountain" src={mountain}/>
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
  align-items: center;
  max-width: 1225px;

  @media (max-width: 850px) {
    width: 100vw;
    
  }

  @media (max-width: 750px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    
  }
`;

const TextBox = styled.div`
  max-width: 700px;
  min-width: 300px;
  margin-top: 70px;
  margin-right: 100px;
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

  @media (max-width: 1170px) {
    padding-left: 20px;
    h1{
      font-size: 40px;
    }
    p{
      max-width: 400px;
    }

    
  }

  @media (max-width: 950px) {
    margin-bottom: 50px;
    margin-right: 0px;
    p{
      font-size: 14px;
    }
  }
`;

const ImageBox = styled.div`
  position: relative;
  margin: 20px;

  .mountain{
    width: 500px;
    transform: translateY(-28%);
    filter: brightness(105%);
    animation: fadeIn 500ms forwards; /* Apply the fade-in animation */
    @media (max-width: 550px) {
      width: 400px;
  }
  }
  

  .photo {
    display: block;
    transform: translate(-15%,-20%);
    width: 480px;
    position: absolute;
    z-index: 200;
    opacity: 0;
    animation: fadeIn 500ms forwards; /* Apply the fade-in animation */
    animation-delay: 500ms;
    @media (max-width: 1000px) {
      width: 380px;
      transform: translate(-20%, 0%);
    }

    @media (max-width: 550px) {
      transform: translate(-8%, -20%);
      width: 320px;
  }
  }

  @media (max-width: 750px) {
      padding: 50px 0px;
    }


@keyframes fadeIn {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
`;
