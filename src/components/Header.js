import React, { useState } from 'react';
import styled from "styled-components";
import Logo1 from "../img/logo1.png"
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <NavWrapper>
        <Logo>
          <img src={Logo1} alt="Logo" />
        </Logo>
        <Services>
          <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
          <ul className={isOpen ? 'open' : ''}>
            <li><a href="#">NOTRE CLINIQUE</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">ÉQUIPE</a></li>
            <li><a href="#">LOCALISATION</a></li>
            <li><a href="#">RENDEZ-VOUS</a></li>
          </ul>
        </Services>
      </NavWrapper>
      <h1>Au service des athlètes
     de la région des Laurentides</h1>
    </Container>
    
    
  );
};

const Container = styled.header`

`

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw 2vw;
  background-color: white;
  color: black;
  position: relative;

  a {
    color: black;
    text-decoration: none;
  }
`;

const Logo = styled.div`
  img {
    width:13vw; 
    height: auto;
    margin-left: 1vw;
  @media (max-width: 500px) {
    width: 20vw;
  }
  }
  
`;

const Services = styled.nav`
  i {
    display: none;
    transform: translateX(-100%);
    scale: 1.2;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
  }

  li {
    margin-right: 5vw;
  }

  /* Media query for responsive design */
  @media (max-width: 900px) {
    i {
      display: block;
    }

    ul {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 10%;
      background-color:white;
      width: 80vw;
    }

    li {
      margin-right: 0;
      padding: 10px;
      width: 100%;
      /* text-align: center; */
      border-bottom: 1px solid #555;

      &:last-child {
        border-bottom: none;
        font-weight: 600;
      }
    }

    /* Show the menu when isOpen state is true */
    ul.open {
      display: flex;
    }
  }
`;

export default Header;