import React from "react";
import { useEffect, useState } from 'react'
import store from "../utilities/localStore";

const AnalogClock = () => {
  const [timeString, setTimeString] = useState(new Date().toLocaleTimeString('sv-SE', { timeZone: store.timeZone }))
  const [hour, setHour] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')

  useEffect(function uppdateTime() {
    update()
    const interval = setInterval(() => {
      update()
    }, 1000);
    return () => clearInterval(interval)
  }, [])

  function getTimeFromString(timeZoneToString) {
    let arr = timeZoneToString.split(':');
    setHour(parseInt(arr[0]));
    setMin(parseInt(arr[1]));
    setSec(parseInt(arr[2]));
  }

  function update() {
    let timeString = new Date().toLocaleTimeString('sv-SE', { timeZone: store.timezone })
    setTimeString(timeString)
    getTimeFromString(timeString)
  }


  return (

    <div className="analogClockBody"> <>{ /* Added padding for analogClock */}</>
      <div className="analogClock" style={{
        marginTop: "1.25%",
        marginBottom: "1.25%"
      }}>
        <div className="hourHand Hand"
          style={{
            transform: `translateX(-50%) rotateZ(${hour * 30}deg) `
          }}></div>
        <div className="minuteHand Hand"
          style={{
            transform: `translateX(-50%) rotateZ(${min * 6}deg) `
          }}></div>

        <div className="secondHand Hand"
          style={{
            transform: `translateX(-50%) rotateZ(${sec * 6}deg) `
          }}
        >
        </div>
        <div className="midCircle"></div>

        <span className="clock1">1</span>
        <span className="clock2">2</span>
        <span className="clock3">3</span>
        <span className="clock4">4</span>
        <span className="clock5">5</span>
        <span className="clock6">6</span>
        <span className="clock7">7</span>
        <span className="clock8">8</span>
        <span className="clock9">9</span>
        <span className="clock10">10</span>
        <span className="clock11">11</span>
        <span className="clock12">12</span>

      </div>
    </div>

  )
}



export default AnalogClock