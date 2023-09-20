import React from "react";
import { styled } from "styled-components";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import loadingCircle from "../img/loading.gif";

const Form = () => {
  const Cmsform = useRef();
  const [neww, setNeww] = useState(false);
  const [old, setOld] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const toggleNew = () => {
    setNeww(!neww);
    setOld(false);
  };

  const toggleOld = () => {
    setOld(!old);
    setNeww(false);
    console.log("hehe");
  };

  const handleSubmit = (e) => {
    //do an if statement depending on the state and use a different template
    e.preventDefault();
    setLoading(true);

    if (neww) {
      emailjs
        .sendForm(
          "service_ur9h7eg",
          "template_m0t003h",
          Cmsform.current,
          "IIjHDJtlZvXNDz5yE"
        )
        .then(
          function (response) {
            setLoading(false);
            setNeww(false);
            console.log("SUCCESS!", response.status, response.text);
            console.log("new");
            Cmsform.current.reset();
            setSent(true);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    }
    if (old) {
      emailjs
        .sendForm(
          "service_ur9h7eg",
          "template_5qhwo5l",
          Cmsform.current,
          "IIjHDJtlZvXNDz5yE"
        )
        .then(
          function (response) {
            setLoading(false);
            setOld(false);
            console.log("SUCCESS!", response.status, response.text);
            console.log("old");
            Cmsform.current.reset();
            setSent(true);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    }
  };

  return (
    <Container neww={neww} old={old} id="booking">
      <Box>
        <h2>Contacter Nous</h2>
        <p>
          Notre équipe est là pour vous aider, quels que soient vos besoins..
        </p>
        <p>
          Pour les soins d'urgence, veuillez appeler{" "}
          <a href="tel:450-438-0911">450 438-0911</a>
        </p>
        <ButtonContainer>
          <button onClick={toggleNew}>New Client</button>
          <button onClick={toggleOld}>Old Client</button>
        </ButtonContainer>

        <i
          className="fa-solid fa-angle-down"
          style={{ transform: neww || old ? "rotate(180deg)" : "rotate(0deg)" }}
        ></i>
        {sent && (
          <SentMessage>
            <p>
              Votre requete est<span> envoyé </span>! Nous allons vous contactez
              dans les plus bref délai.
            </p>
          </SentMessage>
        )}
        {neww && (
          <form neww={neww} ref={Cmsform} onSubmit={handleSubmit}>
            <InputBox>
              <div>
                <label>Prénom</label>
                <input required type="text" name="user_name" />
              </div>
              <div>
                <label>Nom de famille</label>
                <input required type="text" name="user_lname" />
              </div>
              <div>
                <label>E-mail</label>
                <input required type="email" name="user_email" />
              </div>
              <div>
                <label>Numéro de telephone</label>
                <input required type="phone" name="user_phone" />
              </div>
              <div>
                <label>Date de naissance</label>
                <input required type="date" name="user_date" />
              </div>
              <div>
                <label># Assurance maladie</label>
                <input required type="text" name="user_am" />
              </div>
              <div className="select-box">
                <label> Sexe </label>
                <select className="select" required name="user_sexe">
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                  <option value="Autres">Autres</option>
                  <option value="Prefere ne pas mentionné">
                    Je préfrere ne pas le mentionné{" "}
                  </option>
                </select>
              </div>

              <div className="select-box">
                <label> Avez-vous une demande d'injection ? </label>
                <select className="select" required name="user_injection">
                  <option value="Aucune">Aucune</option>
                  <option value="Cortisone">Cortisone</option>
                  <option value="Viscosupléant">Viscosupléant</option>
                  <option value="Autres">Autres</option>
                </select>
              </div>
              <div className="select-box">
                <label> Avez-vous une demande de consultation ? </label>
                <select className="select" required name="user_consultation">
                  <option value="Aucune">Aucune</option>
                  <option value="Physio">Physio</option>
                  <option value="Ostéo">Ostéo</option>
                  <option value="Kiro">Kiro</option>
                  <option value="Autres">Autres</option>
                </select>
              </div>
              <div>
                <label>Accident de voiture (SAAQ) ?</label>
                <div className="radio">
                  <label>Oui</label>
                  <input
                    type="radio"
                    id="accidentSAAQOui"
                    name="user_car"
                    value="Oui"
                  />
                  <label>Non</label>
                  <input
                    type="radio"
                    id="accidentSAAQNon"
                    name="user_car"
                    value="Non"
                  />
                </div>
              </div>
              <div>
                <label>Accident sportif ?</label>
                <div className="radio">
                  <label>Oui</label>
                  <input
                    type="radio"
                    id="accidentSportifYes"
                    name="user_sport"
                    value="oui"
                  />
                  <label>Non</label>
                  <input
                    type="radio"
                    id="accidentSportifNo"
                    name="user_sport"
                    value="Non"
                  />
                </div>
              </div>
            </InputBox>
            <div>
              <label for="message">
                Décrivez la raison de votre rendez-vous
              </label>
              <textarea required name="message" />
            </div>
            {loading ? (
              <button type="submit" value="Send">
                {" "}
                <Loading src={loadingCircle} />
              </button>
            ) : (
              <button type="submit" value="Send">
                {" "}
                Envoyer
              </button>
            )}
          </form>
        )}
        {old && (
          <form old={old} ref={Cmsform} onSubmit={handleSubmit}>
            <InputBox>
              <div>
                <label>Prénom</label>
                <input required type="text" name="user_name" />
              </div>
              <div>
                <label>Nom de famille</label>
                <input required type="text" name="user_lname" />
              </div>
            </InputBox>
            <div>
              <label>Décrivez la raison de votre rendez-vous</label>
              <textarea required name="message" />
            </div>

            <button type="submit" value="Send">
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
  width: 100vw;
`;

const Box = styled.div`
  width: 85vw;
  border-radius: 30px;
  background-color: rgba(12, 96, 242, 0.1);
  color: #252b42;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0px;
  transition: 0.4s;
  @media (max-width: 800px) {
    width: 100vw;
  }
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 55px;
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
    margin: 10px;

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

      &:focus {
        outline: 2px solid rgba(12, 96, 242, 0.2);
      }
    }
    div {
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
      &:focus {
        outline: 2px solid rgba(12, 96, 242, 0.2);
      }
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const SentMessage = styled.div`
  margin-top: 50px;
  padding: 20px;
  background-color: white;
  width: 60%;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  p{
    margin-top: 20px;
  }

  span {
    color: #1ad334;
    margin: 0px 5px;
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

  .radio {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .select-box {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  .select {
    height: 35px;
    border: none;
    padding: 5px 20px;
    border-radius: 5px;
    &:focus {
      outline: 2px solid rgba(12, 96, 242, 0.2);
    }
  }
`;

const Loading = styled.img`
  scale: 0.25;
`;

export default Form;
