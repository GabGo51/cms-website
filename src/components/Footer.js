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
      <p>Nos horaires varient, clicker <a target="#" href="https://www.google.com/maps/place/Centre+de+M%C3%A9decine+sportive+des+Laurentides/@45.7626211,-74.0030427,17z/data=!3m2!4b1!5s0x4ccf2b505d5850b1:0xaa95fe6431c3e58d!4m6!3m5!1s0x4ccf2b950f2292f7:0xa1b2f2fc9657e2df!8m2!3d45.7626174!4d-74.0004678!16s%2Fg%2F11h3btrsc2?entry=ttu">
          ICI
        </a> pour accéder à l'horaire de cette semaine</p>
        
      </Schedule>
    </Container>
  );
};
const Container = styled.footer`
  display: flex;
  padding: 3vw 5vw;
  justify-content: space-between;
  

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

  @media (max-width: 850px) {
    display: none;
  }
`;
const Content = styled.div`
  margin-bottom: 20px;
  line-height: 20px;
  
  & :nth-child(3) {
    margin-bottom: 2vw;
  }
  span {
    color: #0c60f2;
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 850px) {
    margin-right: 20px;
  }
`;

const Schedule = styled.div`
  line-height: 25px;
  max-width: 300px;
`;

export default Footer;
