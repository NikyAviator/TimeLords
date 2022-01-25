
import { useEffect, useState } from 'react';
import DynamicTime from './DynamicTime'
<<<<<<< HEAD
import DetailCities from './DetailCities'
=======
import store from './localStore';
>>>>>>> af87cdb5c9d769440d509057dc00b8277c9f8189


function CityInfo() {

  const [timeZoneInfo, setTimeZoneInfo] = useState([]);
<<<<<<< HEAD
  const [cities, setCities] = useState([])


  useEffect(async () => {
    if (city_name != ' ') {
=======
  useEffect(() => {
    if (store.city != ' ') {
>>>>>>> af87cdb5c9d769440d509057dc00b8277c9f8189
      async function getTimeZoneInfo() {
        setTimeZoneInfo(await (await fetch(`http://worldtimeapi.org/api/timezone/${store.city}`)).json());
      }

      getTimeZoneInfo();
    }
    await setCities(await (await fetch('/json/cities.json')).json())
  }, []);

  let { datetime } = timeZoneInfo; //These information is from worldtimeapi.org
  if (datetime != undefined) { datetime = datetime.slice(0, 10); }

  //the timezone information are ferched from API is stored in "timeZoneInfo"
  //we need to render this on the screen I guess

  if (store.city != ' ' && timeZoneInfo != undefined) {
    return <>
      <DynamicTime {...{ timeZoneInfo }} />
      <DetailCities {...{ cities, setCities }} />
    </>
  }
}
export default CityInfo;