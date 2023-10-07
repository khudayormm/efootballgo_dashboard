import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

const LeftBar = () => {
  return (
    <Sidebar className="text-sm">
      <Menu>
        <MenuItem href="/dashboard">Dashboard</MenuItem>
      </Menu>
      <Menu renderExpandIcon={({ open }) => <span>{open ? '-' : '+'}</span>}>
        <SubMenu label="BASIC">
          <MenuItem href="/clubs"> Clubs</MenuItem>
          <MenuItem href="/users"> Users</MenuItem>
        </SubMenu>

        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem href="/logos"> Examples</MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default LeftBar;
