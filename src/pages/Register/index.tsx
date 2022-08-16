import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from "react-router";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  const goToBack = () => {
    history.go(-1);
  }

  return (
    <div className='flex flex-col w-full h-full pt-20'>
      <div className='flex items-center justify-between px-24'>
        <ArrowBackIcon
          sx={{
            color: '#158fa4',
            fontSize: '4rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
          onClick = {goToBack}
        />
        <img src="./assets/images/logo.png" alt="logo" className='w-80' />
      </div>
      <div className='flex flex-grow h-0 items-center justify-center'>
        <div className='w-full max-w-3xl py-8 rounded-xl bg-blue-50 bg-opacity-20'>
          <div className='w-8/12 mx-auto'>
            <div className='py-8 text-4xl text-blue-100 font-bold'>Register</div>
            <div className='grid grid-cols-12 gap-4 mb-6'>
              <div className='col-span-6'>
                <input
                  type="name"
                  placeholder='First name*'
                  className='w-full bg-white p-4 rounded-lg'
                />
              </div>
              <div className='col-span-6'>
                <input
                  type="name"
                  placeholder='Last name*'
                  className='w-full bg-white p-4 rounded-lg'
                />
              </div>
            </div>
            <div className='w-full mb-6'>
              <input
                type="email"
                placeholder='E-mail*'
                className='w-full bg-white p-4 rounded-lg'
              />
            </div>
            <div className='w-full mb-12'>
              <input
                type="password"
                placeholder='Create a password*'
                className='w-full bg-white p-4 mb-2 rounded-lg'
              />
              <div className='w-full text-blue-100'>Password must be at least 8 characters long.* </div>
            </div>
            <div className='mb-8'>
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
                  textTransform: 'unset',
                  ":hover" : {
                    backgroundColor: '#158fa4'
                  }
                }}
              >
                Create Account
              </Button>
            </div>
            <div className='flex items-center justify-center w-full'>
              <Link to="/login" className='flex items-center text-blue-100 no-underline'>Already a member?<div className='ml-1 font-bold'>Login</div></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;