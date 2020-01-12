import React from "react";

class CourseSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.filterCourses = this.filterCourses.bind(this);
        this.selectCourse = this.selectCourse.bind(this);
    }

    filterCourses() {
        var filter, tr, i, txtValue;
        filter = document.getElementById("courseSearchInput").value.toUpperCase();
        tr = document.getElementById("courseSearchTable").getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            txtValue = tr[i].innerText;
            if (txtValue) {
                txtValue.toUpperCase().indexOf(filter) > -1
                    ? tr[i].style.display = ""
                    : tr[i].style.display = "none";
            }
        }
    }

    selectCourse(course) {
        this.props.addCourse(course);
    }

    showCourseTable() {
        document.getElementById("courseSearchTable").style.display = "block";
    }

    hideCourseTable() {
        setTimeout(function () {
            document.getElementById("courseSearchTable").style.display = "none";
        }, 25);
    }

    CourseList = ({ courses }) => {
        return (
            <>
                {courses.map(course => (
                    <tr key={course.courseId} onClick={() => this.selectCourse(course)}>
                        <td style={{ marginBottom: 5, display: "block", width: '100%' }}>{course.courseId}:</td>
                        <td>{course.title}</td>
                        {/* <table>
                            <td style={{ width: "60px" }}>{course.unitsFixed} units</td>
                            <td style={{ width: "120px", fontSize: 12 }}><this.GEList ges={course.generalEducation} /></td>
                            <td>{course.classSections[0].instructors[0] && course.classSections[0].instructors[0].instructor}</td>
                        </table> */}
                    </tr>
                ))}
            </>
        );
    }

    GEList = ({ ges }) => {
        return (
            <ul style={{ margin: 0, padding: 5 }}>
                {ges.map(ge => (
                    <li>{ge.geCollege}: {ge.geCode}</li>
                ))}
            </ul>
        );
    }

    render() {

        var placeholderText = (this.props.currentDept !== ""
            ? "Search for a course (e.g., CMPSC 16 or Problem Solving I)"
            : "↑ Please select a department ↑");

        return (
            <div style={{ position: "fixed", top: 58, left: 50, right: 50, zIndex: 999 }}>
                <input style={{ width: "100%" }} type="text" id="courseSearchInput" onKeyUp={this.filterCourses} onFocus={this.showCourseTable} onBlur={this.hideCourseTable} placeholder={placeholderText} />
                <table id="courseSearchTable" style={{
                    display: "none",
                    top: 50,
                    height: 500,
                    overflowY: "scroll",
                    backgroundColor: "white",
                    border: "1px solid black",
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    padding: 10
                }}>
                    <this.CourseList courses={this.props.courses} />
                </table>
            </div>
        );
    }
}

export default CourseSearch;