import Image from 'next/image'
import React from 'react'

const announcements = [
    {
        id: 1,
        title: 'School Reopening',
        description: 'School will be reopening on 1st January 2022. Please make sure to pay your fees on time.',
        importance: "critical"
    },
    {
        id: 2,
        title: 'Parent-Teacher Meeting',
        description: 'Parent-Teacher meeting will be held on 5th January 2022. Please make sure to attend.',
        importance: "high"

    },
    {
        id: 3,
        title: 'Winter Vacation',
        description: 'Winter vacation will start from 15th January 2022 to 30th January 2022.',
        importance: "normal"

    },

]

const Announcements = () => {
    
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
              <div className='flex justify-between items-center border-b-black border-b-2'>
            <h1 className='text-lg font-semibold'>Announcement</h1>
            <h2 className='text-sm text-gray-400 hover:text-gray-600 cursor-pointer'>View All</h2>
            </div>
      <div className=''>
        {announcements.map((announcement) => (
          <div key={announcement.id} className={`p-2 border-b my-2 border-gray-200 rounded-xl  ${announcement.importance === "critical" ? "bg-red-300" : "bg-gray-200"} ${announcement.importance === "high" ? "bg-orange-300" : "bg-gray-200"} ${announcement.importance === "normal" ? "bg-green-300" : "bg-gray-200"}  "bg-gray-200"}`}>
            <h3 >{announcement.title}</h3>
            <p className="text-sm text-gray-500">{announcement.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Announcements
