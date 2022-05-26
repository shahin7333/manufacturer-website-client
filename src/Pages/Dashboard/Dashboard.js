import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="px-4 drawer drawer-mobile">
        <input id="sideBar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <h1 className='text-2xl mt-16 font-bold text-secondary'>Your Dashboard</h1>
          <Outlet></Outlet>
         
        
        </div> 
        <div className="drawer-side mt-16">
          <label htmlFor="sideBar" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/dashboard/review'>My Review</Link></li>
            <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
            <li><Link to='/dashboard/users'>All Users</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;