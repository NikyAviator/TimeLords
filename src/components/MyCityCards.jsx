import store from "../utilities/localStore"
import { Button, Card, Row, Col } from 'react-bootstrap'


function MyCityCards() {
  return (
    <>

      <Row xs={2} md={4} lg={4}>
        {store.cityListLocalStorage.map(({ myCityName }) =>
          <Col xs={12} md={4}>
            <Card
              className='cityCards'>
              <Card.Img variant="top"
                src={`https://source.unsplash.com/random/640x360/?${myCityName}-downtown`} />
              <Button variant="light" className="city">
                {myCityName}
              </Button>

            </Card>
          </Col>)}
      </Row>
    </>
  )

}

export default MyCityCards

