import Container from '@/components/Container'
import FormModel from '@/components/FormModel'
import Pagination from '@/components/Pagination'
import Search from '@/components/Search'
import { eventsData, role } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const columns = [
    {
        header: "Title",
        accessor: "title",
    },
    {
        header: "Date",
        accessor: "date",
        className: "hidden md:table-cell"
    },
    {
        header: "Start Time",
        accessor: "start time",
        className: "hidden md:table-cell"
    },
    {
        header: "End Time",
        accessor: "end time",
        className: "hidden md:table-cell"
    },
  ]


const EventPage = () => {
  const renderRow = (item: Activity) => {
    return (
      <tr key={item.id} className="border-b border-gray-200 even:bg-gray-100 text-sm hover:bg-maPurpleLight" >
      <td className='flex items-center gap-4 p-4'>

       <div className='flex flex-col'>
           <h3 className="font-semibold">{item.title}</h3>
       </div>
       </td>
       <td className="hidden md:table-cell">{item.date}</td>
       <td className="hidden md:table-cell">{item.startTime}</td>
       <td className="hidden md:table-cell">{item.endTime}</td>

       <td>
        <div className="flex items-center gap-2">
        {role === "admin" && (
              <>
                <FormModel table="event" type="update" data={item} />
                <FormModel table="event" type="delete" id={item.id} />
              </>
            )}
        </div>
       </td>

   </tr>
    )
  }
    
  return (
    <div className=" p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex justify-between items-center ">
        <h1 className="hidden md:block text-lg font-semibold">All Events</h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <Search />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-maYellow">
              <Image src="/filter.png" alt="filter" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-maYellow">
              <Image src="/sort.png" alt="filter" width={14} height={14} />
            </button>
            {role === "admin" && (
            <FormModel table="event" type="create"   />
           )}
          </div>
        </div>
      </div>
      {/* Middle */}
      <Container columns={columns} data={eventsData} renderRow={renderRow} />
      <Pagination />
    </div>
  );
}

export default EventPage