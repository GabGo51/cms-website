import React from "react";
import { styled } from "styled-components";

const Footer = () => {
  const scrollToRef = (id) => {
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      console.log("hello");
    } else {
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
        <p>
          Téléphone :<a href="tel:450-438-0911"> 450 438-0911</a>
        </p>
        <p>
          FAX : <span>450 436-2719 </span>{" "}
        </p>
        <p>
          Email: <span>123emailahah@gmail.com</span>
        </p>
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
  padding: 3vw 10vw;
  justify-content: space-between;
  /* background-color:rgb(203, 203, 203, 0.5); */

  h4 {
    font-weight: 600;
  }

  p {
    color: #7c7c7c;
    font-size: 0.9em;
  }

  @media (max-width: 500px) {
    padding: 10px 20px;
  }
`;

const Nav = styled.nav`
  li {
    margin-bottom: 20px;
    transition: 300ms;
    cursor: pointer;

    &:hover {
      color: #0c60f2;
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
  span {
    color: #0c60f2;
  }
  a {
    text-decoration: none;
  }
`;

const Schedule = styled.div`
  line-height: 25px;
`;

export default Footer;
