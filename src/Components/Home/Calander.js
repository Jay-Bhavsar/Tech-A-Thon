import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calander.css";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import '../ShowCase.css'
const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big meeting",
    start: new Date("09/09/2022"),
    end: new Date("09/09/2022"),
  },
];
function Calander() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div className="containersection">
      <div className="showcasecontainer">
        <div className="leftsection">
          <div className="App">
            <h1>Calendar</h1>
            <h2 className="schedule">Schedule New Meeting</h2>
            <div className="fields">
                <input type="text" className="inputtext" placeholder="Add Title"  value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
               
            <DateTimePickerComponent placeholder="Choose a date and time"  value={newEvent.start} onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}></DateTimePickerComponent>
            <DateTimePickerComponent placeholder="Choose a date and time"  value={newEvent.end} onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}></DateTimePickerComponent>
            <button className="btns" stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Meeting
                </button>
        </div>
        <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
        </div>
        <div className="seperator"></div>
        <div className="rightsection">
          <div className="groupMembers">
            <h1 className="meetingheading">Group Members :- </h1>
            <div className="member">
              <p className="groupname">karan sharma</p>
              <p className="groupname">karan sharma</p>
              <p className="groupname">karan sharma</p>
              <p className="groupname">karan sharma</p>
              <p className="groupname">karan sharma</p>
              <p className="groupname">karan sharma</p>
            </div>
          </div>
          <hr />
          <div className="meetings">
            <h1 className="meetingheading">List of Meetings:-</h1>
            <div className="meeting">
              <h1 className="meetingName">Name</h1>
              <h1 className="meetingName">Desc</h1>
              <h1 className="meetingName">Date Of meeting</h1>
            </div>
            <div className="contentmeeting">
              <h1 className="meetingContent">Name</h1>
              <h1 className="meetingContent">Desc</h1>
              <h1 className="meetingContent">Date Of meeting</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calander;
