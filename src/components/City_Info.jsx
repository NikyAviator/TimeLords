
import { useEffect, useState } from 'react';
import DynamicTime from './DynamicTime'
import DetailCities from './DetailCities'
import store from '../utilities/localStore';
import { useParams } from 'react-router-dom';
import { Row, Container } from 'react-bootstrap';



function CityInfo(props) {

  const [timeZoneInfo, setTimeZoneInfo] = useState([]);
  const [cities, setCities] = useState([])

  useEffect(async () => {
    setTimeZoneInfo(store.city);
    setCities(await (await fetch('/json/cities.json')).json())
  }, []);


  return <>
    <div className="clock-body" style={{
      backgroundImage: `url(https://source.unsplash.com/random/?${store.city.substring(store.city.indexOf("/") + 1)}-downtown)`,
      backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"
    }}>
      <Container className="clock-page" >
        <DynamicTime {...{ timeZoneInfo }} />
      </Container>

      <div>
        {cities.length > 0 && <DetailCities {...{ cities, setCities, timeZoneInfo, setTimeZoneInfo }} />}</div>
    </div>
  </>

}
export default CityInfo;