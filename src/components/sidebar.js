import React from 'react';
import { Link } from 'react-router-dom';
import { sideBar } from '../data/sideBar';

function Sidebar() {
   
  return (
  <div>
      <nav>
          <ul className='px-4'>
        <li className='text-blue-900 font-bold text-6xl pt-2 pb-14'>
            RETRO
        </li>
          {sideBar.map((item, index) => {
              return (
                <li key={index} >
                  <Link to={""} className={item.className}>
                   <span className='mr-4'>{item.icon}</span> 
                    <span>{item.title}</span>
                    <span className='ml-24'>{item.icon2}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
       
      </nav>

  </div>
  
  );
}

export default Sidebar;
