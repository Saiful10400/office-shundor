import React from 'react';
import { Outlet } from 'react-router-dom';
import AsideNav from './root/AsideNav';

const AgencyDashboard = () => {
    return (
        <div className='min-h-screen pt-16 gap-x-[50px] flex items-start bg-white px-8'>
            <AsideNav></AsideNav>
            <Outlet></Outlet> 
        </div>
    );
};

export default AgencyDashboard;