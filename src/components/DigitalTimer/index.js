// Write your code here

import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {
    seconds: 25 * 60,
    timerLimit: 25,
    isTimerRunning: false,
  }

  /* componentDidMount = () => {
    this.timerId = setInterval(this.setTime, 1000)
  }

  setTime = () => {
    this.setState(prev => ({seconds: prev.seconds - 1}))
  } */

  onIncreaseTimer = () => {
    clearInterval(this.timerId)
    const {timerLimit} = this.state
    this.setState(prev => ({
      timerLimit: prev.timerLimit + 1,
      seconds: timerLimit * 60 + 60,
      isTimerRunning: false,
    }))
  }

  onDecreaseTimer = () => {
    clearInterval(this.timerId)
    const {timerLimit} = this.state
    if (timerLimit > 0) {
      this.setState(prev => ({
        timerLimit: prev.timerLimit - 1,
        seconds: timerLimit * 60 - 60,
        isTimerRunning: false,
      }))
    }
  }

  onClickPlay = () => {
    // const {seconds} = this.state
    this.setState(prev => ({
      isTimerRunning: !prev.isTimerRunning,
      seconds: prev.seconds,
    }))
    this.timerId = setInterval(this.setTime, 1000)
  }

  setTime = () => {
    const {seconds} = this.state
    if (seconds > 0) {
      this.setState(prev => ({seconds: prev.seconds - 1}))
    } else {
      clearInterval(this.timerId)
    }
  }

  onClickPause = () => {
    clearInterval(this.timerId)
    this.setState(prev => ({
      isTimerRunning: !prev.isTimerRunning,
      seconds: prev.seconds,
    }))
  }

  onClickReset = () => {
    clearInterval(this.timerId)
    this.setState({
      isTimerRunning: false,
      seconds: 25 * 60,
      timerLimit: 25,
    })
  }

  render() {
    const {seconds, timerLimit, isTimerRunning} = this.state

    return (
      <div className="bg-container">
        <h1>Digital Timer </h1>
        <p className="timer"> {seconds} </p>
        <p className="timer timer1"> set timer limit</p>
        <div className="timer-container">
          <button type="button" onClick={this.onIncreaseTimer}>
            {' '}
            +{' '}
          </button>
          <p> {timerLimit} </p>
          <button type="button" onClick={this.onDecreaseTimer}>
            {' '}
            -{' '}
          </button>
        </div>
        <div className="last-container">
          <div>
            {isTimerRunning === false ? (
              <button type="button" onClick={this.onClickPlay}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                  alt="play icon"
                />
              </button>
            ) : (
              <button type="button" onClick={this.onClickPause}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                  alt="pause icon"
                />
              </button>
            )}
          </div>
        </div>
        <div>
          <button type="button" onClick={this.onClickReset}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
              alt="reset icon"
              className="reset"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
