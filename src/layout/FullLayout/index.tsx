import React, { FC, ReactNode } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

interface IFullLayoutProps {
  children: ReactNode;
}


const FullLayout:FC<IFullLayoutProps> = ({children}) => {
  return (
    <div className='w-screen h-screen flex overflow-hidden bg-blue-150'>
      <Sidebar />
      <div className='flex flex-col flex-grow p-8 h-full overflow-hidden'>
        <Header />
        <div className='flex-grow overflow-hidden py-7'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default FullLayout;