import { useEffect, useState } from 'react';
import CityCards from './CityCards';
import { Row } from 'react-bootstrap';


function CityList() {
  const [cities, setCities] = useState([]);


  useEffect(async () => { //Fetch citites.json and store it to state variable cities
    setCities(await (await fetch('/public/json/cities.json')).json());
  }, []);



  //Loop through cities 
  return <>
    {cities.map(city => <CityCards key={city.id}{...{ city }} />)}
  </>
}
export default CityList;