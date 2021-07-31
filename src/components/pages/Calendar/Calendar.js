import React from 'react';
import './Calendar.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from "@fullcalendar/interaction";


class Calendar extends React.Component {
  render() {
    return (
      <FullCalendar
        /*plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
          { title: 'event 1', date: '2021-07-30' },
          { title: 'event 2', date: '2019-04-02' }
        ]}*/
        plugins={[ dayGridPlugin, interactionPlugin ]}
        eventContent={renderEventContent}
      />
    )
  }

  handleDateClick = (arg) => { 
    alert(arg.dateStr)
  }
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

export default Calendar;