import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';


const LeftBar: React.FC = () => {
  return(
    <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
      <Sidebar className="bg-red-400 h-[100vh]" collapsed>
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
    </div>
);
};

export default LeftBar;
