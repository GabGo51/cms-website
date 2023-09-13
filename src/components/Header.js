import React, { useState } from "react";
import styled from "styled-components";
import Logo1 from "../img/logo2.gif";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      <NavWrapper>
        <Logo>
          <img src={Logo1} alt="Logo" />
        </Logo>
        <Services>
          <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
          <ul className={isOpen ? "open" : ""}>
            <li onClick={() => scrollToRef("intro")}>CLINIQUE</li>
            <li onClick={() => scrollToRef("service")}>SERVICES</li>
            <li onClick={() => scrollToRef("team")}>ÉQUIPE</li>
            <li onClick={() => scrollToRef("location")}>LOCALISATION</li>
            <li onClick={() => scrollToRef("booking")}>PRENDRE RENDEZ-VOUS</li>
          </ul>
        </Services>
      </NavWrapper>
    </Container>
  );
};

const Container = styled.header`  
  width:100%;
  h1 {
    font-weight: 500;
    font-size: 3em;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0vw 2vw;
  background-color: white;
  color: black;
  position: relative;

  li {
    color: #002b54;
    text-decoration: none;
    padding: 10px 0px;
    transition: 0.4s;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    margin-right: 4vw;
    @media (min-width: 900px) {
      &:hover {
        border-bottom: 1px solid #c2ce21;
        transform: translateY(-5%);
      }
    }
    @media (max-width: 900px) {
      &:hover {
        background-color: #dcdcdc;
      }
    }
  }
`;

const Logo = styled.div`
  img {
    width: 13vw;
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
    transition: 400ms;

    &:hover {
      scale: 1.3;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;

    li:last-child {
      background-color: #a1ac00;
      color: white;
      font-weight: 600;
      padding: 10px 20px;
      border-radius: 10px;
      white-space: nowrap;
      border: 2px solid #a1ac00;
      &:hover {
        background-color: white;
        color: #a1ac00;
      }
    }
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
      background-color: white;
      width: 80vw;
    }

    li {
      margin-right: 0;
      padding: 10px;
      width: 100%;
      /* text-align: center; */
      border-bottom: 1px solid #555;
    }

    /* Show the menu when isOpen state is true */
    ul.open {
      display: flex;

      li:last-child {
        border-radius: 0;
        border-bottom: none;
        font-weight: 600;
        border-radius: 0px;
        border: none;
        padding: 10px;
      }
    }
  }
`;

export default Header;
