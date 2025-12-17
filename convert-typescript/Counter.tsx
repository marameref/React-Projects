import React, { Component } from 'react';

// Define the shape of the state
interface CounterState {
  count: number;
}

// Class components use Generics: Component<Props, State>
// We use {} for Props because this component doesn't take any props
class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0
  };

  // Method to increment the count
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;