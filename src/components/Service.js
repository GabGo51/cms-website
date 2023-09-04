import React from 'react'
import { styled } from 'styled-components'
import swim from "../img/swim.jpg"
const Service = () => {
  return (
    <Container>
      <h2>NOS SERVICES</h2>
      <Box>
        <Card>
          <h3>Consultation musculo-squeletique</h3>
          <div className='greenDiv'></div>
          <p>Sur référence de votre médecin.Évaluation et traitement de blessures musculo-squelettiques, soit occasionées par l’activité …</p>
          <img src={swim}/>
        </Card>
        <Card>
          <h3>Consultation musculo-squeletique</h3>
          <div className='greenDiv'></div>
          <p>Sur référence de votre médecin.Évaluation et traitement de blessures musculo-squelettiques, soit occasionées par l’activité …</p>
          <img src={swim}/>
        </Card>
        <Card>
          <h3>Consultation musculo-squeletique</h3>
          <div className='greenDiv'></div>
          <p>Sur référence de votre médecin.Évaluation et traitement de blessures musculo-squelettiques, soit occasionées par l’activité …</p>
          <img src={swim}/>
        </Card>


      </Box>


    </Container>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h2{
    font-weight: 400;
    font-size: 2em;
    margin-bottom: 20px;
    color: #002B54;
  }
`

const Box = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 40px;
flex-wrap: wrap;
`

const Card = styled.div`
display: flex;
flex-direction: column;
width: 400px;
height: 500px;
background-color: white;
border-radius: 15px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding: 20px;

h3{
  margin-bottom: 30px;
}

div{
  background-color: #A1AC00;
  height: 4px;
  width: 40%;
  transition: 0.5s;
  margin-bottom: 20px;
}

&:hover .greenDiv {
    width: 100%; 
}

img{

  width: 100%;
}
`  
   	

export default Service