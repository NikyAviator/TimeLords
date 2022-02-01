
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Container } from 'react-bootstrap';
import DynamicTime from './DynamicTime'
import DetailCities from './DetailCities'
import CityCarousel from './CityCarousel'
import store from '../utilities/localStore';

function CityInfo(props) {
  const [timeZoneInfo, setTimeZoneInfo] = useState([]);
  const [citiesLargest, setCitiesLargest] = useState([])

  useEffect(async () => {
    let citiesLargestJSON = await (await fetch('/json/cities_largest.json')).json()
    //Empty array to store largest cities data
    let citiesLargest = []
    //Extract the city name and time zone from cities_larges.json and push them into the cities array as "objects"
    citiesLargestJSON.map(city => citiesLargest.push({ name: getCityNameFromTimeZone(city.timezone), timezone: city.timezone }))
    setTimeZoneInfo(store.city);
    setCitiesLargest(citiesLargest)
  }, []);

  function getCityNameFromTimeZone(timezone) { return timezone.split('/')[1].replace('_', ' ') }

  return (
    <>
      <div className="clock-body" style={{
        backgroundImage: `url(https://source.unsplash.com/random/?${store.city.substring(store.city.indexOf("/") + 1)}-downtown)`,
        backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"
      }}>
        <Container className="clock-page" >
          <DynamicTime {...{ timeZoneInfo }} />
        </Container>
        <CityCarousel {...{ cities: citiesLargest, title: 'Largest Cities' }} />
        {/* <div>
        {cities.length > 0 && <DetailCities {...{ cities, setCities, timeZoneInfo, setTimeZoneInfo }} />}</div>*/}
      </div>
    </>
  )

}
export default CityInfo;