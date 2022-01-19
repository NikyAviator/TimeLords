import { useEffect, useState } from 'react';
import City from './City';



function CityList() {
  const [cities, setCities] = useState([]);


  useEffect(async () => {
    setCities(await (await fetch('/public/json/cities.json')).json());
  }, []);



  return <>
    {cities.map(city => <City key={city.id}{...{ city }} />)}
  </>
}
export default CityList;