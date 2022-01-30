
import { useEffect, useState } from 'react';
import DynamicTime from './DynamicTime'
import DetailCities from './DetailCities'
import store from '../utilities/localStore';
import { useParams } from 'react-router-dom';



function CityInfo(props) {

  const [timeZoneInfo, setTimeZoneInfo] = useState([]);
  const [cities, setCities] = useState([])

  useEffect(async () => {
    setTimeZoneInfo(store.city);
    setCities(await (await fetch('/json/cities.json')).json())
  }, []);



  //the timezone information are ferched from API is stored in "timeZoneInfo"
  //we need to render this on the screen I guess

  return <>

    <DynamicTime {...{ timeZoneInfo }} />
    {cities.length > 0 && <DetailCities {...{ cities, setCities, timeZoneInfo, setTimeZoneInfo }} />}
  </>

}
export default CityInfo;