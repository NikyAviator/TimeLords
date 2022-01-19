import { useEffect, useState, useCallback } from 'react';
import City from './City';


function CityList() {
  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState('');
  const [timeZone, setTimeZone] = useState([]);

  useEffect(async () => {
    setCities(await (await fetch('/public/json/cities.json')).json());
  }, []);

  const timeZoneName = useCallback( //Callback when the city_name changes
    (city_name) => {
      setCityName(city_name);
    },
    [cityName],
  );
  console.log(cityName);

  useEffect(() => {
    if (cityName !== '') {
      async function getTimeZone() {
        setTimeZone(await (await fetch(`http://worldtimeapi.org/api/timezone/${cityName}`)).json());
      }
      getTimeZone();
    }
  }, [cityName]);

  console.log(timeZone); // timeZone's information fetched from the API
  return <>
    {cities.map(city => <City key={city.id}{...{ city, timeZoneName }} />)}
  </>
}
export default CityList;