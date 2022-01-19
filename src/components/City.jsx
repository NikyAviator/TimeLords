
import { Button } from 'react-bootstrap';

function City(props) {
  let { city, timeZoneName } = props;
  let { city_name } = city;


  return <>
    <Button className="city" onClick={() => timeZoneName(city_name)}
      variant="secondary"> {city_name.substring(city_name.indexOf("/") + 1)}</Button>

  </ >
}
export default City;
