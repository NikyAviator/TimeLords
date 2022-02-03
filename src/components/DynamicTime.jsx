import { useEffect, useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import AnalogClock from './AnalogClock'
import store from '../utilities/localStore'

const DynamicTime = (props) => {

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

  function getTimeZone() {
    return store.timezone
  }

  const TimeZone = function timeZoneAsString() {
    return (<>
      <h3 style={{ color: "white" }}>The time in: {store.city.replace('_', ' ')} </h3>
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
    <Container className="box" >
      <Row>
        <Col>
          <TimeZone />

          {isToggle ? <h3 className="digital-clock" style={{ fontSize: "8vw", color: "white" }}> {timeString} </h3> : <AnalogClock getTimeZone={getTimeZone} />}
          <Button
            variant="custom"
            onClick={toggleClock}>{isToggle ? 'Show Analog Clock' : 'Show Digital Clock'}</Button>
          <h3 style={{ paddingBottom: "1%", paddingTop: "1%", color: "white" }}>{dateString}</h3>
        </Col>
      </Row>
    </Container>
  )
}

export default DynamicTime