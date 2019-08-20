import React , { Component } from 'react';

class App extends Component {

  state = {
    count: 0,
    isOn: false,
    x: null,
    y: null
  };

  componentDidMount() {
    document.title = `you have clicked ${this.state.count} times`;
    window.addEventListener('mousemove', this.handleMouthMove)
  }

  componentDidUpdate() {
    document.title = `you have clicked ${this.state.count} times`;
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouthMove)
  }

  handleMouthMove = event => {
    this.setState({
      x: event.pageX,
      y: event.pageY
    })
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
        <h2>Mouse Position</h2>
        <p>X position: {this.state.x}</p>
        <p>Y position: {this.state.y}</p>
      </>
    );
  }
}

export default App;
