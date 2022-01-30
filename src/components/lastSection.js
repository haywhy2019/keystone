import React from "react";
import Chart from "../assets/images/chart2.png";
import { MoreHorizontal } from "react-feather";
import Avatar from "../assets/images/avartar.jpeg";

const products = [
  {
    image: Avatar,
    number: 3,
    name: "PSG Stadium 20/21",
    SKU: 56882929,
    type: "jersey",
    date: "12.11.2020",
    status: "published",
  },
  {
    image: Avatar,
    number: 3,
    name: "PSG Stadium 20/21",
    SKU: 56882929,
    type: "jersey",
    date: "12.11.2020",
    status: "pending",
  },
  {
    image: Avatar,
    number: 3,
    name: "PSG Stadium 20/21",
    SKU: 56882929,
    type: "jersey",
    date: "12.11.2020",
    status: "published",
  },
  {
    image: Avatar,
    number: 3,
    name: "PSG Stadium 20/21",
    SKU: 56882929,
    type: "jersey",
    date: "12.11.2020",
    status: "published",
  },
];


function LastSection() {
  return (
    <div className="flex space-x-6">
      <div className="w-1/3 bg-white">
        <LeftCard />
      </div>
      <div className="w-2/3 bg-white">
        <RightCard />
      </div>
    </div>
  );
}

export default LastSection;

const LeftCard = () => {
  return (
    <div>
      <p className="text-slate-500 text-xs p-6">Top Selling Categories</p>
      <img src={Chart} className="w-96" />
    </div>
  );
};

const RightCard = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between text-slate-500 ">
        <p>Latest Added Products</p>
        <MoreHorizontal />
      </div>
      {products.map((item, index) => (
        <div className="flex py-4 items-center" key={index}>
          <img src={item.image} className=" w-10 mr-4"/>
          <div className="mr-20">
            <p className="font-bold">{item.name}</p>
            <p className="text-sm text-slate-500">{`${item.number} variant`}</p>
          </div>
          <p className="mr-12 font-bold"><span className="text-slate-500">SKU:</span>{item.SKU}</p>
          <p className="mr-12">{item.type}</p>
          <p className="mr-12">{item.date}</p>
          <p className={item.status == "published" ? "text-green-600 bg-green-300 rounded-md p-1": "text-amber-400 bg-amber-100 rounded-md p-1"}>{item.status}</p>
        </div>
      ))}
    </div>
  );
};
