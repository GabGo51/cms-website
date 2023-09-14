import React from "react";
import { styled, css } from "styled-components";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const Cmsform = useRef();
  const [form, setForm] = useState(false);

  const toggleForm = () => {
    setForm(!form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ur9h7eg",
        "template_m0t003h",
        Cmsform.current,
        "IIjHDJtlZvXNDz5yE"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <Container id="booking" form={form}>
      <Box>
        <h2>Contacter Nous</h2>
        <p>
          Notre équipe est là pour vous aider, quels que soient vos besoins..
        </p>
        <p>
          Pour les soins d'urgence, veuillez appeler{" "}
          <a href="tel:450-438-0911">450 438-0911</a>
        </p>
        <button onClick={toggleForm}>Prendre Rendez-vous</button>
        <i className="fa-solid fa-angle-down"  style={{ transform: form ? "rotate(180deg)" : "rotate(0deg)" }}></i>
        {form && (
          <form ref={Cmsform} onSubmit={handleSubmit}>
            <InputBox>
              <div>
                <label  for="prenom">Prénom</label>
                <input required type="text" name="user_name" />
              </div>
              <div>
                <label  for="nomdefamille">Nom de famille</label>
                <input required type="text" name="user_lname" />
              </div>
              <div>
                <label for="email">E-mail</label>
                <input required type="email" name="user_email" />
              </div>
              <div>
                <label for="phone">Numéro de telephone</label>
                <input required type="phone" name="user_phone" />
              </div>
            </InputBox>
            <div>
              <label for="message">Décrivez la raison de votre rendez-vous</label>
              <textarea required name="message" />
            </div>
            
            <button  type="submit" value="Send">
              {" "}
              Envoyer
            </button>
          </form>
        )}
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s ease-in-out, max-height 0.5s ease-in-out;
`;

const Box = styled.div`
  width: 80vw;
  border-radius: 30px;
  background-color: #d9d9d9;
  color: #252b42;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0px;
  transition: 0.4s;
  h2 {
    font-weight: 600;
    font-size: 2.5em;
    max-width: 40vw;
    text-align: center;
    margin-bottom: 20px;
    @media (max-width: 800px) {
      font-size: 2em;
    }
  }
  p {
    text-align: center;
    max-width: 43vw;
    margin-bottom: 30px;

    a {
      color: #0c60f2;
      text-decoration: none;
      cursor: pointer;
    }

    @media (max-width: 800px) {
      max-width: 80vw;
    }
  }

  button {
    background-color: #0c60f2;
    color: white;
    padding: 15px 30px;
    border: 2px solid #0c60f2;
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;
    margin-bottom: 10px;
    transition: 0.4s;
    font-size: 0.8em;

    &:hover {
      margin-bottom: 20px;
      font-size: 0.85em;
    }
  }

  i {
    color: #0c60f2;
    scale: 1.5;
    
    
  }

  form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 70vw;
    transition: opacity 0.5s ease-in-out, max-height 0.5s ease-in-out;

    label {
      font-size: 1em;
      font-weight: 600;
      color: #737373;
    }

    input {
      width: 200px;
      border: none;
      border-radius: 5px;
      height: 35px;
      outline: none;
      padding: 10px 20px;
      width: 100%;

      &:focus{
        outline: 2px solid  rgba(12, 96, 242, 0.20);
      }
      
    }
    div{
      width: 100%;
    }

    textarea {
      width: 100%;
      padding: 10px 20px;
      border: none;
      height: 150px;
      border-radius: 5px;
      margin-bottom: 20px;
      resize: none;
      &:focus{
        outline: 2px solid  rgba(12, 96, 242, 0.20);
      }

    }
  }
`;

const InputBox = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  flex-wrap: wrap;

  div {
    
    flex-basis: 48%;
    margin-bottom: 10px;
    @media (max-width: 500px) {
      flex-basis: 80%;
    }
  }
`;

export default Form;
