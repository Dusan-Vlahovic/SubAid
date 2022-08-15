import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom'

const Login = () => {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div className='w-full h-full grid grid-cols-12 gap-2'>
      <div className='col-span-6 flex items-center justify-center pl-15'>
        <div className='w-full max-w-screen-sm'>
          <img src="./assets/images/logo.png" alt="logo" className='w-96' />
          <div className='mt-12 px-12 pt-16 pb-6 rounded-xl bg-blue-50 bg-opacity-50'>
            <input
              type="email"
              placeholder='Enter email or username'
              className='w-full bg-white p-4 mb-5 rounded-lg'
            />
            <div className='w-full mb-5 relative'>
              <input
                type="password"
                placeholder='Password'
                className='w-full bg-white p-4 rounded-lg'
              />
              <VisibilityIcon
                sx={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1.5rem',
                  color: '#8db9c9'
                }}
              />
            </div>
            <div className='flex items-center justify-between w-full'>
              <Checkbox
                {...label}
                sx={{

                }}
              />
              <Link to="/forgot-password" className='text-blue-50 no-underline'>Forgot Password?</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-6 flex items-center justify-start pl-15'>
        <img src="./assets/images/doctor.png" alt="Doctor" className='w-10/12' />
      </div>
    </div>
  );
}

export default Login;