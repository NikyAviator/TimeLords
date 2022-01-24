
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DynamicTime from './DynamicTime'


function Detail() {
  const location = useLocation();
  const { city_name } = location.state; //Get the passed variable

  const [timeZoneInfo, setTimeZoneInfo] = useState([]);


  useEffect(() => {
    if (city_name != ' ') {
      async function getTimeZoneInfo() {
        setTimeZoneInfo(await (await fetch(`http://worldtimeapi.org/api/timezone/${city_name}`)).json());
      }
      getTimeZoneInfo().catch((ERR_CONNECTION_RESET) => {
        getTimeZoneInfo(ERR_CONNECTION_RESET);
      });
    }
  }, []);

  let { timezone, datetime } = timeZoneInfo; //These information is from worldtimeapi.org
  if (datetime != undefined) { datetime = datetime.slice(0, 10); }

  //the timezone information are ferched from API is stored in "timeZoneInfo"
  //we need to render this on the screen I guess

  if (city_name != ' ' && timeZoneInfo != undefined) {
    return <>
      <DynamicTime {...{ timeZoneInfo }} />
    </>
  }
}
export default Detail;