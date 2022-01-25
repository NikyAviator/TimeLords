
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DynamicTime from './DynamicTime'
import DetailCities from './DetailCities'


function CityInfo() {
  const location = useLocation();
  const { city_name } = location.state; //Get the passed variable

  const [timeZoneInfo, setTimeZoneInfo] = useState([]);
  const [cities, setCities] = useState([])


  useEffect(async () => {
    if (city_name != ' ') {
      async function getTimeZoneInfo() {
        setTimeZoneInfo(await (await fetch(`http://worldtimeapi.org/api/timezone/${city_name}`)).json());
      }

      getTimeZoneInfo();
    }
    await setCities(await (await fetch('/json/cities.json')).json())
  }, []);

  let { timezone, datetime } = timeZoneInfo; //These information is from worldtimeapi.org
  if (datetime != undefined) { datetime = datetime.slice(0, 10); }

  //the timezone information are ferched from API is stored in "timeZoneInfo"
  //we need to render this on the screen I guess

  if (city_name != ' ' && timeZoneInfo != undefined) {
    return <>
      <DynamicTime {...{ timeZoneInfo }} />
      <DetailCities {...{ cities, setCities }} />
    </>
  }
}
export default CityInfo;