// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {press1: false, press2: false}

  showHide = () => {
    this.setState(prevValue => ({press1: !prevValue.press1}))
  }

  showHide2 = () => {
    this.setState(prevValue => ({press2: !prevValue.press2}))
  }

  render() {
    const {press1, press2} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-container">
          <div className="name-container">
            <button
              onClick={this.showHide}
              className="button button1"
              type="button"
            >
              Show/Hide Firstname
            </button>
            {press1 && <p className="first-name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              onClick={this.showHide2}
              className=" button button2"
              type="button"
            >
              Show/Hide Lastname
            </button>
            {press2 && <p className="last-name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
