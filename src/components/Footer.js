import React from "react";
import { styled } from "styled-components";

const Footer = () => {

  const scrollToRef = (id) => {
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      console.log("hello");
    }else{
      console.log("u dumb");
    }
  };
  return (
    <Container>
      <Nav>
        <ul>
          <li onClick={() => scrollToRef("intro")}>Clinique</li>
          <li onClick={() => scrollToRef("service")}>Services</li>
          <li onClick={() => scrollToRef("team")}>Équipe</li>
          <li onClick={() => scrollToRef("location")}>Localisation</li>
          <li onClick={() => scrollToRef("booking")}>Rendez-vous</li>
        </ul>
      </Nav>
      <Content>
        <h4>Centre de médecine sportive des Laurentides</h4>
        <p>305, rue du Docteur Charles Léonard, Suite 200</p>
        <p>St-Jérôme, Qc, J7Y 0M9</p>
        <p>Téléphone : 450 438-0911</p>
        <p>FAX : 450 436-2719</p>
        <p>Email: </p>
      </Content>
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
const Container = styled.div`
  display: flex;
  padding: 10px 50px;
  justify-content: space-between;

  h4 {
    font-weight: 600;
    
  }

  p {
    color: #7C7C7C ;
    font-size: 0.9em;
    
  }

  @media (max-width:500px){
    padding: 10px 20px;
  }
`;

const Nav = styled.nav`
  li {
    margin-bottom: 20px;
    transition: 300ms;
    cursor: pointer;

    &:hover{
      color: #c2ce21;
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
const Content = styled.div`
  margin-bottom: 20px;
  line-height: 20px;
  width: 50vw;
  & :nth-child(3) {
    margin-bottom: 2vw;
  }
`;

const Schedule = styled.div`
  line-height: 25px;
`;

export default Footer;
