import React from "react";
import CourseSearch from "./CourseSearch"
import DepartmentSearch from "./DepartmentSearch";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            currentDept: ""
        }

        this.updateDept = this.updateDept.bind(this);
        this.getDepartmentCourses = this.getDepartmentCourses.bind(this);
    }

    updateDept(dept) {
        this.setState({ currentDept: dept });
        console.log("Current Department: " + dept);
        this.getDepartmentCourses(dept);
    }

    getDepartmentCourses(dept) {
        var url = new URL("https://api.ucsb.edu/academics/curriculums/v1/classes/search?"); // GOLD API
        var params = {
            quarter: 20201,
            pageNumber: 1,
            pageSize: 200,
            includeClassSections: true,
            deptCode: dept
        };

        url += new URLSearchParams(params).toString();

        fetch(url, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'ucsb-api-version': '1.0',
                'ucsb-api-key': 'Ci6LtaGYVEQETL1Q5vzBgpw1oirtt5Aa'
            }
        }).then((response) => response.json())
            .then((result) => {
                this.setState({ courses: result.classes });
                console.log(this.state.courses);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    render() {
        return (
            <div style={{ backgroundColor: "#333333", position: "fixed", top: 0, left: 0, right: 0, height: 100}}>
                <DepartmentSearch updateDept={this.updateDept} />
                <CourseSearch courses={this.state.courses} addCourse={this.props.addCourse} currentDept={this.state.currentDept} />
            </div>
        );
    }
}

export default Search;