
import { Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import store from '../utilities/localStore'

function CityCards(props) {
  let { city } = props;
  let { city_name } = city;

  store.city = store.city || [];
  store.timezone = store.timezone || [];
  store.save();

  function saveCity() {
    const thisCity = { name: city_name.substring(city_name.indexOf("/") + 1), timezone: city_name }
    store.timezone = city_name;
    store.city = city_name.split('/')[1];
    store.save();
  }

  //Set each city and the name of it 
  return <>

    <Col xs={12} md={4}>
      <Card className='cityCards'>
        <>{ /* Link to Unsplash and generate random picture that matches the city */}</>
        <Card.Img variant="top"
          src={`https://source.unsplash.com/random/640x360/?${city_name.substring(city_name.indexOf("/") + 1)
            .replace('_', ' ')}-downtown`} />
        <Card.Body>
          <Link to={`/clock/${city_name.substring(city_name.indexOf("/") + 1)}`}>
            <Button variant="light" className="city" onClick={saveCity}>
              {city_name.substring(city_name.indexOf("/") + 1).replace('_', ' ')}
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>

  </ >
}
export default CityCards;