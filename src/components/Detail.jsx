
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


function Detail() {
  const location = useLocation();
  const { city_name } = location.state;
  console.log(city_name)

  const [timeZoneInfo, setTimeZoneInfo] = useState([]);


  useEffect(() => {
    if (city_name !== '') {
      async function getTimeZoneInfo() {
        setTimeZoneInfo(await (await fetch(`HTTP://worldtimeapi.org/api/timezone/${city_name}`)).json());
      }
      getTimeZoneInfo();
    }
  }, []);
  let { timezone } = timeZoneInfo;

  //the timezone information are ferched from API is stored in "timeZoneInfo"
  //we need to render this on the screen I guess


  return <>
    <h1>{timezone}</h1>
  </>
}
export default Detail;