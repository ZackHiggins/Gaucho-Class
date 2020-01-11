import React from "react";

export let Courses;

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      foundError: false,
      courses: {}
    };
  }

  componentDidMount() {
    var url = new URL(
      "https://api.ucsb.edu/academics/curriculums/v1/classes/search?"
    ); // GOLD API
    var params = {
      quarter: 20201,
      pageNumber: 1,
      pageSize: 100,
      includeClassSections: true
    };

    url += new URLSearchParams(params).toString();

    fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        "ucsb-api-version": "1.0",
        "ucsb-api-key": "Ci6LtaGYVEQETL1Q5vzBgpw1oirtt5Aa"
      }
    })
      .then(response => response.json())
      .then(result => {
        this.setState({
          courses: result.classes,
          foundError: false,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          foundError: true,
          courses: {}
        });
      });
  }

  createCourseArray() {
    let len = typeof this.state.courses;
    for (let i = 0; i < len; i++) {
      let courseObj = this.state.courses[i];
      let result = {
        courseId: courseObj.courseId,
        title: courseObj.title,
        description: courseObj.description,
        college: courseObj.college,
        objLevelCode: courseObj.objLevelCode,
        subjectArea: courseObj.subjectArea,
        generalEducation: courseObj.generalEducation,
        classSections: courseObj.classSections
      };
      Courses.push(result);
    }
  }

  render() {
    Courses = this.state.courses;
    console.log("Courses", Courses);
    return (
      <div>
        {this.state.isLoading ? <p> Loading ... </p> : <p>Done Loading</p>}
      </div>
    );
  }
}

export default LandingPage;
