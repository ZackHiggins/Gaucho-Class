import React from "react";
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import { Scheduler, Appointments, WeekView} from '@devexpress/dx-react-scheduler-material-ui';

function CreateCalendar(props) {
  var data = [];

  props.courses.map((course) => {
    var startTime, endTime, days;
    for (var i = 0; i < course.classSections.length; ++i) {
      var selectedTime = props.sectionIds[course.courseId];
      if (course.classSections[i].section === selectedTime) {
        startTime = course.classSections[i].timeLocations[0].beginTime;
        endTime = course.classSections[i].timeLocations[0].endTime;
        days = course.classSections[i].timeLocations[0].days;
      }
    }
    var daysArray = days.split("");

    var daysToDates = {
      "M": "2020-01-06 ",
      "T": "2020-01-07 ",
      "W": "2020-01-08 ",
      "R": "2020-01-09 ",
      "F": "2020-01-10 ",
    }

    var date;

    for (let d in daysArray) {
      if (d === "") continue;
      date = daysToDates[d];

    }
    data.push({startDate: date + startTime, endDate: date + endTime, title: course.title})
  });

  // data.push({startDate: '2020-01-06 12:00', endDate: '2020-01-06 13:30', title: 'CMPSC 48'})
    return (
        <Scheduler
      data={data}
    >
      <ViewState defaultCurrentDate="2020-01-06" />
      <WeekView excludedDays = {[0,6]} startDayHour = {7.50} endDayHour = {22.50} cellDuration = {60}/>
      <Appointments/>
    </Scheduler>
    )
}

export default CreateCalendar