import React from 'react';
import CityList from '../components/CityList';
import Header from '../components/Header';
import store from '../utilities/localStore';
import { Container, Row, Col, Button, Navbar, Card, Figure } from 'react-bootstrap';
import MyCityCards from '../components/MyCityCards';

function Home() {

  const CheckIfMyCitiesIsEmpty = () => {
    if (store.cityListLocalStorage == "") {
      return (<h3>You have not added any cities</h3>)
    }
    else {
      return (
        <MyCityCards />
      )
    }
  }

  return (
    <>
      <div className='header'><Header /></div>
      <div className='main'><>
        <Container className="mt-3 px-5">
          <Figure alt="Logo for TimeLords" style={{
            marginLeft: "6%",
            marginTop: "2%"
          }}>
            <Figure.Image
              src='images/Logo.svg'
            />
          </Figure>
        </Container>
        <Container >
          <h3>My Cities:</h3>

        </Container>

        <div><CheckIfMyCitiesIsEmpty /></div>

        <Container className="pt-2" style={{ marginTop: "4%" }}>
          <h3>Biggest Cities:</h3>
        </Container>
        < Container className="mt-3 px-5 text-center" style={{ marginBottom: "4%" }}>
          <Row xs={2} md={4} lg={4}>
            <CityList />
          </Row>
        </Container>
      </>
      </div>
    </>
  );
}

export default Home;
