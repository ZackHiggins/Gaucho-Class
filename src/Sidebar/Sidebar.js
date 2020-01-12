import React from "react";
import Stats from "./Stats";
import Basket from "./Basket";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{ position: "fixed", right: 0, top: 100, bottom: 0, width: 300, backgroundColor: "#444444", zIndex: 1 }}>
                <Stats courses={this.props.courses} />
                <Basket courses={this.props.courses} addCourseTime={this.props.addCourseTime} />
            </div>
        );
    }
}

export default Sidebar;