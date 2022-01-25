import React from 'react';
import Header_2 from '../components/Header_2';
import AddCityForm from '../components/AddCityForm';
import { Container } from 'react-bootstrap';
function MyCities() {
  return (
    <>
      
    <div className='body'>
      <Header_2 />
      <Container >
        <AddCityForm />
      </Container>
      <h1>My Cities</h1>
        </div>
        
    </>
  );
}

export default MyCities;
