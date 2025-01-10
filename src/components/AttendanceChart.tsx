"use client"
import Image from 'next/image';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 40,
    absent: 24,
  },
  {
    name: 'Tues',
    present: 30,
    absent: 13,
  },
  {
    name: 'Wed',
    present: 20,
    absent: 98,
 
  },
  {
    name: 'Thu',
    present: 27,
    absent: 39,
  
  },
  {
    name: 'Fri',
    present: 18,
    absent: 48,

  },

];


const AttendanceChart = () => {
  return (
    <div className='bg-white h-full w-full p-4 rounded-lg'>
        {/* TITLE */}
        <div className="flex justify-between items-center">
        <h1 className='text-lg font-semibold'>Attendance</h1>
          <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>
      {/* CHART */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}} />
          <Bar dataKey="present" radius={[10,10,0,0]} fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" radius={[10,10,0,0]} />} />
          <Bar dataKey="absent" radius={[10,10,0,0]} fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" radius={[10,10,0,0]} />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart
