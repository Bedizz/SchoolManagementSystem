"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const events = [
    {
        date: '2022-09-01',
        title: 'Event 1',
        description: 'Description 1',
        location: 'Location 1',
        time: '12:00 PM - 2:00 PM'
    },
    {
        date: '2022-09-02',
        title: 'Event 2',
        description: 'Description 2',
        location: 'Location 2',
        time: '08:00 AM - 10:00 AM'
    },
    {
        date: '2022-09-03',
        title: 'Event 3',
        description: 'Description 3',
        location: 'Location 3',
        time: '02:00 PM - 4:00 PM'
    }
]


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='w-full '>
      <Calendar onChange={onChange} value={value} locale='eng' />
      <div className='flex flex-col bg-white p-4 rounded-lg mt-5 '>
        <div className='flex justify-between items-center border-b-black border-b-2'>
      <h1 className='text-lg font-semibold'>Events</h1>
      <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>
      <div className='flex flex-col gap-4 mt-5'>
        {events.map((event, index ) => {
            return (
                <div key={index} className='bg-gray-100 p-4 rounded-lg border-b-4 odd:border-b-maPurple even:border-b-maYellow'>
                <h2 className='text-lg font-semibold '>{event.title}</h2>
                <p className='text-sm'>{event.description}</p>
                <p className='text-sm'>{event.location}</p>
                <p className='text-sm'>{event.time}</p>
                </div>
            )
        })}
        </div>
      </div>
    </div>
  )
}

export default EventCalendar
