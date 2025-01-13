import Image from 'next/image'
import React from 'react'

const Search = () => {
  return (
    <div className="w-full md:w-auto flex justify-between items-center text-xs rounded-full ring-[1.5px] ring-gray-300 gap-2 px-2">
      <Image src="/search.png" alt="search" width={14} height={14} />  
    <input type="text" placeholder="Search from table" className='w-[200px] p-2 bg-transparent outline-none' />

  </div>
  )
}

export default Search
