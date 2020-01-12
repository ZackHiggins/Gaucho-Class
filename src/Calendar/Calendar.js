import React from "react";
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import { Scheduler, Appointments, WeekView} from '@devexpress/dx-react-scheduler-material-ui';

function CreateCalendar(props) {
    return (
        <Scheduler
      data={[
        {courseId: '', courseTitle: '', daysOfWeek: '', startTime: '', endTime: '', location: '', professor: ''},
        {startDate: '2020-01-06 18:00', endDate: '2020-01-06 19:30', title: 'Computer Science Projects'}
      ]}
    >
      <ViewState defaultCurrentDate="2020-01-06" />
      <WeekView excludedDays = {[0,6]} startDayHour = {7.50} endDayHour = {22.50}/>
      <Appointments data = {{startDate: '2020-01-06 18:00', endDate: '2020-01-06 19:30', title: 'Computer Science Projects', rRule: 'FREQ=DAILY;COUNT=4'}}/>
    </Scheduler>
    )
}

export default CreateCalendar