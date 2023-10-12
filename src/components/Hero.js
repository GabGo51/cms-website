import React from 'react'
import styled from 'styled-components'
import Marc from "../img/hero marc.png"

const Hero = () => {

  const scrollToRef = (id) => {
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      
    }else{
      
    }
  };
  return (
    <Container>
      <Box>
        <TextBox>
          <h1> Votre Santé Sportive, Notre Passion.</h1>
          <p>Nous nous spécialisons dans l’évaluation et le traitement de blessures sportives ainsi que dans le suivi médical préventif d’athlètes de tous âges.</p>
          <button onClick={() => scrollToRef("booking")}> PRENDRE RENDEZ VOUS</button>
        </TextBox>
        <ImageBox>
          <img src={Marc}/>
          <div className='design'>
            <div className='green'></div>
            <div className='white'></div>
          </div>
          
        </ImageBox>


      </Box>
    </Container>
  )
}

export default Hero

const Container = styled.div`
background-color:#0C60F2 ;
color: white;
width: 100vw;
display: flex;

align-items: center;
justify-content: center;
padding: 50px 0px;

h1{
  color: white;
  margin-bottom: 40px;
  font-family: Poppins;
  @media (max-width: 850px) {
      font-size: 1.5em;
    }
}
button {
  background-color: white;
  color: #0C60F2;
      font-weight: 600;
      padding: 10px 20px;
      border-radius: 10px;
      white-space: nowrap;
      border: 2px solid white;
      transition: 200ms;
      font-size: 16px;
      &:hover {
        
        background-color: #0C60F2;
        color: white;
      }
}

p{
  margin-bottom: 40px;
}

`

const Box = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
width: 70vw;
`

const TextBox = styled.div`
max-width: 600px;
min-width: 400px;
margin-top: 70px;

`

const ImageBox = styled.div`
  position: relative;

  img{
    display: block;
    width: 340px;
    
    position: relative;
    z-index: 200;
  }
  .design{
    position: absolute;
    top: 20px;
    left: -10px;
    
  }
  .green{
    width: 275px;
    height: 100px;
    background-color: #C7D324;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
    margin-bottom: 15px;

  }

  .white{
    width: 365px;
    height: 375px;
    background-color: white;
    border-top-right-radius: 30%;
    border-bottom-left-radius: 30%;
  }

`