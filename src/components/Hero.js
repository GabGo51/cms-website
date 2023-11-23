import React from "react";
import styled from "styled-components";
import photo4 from "../img/photo4.png";
import photo3 from "../img/photo3.png";
import run from "../img/DUDE.webp";
import { useState, useEffect } from "react";

const images = [photo4,photo3,run]

//Hero compo displaying Title, imgs and booking button
const Hero = () => {

  const [img, setImg] = useState(photo3) 

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Get the index of the next image
      const currentIndex = images.indexOf(img);
      const nextIndex = (currentIndex + 1) % images.length;

      // Set the new image
      setImg(images[nextIndex]);
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [img]); // Re-run effect when img changes

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
          {img === photo4 && <img className="photo4" src={img}/>}
          {img === photo3 && <img className="photo3" src={img}/>}
          {img === run && <img className="run" src={img}/>}
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
  margin: 20px;
  .run {
    display: block;
    transform: translate(45%,-2%);
    width: 180px;
    position: absolute;
    z-index: 200;
    opacity: 0;
    animation: fade 5s forwards; /* Apply the fade-in animation */
    @media (max-width: 1000px) {
      width: 140px;
      transform: translate(40%, -2%);
    }
    @media (max-width: 750px) {
      width: 140px;
      transform: translate(60%, -2%);
    }
  }

  .photo4 {
    display: block;
    transform: translate(-20%,2%);
    width: 480px;
    position: absolute;
    z-index: 200;
    opacity: 0;
    animation: fade 5s forwards; /* Apply the fade-in animation */
    @media (max-width: 1000px) {
      width: 380px;
      transform: translate(-20%, 0%);
    }
  }

  .photo3 {
    display: block;
    width: 1000px;
    position: absolute;
    transform: translate(-35%, -23%);
    z-index: 200;
    opacity: 0;
    animation: fade 5s forwards; /* Apply the fade-in animation */
    @media (max-width: 1000px) {
      width: 780px;
      transform: translate(-35%, -23%);
    }
  }
  .design {
  
    @media (max-width: 1000px) {
      top: -5px;
      left: -40px;
    }
    @media (max-width: 750px) {
      top: 0;
      left: 20px;
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
    @media (max-width: 1000px) {
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
    @media (max-width: 1000px) {
      width: 280px;
      height: 290px;
    }
  }

  @keyframes fade {
  0%{
    opacity: 0;
  }
  10%{
    opacity: 1;
  }
  90%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
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
