import React from "react";
import search from "../Search";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      courses: {}
    };
  }
  componentDidMount() {
    // fetch all data
  }
  render() {
    return <h1>Search By Area</h1>;
  }
}

export default Container;
