import store from "../utilities/localStore"
import { Button, Card, Row } from 'react-bootstrap'


function MyCityCards() {
  return (
    <>
      <Row xs={2} md={4} lg={6}>
        {store.cityListLocalStorage.map(({ myCityName }) =>
          <Card
            className='myCityName'>
            <Card.Img variant="top"
              src={`https://source.unsplash.com/random/640x360/?${myCityName}-downtown`} />
            <Button variant="light" className="city">
              {myCityName}
            </Button>

          </Card>)}
      </Row>
    </>
  )

}

export default MyCityCards

