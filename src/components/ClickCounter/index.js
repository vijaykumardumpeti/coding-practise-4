// Write your code here

import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {countings: 0}

  onIncrement = () => {
    this.setState(prevState => ({countings: prevState.countings + 1}))
  }

  render() {
    const {countings} = this.state
    return (
      <div>
        <h1 className="heading">
          The Button has been clicked{' '}
          <span className="anchor">{countings}</span>
          times
        </h1>
        <p className="paragraph">Click the button to increase the count!</p>
        <div className="btn-container">
          <button
            onClick={this.onIncrement}
            className="btn-style"
            type="button"
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
