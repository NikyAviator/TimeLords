import { useEffect, useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import DigitalClock from './DigitalClock'
import AnalogClock from './AnalogClock'
import store from '../utilities/localStore'

const DynamicTime = () => {
  const [timeZone, setTimeZone] = useState('')
  const [timeString, setTimeString] = useState(new Date().toLocaleTimeString('sv-SE', { timeZone: store.timezone }))
  const [dateString, setDateString] = useState('')

  useEffect(function uppdateTime() {
    const interval = setInterval(() => {
      update()
    }, 1000);
    return () => clearInterval(interval)
  }, [])

  function update() {
    let date = new Date()
    let timeZone = store.timezone
    setTimeZone(timeZone)
    setTimeString(date.toLocaleTimeString('sv-SE', { timeZone: timeZone }))
    setDateString(date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: timeZone }))
  }

  const TimeZone = function timeZoneAsString() {
    return (<>
      <h3 className="pt-3" style={{ color: "white" }}>The time in: {store.city.replace('_', ' ')} </h3>
      <h3 style={{ color: "white" }}>
        Timezone: {' '}
        <b>
          {timeZone.split('/').reverse().map(element => element.replace('_', ' ')).join(', ')}
        </b>
      </h3>
    </>
    )
  }

  const [isToggle, setToggle] = useState(true);

  function toggleClock() {
    setToggle(
      !isToggle)
  }

  return (
    <Container className="box">
      <Row>
        <Col>
          <TimeZone />
          {isToggle ? <DigitalClock /> : <AnalogClock />}
          <Button
            variant="custom"
            onClick={toggleClock}>{isToggle ? 'Show Analog Clock' : 'Show Digital Clock'}</Button>
          <h3 className="py-3 text-white">{dateString}</h3>
        </Col>
      </Row>
    </Container>
  )
}

export default DynamicTime