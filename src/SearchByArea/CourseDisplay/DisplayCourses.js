import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import { AutoSizer, Column, Table } from "react-virtualized";
import styles from "./styles";
import { Courses } from "../../LoadingScreen/LoadData";
import { Area } from "../Search";
import { College } from "../Search";

class DisplayCourses extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 48
  };

  getRowClassName = ({ index }) => {
    const { classes, onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null
    });
  };

  cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={
          (columnIndex != null && columns[columnIndex].numeric) || false
            ? "right"
            : "left"
        }
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex }) => {
    const { headerHeight, columns, classes } = this.props;

    return (
      <TableCell
        component="div"
        className={clsx(
          classes.tableCell,
          classes.flexContainer,
          classes.noClick
        )}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? "right" : "left"}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  render() {
    const {
      classes,
      columns,
      rowHeight,
      headerHeight,
      ...tableProps
    } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: "inherit"
            }}
            headerHeight={headerHeight}
            className={classes.table}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={headerProps =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

DisplayCourses.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width: PropTypes.number.isRequired
    })
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number
};

const VirtualizedTable = withStyles(styles)(DisplayCourses);

// -----

const sample = [];

function createData(id, courseId, instructor, location, day, time) {
  // rateMyProfessor(instructor)
  return { id, courseId, instructor, location, day, time };
}

const rows = [];

function getInstructor(obj) {
  let instructor = "CONT";
  if (obj.classSections[0].instructors[0]) {
    instructor = obj.classSections[0].instructors[0].instructor;
  }
  return instructor;
}

function getDayAndTime(obj) {
  let dayAndTime = ["CONT", "CONT"];
  if (obj.classSections[0].timeLocations[0]) {
    const temp = obj.classSections[0].timeLocations[0];
    dayAndTime[0] = temp.days; // represents days
    dayAndTime[1] = temp.beginTime + " to " + temp.endTime; //represents endTime
  }
  return dayAndTime;
}

function getLocation(obj) {
  let location = "CONT";
  const temp = obj.classSections[0].timeLocations[0];
  if (temp.building && temp.room) {
    location = temp.building + " " + temp.room; // represents days
  }
  return location;
}

function filter(generalEducation, areaSelected, collegeSelected) {
  for (let i = 0; i < generalEducation.length; i++) {
    const item = generalEducation[i];
    console.log("HERE", item);
    if (
      item.geCode.trim() === areaSelected &&
      item.geCollege.trim() === collegeSelected
    ) {
      return true;
    }
  }
  return false;
}

export default function ReactVirtualizedTable() {
  let AllCourses = Courses;
  let collegeSelected = College;
  let areaSelected = Area;
  console.log("AreaSelected", areaSelected);
  console.log("collegeSelected", collegeSelected);
  for (let i = 0; i < AllCourses.length; i += 1) {
    const obj = AllCourses[i];

    if (!filter(obj.generalEducation, collegeSelected, areaSelected)) {
      continue;
    }

    let instructor = getInstructor(obj);
    if (instructor === "CONT") {
      continue;
    }

    let dayAndtime = getDayAndTime(obj);
    if (dayAndtime[0] === "CONT" || dayAndtime[1] === "CONT") {
      continue;
    }

    let location = getLocation(obj);
    if (location === "CONT") {
      continue;
    }

    rows.push(
      createData(
        obj.title,
        obj.courseId,
        instructor,
        location,
        dayAndtime[0],
        dayAndtime[1]
      )
    );
  }
  return (
    <Paper style={{ height: 400, width: "100%" }}>
      <VirtualizedTable
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]}
        columns={[
          {
            width: 200,
            label: "Class",
            dataKey: "courseId"
          },
          {
            width: 120,
            label: "Instructor\u00A0",
            dataKey: "instructor",
            numeric: true
          },
          {
            width: 120,
            label: "Location",
            dataKey: "location",
            numeric: true
          },
          {
            width: 120,
            label: "Day\u00A0",
            dataKey: "day",
            numeric: true
          },
          {
            width: 120,
            label: "Time\u00A0",
            dataKey: "time",
            numeric: true
          },
          {
            width: 120,
            label: "Rate My professor",
            dataKey: "ratemyprofessor",
            numeric: true
          }
        ]}
      />
    </Paper>
  );
}
