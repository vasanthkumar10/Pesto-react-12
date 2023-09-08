import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      count: 0,
    };

    // this.handleIncrement = this.handleIncrement.bind(this);
  }

  static getDerivedStateFromProps() {
    console.log("derived state from props");
  }

  componentDidMount() {
    console.log("component did mount");
  }

  shouldComponentUpdate() {
    console.log("in shouldcomponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("compoenent did update");
  }

  handleIncrement = () => {
    // setState -> update the state and re-render(trigger update phase of react) the UI
    this.setState({
      count: this.state.count + 1,
    });
    console.log("state", this.state.count);
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    console.log("render");
    return (
      <div>
        <h1>Class counter - {this.state.count}</h1>
        <button onClick={this.handleIncrement}>increment</button>
        <button onClick={this.handleDecrement}>decrement</button>
      </div>
    );
  }
}
