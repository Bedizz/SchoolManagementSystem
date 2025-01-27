import Container from "@/components/Container";
import FormModel from "@/components/FormModel";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import {  role } from "@/lib/data";
import prisma from "@/lib/prisma";
import { Class, Subject, Teacher } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ITEM_PER_PAGE } from "@/lib/itemPerPage";
import { useParams } from "next/navigation";

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


type TeacherList = Teacher & {subjects: Subject[]} & {classes: Class[]}

const renderRow = (item:TeacherList) => {
   // you can write it like this but its better to create type for it and use it ==> look at the top for the type
  // const renderRow = (item: Teacher & {subjects: Subject[]} & {classes: Class[]}) => {
  return (
    <tr key={item.id} className="border-b border-gray-200 even:bg-gray-100 text-sm hover:bg-maPurpleLight" >
    <td className='flex items-center gap-4 p-4'>
     <Image src={ item.img || "/noAvatar.png"} alt={item.name} width={40} height={40} className="md:hidden xl:block w-10 h-10 rounded-full object-cover" />
     <div className='flex flex-col'>
         <h3 className="font-semibold">{item.name}</h3>
         <p className="text-xs text-gray-500">{item?.email}</p>
     </div>
     </td>
     <td className="hidden md:table-cell">{item.username}</td>
     <td className="hidden md:table-cell">{item.subjects.map(subject=>subject.name).join(",")}</td>
     <td className="hidden md:table-cell">{item.classes.map(classItem=>classItem.name).join(",")}</td>
     <td className="hidden md:table-cell">{item.phone}</td>
     <td className="hidden md:table-cell">{item.address}</td>
     <td>
      <div className="flex items-center gap-2">
        <Link href={`/list/teachers/${item.id}`}>
        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-maSky">
          <Image src="/view.png" alt="edit" width={16} height={16}  />
        </button>
        </Link>
        <FormModel table="teacher" type="update"   />
        
     
        <FormModel table="teacher" type="delete" id={item.id}  /> 
        
    
      </div>
     </td>

 </tr>
  )
}

const teacherPage = async({ searchParams,} : {searchParams: { [key: string]:string | undefined}}) => {
 const {page, ...queryParams} = searchParams
 const p = page ? parseInt(page) : 1
   // when we pass the fetched data, it will give and error because we want to get Subjects and Classes from the teacher object but we are not getting it from the database. in order to get it we need to use the include method in the findMany method
   // normally we fetch the data like this
   // const data = await prisma.teacher.findMany()
   // const count = await prisma.teacher.count()
   // in order to fetch both at the same time, we can use the $transaction method
   const [data,count] = await prisma.$transaction([

      prisma.teacher.findMany({
       include: {
         subjects: true,
         classes: true
        },
        take: ITEM_PER_PAGE,
        skip:  ITEM_PER_PAGE * (p - 1)
        
      }
    ),
     prisma.teacher.count()
  ])


  
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
      <Container columns={columns} renderRow={renderRow} data={data} />
      <Pagination page={p} count={count} />
    </div>
  );
};

export default teacherPage;
