import store from "../utilities/localStore"
import { Button, Card, Row } from 'react-bootstrap'


function RemoveMyCity() {
  return (
    <>
      <Row xs={2} md={4} lg={6}>
        {store.cityListLocalStorage.map(({ myCityName, myCityTimeZone }) =>
          <Card
            className='myCityName'>
            <Card.Img variant="top"
              src={`https://source.unsplash.com/random/640x360/?${myCityName}-downtown`} />
            <Button variant="light" className="city" >
              {myCityName}
            </Button>
            <Button variant="danger" className="city" onClick={() => {
              const cityToDelete = { myCityName, myCityTimeZone };
              console.log(cityToDelete);
              const filter = store.cityListLocalStorage.filter((city) => JSON.stringify(city) !== JSON.stringify(cityToDelete));
              store.cityListLocalStorage = filter;
              store.save()
              console.log(filter);
            }} >
              Remove city
            </Button>
          </Card>)}
      </Row>
    </>
  )

}

export default RemoveMyCity