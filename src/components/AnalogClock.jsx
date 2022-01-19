const AnalogClock = () => {

  setInterval(setClock, 1000)

  function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getminutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.gethours()) / 12
  }

  return (

    <div className="analogClock">
      <div className="hourHand Hand" data-hour-hand></div>
      <div className="minuteHand Hand" ></div>
      <div className="secondHand Hand" ></div>
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

  )
}

export default AnalogClock