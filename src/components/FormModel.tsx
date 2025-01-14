"use client"
import Image from 'next/image';
import React, { useState } from 'react'

const FormModel =  ({
    table,
    type,
    data,
    id,
  }: {
    table:
      | "teacher"
      | "student"
      | "parent"
      | "subject"
      | "class"
      | "lesson"
      | "exam"
      | "assignment"
      | "result"
      | "attendance"
      | "event"
      | "announcement";
    type: "create" | "update" | "delete";
    data?: any;
    id?: number;
  }) => {
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor =
      type === "create"
        ? "bg-maYellow"
        : type === "update"
        ? "bg-maSky"
        : "bg-maPurple";

        const [open, setOpen] = useState(false);
        return (
<>
<button className={`${size} flex items-center justify-center rounded-full ${bgColor}`} onClick={() => setOpen(true)}>
                <Image src={`/${type}.png`} alt={type} width={16} height={16} />
            </button>
            {open && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white w-1/2 h-1/2 p-4 rounded-lg">
                        <div className="flex justify-end">
                            <button onClick={() => setOpen(false)}>
                                <Image src="/close.png" alt="close" width={16} height={16} />
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <h2 className="text-2xl font-bold">{type} {table}</h2>
                        </div>
                        {/* <Form table={table} type={type} data={data} id={id} /> */}
                    </div>
                </div>

)}
</>
    )
}


export default FormModel
