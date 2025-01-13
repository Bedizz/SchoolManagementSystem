import React from 'react'




const Container = ({columns,data,renderRow}: {
    columns: { header: string; accessor: string; className?: string }[];
    renderRow: (item: any) => React.ReactNode;
    data: any[];
  })=> {
  return (
    <table  className='w-full mt-4'>
        <thead>
            <tr>
                {columns.map((column, index) => (
                    <th key={index} className={`text-xs font-semibold text-left ${column.className}`}>{column.header}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.map((item) => renderRow(item))}
        </tbody>

      
    </table>
  )
}

export default Container
