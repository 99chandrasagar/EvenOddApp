// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({
      count: prevState.count + randomNumber,
    }))
  }

  render() {
    const {count} = this.state
    let auth1
    //  console.log(odd)
    if (count % 2 !== 0) {
      auth1 = <p>Count is odd</p>
    } else {
      auth1 = <p>Count is Even</p>
    }
    return (
      <div className="bg-container">
        <h1>Count {count}</h1>
        {auth1}
        <button type="button" className="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p>Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
