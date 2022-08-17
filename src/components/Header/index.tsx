import moment from "moment";
import React from "react";

const Header = () => {
  return (
    <div className='flex items-center justify-between pt-4 pb-6 border-b border-dotted border-b-blue-50'>
      <div>
        <div className='text-blue-50 text-3xl'>Hello, Dr. Weber!</div>
        <div className='text-gray-100 text-lg'>You have 4 new notifications</div>
        <div className='w-96 max-w-96 mt-6 overflow-hidden rounded-full shadow-md'>
          <input
            type="text"
            placeholder="Search"
            className='w-full px-8 py-4 outline-none rounded-full bg-white text-black'
          />
        </div>
      </div>
      <div className='flex flex-col items-end align-right'>
        <div className='mb-8'>
          <img src="./assets/images/logo.png" alt="Logo" className='w-72' />
        </div>
        <div className='text-lg text-gray-100'>{moment().format('dddd DD MMMM YYYY | HH:mm')} | Munich | 5 ̊C</div>
      </div>
    </div>
  );
}

export default Header;