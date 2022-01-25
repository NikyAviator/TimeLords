
import { useEffect, useState } from 'react';
import DynamicTime from './DynamicTime'
import store from './localStore';


function CityInfo() {

  const [timeZoneInfo, setTimeZoneInfo] = useState([]);
  useEffect(() => {
    if (store.city != ' ') {
      async function getTimeZoneInfo() {
        setTimeZoneInfo(await (await fetch(`http://worldtimeapi.org/api/timezone/${store.city}`)).json());
      }

      getTimeZoneInfo();
    }
  }, []);

  let { datetime } = timeZoneInfo; //These information is from worldtimeapi.org
  if (datetime != undefined) { datetime = datetime.slice(0, 10); }

  //the timezone information are ferched from API is stored in "timeZoneInfo"
  //we need to render this on the screen I guess

  if (store.city != ' ' && timeZoneInfo != undefined) {
    return <>
      <DynamicTime {...{ timeZoneInfo }} />
    </>
  }
}
export default CityInfo;