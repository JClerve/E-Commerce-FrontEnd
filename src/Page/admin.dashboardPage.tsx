import React, { useState } from 'react';
import TopNavigationBar from '../Components/admin.topNavigationBar';
import LeftNavigationBar from '../Components/admin.leftNavigationbar';

const DashboardPage = () => {
  const [open, setOpen] = useState(false); // State to manage whether the drawer is open or not

  // Function to toggle the drawer's state
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      {/* Pass 'open' state and toggle function as props to both components */}
      <TopNavigationBar open={open} handleDrawerOpen={handleDrawerToggle} />
      <LeftNavigationBar open={open} handleDrawerClose={handleDrawerToggle} />
    </div>
  );
};

export default DashboardPage;
