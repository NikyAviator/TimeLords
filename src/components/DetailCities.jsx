import { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'
import store from './localStore'

const DetailCities = (props) => {
  let { cities, setCities, timeZoneInfo, setTimeZoneInfo } = props

  const [start, setStart] = useState(0)
  const [numberToRender, setNumberToRender] = useState(0)

  useEffect(() => {
    function getNumberToRender() {
      let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      let numberToRender = Math.floor(windowWidth / 200) - 1;
      numberToRender = numberToRender === 0 ? 1 : numberToRender
      setNumberToRender(numberToRender)
    }

    function handleResize() { getNumberToRender() }

    window.addEventListener('resize', handleResize)

    getNumberToRender();
  })

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
    let { cities, numberToRender, setNumberToRender } = props

    let display = []
    if (cities.length > 0) {
      let index = start < cities.length ? start : 0
      for (let i = 0; i < numberToRender; i++) {
        display.push(cities[index])
        if (index + 1 < cities.length) {
          index++
        } else {
          index = 0
        }
      }
    }

    return (
      <>
        {
          display.length > 0 && display.map((city, index) => {
            let imageLink = `https://source.unsplash.com/random/640x360/?${city.city_name.split('/')[1].replace('_', '')}-downtown`
            return (
              <Card key={index} id={cities.indexOf(city)} onClick={handleClick} style={{
                backgroundImage: `url(${imageLink})`,
                backgroundSize: 'auto 100%',
                cursor: 'pointer'
              }}>
                <Button>{city.city_name.split('/')[1].replace('_', ' ')}</Button>
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
          <Button id="back" onClick={(e) => { e.preventDefault() }}><img src="/images/arrow.svg" className="arrow arrow-left" onClick={subtract} /></Button>
          <ToDisplay {...{ cities, numberToRender, setNumberToRender }} />
          <Button id="next" onClick={(e) => { e.preventDefault() }}><img src="/images/arrow.svg" className="arrow arrow-right" onClick={add} /></Button>
        </Col>
      </Row >
    </Container >
  )
}

export default DetailCities