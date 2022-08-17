import React from "react";
import {PASTACTIVITIES} from "../../constants/dashboard";

const Dashboard = () => {

  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-3 pr-8'>
        <div className='bg-blue-50 text-white px-5 py-3'>Past Activity</div>
        <div className='border-b-2 border-dotted border-blue-50 py-6'>
          {PASTACTIVITIES.map((activity, index) => (
            <div key={`activity-${index}`} className='flex items-start'>
              <div className='h-20 relative mr-3'>
                <div className='bg-blue-50 rounded-full w-3 h-3' />
                <div className={`absolute top-0 left-1 h-full bg-blue-50 ${activity.pasted ? 'w-1' : 'w-0.5'}`} />
              </div>
              <div className='flex flex-grow w-0 align-center bg-white rounded-xl'>
                <div className='w-20 px-4 py-2 border-r-4 border-solid border-gray-150 '>{activity.date}</div>
                <div className='flex flex-grow h-16 px-4 items-center justify-center bg-white rounded-xl'>{activity.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='col-span-9 bg-white'>
        <div className='grid grid-cols-12 border-b-4 border-solid border-gray-150'>
          <div className='col-span-6 border-4 border-solid border-gray-150'>
            <div className='bg-blue-50 text-white px-5 py-3'>Today's expecting patients</div>
            <div className='h-250'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;