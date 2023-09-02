import React from "react";
import { styled } from "styled-components";

const Intro = () => {
  return (
    <Container>
      <ColorBox>
        <h1>Centre de médecine sportive des Laurentides</h1>
        <p>Au service des athlètes de la région des Laurentides !</p>
        <button>Prendre Rendez-Vous</button>
      </ColorBox>

      <ImgBox>
        <>IMG</>
      </ImgBox>
    </Container>
  );
};

const Container = styled.section`
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const ColorBox = styled.div`
  background-color: #002b54;
  color: white;
  padding: 15px;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  h1 {
    font-weight: 400;
    font-size: 3em;
    margin-top: 100px;
    margin-bottom: 30px;
    @media (max-width: 1000px) {
      margin-top: 20px;
    }
    @media (max-width: 600px) {
      font-size: 1.8em;
    }
  }

  button {
    background-color: #002b54;
    color: #c2ce21;
    padding: 15px 30px;
    border: 2px solid #c2ce21;
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;
    margin-bottom: 10px;
    transition: 0.4s;
    font-size: 0.8em;
    margin-top: 40px;
    &:hover {
    }
  }
`;

const ImgBox = styled.div`
  width: 70vw;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  @media (max-width: 1000px) {
    width: 100vw;
  }
`;

export default Intro;
