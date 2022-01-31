import store from "../utilities/localStore"
import { Button, Card, Row } from 'react-bootstrap'


function RemoveMyCity() {



  // function deleteCity() {
  //   let deleteArray = [...store.cityListLocalStorage]

  // }


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
              let cityToDelete = { myCityName, myCityTimeZone }
              console.log(cityToDelete);
              let filter = store.cityListLocalStorage.filter((city) => {
                return city !== cityToDelete
              })
              store.save()
              console.log(store.cityListLocalStorage);
              console.log(filter);
            }
            } >
              Remove city
            </Button>
          </Card>)}
      </Row>
    </>
  )

}

export default RemoveMyCity