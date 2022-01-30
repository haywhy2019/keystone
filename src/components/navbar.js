import React from "react";
import {Search} from 'react-feather'
import Avata from "../assets/images/avartar.jpeg"

function Navbar() {
  return (
    <div className="py-6 flex justify-between">
        <div className="relative text-gray-200 focus-within:text-gray-600 block">
        <input type="text" placeholder="Search..." className="form-input border py-2 px-2 rounded-md bg-slated-200 placeholder-gray-400 text-gray-500 appearance-none w-60 block pl-2 focus:outline-none"/>
       <Search size={16} className= "pointer-events-none w-4 h-4 absolute top-1/2 transform -translate-y-1/2 left-52"/>
        </div>
    
      <div className="flex">
        <div className="mr-4 text-right">
          <p>jamesbrown@example.com</p>
          <p className="text-[10px] text-slated-300">Admin</p>
        </div>
        <img src={Avata} className="w-10 h-10 mx-auto rounded-full" />
      </div>
    </div>
  );
}

export default Navbar;
