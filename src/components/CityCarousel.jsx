import { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import localData from '../utilities/localStore'

const CityCarousel = (props) => {
  let { title } = props

  const [myCities, setMyCities] = useState([])

  const Thumbs = () => {

  }

  return (
    <Container className="city-carousel">
      <Row>
        <Col>
          {title}
        </Col>
      </Row>
      <Row>
        <Col>
          <Button></Button>
          <Thumbs />
          <Button></Button>
        </Col>
      </Row>
    </Container>
  )
}

export default CityCarousel 