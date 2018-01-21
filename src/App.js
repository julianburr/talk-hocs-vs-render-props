import React, { Component } from 'react';
import createClass from 'create-react-class';

const CounterMixin = {
  getInitialState () {
    return { count: 0 };
  },

  decrease () {
    this.setState({ count: this.state.count - 1 });
  },

  increase () {
    this.setState({ count: this.state.count + 1 });
  }
};

const App = createClass({
  mixins: [ CounterMixin ],

  render () {
    return (
      <div>
        <button onClick={this.decrease}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.increase}>+</button>
      </div>
    );
  }
});

export default App;
