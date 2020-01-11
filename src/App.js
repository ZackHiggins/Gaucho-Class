import React from "react";
import Search from "./Search/Search"

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Hello Gaucho Class!</h1>
        <Search />
      </div>
    );
  }
}

export default App;