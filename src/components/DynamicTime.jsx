import { useEffect, useState } from 'react'
import AnalogClock from './AnalogClock'
import { Button ,Container ,Row} from 'react-bootstrap'
 

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
  }, [update])

  function update() {
    let date = new Date()
    let timeZone = timeZoneInfo.timezone
    setTimeZone(timeZone)
    setTimeString(date.toLocaleTimeString('sv-SE', { timeZone: timeZone }))
    setDateString(date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: timeZoneInfo.timezone }))
  }

  const TimeZone = function timeZoneAsString() {
    return (
      <p>
        The time in{' '}
        <b>
          {timeZone.split('/').reverse().map(element => element.replace('_', ' ')).join(', ')}
        </b>
      </p>
    )
  }
  const [isToggle, setToggle] = useState(false);

  function toggleClock() {
    setToggle(
      !isToggle)
  }

  return (
    <Container className= "text-center">
     <Row>
    <Col> 
     <TimeZone />
      <h1 >{isToggle ? timeString : <AnalogClock />}
  </h1>
 
      <Button
       size="sm"         
        variant="success"
        onClick={toggleClock}>Show Analog Clock</Button>{' '}
      <p>{dateString}</p>
      </Col>
     </Row>
    </Container>
  )
}

export default DynamicTime