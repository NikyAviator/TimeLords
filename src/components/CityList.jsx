import { useEffect, useState } from 'react';
import City from './City';


function CityList() {
  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState('');
  const [timeZone, setTimeZone] = useState([]);

  useEffect(async () => {
    setCities(await (await fetch('/public/json/cities.json')).json());
  }, []);

  function timeZoneName(city_name) {
    setCityName(city_name);
  }

  useEffect(async () => {

    setTimeZone(await (await fetch(`http://worldtimeapi.org/api/timezone/${cityName}`)).json());

  }, []);


  return <>
    {cities.map(city => <City key={city.id}{...{ city, timeZoneName }} />)}
  </>
}
export default CityList;