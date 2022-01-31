import store from "../utilities/localStore"
import { Button, Card, Row } from 'react-bootstrap'
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
          <Card
            className='myCityName'>
            <Card.Img variant="top"
              src={`https://source.unsplash.com/random/640x360/?${myCityName}-downtown`} />
            <Button variant="light" className="city" >
              {myCityName}
            </Button>
            <Button variant="danger" className="city" onClick={() => {
              const cityToDelete = { myCityName, myCityTimeZone };
              const filter = store.cityListLocalStorage.filter((city) => JSON.stringify(city) !== JSON.stringify(cityToDelete));
              store.cityListLocalStorage = filter;
              store.save()
              uppdateRemovedCity(store.cityListLocalStorage)
            }} >
              Remove city
            </Button>
          </Card>)}
      </Row>
    </>
  )

}

export default RemoveMyCity