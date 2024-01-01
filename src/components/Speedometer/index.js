import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    this.setState(prevState => ({count: Math.min(prevState.count + 10, 200)}))
  }

  applyBrake = () => {
    this.setState(prevState => ({count: Math.max(prevState.count - 10, 0)}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="body">
        <h1>SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1>Speed is {count}mph</h1>

        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-con">
          <button className="btn" type="button" onClick={this.accelerate}>
            Accelerate
          </button>
          <button type="button" onClick={this.applyBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
