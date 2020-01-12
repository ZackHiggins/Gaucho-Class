import React from "react";
import ReactDOM from "react-dom";
import Search from "./SearchByDepartment/Search";
import LoadData from "./LoadingScreen/LoadData";
import Sidebar from "./Sidebar/Sidebar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedCourses: [],
      courseTimes: {}
    };

    this.addCourse = this.addCourse.bind(this);
    this.addCourseTime = this.addCourseTime.bind(this);
  }

  addCourse(course) {
    console.log("course to add!: ", course);
    this.setState(prevState => {
      return {
        selectedCourses: prevState.selectedCourses.push(course),
        courseTimes: {}
      };
    });
    console.log("CoursesArray:", this.state.selectedCourses);
  }

  addCourseTime(course, time) {
    var dict = {};
    dict[course] = time;
    console.log(dict);
    this.setState({ courseTimes: { ...this.state.courseTimes, ...dict } });
    console.log("COURSETIMES: ", this.state.courseTimes);
  }

  render() {
    return (
      <div>
        <Search addCourse={this.addCourse} />
        <Sidebar
          courses={this.state.selectedCourses}
          addCourseTime={this.addCourseTime}
        />
        <div style={{ position: "absolute", top: 10, right: 10 }}>
          <button
            onClick={() =>
              ReactDOM.render(<LoadData />, document.getElementById("root"))
            }
          >
            {" "}
            Ge finder
          </button>
        </div>
      </div>
    );
  }
}

export default App;
export const { addCourse } = new App();
