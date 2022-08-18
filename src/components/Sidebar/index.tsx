import React from "react";
import { MENUS } from "../../constants/menu";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useLogoutAction } from "../../hooks/redux";
import LogoutIcon from '@mui/icons-material/Logout';

const account = {
  avatar: './assets/images/avatar-1.png',
  name: 'Dr. Monica Weber'
};

const Sidebar = () => {
  const location = useLocation();
  const logout = useLogoutAction();
  const { pathname } = location;

  return (
    <div className='flex flex-col h-full w-80 bg-blue-200 overflow-hidden'>
      <div className='flex flex-col items-center text-center pt-16 pb-8'>
        <div className='rounded-full p-2 border border-solid border-blue-250 mb-3'>
          <img src={account.avatar} alt="Avatar" className='w-36 h-36' />
        </div>
        <div className='font-bold text-blue-250'>{account.name}</div>
      </div>
      <div className='w-full flex-grow overflow-auto'>
        {MENUS.map((item, index) => (
          <Link key={`item-${index}`} to={item.link}>
            <div className={`flex items-center px-8 py-3 ${pathname === item.link ? 'bg-blue-50' : ''}`}>
              <div className={`${pathname === item.link ? 'text-white' : 'text-blue-250'}`}>{item.icon}</div>
              <div className={`ml-4 ${pathname === item.link ? 'text-white' : 'text-blue-250'}`}>{item.label}</div>
            </div>
          </Link>
        ))}
      </div>
      <div
        className='w-full flex items-center border border-solid border-white px-8 py-5 cursor-pointer'
        onClick={logout}
      >
        <LogoutIcon sx={{color: '#8db9c9'}} />
        <div className='text-blue-250 font-bold ml-4'>Logout</div>
      </div>
    </div>
  );
}

export default Sidebar;