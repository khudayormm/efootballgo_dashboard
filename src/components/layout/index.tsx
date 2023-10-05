import React from 'react';
import { Navigate } from 'react-router-dom';
import LeftBar from './sidebar';
// import { Sidebar } from 'react-prx-sidebar';

interface Props {
 children: React.ReactNode
 isLogin: boolean
}

const Layout: React.FC<Props> = ({ children, isLogin }) => {
  if (!isLogin) {
    return <Navigate to={'/'} />
  }

  return (
    <div className="flex">
      <LeftBar />
      <main className="flex-1 min-h-screen p-5 bg-gray-200">{children}</main>
    </div>
  );
};

export default Layout;
