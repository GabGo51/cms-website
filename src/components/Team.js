import React from "react";
import { styled } from "styled-components";

const Team = () => {
  return (
    <Container id="team">
      <h2>NOTRE ÉQUIPE</h2>
      <Box>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #002b54;
  color: white;
  padding: 100px;
  h2 {
    font-weight: 400;
    font-size: 2em;
    margin-bottom: 20px;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  div {
    width: 200px;
    height: 200px;
    background-color: white;
    margin: 20px 40px;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    border-bottom-left-radius:50%;
    

  }
`;

export default Team;
