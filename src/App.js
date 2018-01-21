import React, { Component } from 'react';

class Counter extends Component {
  state = { count: 0 };

  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render () {
    return this.props.children({
      count: this.state.count,
      decrease: this.decrease,
      increase: this.increase
    });
  }
}

class App extends Component {
  render () {
    return (
      <div>
        <Counter>
          {({ count, decrease, increase }) => (
            <div>
              <button onClick={decrease}>-</button>
              <span>{count}</span>
              <button onClick={increase}>+</button>
            </div>
          )}
        </Counter>
      </div>
    );
  }
}

export default App;
