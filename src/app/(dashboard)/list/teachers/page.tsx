import Container from "@/components/Container";
import FormModel from "@/components/FormModel";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import { parentsData, role, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const columns = [
  {
      header: "Info",
      accessor: "info",
  },
  {
      header: "Teacher ID",
      accessor: "teacherID",
      className: "hidden md:table-cell"
  },
  {
      header: "Subjects",
      accessor: "subjects",
      className: "hidden md:table-cell"
  },
  {
      header: "Classes",
      accessor: "classes",
      className: "hidden md:table-cell"
  },
  {
      header: "Phone",
      accessor: "phone",
      className: "hidden md:table-cell"
  },
  {
      header: "Adress",
      accessor: "adress",
      className: "hidden md:table-cell"
  },
  {
      header: "Actions",
      accessor: "actions",
      className: "hidden md:table-cell"
  },
]




const teacherPage = () => {

  const renderRow = (item: Teacher) => {
    return (
      <tr key={item.id} className="border-b border-gray-200 even:bg-gray-100 text-sm hover:bg-maPurpleLight" >
      <td className='flex items-center gap-4 p-4'>
       <Image src={item.photo} alt={item.name} width={40} height={40} className="md:hidden xl:block w-10 h-10 rounded-full object-cover" />
       <div className='flex flex-col'>
           <h3 className="font-semibold">{item.name}</h3>
           <p className="text-xs text-gray-500">{item?.email}</p>
       </div>
       </td>
       <td className="hidden md:table-cell">{item.teacherId}</td>
       <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
       <td className="hidden md:table-cell">{item.classes.join(",")}</td>
       <td className="hidden md:table-cell">{item.phone}</td>
       <td className="hidden md:table-cell">{item.address}</td>
       <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
          {/* <button className="w-7 h-7 flex items-center justify-center rounded-full bg-maSky">
            <Image src="/view.png" alt="edit" width={16} height={16}  />
          </button> */}
          <FormModel table="teacher" type="update"   />
          
          </Link>
          <Link href={`/list/teachers/${item.id}`}>
          {/* <button className="w-7 h-7 flex items-center justify-center rounded-full bg-maPurple">
            <Image src="/delete.png" alt="edit" width={16} height={16}  />
          </button> */}
          <FormModel table="teacher" type="delete" id={item.id}  />
          
          </Link>
        </div>
       </td>

   </tr>
    )
  }
  return (
    <div className=" p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex justify-between items-center ">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
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
              <FormModel table="announcement" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* Middle */}
      <Container columns={columns} renderRow={renderRow} data={teachersData} />
      <Pagination />
    </div>
  );
};

export default teacherPage;
