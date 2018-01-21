import React, { Component } from 'react';

const withCounter = (Component) =>
  class extends Component {
    state = { count: 0 };

    decrease = () => {
      this.setState({ count: this.state.count - 1 });
    };

    increase = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render () {
      return (
        <Component
          {...this.props}
          counter={{
            count: this.state.count,
            decrease: this.decrease,
            increase: this.increase
          }}
        />
      );
    }
  };

class App extends Component {
  render () {
    const { count, decrease, increase } = this.props.counter;
    return (
      <div>
        <button onClick={decrease}>-</button>
        <span>{count}</span>
        <button onClick={increase}>+</button>
      </div>
    );
  }
}

export default withCounter(App);
