import React, { useEffect, useState } from 'react';
import Header_2 from '../components/Header_2';
import City_Info from '../components/City_Info';
import store from '../utilities/localStore';
import { useParams, useNavigate } from 'react-router-dom';
function Clock() {

  let { city } = useParams();
  const [list, setList] = useState([]);
  const [timezones, setTimezones] = useState([])


  useEffect(async () => {
    setList(await (await fetch('/json/cities.json')).json())
    setTimezones(await (await fetch('/json/timezones.json')).json())
  }, [city])

  function check() {
    const result = list.filter((city_name) => JSON.stringify(city_name).includes(city));
    for (const value of result) {
      store.timezone = value.city_name;
      store.save();
    }
  }

  function checkIfMyCity() {
    const result = store.cityList.filter((myCity) => JSON.stringify(myCity).includes(city));
    for (const value of result) {
      store.timezone = value.timezone;
      store.city = value.name;
    }
  }

  function saveToHistory() {
    let cityToSave;
    if (store.cityList && store.cityList.length > 0) {
      cityToSave = store.cityList.find(entry => entry.name === city)
    } else {
      if (timezones && timezones.length > 0) {
        let timezone = timezones.find(entry => entry.indexOf(city) >= 0)
        if (timezone) {
          cityToSave = {
            name: timezone.split('/')[1].replace('_', ' '),
            timezone: timezone
          }
          console.log(cityToSave)
        }
      }
    }
    if (cityToSave) {
      let cityList = store.cityList;
      console.log(cityList)
    }
  }

  return (
    <>
      {check()}
      {checkIfMyCity()}
      {saveToHistory()}
      <>{ /*Header_2 är för de andra sidorna fö utom hemsidan*/}</>
      <div className='header'><Header_2 /></div>
      <div className='main'><City_Info /></div>
    </>

  );
}

export default Clock;
