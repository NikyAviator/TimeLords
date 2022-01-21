import React, { Component } from "react";

export default class AnalogClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="analogClock">
        <div className="hourHand Hand"
          style={{
            transform: `rotateZ(${this.state.time.getHours() * 30}deg)`
          }}></div>
        <div className="minuteHand Hand"
          style={{
            transform: `rotateZ(${this.state.time.getMinutes() * 6}deg)`
          }}></div>

        <div className="secondHand Hand"
          style={{
            transform: `rotateZ(${this.state.time.getSeconds() * 6}deg)`
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

    )
  }
}