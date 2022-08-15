import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

const Login = () => {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div className='w-full h-full grid grid-cols-12 gap-2'>
      <div className='col-span-6 flex items-center justify-center pl-15'>
        <div className='w-full max-w-xl'>
          <img src="./assets/images/logo.png" alt="logo" className='w-80' />
          <div className='mt-8 px-12 pt-20 pb-6 rounded-xl bg-blue-50 bg-opacity-50'>
            <input
              type="email"
              placeholder='Enter email or username'
              className='w-full bg-white p-4 mb-6 rounded-lg'
            />
            <div className='w-full mb-6 relative'>
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
            <div className='flex items-center justify-between w-full mb-12'>
              <Checkbox
                {...label}
                sx={{
                  '& .MuiSvgIcon-root': {
                    backgroundColor: 'white',
                  }
                }}
              />
              <Link to="/forgot-password" className='text-blue-100 no-underline'>Forgot Password?</Link>
            </div>
            <div className='mb-6'>
              <Button
                type="submit"
                sx={{
                  width: '100%',
                  backgroundColor: '#8db9c9',
                  color: 'white',
                  borderRadius: '0.5rem',
                  padding: '1rem 0',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  ":hover" : {
                    backgroundColor: '#158fa4'
                  }
                }}
              >
                Login
              </Button>
            </div>
            <div className='flex items-center justify-center w-full'>
              <Link to="/register" className='text-blue-100 no-underline'>Create an account</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-6 flex items-center justify-start pl-15'>
        <img src="./assets/images/doctor.png" alt="Doctor" className='w-8/12' />
      </div>
    </div>
  );
}

export default Login;