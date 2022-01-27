import React from 'react';
import Header_2 from '../components/Header_2';
import City_Info from '../components/City_Info';
function Clock() {
  return (
    <>
      <>{ /*Header_2 är för de andra sidorna fö utom hemsidan*/}</>
      <div className='header'><Header_2 /></div>
      <div className='main'><City_Info /></div>
    </>
  );
}

export default Clock;
