// Write your code here
import Component from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  clicking = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div>
        <h1 className="heading">The Button has been clicked {count} times</h1>
        <p>Click the button to increase the count!</p>
        <div>
          <button onClick={this.clicking} type="button">
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
