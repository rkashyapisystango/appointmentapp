import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import './main.scss' 
const RightSection = (props) => {
   const { calendarData } = props;
  return (
   <>
      <FullCalendar 
        defaultView="dayGridMonth" 
        plugins={[ dayGridPlugin ]} 
        events={calendarData.calendarData}
          eventClick={(info) => {
              console.log(info)
          }}
          dateClick={(info) => console.log('info', info)}
          />
   </>
  )
}

RightSection.propTypes = {
//   getList: PropTypes.func
}

export default RightSection
