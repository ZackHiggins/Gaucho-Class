import React from "react";
import Search from "./SearchByDepartment/Search";
import LoadData from "./LoadingScreen/LoadData";
import Sidebar from "./Sidebar/Sidebar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedCourses: []
    };

    this.addCourse = this.addCourse.bind(this);
  }

  addCourse(course) {
    this.setState({
      selectedCourses: this.state.selectedCourses.concat(course)
    });
    console.log("Courses: ", this.state.selectedCourses);
  }

  render() {
    return (
      <div>
        <Search addCourse={this.addCourse} />
        <Sidebar courses={this.state.selectedCourses} />
        {/* <div style={{position: "fixed", top: 400}}><LoadData /></div> */}

      </div>
    );
  }
}

export default App;
