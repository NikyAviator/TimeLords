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
    e.preventDefault()
    store.city = cities[e.target.id].city_name
    store.save()
  }

  const ToDisplay = (props) => {
    let numberToRender = Math.floor(window.screen.width / 200) - 1
    console.log(numberToRender)
    let { cities } = props
    let display = []
    if (cities.length > 0) {
      let index = start < cities.length ? start : 0
      for (let i = 0; i < numberToRender; i++) {
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
            let imageLink = `https://source.unsplash.com/random/640x360/?${city.city_name.split('/')[1].replace('_', '')}-downtown`
            return (
              <Card key={index} style={{
                backgroundImage: `url(${imageLink})`,
                backgroundSize: 'auto 100%',

              }}>
                <Button id={cities.indexOf(city)} onClick={handleClick}>{city.city_name.split('/')[1].replace('_', ' ')}</Button>
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
        <Col className="detailed">
          <Button id="back" onClick={subtract}>{'<'}</Button>
          <ToDisplay {...{ cities }} />
          <Button id="next" onClick={add}>{'>'}</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default DetailCities