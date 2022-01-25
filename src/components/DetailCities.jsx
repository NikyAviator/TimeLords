import { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'
import store from './localStore'

const DetailCities = (props) => {
  let { cities, setCities, timeZoneInfo, setTimeZoneInfo } = props

  const [start, setStart] = useState(0)

  function add() {
    let index = start + 1 < cities.length ? start + 1 : 0
    console.log(index)
    setStart(index)
  }

  function subtract() {
    let index = start - 1 > 0 ? start - 1 : cities.length
    console.log(index)
    setStart(index)
  }

  async function handleClick(e) {
    store.city = cities[e.target.id].city_name
    store.save()
    setTimeZoneInfo(await (await fetch(`http://worldtimeapi.org/api/timezone/${store.city}`)).json());
  }

  const ToDisplay = (props) => {
    let { cities } = props
    let display = []
    if (cities.length > 0) {
      let index = start < cities.length ? start : 0
      for (let i = 0; i < 5; i++) {
        display.push(cities[index])
        if (index + 1 < cities.length) {
          index++
        } else {
          0
        }
      }
    }

    return (
      <>
        {
          display.length > 0 && display.map((city, index) => {
            return (
              <Card key={index}>
                <Card.Header></Card.Header>
                <Card.Body>
                  <Button id={index} onClick={handleClick}>{city.city_name.split('/').map(name => name.replace('_', ' ')).join(', ')}</Button>
                </Card.Body>
              </Card>
            )
          })
        }
      </>
    )
  }

  return (
    <Container fluid>
      <Row>
        <Col className="detail-cities">
          <Button onClick={subtract}>{'<'}</Button>
          <ToDisplay {...{ cities }} />
          <Button onClick={add}>{'>'}</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default DetailCities