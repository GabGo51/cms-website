import React from "react";
import { styled, css } from "styled-components";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser"

const Form = () => {
  const Cmsform = useRef()
  const [form, setForm] = useState(false);

  const toggleForm = () => {
    setForm(!form);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm("service_ur9h7eg", "template_m0t003h", Cmsform.current, "IIjHDJtlZvXNDz5yE")
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
   }, function(error) {
      console.log('FAILED...', error);
   });

  }

  return (
    <Container form={form}>
      <h2>RENDEZ-VOUS EN LIGNE</h2>
      <p>
        Remplissez le formulaire ci-dessous et nous vous contacterons dans les
        plus brefs délais. Pour les soins d'urgence, veuillez appeler{" "}
        <span>450 438-0911</span>{" "}
      </p>
      <button onClick={toggleForm}>Prendre Rendez-vous</button>
      <i className="fa-solid fa-angle-down" form={form}></i>
      {form && (
        <form ref={Cmsform} onSubmit={handleSubmit}>
          <InputBox>
            <input type="text" name="user_name"/>
            <input type="email" name="user_email" />
            <input type="phone" name="user_phone" />
            
          </InputBox>
          
          <textarea name="message"/>
          <button disabled = {true} type="submit" value="Send"> Envoyer</button>
          
        </form>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  background-color: #002b54;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0px;
  transition: 0.4s;
  h2 {
    font-weight: 500;
    font-size: 3em;
    max-width: 40vw;
    text-align: center;
    line-height: 50px;
    margin-bottom: 35px;
    @media (max-width: 800px) {
      font-size: 2.5em;
      max-width: 100vw;
    }
  }
  p {
    text-align: center;
    max-width: 43vw;
    margin-bottom: 40px;

    span {
      color: #c2ce21;
    }

    @media (max-width: 800px) {
      max-width: 80vw;
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

    &:hover {
      margin-bottom: 20px;
      font-size: 0.85em;
    }
  }

  i {
    color: #c2ce21;
    scale: 1.5;
    transition: 0.5 ease-out;
    ${(props) =>
      props.form &&
      css`
        transform: rotateX(180deg);
      `}
  }

  form {
    margin-top: 30px;
    display:flex;
    flex-direction:column ;
    align-items:center;
    justify-content:center
  }
`;

const InputBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
width: 300px;

input{
  margin: 20px;
  border-radius: 20px;
  height: 35px;
  outline: none;
  padding: 10px 20px;
  width: 100%;

}

`



export default Form;
