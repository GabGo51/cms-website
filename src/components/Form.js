import React from "react";
import { styled, keyframes } from "styled-components";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import loadingCircle from "../img/loading.gif";

//Form Components containing both the new client and old client form with a EMAILJS setup to send an email directly to the company.

const Form = () => {
  const Cmsform = useRef();
  //tracking when new or old should be displayed
  const [neww, setNeww] = useState(false);
  const [old, setOld] = useState(false);
  //tracking loading state and confirmation message condition
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const toggleNew = () => {
    setNeww(!neww);
    setOld(false);
    setSent(false);
  };

  const toggleOld = () => {
    setOld(!old);
    setNeww(false);
    setSent(false);
  };

  //function sending the email depending on the state chosen (old vs new) using emailjs
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (neww) {
      emailjs
        .sendForm(
          "service_ug7744i",
          "template_idc6z7d",
          Cmsform.current,
          "lphnUQ_pFhBd7zGX2"
        )
        .then(
          function (response) {
            setLoading(false);
            setNeww(false);
            console.log("SUCCESS!", response.status, response.text);
            console.log("new");
            Cmsform.current.reset();
            scrollToRef("booking");
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
          "service_ug7744i",
          "template_4a4y7ie",
          Cmsform.current,
          "lphnUQ_pFhBd7zGX2"
        )
        .then(
          function (response) {
            setLoading(false);
            setOld(false);
            console.log("SUCCESS!", response.status, response.text);
            console.log("old");
            Cmsform.current.reset();
            scrollToRef("booking");
            setSent(true);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    }
  };

  //make sure you get the confirmation display when the form is sent (mostly for phone design)
  const scrollToRef = (id) => {
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Container neww={neww} old={old} id="booking">
      <Box neww={neww} old={old}>
        <p className="intro">Prise de Rendez-Vous</p>
        <h2>Contactez Nous</h2>
        <p>
          Notre équipe est à votre disposition pour tenter de répondre et
          trouver des solutions adaptées à vos besoins.
        </p>
        {sent ? (
          <></>
        ) : (
          <ButtonContainer>
            <button onClick={toggleNew}>Première visite</button>
            <button onClick={toggleOld}>RV de suivi / Patient connu</button>
          </ButtonContainer>
        )}

        {sent ? (
          <></>
        ) : (
          <i
          className="fa-solid fa-angle-down"
          style={{ transform: neww || old ? "rotate(180deg)" : "rotate(0deg)" }}
        ></i>
        )}

        
        {sent && (
          <SentMessage>
            <p>
              Votre requête est<span> envoyée </span>! Nous allons vous
              contacter dans les plus brefs délais.
            </p>
          </SentMessage>
        )}
        {/* Form for New Clients */}
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
              <div className="select-box">
                <label> Sexe </label>
                <select className="select" required name="user_sexe">
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                  <option value="Autres">Autres</option>
                  <option value="Préfère ne pas mentionner">
                    Je préfrere ne pas le mentionné{" "}
                  </option>
                </select>
              </div>
              <div>
                <label>Date de naissance </label>
                <input required type="date" name="user_date" />
              </div>
              <div>
                <label>E-mail</label>
                <input required type="email" name="user_email" />
              </div>
              <div>
                <label>Numéro de téléphone</label>
                <input required type="phone" name="user_phone" />
              </div>

              <div>
                <label># Assurance maladie</label>
                <input required type="text" name="user_am" />
              </div>

              <div className="select-box">
                <label> Avez-vous une demande d'infiltration ? </label>
                <select className="select" required name="user_injection">
                  <option value="Aucune">Aucune</option>
                  <option value="Cortisone">Cortisone</option>
                  <option value="Viscosupléant">Viscosuppléant</option>
                  <option value="PRP">PRP (Plasma riche en plaquette)</option>
                </select>
              </div>
              <div className="select-box">
                <label> Avez-vous une demande de consultation ? </label>
                <div className="radio">
                  <label>Oui</label>
                  <input
                    type="radio"
                    id="accidentSportifYes"
                    name="user_consultation"
                    value="oui"
                  />
                  <label>Non</label>
                  <input
                    type="radio"
                    id="accidentSportifNo"
                    name="user_consultation"
                    value="Non"
                  />
                </div>
              </div>

              <div>
                <label>Blessure lors d'une activité sportive ?</label>
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
                Décrivez le motif de votre demande de Rendez-vous
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
        {/* Form for Old Clients */}
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
              <div>
                <label>Date de naissance </label>
                <input required type="date" name="user_date" />
              </div>
              <div>
                <label>E-mail</label>
                <input required type="email" name="user_email" />
              </div>
              <div>
                <label>Numéro de téléphone</label>
                <input required type="phone" name="user_phone" />
              </div>
              <div className="select-box">
                <label> Choisir votre medecin </label>
                <select className="select" required name="user_medecin">
                  <option selected value="Aucune Préférence">
                    Aucune Préférence
                  </option>
                  <option value="Marc Gosselin">Marc Gosselin MD</option>
                  <option value="Eric Higgins">Eric Higgins MD</option>
                  <option value="Marieve Lefebvre">Marieve Lefebvre MD</option>
                </select>
              </div>
            </InputBox>
            <div>
              <label>Décrivez le motif de votre demande de Rendez-vous</label>
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
      </Box>
    </Container>
  );
};

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s ease-in-out, max-height 0.5s ease-in-out;
  width: 100vw;
`;

const Box = styled.div`
  transition: 500ms;
  width: ${({ neww, old }) => (neww || old ? "100vw" : "1100px")};
  border-radius: 30px;
  background-color: #cbdeff;
  color: #252b42;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0px;
  transition: 0.4s;
  @media (max-width: 850px) {
    width: 100vw;
  }
  .intro {
    color: #0c60f2;
    font-size: 14px;
    font-weight: 800;
    margin-bottom: 10px;
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
    width: 170px;
    height: 60px;
    background-color: #0c60f2;
    color: white;
    padding: 5px 30px;
    border: 2px solid #0c60f2;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 10px;
    transition: 0.4s;
    font-size: 14px;
    margin: 10px;

    &:hover {
      transform: translateY(5%);
      scale: 1.03;
    }
  }

  i {
    color: #0c60f2;
    scale: 1.5;
    margin-top: 20px;
  }

  form {
    animation: ${fadeInAnimation} 1s forwards;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60vw;
    transition: opacity 0.5s ease-in-out, max-height 0.5s ease-in-out;

    @media (max-width: 850px) {
      width: 85vw;
    }

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
      font-size: 16px; //prevent zoom on mobile coool to know
      background-color: white;
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
      font-size: 16px; //prevent zoom on mobile coool to know
      &:focus {
        outline: 2px solid rgba(12, 96, 242, 0.2);
      }
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  button {
    margin: 1vw 4.7vw;
  }
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

  p {
    margin-top: 20px;
    max-width: 450px;
  }

  span {
    color: #1ad334;
    margin: 0px 5px;
  }
  @media (max-width:900px) {
    width: 90%;
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
    input {
      margin-right: 10px;
    }
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
    background-color: white;

    &:focus {
      outline: 2px solid rgba(12, 96, 242, 0.2);
    }
  }
`;

const Loading = styled.img`
  height: 50px;
`;

export default Form;
