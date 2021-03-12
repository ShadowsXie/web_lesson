import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      // JSX
      <ul className = "my-list">
        <li>{false ? 'JSpang' : '技术胖'}</li>
        <li>I Love React</li>
      </ul>
    )
  }
}

export default App