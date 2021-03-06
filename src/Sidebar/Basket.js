import React from "react";
import ProfData from "../rateMyProf/ProfData";

class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    SectionList = ({ course }) => {
        console.log(course);

        var sections = course.classSections;

        return (
            <>
                {sections.map(section => (
                    <div>
                        {section.section.endsWith("00")
                            ? <span>
                                <p style={{ marginBottom: 5 }}>Lecture: {section.timeLocations[0].days + " " + section.timeLocations[0].beginTime + "-" + section.timeLocations[0].endTime}</p>
                                <p style={{ margin: 5 }}>Lecturer: {section.instructors[0] && section.instructors[0].instructor} <ProfData name={section.instructors[0].instructor} /></p>
                                <p style={{ margin: 5 }}>Location: {section.timeLocations[0].building} {section.timeLocations[0].room}</p>
                            </span>

                            : <ul style={{ margin: 5 }} onClick={() => this.props.addCourseTime(course.courseId, section.section)}>
                                {section.timeLocations[0] ? <li>{section.timeLocations[0].days + " " + section.timeLocations[0].beginTime + "-" + section.timeLocations[0].endTime}</li> : console.log("")}
                            </ul>
                        }
                    </div>
                ))}
            </>
        );
    }

    CourseList = ({ courses }) => {
        return (
            <>
                {courses.map(course => (
                    <div key={course.courseId}>
                        <hr style={{ marginRight: 22 }} />
                        <p>{course.courseId}: <span style={{ textTransform: "capitalize" }}>{course.title.toLowerCase()}</span></p>
                        <this.SectionList course={course} />
                    </div>
                ))}
            </>
        );
    }

    render() {
        return (
            <div style={{ color: "white", paddingLeft: 10, paddingRight: 10, height: "90%", overflowY: "scroll", width: "100%" }}>
                <br />
                <h3 style={{ textAlign: "center", margin: 5 }}>Selected Courses</h3>
                <this.CourseList courses={this.props.courses} />
            </div>
        );
    }
}

export default Basket;