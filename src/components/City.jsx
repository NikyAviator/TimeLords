
import { Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function City(props) {
  let { city } = props;
  let { city_name } = city;


  //Set each city and the name of it 
  return <>

    <Col xs={6} md={4}>
      <Card>
        <Card.Img variant="top" src="https://picsum.photos/200/200" />
        <Card.Body>
          <Link to="/timezone-info"
            state={{ city_name }}
          >
            <Button variant="light" className="city">
              {city_name.substring(city_name.indexOf("/") + 1).replace('_', ' ')}</Button></Link>


        </Card.Body>
      </Card>
    </Col>

  </ >
}
export default City;