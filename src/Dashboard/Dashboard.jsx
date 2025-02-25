import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div className="flex gap-3 ">
        <div className="h-screen flex flex-col w-60 bg-slate-300">
          <Link>Home</Link>
          <Link>Inbox</Link>
          <Link>Add</Link>
          <Link>Home</Link>
          <Link>Home</Link>
        </div>

        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
