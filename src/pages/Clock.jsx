import React, { useEffect, useState } from 'react';
import Header_2 from '../components/Header_2';
import City_Info from '../components/City_Info';
import store from '../utilities/localStore';
import { useParams } from 'react-router-dom';
function Clock() {

  let { city } = useParams();
  const [list, setList] = useState([]);

  useEffect(async () => {
    setList(await (await fetch('/json/cities.json')).json())
    console.log(city)
  }, [city])

  function check() {
    const result = list.filter((city_name) => JSON.stringify(city_name).includes(city));
    for (const value of result) {
      store.city = value.city_name;
      store.save();
    }
  }

  return (
    <>
      {check()}
      <>{ /*Header_2 är för de andra sidorna fö utom hemsidan*/}</>
      <div className='header'><Header_2 /></div>
      <div className='main'><City_Info /></div>
    </>

  );
}

export default Clock;
