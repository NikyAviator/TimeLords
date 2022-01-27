
import { useEffect, useState } from 'react';
import DynamicTime from './DynamicTime'
import DetailCities from './DetailCities'
import store from './localStore';



function CityInfo() {

  const [timeZoneInfo, setTimeZoneInfo] = useState([]);
  const [cities, setCities] = useState([])


  useEffect(async () => {
    setTimeZoneInfo(store.city);
    await setCities(await (await fetch('/json/cities.json')).json())
  }, []);

  let { datetime } = timeZoneInfo; //These information is from worldtimeapi.org
  if (datetime != undefined) { datetime = datetime.slice(0, 10); }

  //the timezone information are ferched from API is stored in "timeZoneInfo"
  //we need to render this on the screen I guess

  if (store.city != ' ' && timeZoneInfo != undefined) {
    return <>
      <DynamicTime {...{ timeZoneInfo }} />
      {cities.length > 0 && <DetailCities {...{ cities, setCities, timeZoneInfo, setTimeZoneInfo }} />}
    </>
  }
}
export default CityInfo;