import React from 'react'
import { styled } from 'styled-components'

const Footer = () => {
  return (
    <Container>
      <Nav>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Team</li>
          <li>Find Us</li>
          <li>Book Now</li>
        </ul>
      </Nav>
      <Content>
        <h4>Centre de médecine sportive des Laurentides</h4>
        <p>305, rue du Docteur Charles Léonard, Suite 200</p>
        <p>St-Jérôme, Qc, J7Y 0M9</p>
        <p>Téléphone : 450 438-0911</p>
        <p>FAX : 450 436-2719</p>
        <p>Email: </p>
      </Content>
      <Schedule>
        <h4>HORAIRE</h4>
        <p>Dimanche | 9 AM - 2PM</p>
        <p>Lundi | 9 AM - 2PM</p>
        <p>Mardi | 9 AM - 2PM</p>
        <p>Mercredi | 9 AM - 2PM</p>
        <p>Jeudi | 9 AM - 2PM</p>
        <p>Vendredi | 9 AM - 2PM</p>
        <p>Samedi | 9 AM - 2PM</p>
        
      </Schedule>


    </Container>
  )
}
const Container  = styled.div`
display: flex;

padding: 5vw;
justify-content: space-between;

h4{
  font-weight: 600;
}

p{
  color: #A9A9A9;
  font-size: 0.9em;
}
`

const Nav = styled.nav`

text-align: center;
li{
  margin-bottom:20px;
}

@media (max-width: 800px) {
  display: none;

}
`
const Content = styled.div`
margin-bottom: 20px;
line-height: 20px;
width: 50vw;
& :nth-child(3) {
    margin-bottom: 2vw;
}



`

const Schedule = styled.div`
line-height: 25px;
`


export default Footer