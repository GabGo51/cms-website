import React from 'react'
import { styled } from 'styled-components'

const Team = () => {
  return (
    <Container>
      <h2>NOTRE ÉQUIPE</h2>
      <Box>
        <div></div>
        <div></div>
        <div></div>
        
      </Box>

    </Container>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color:#002B54 ;
color: white;
h2{
    font-weight: 400;
    font-size: 2em;
    margin-bottom: 20px;
  }
`

const Box = styled.div`
display: flex;
div{
  width:10vw ;
  height: 10vw;
  background-color: white;
  margin: 20px 40px;
  border-radius: 50%;

}

`

export default Team