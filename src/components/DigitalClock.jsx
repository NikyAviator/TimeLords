import { useState, useEffect } from 'react'
import Digit from './Digit'
import store from '../utilities/localStore'

const DigitalClock = () => {
  const [timeString, setTimeString] = useState(new Date().toLocaleTimeString('sv-SE', { timeZone: store.timezone }))
  const [digits, setDigits] = useState([])

  useEffect(() => {
    update()
    const interval = setInterval(() => {
      update()
    }, 1000);
    return () => clearInterval(interval)
  }, [])

  function update() {
    let timeString = new Date().toLocaleTimeString('sv-SE', { timeZone: store.timezone })
    setTimeString(timeString)
    setDigits(extractDigits(timeString))
  }

  function extractDigits(timeString) {
    let digits = []
    for (let i = 0; i < timeString.length; i++) {
      digits.push(timeString[i] === ':' ? '_' : timeString[i])
    }
    return digits
  }

  return (
    <>
      <div className="digital-clock py-5">
        {digits.length > 0 && digits.map((digit, index) => {
          return <Digit key={index} {...{ digit }} />
        })}
      </div>
    </>
  )
}

export default DigitalClock