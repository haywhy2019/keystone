import React, { useState } from "react";
import { ArrowUp } from "react-feather";
import Chart from "react-apexcharts";

function RirstSection() {
  const options = {
    chart: {
      id: "line",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };
  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];
  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-6">
        <p className="font-bold text-lg">Sales Overview</p>
        <button className="bg-blue-600 rounded-lg px-6 py-2 text-white text-sm">
          {" "}
          + Add Offer
        </button>
      </div>
      <div className="border-t-2 border-slate-100 my-0.5"></div>
      <div className="flex justify-between p-6">
        <div className="flex items-center">
          <p className="text-4xl">$80,630</p>
          <span className="bg-green-200 w-5 h-5 rounded-full mx-5">
            <ArrowUp
              size={10}
              className="text-green-600 opacity-100 z-10 mt-1 ml-[5px]"
            />
          </span>

          <p className="text-sm text-green-600">+ 6.7%</p>
        </div>

        <div className="flex space-x-5">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-900 rounded-full mr-2"></div>
            <p className="text-sm">Incomes</p>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
            <p className="text-sm">Expenses</p>
          </div>
          <div className="border border-slate-300 my-1 py-0.5 px-0.5">
            <select name="" id="">
              <option value="volvo">Year</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
      </div>
   <div className="mx-auto">
   <Chart options={options} series={series} type="line" width="1200" height="250"/>
   </div>
    
    </div>
  );
}

export default RirstSection;
