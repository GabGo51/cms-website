import React, { useState } from 'react';
import styled from "styled-components";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderWrapper>
      <Logo>
        <img src="logo.png" alt="Logo" />
      </Logo>
      <Services>
        <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
        <ul className={isOpen ? 'open' : ''}>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">SERVICES</a></li>
          <li><a href="#">TEAM</a></li>
          <li><a href="#">FIND US</a></li>
          <li><a href="#">BOOK NOW</a></li>
        </ul>
      </Services>
    </HeaderWrapper>
    // Au service des athlètes
    // de la région des Laurentides
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  background-color: #333;
  color: white;
  position: relative;

  a {
    color: white;
    text-decoration: none;
  }
`;

const Logo = styled.div`
  img {
    width: 100px; /* Adjust the width as needed */
    height: auto;
  }
`;

const Services = styled.nav`
  i {
    display: none;
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
  @media (max-width: 1000px) {
    i {
      display: block;
    }

    ul {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 10%;
      background-color: #333;
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