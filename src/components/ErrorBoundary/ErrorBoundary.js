import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: "",
      info: "",
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, error: error, info: info });
  }

  render() {
    if (this.state.hasError) {
      console.error(this.state.error, this.state.info);
      return <h1 style={{ color: "red" }}>Something went sideway :(</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
