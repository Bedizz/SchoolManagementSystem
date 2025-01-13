import React from 'react'

const Pagination = () => {
  return (
    <div className=' p-4 flex items-center justify-center gap-4'>
      <button  className='py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-md '>Prev</button>
      <div className='flex items-center gap-2'>
        <button className='px-2 rounded-sm bg-maSky'>1</button>
        <button className='px-2 rounded-sm bg-maSky'>2</button>
        <button className='px-2 rounded-sm bg-maSky'>3</button>
        ...
        <button className='px-2 rounded-sm bg-maSky'>10</button>
      </div>
      <button  className='py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-md '>Next</button>
    </div>
  )
}

export default Pagination