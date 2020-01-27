import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import plants from './default_input_data.json'

const getWateringEvents = () => {
  let allEvents = []
  const firstDay = moment().day(8)
  const lastDay = moment().day(8 + 12*7)
  plants.forEach(plant => {
    let currentWateringDay = firstDay.clone()
    const daysInterval = parseInt(plant.water_after.split(" ")[0])
    while (currentWateringDay <= lastDay) {
      allEvents.push({
        title: plant.name,
        start: currentWateringDay.clone(),
        end: currentWateringDay.clone(),
        allDay: true
      })
      currentWateringDay.add(daysInterval, 'days')
    }
  })
  return allEvents
}



export function Schedule() {
  const localizer = momentLocalizer(moment)
  const events = getWateringEvents()

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        views={['month']}
        popup={true}
        style={{ height: 500 }}
      />
    </div>
  )
}
