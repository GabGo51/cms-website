import React from 'react'
import { styled, css } from 'styled-components'
import { useState } from 'react'

const Form = () => {
  
  const [form, setForm] = useState(false)

  const toggleForm = () => {
    setForm(!form);
  };

  return (
    <Container form = {form}>
      <h2>RENDEZ-VOUS EN LIGNE</h2>
      <p>Vous pouvez nous transmettre vos information ici et nous allons vous contacter par la suite</p>
      <button onClick={toggleForm}>Prendre Rendez-vous</button>
      <i class="fa-solid fa-angle-down" form = {form}></i>
      {form &&(
        <form>

          
        </form>
      )}
      
    </Container>
  )
}

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
h2{
  font-weight: 500;
  font-size: 3em;
  width: 40vw;
  text-align: center;
  line-height: 50px;
  margin-bottom: 35px;
}
 p{
  text-align: center;
  width: 50vw;
  margin-bottom: 40px;
 }

 button{
  background-color: #002b54;
  color: #c2ce21;
  padding:  15px 30px;
  border: 2px solid #c2ce21;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 10px;
  transition: 0.4s;
  font-size: 0.8em;

  &:hover{
    margin-bottom: 20px;
    font-size: 0.85em;
  }
 }

 i{
  color: #c2ce21;
  scale: 1.5;
  ${props => props.form && css`
    transform: rotateX(180deg);
  `}
 }
`

export default Form