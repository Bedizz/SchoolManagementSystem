import Container from '@/components/Container'
import Pagination from '@/components/Pagination'
import Search from '@/components/Search'
import { announcementsData, classesData, examsData, role } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const columns = [

    {
        header: "Class",
        accessor: "class",
        className: "hidden md:table-cell"
    },
    {
      header: "Title",
      accessor: "title",
      className: "hidden md:table-cell"
  },
    {
        header: "Date",
        accessor: "date",
        className: "hidden md:table-cell"
    },
    
    {
        header: "Actions",
        accessor: "actions",
        className: "hidden md:table-cell"
    },
  ]

const AnnouncementPage = () => {
  const renderRow = (item: Announcement) => {
    return (
      <tr key={item.id} className="border-b border-gray-200 even:bg-gray-100 text-sm hover:bg-maPurpleLight" >
      <td className='flex items-center gap-4 p-4'>

       <div className='flex flex-col'>
           <h3 className="font-semibold">{item.class}</h3>
       </div>
       </td>
       <td className="hidden md:table-cell">{item.title}</td>
       <td className="hidden md:table-cell">{item.date}</td>

       <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-maSky">
            <Image src="/view.png" alt="edit" width={16} height={16}  />
          </button>
          
          </Link>
          <Link href={`/list/teachers/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-maPurple">
            <Image src="/delete.png" alt="edit" width={16} height={16}  />
          </button>
          
          </Link>
        </div>
       </td>

   </tr>
    )
  }
    
  return (
    <div className=" p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex justify-between items-center ">
        <h1 className="hidden md:block text-lg font-semibold">All Announcements</h1>
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
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-maYellow">
                <Image src="/plus.png" alt="filter" width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Middle */}
      <Container columns={columns} data={announcementsData} renderRow={renderRow} />
      <Pagination />
    </div>
  );
}

export default AnnouncementPage