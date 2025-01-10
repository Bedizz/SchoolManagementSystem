"use client"
import Image from "next/image";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 95,
    fill: "white",
  },
  {
    name: "Girls",
    count: 55,

    fill: "#8884d8",
  },
  {
    name: "Boys",
    count: 40,
    fill: "#83a6ed",
  },
];



export const CountChart = () => {
    return (
      <div className="bg-white h-full w-full p-4 rounded-2xl">
        {/* TITLE */}
        <div className="flex justify-between items-center">
          <h1 className='text-lg font-semibold'>Students</h1>
          <Image src="/moreDark.png" alt="more" width={20} height={20} />
        </div>
        {/* CHART */}
        <div className="relative w-full h-[75%]">
          <ResponsiveContainer>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="40%"
              outerRadius="100%"
              barSize={32}
              data={data}
            >
              <RadialBar              
                background
                dataKey="count"
              />
            </RadialBarChart>
          </ResponsiveContainer>
          <Image src="/maleFemale.png" alt="maleFemale" width={45} height={45} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        {/* BOTTOM */}
        <div className="flex justify-center gap-16">
          <div>
            <div className="w-5 h-5 bg-maSky rounded-full" />
            <h1 className="font-bold">1,234</h1>
            <h2 className="text-sm text-gray-300"> Boys (55%)</h2>
          </div>
          <div>
            <div className="w-5 h-5 bg-maYellow rounded-full" />
            <h1 className="font-bold">1,234</h1>
            <h2 className="text-sm text-gray-300"> Girls (45%)</h2>
          </div>
        </div>
      </div>
    );
  }

