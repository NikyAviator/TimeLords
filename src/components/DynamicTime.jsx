import { useEffect, useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import AnalogClock from './AnalogClock'
import store from '../utilities/localStore'

const DynamicTime = (props) => {

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
    setDateString(date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: timeZone }))
  }

  function getTimeZone() {
    return store.city
  }

  const TimeZone = function timeZoneAsString() {
    return (

      <h3 style={{ paddingTop: "1%", color: "white" }}>
        Timezone: {' '}
        <b>
          {timeZone.split('/').reverse().map(element => element.replace('_', ' ')).join(', ')}
        </b>
      </h3>

    )
  }
  const CheckIfMyCity = () => {
    if (window.location.href == `http://localhost:3000/my_cities/${store.myCityName}`) {
      return (<h3>
        Time in your city: {store.myCityName}
      </h3>
      )
    }
    else {
      return (<></>)
    }
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
          <CheckIfMyCity />
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