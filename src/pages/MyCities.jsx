import React from 'react';
import Header_3 from '../components/Header_3';
import AddCityForm from '../components/AddCityForm';

function MyCities() {
  return (
    <>
      <div className='header'><Header_3 /></div>
      <div className='main'>
        <AddCityForm />
      </div>
    </>
  );
}

export default MyCities;
