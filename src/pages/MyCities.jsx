import React from 'react';
import Header_2 from '../components/Header_2';
import AddCityForm from '../components/AddCityForm';
import store from '../components/localStore';
import { Button, Card, Row } from 'react-bootstrap'

function MyCities() {
  return (
    <>
      <div className='header'><Header_2 /></div>
      <div className='main'>
        <AddCityForm />
        <h1>My Cities</h1>
        {/* <Row xs={2} md={4} lg={6}>

          {store.myCity.map(({ myCity }) => (
            <Card
              className='myCityCards'>
              <Card.Img variant="top"
                src={`https://source.unsplash.com/random/640x360/?${myCity}-downtown`} />
              <Button variant="light" className="city">
                {myCity}
              </Button>
            </Card>))}
      </Row> */}
      </div>
    </>
  );
}

export default MyCities;
