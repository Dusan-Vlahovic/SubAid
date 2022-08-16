import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const ForgotPassword = () => {
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
        <div className='w-full max-w-2xl py-8 rounded-xl bg-blue-50 bg-opacity-20'>
          <div className='w-8/12 mx-auto'>
            <div className='pt-8 text-4xl text-blue-100 font-bold mb-2'>Recover Password</div>
            <div className='text-lg text-blue-100 text-xl mb-12'>Enter your email address to retrive your password</div>
            <div className='w-full mb-8'>
              <input
                type="text"
                placeholder="Enter email or username"
                className='w-full bg-white p-4 rounded-lg'
              />
            </div>
            <div className='mb-12'>
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
                Reset Password
              </Button>
            </div>
            <div className='flex items-center justify-center w-full'>
              <Link to="/login" className='flex items-center text-blue-100 no-underline'>Back to login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;