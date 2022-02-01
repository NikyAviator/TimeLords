import store from "../utilities/localStore"
import { Button, Card, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";


function MyCityCards() {
  return (
    <>

      <Row xs={2} md={4} lg={4}>
        {store.cityListLocalStorage.map(({ myCityName, myCityTimeZone }) =>
          <Col xs={12} md={4}>
            <Card
              className='cityCards'>
              <Card.Img variant="top"
                src={`https://source.unsplash.com/random/640x360/?${myCityName}-downtown`} />
              <Card.Body>
                <Link to={`/my_cities/${myCityName}`} >
                  <Button variant="light" className="city" onClick={() => {
                    store.myCityName = store.myCityName || [];
                    store.city = myCityTimeZone;
                    store.myCityName = myCityName;
                    store.save();

                  }}>
                    {myCityName}
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

