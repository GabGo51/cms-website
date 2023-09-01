import React from 'react'
import { styled } from 'styled-components'

const Booking = () => {

  return (
    <Container>
      <New> NOUVEAU PATIENT</New>
      <Old> MEMBRE </Old>

    </Container>
  )
}

const Container = styled.section`
display: flex;
align-items: center;
justify-content: center;

`

const New = styled.section`
border: 1px solid black;
width: 170px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 10vw;
padding: 10px 0px;
border-radius: 20px;
`
const Old = styled.section`
border: 1px solid black;
width: 170px;
display: flex;
align-items: center;
justify-content: center;
padding: 10px 20px;
border-radius: 20px;
`

export default Booking