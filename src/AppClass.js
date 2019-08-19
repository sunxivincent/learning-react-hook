import React , { Component } from 'react';

class App extends Component {

  state = {
    count: 0,
    isOn: false,
  };

  toggleLight = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }))
  };

  incrementCounter = () => {
    this.setState(prevState => ({
      count: 1 + prevState.count
    }));
  };

  render() {
    return (
      <>
      <h2>Counter</h2>
      <button onClick={this.incrementCounter}>
        Click me {this.state.count}
      </button>
      <h2>Toggle Light</h2>
      <div
        style={{
          height: '50px',
          width: '50px',
          background: this.state.isOn ? 'red' : 'green'
        }}
        onClick={this.toggleLight}
      >
      </div>
      </>
    );
  }
}

export default App;
