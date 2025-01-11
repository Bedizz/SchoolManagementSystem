import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="border-black border-2 w-full h-full">
      <div className="border-black border-2 ">
        <div className="flex justify-between items-center ">
          <h1>All Teachers</h1>
          <div className="flex justify-between items-center border-black border-2 w-1/2">  
            <input type="text" placeholder="Search from table" />
            <div>
            <button><Image src="/filter.png" alt="filter" width={14} height={14}/></button>
            <button><Image src="/filter.png" alt="filter" width={14} height={14}/></button>
            <button><Image src="/filter.png" alt="filter" width={14} height={14}/></button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="border-black border-2 ">GÖVDE</div>
      <div className="border-black border-2 ">PAGİNATİON</div>
      hello
    </div>
  );
};

export default page;
