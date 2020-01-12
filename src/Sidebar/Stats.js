import React from 'react'

class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    calculateUnits(courses) {
        var units = 0;

        for (let c of courses)
            units += c.unitsFixed || c.unitsVariableHigh;

        return units;
    }

    render() {
        return (
            <div style={{ color: "white", zIndex: 0, textAlign: "center", width: "100%", position: "block" }}>
                <div style={{ float: "left", margin: 23, marginBottom: 5, fontSize: 24 }}>
                    <div id="courseCount" style={{ textAlign: "center" }}>{this.props.courses.length}</div>
                    <div style={{ textAlign: "center", fontSize: 12 }}>COURSES</div>
                </div>
                <div style={{ float: "left", margin: 23, marginBottom: 5 }}>
                    <div id="unitCount" style={{textAlign: "center", fontSize: 24}}>{this.calculateUnits(this.props.courses)}</div>
                    <div style={{ textAlign: "center", fontSize: 12 }}>UNITS</div>
                </div>
                <div style={{ float: "left", margin: 23, marginBottom: 5, fontSize: 24 }}>
                    <div id="courseCount" style={{ textAlign: "center" }}>{3 * this.calculateUnits(this.props.courses)}</div>
                    <div style={{ textAlign: "center", fontSize: 12 }}>HRS/WEEK</div>
                </div>
            </div>
        );
    }
}

export default Stats;