
import { Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import store from './localStore';

function City(props) {
  let { city } = props;
  let { city_name } = city;

  store.city = store.city || [];
  store.save();

  function saveCity() {
    store.city = city_name;
    store.save();
  }



  //Set each city and the name of it 
  return <>

    <Col xs={5} md={4}>
      <Card>
        <>{ /* Link to Unsplash and generate random picture that matches the city */}</>
        <Card.Img variant="top"
          src={`https://source.unsplash.com/random/640x360/?${city_name.substring(city_name.indexOf("/") + 1).replace('_', ' ')}`} />
        <Card.Body>
          <Link to="/timezone-info"

          >
            <Button variant="light" className="city" onClick={saveCity}>
              {city_name.substring(city_name.indexOf("/") + 1).replace('_', ' ')}</Button></Link>


        </Card.Body>
      </Card>
    </Col>

  </ >
}
export default City;