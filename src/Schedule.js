import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import * as plants from './default_input_data.json';

window.moment = moment
const getWateringEvents = () => {
  let allEvents = []
  debugger
  const firstDay = moment().day(8)
  // const lastDay = moment().day
  JSON.parse(plants).forEach(plant => {

  })
}



export function Schedule() {
  const localizer = momentLocalizer(moment)

  console.log(moment().day(8))
  getWateringEvents()


  // Event {
  //   title: string,
  //   start: Date,
  //   end: Date,
  //   allDay?: boolean
  //   resource?: any,
  // }



  return (
    <div>
      <Calendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  )
}
