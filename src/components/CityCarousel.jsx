import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import store from '../utilities/localStore'

const CityCarousel = (props) => {
  let { cities, title } = props
  let navigate = useNavigate()

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
  }, [])

  function handleClick(e) {
    e.preventDefault()
    store.city = cities[e.target.id].timezone
    store.save()
    let target = store.city.split('/')[1];
    navigate('/' + target)
  }

  function back(e) {
    e.preventDefault()
    let index = start - 1 > 0 ? start - 1 : cities.length
    console.log(index)
    setStart(index)
  }

  function next(e) {
    e.preventDefault()
    let index = start + 1 < cities.length ? start + 1 : 0
    console.log(index)
    setStart(index)
  }

  const Thumbs = (props) => {
    let { cities, numberToRender } = props

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
            let imageLink = `https://source.unsplash.com/random/640x360/?${city.timezone.split('/')[1]}-downtown`
            console.log(city.name)
            return (
              <Card key={index} id={cities.indexOf(city)} onClick={handleClick} style={{
                backgroundImage: `url(${imageLink})`,
                backgroundSize: 'auto 100%',
                cursor: 'pointer'
              }}>
                <Button>{city.name}</Button>
              </Card>
            )
          })
        }
      </>
    )
  }

  return (
    <Container className="city-carousel" fluid>
      <Row>
        <Col className="title p-2">
          {title}
        </Col>
      </Row>
      <Row>
        <Col className="thumbs-container p-3">
          <Button id="back"><img src="/images/arrow.svg" className="arrow arrow-left" onClick={back} /></Button>
          {cities.length > 0 && <Thumbs {...{ cities, numberToRender }} />}
          <Button id="next"><img src="/images/arrow.svg" className="arrow arrow-right" onClick={next} /></Button>
        </Col>
      </Row>
    </Container>
  )
}

export default CityCarousel 