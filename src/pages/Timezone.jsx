import React from 'react';
import Header_2 from '../components/Header_2';
import Detail from '../components/Detail';
function Timezone() {
  return (
    <>
      <>{ /*Header_2 är för de andra sidorna fö utom hemsidan*/}</>
      <div className='header'><Header_2 /></div>
      <div className='main'><Detail /></div>
    </>
  );
}

export default Timezone;
