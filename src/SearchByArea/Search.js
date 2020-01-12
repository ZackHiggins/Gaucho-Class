import React from "react";
import ReactDOM from "react-dom";

import CollegesNavBar from "./Dropdowns/CollegesNavbar";
import AreasNavbar from "./Dropdowns/AreasNavbar";
import DisplayCourses from "./CourseDisplay/DisplayCourses";
import App from "../App";

let dictOfAreas = {
  ENGR: ["A", "D", "E", "F", "G", "E", "EUR", "NWC", "WRT", "AMH", "ETH"],
  LNS: ["A", "B", "D", "E", "F", "G", "E", "QNT", "ETH", "EUR", "NWC", "WRT"],
  CRST: ["A", "B", "D", "E", "F", "G", "E", "QNT", "ETH", "EUR", "NWC", "WRT"]
};

export let Area;
export let College;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      college: "",
      area: "",
      possibleAreas: [],
      courses: []
    };
    this.collegeSelected = this.collegeSelected.bind(this);
    this.areaSelected = this.areaSelected.bind(this);
  }

  collegeSelected(college) {
    College = college;
    let collegeAreas = dictOfAreas[college];
    this.setState({
      college: college,
      isLoading: false,
      possibleAreas: collegeAreas,
      area: "",
      courses: []
    });
  }

  areaSelected(area) {
    Area = area;
    this.setState(prevState => {
      return {
        college: prevState.college,
        isLoading: false,
        possibleAreas: prevState.possibleAreas,
        area: area,
        courses: []
      };
    });
  }

  render() {
    return (
      <div>
        <CollegesNavBar collegeSelected={this.collegeSelected} />
        {this.college === "" ? (
          <p>Select a college!</p>
        ) : (
          <AreasNavbar
            possibleAreas={this.state.possibleAreas}
            areaSelected={this.areaSelected}
          />
        )}
        {this.state.area === "" ? <p>Select a College</p> : <DisplayCourses />}
        <button
          onClick={() =>
            ReactDOM.render(<App />, document.getElementById("root"))
          }
          className="btn"
          style={{ position: "absolute", right: 0, top: 0 }}
        >
          Back
        </button>
      </div>
    );
  }
}

export default Search;
