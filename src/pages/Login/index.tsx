import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useLoginAction } from '../../hooks/redux';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required.'),
  password: Yup.string().required('Password is required.')
});

const Login = () => {
  const loginAction = useLoginAction();

  const handleSubmit = async (values: any) => {
    const { username, password } = values;
    loginAction(username, password);
  };

  const form = useFormik({
    validationSchema,
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: handleSubmit
  });

  return (
    <div className='w-full h-full grid grid-cols-12 gap-2'>
      <div className='col-span-6 flex items-center justify-center pl-15'>
        <div className='w-full max-w-xl'>
          <img src="./assets/images/logo.png" alt="logo" className='w-80' />
          <div className='mt-8 px-12 pt-20 pb-6 rounded-xl bg-blue-50 bg-opacity-50'>
            <form onSubmit={form.handleSubmit}>
              <input
                type="text"
                placeholder='Enter email or username'
                className='w-full bg-white p-4 mb-6 rounded-lg'
                {...form.getFieldProps('username')}
              />
              <div className='w-full mb-6 relative'>
                <input
                  type="password"
                  placeholder='Password'
                  className='w-full bg-white p-4 rounded-lg'
                  {...form.getFieldProps('password')}
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
              <div className='flex items-center justify-between w-full mb-12 px-2'>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Remember me next time"
                  sx={{
                    '.MuiTypography-root' : {
                      color: '#4aa6b7',
                      fontSize: '0.875rem'
                    }
                  }}
                />
                <Link to="/forgot-password" className='text-blue-100 text-sm no-underline cursor-pointer'>Forgot Password?</Link>
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
            </form>
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