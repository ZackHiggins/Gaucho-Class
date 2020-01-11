import React from "react";
import DepartmentSearch from "./Search/DepartmentSearch"

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Hello Gaucho Class!</h1>
        <DepartmentSearch />
      </div>
    );
  }
}

export default App;