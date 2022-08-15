import React, { FC, ReactNode } from "react";

interface IAuthLayoutProps {
  children: ReactNode;
}

const AuthLayout:FC<IAuthLayoutProps> = ({children}) => {
  return (
    <div className='w-screen h-screen' style={{backgroundImage: "url(./assets/images/Login.png)", backgroundSize: "100% 100%"}}>
      {children}
    </div>
  );
}

export default AuthLayout;