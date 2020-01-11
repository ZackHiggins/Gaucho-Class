import React from "react";
import CourseSearch from "./CourseSearch"
import DepartmentSearch from "./DepartmentSearch";

class Search extends React.Component {
    constructor() {
        super();
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
            <div>
                <DepartmentSearch updateDept={this.updateDept} />
                <CourseSearch currentDept={this.state.currentDept} courses={this.state.courses} />
            </div>
        );
    }
}

export default Search;