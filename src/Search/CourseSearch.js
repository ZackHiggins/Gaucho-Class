import React from "react";

class CourseSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    selectCourse(course) {

    }

    CourseList = ({ courses }) => {
        return (
            <>
                {courses.map(course => (
                    <tr key={course.courseId} onClick={() => this.selectCourse(course)}>
                        <td>{course.title}</td>
                        <td>{course.courseId}</td>
                    </tr>
                ))}
            </>
        );
    }

    render() {
        return (
            <div>
                <input type="text" id="courseSearchInput" onKeyUp={this.filterCourses} placeholder="Search for courses..." />
                <table id="courseSearchTable">
                    <tr className="header">
                        <th style={{ width: "70%" }}>Course Name</th>
                        <th style={{ width: "30%" }}>Course ID</th>
                    </tr>
                    <this.CourseList courses={this.props.courses} />
                </table>
            </div>
        );
    }
}

export default CourseSearch;