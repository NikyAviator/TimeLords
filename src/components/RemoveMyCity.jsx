import store from "../utilities/localStore"
import { Button, Card, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function RemoveMyCity() {
  const [myCityCard, uppdateRemovedCity] = useState(store.cityList);

  useEffect(() => {
    uppdateRemovedCity(store.cityList)
  }, [store.cityList]);


  if (store.cityList == "") {
    return (<h3 style={{ paddingTop: "2%" }}>You have not added any cities</h3>)
  }

  else {
    return (
      <>
        <Row xs={2} md={4} lg={6}>
          {myCityCard.map(({ name, timezone }) =>
            <Col xs={12} md={4}>
              <Card
                className='name'>
                <Card.Img variant="top"
                  src={`https://source.unsplash.com/random/640x360/?${name}-downtown`} />
                <Card.Body>
                  <Link to={`/${name}`} >
                    <Button variant="light" className="city" onClick={() => {
                      const thisCity = { name, timezone }
                      store.name = store.name || [];
                      store.timezone = timezone;
                      store.name = name;
                      store.cityHistory.push(thisCity);
                      store.save();
                    }}>
                      {name}
                    </Button>
                  </Link>
                </Card.Body>
                <Button variant="danger" className="city" onClick={() => {
                  const cityToDelete = { name, timezone };
                  const filter = store.cityList.filter((city) => JSON.stringify(city) !== JSON.stringify(cityToDelete));
                  store.cityList = filter;
                  store.save()
                  uppdateRemovedCity(store.cityList)
                }} >
                  Remove city
                </Button>
              </Card>
            </Col>)}
        </Row>
      </>
    )

  }
}
export default RemoveMyCity