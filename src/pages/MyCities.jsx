import React from 'react';
import Header_3 from '../components/Header_3';
import AddCityForm from '../components/AddCityForm';
import store from '../utilities/localStore'
import { Button, Card, Row } from 'react-bootstrap'

function MyCities() {
  return (
    <>
      <div className='header'><Header_3 /></div>
      <div className='main'>
        <AddCityForm />
        <h1 style={{marginLeft: "8%", marginRight:"8%"}}>My Cities</h1>
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
