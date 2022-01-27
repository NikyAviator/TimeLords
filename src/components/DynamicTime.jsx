import { useEffect, useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import AnalogClock from './AnalogClock'
import store from '../utilities/localStore'

const DynamicTime = (props) => {
  let { timeZoneInfo } = props

  const [timeZone, setTimeZone] = useState('')
  const [timeString, setTimeString] = useState('00:00:00')
  const [dateString, setDateString] = useState('')

  useEffect(function uppdateTime() {
    const interval = setInterval(() => {
      update()
    }, 1000);
    return () => clearInterval(interval)
  }, [])

  function update() {
    let date = new Date()
    let timeZone = store.city
    setTimeZone(timeZone)
    setTimeString(date.toLocaleTimeString('sv-SE', { timeZone: timeZone }))
    setDateString(date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: timeZoneInfo.timezone }))
  }

  const TimeZone = function timeZoneAsString() {
    return (

      <h3 style={{ paddingTop: "1%" }}>
        The time in{' '}
        <b>
          {timeZone.split('/').reverse().map(element => element.replace('_', ' ')).join(', ')}
        </b>
      </h3>

    )
  }
  const [isToggle, setToggle] = useState(true);


  function toggleClock() {
    setToggle(
      !isToggle)
  }

  return (
    <Container className="text-center">
      <Row>
        <Col>
          <TimeZone />
          {isToggle ? <h1 className="digital-clock" style={{ fontSize: "100px" }}> {timeString} </h1> : <AnalogClock />}

          <Button
            variant="success"
            onClick={toggleClock}>{isToggle ? 'Show Analog Clock' : 'Show Digital Clock'}</Button>
          <h3 style={{ paddingBottom: "1%", paddingTop: "1%" }}>{dateString}</h3>
        </Col>
      </Row>
    </Container>
  )
}

export default DynamicTime