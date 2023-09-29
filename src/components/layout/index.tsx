import React from 'react';
import { Sidebar } from 'react-pro-sidebar';

interface Props {
 children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow bg-gray-100 p-4">
        {children}
      </main>
    </div> 
  );
};

export default Layout;
