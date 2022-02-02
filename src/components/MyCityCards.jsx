import store from "../utilities/localStore"
import { Button, Card, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";


function MyCityCards() {
  return (
    <>

      <Row xs={2} md={4} lg={4}>
        {store.cityList.map(({ name, timezone }) =>
          <Col xs={12} md={4}>
            <Card
              className='cityCards'>
              <Card.Img variant="top"
                src={`https://source.unsplash.com/random/640x360/?${name}-downtown`} />
              <Card.Body>
                <Link to={`/clock/${name}`} >
                  <Button variant="light" className="city" onClick={() => {
                    const thisCity = { name, timezone };
                    store.city = store.city || [];
                    store.timezone = timezone;
                    store.city = name;
                    store.save();

                  }}>
                    {name}
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>)}
      </Row>
    </>
  )

}

export default MyCityCards

