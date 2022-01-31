import store from "../utilities/localStore"
import { Button, Card, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from "react";


function RemoveMyCity() {
  const [myCityCard, uppdateRemovedCity] = useState(store.cityListLocalStorage);

  useEffect(() => {
    uppdateRemovedCity(store.cityListLocalStorage)
  }, [store.cityListLocalStorage])

  return (
    <>
      <Row xs={2} md={4} lg={6}>
        {myCityCard.map(({ myCityName, myCityTimeZone }) =>
          <Col xs={12} md={4}>
            <Card
              className='myCityName'>
              <Card.Img variant="top"
                src={`https://source.unsplash.com/random/640x360/?${myCityName}-downtown`} />
              <Card.Body>
                <Button variant="light" className="city">
                  {myCityName}
                </Button>
              </Card.Body>
              <Button variant="danger" className="city" onClick={() => {
                const cityToDelete = { myCityName, myCityTimeZone };
                const filter = store.cityListLocalStorage.filter((city) => JSON.stringify(city) !== JSON.stringify(cityToDelete));
                store.cityListLocalStorage = filter;
                store.save()
                uppdateRemovedCity(store.cityListLocalStorage)
              }} >
                Remove city
              </Button>
            </Card>
          </Col>)}
      </Row>
    </>
  )

}

export default RemoveMyCity