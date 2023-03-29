import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../components/shared/Header/Header';

const DashboardLayout = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <div className="drawer drawer-mobile bg-white">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col items-center justify-center">
          <div className='h-24 lg:hidden'>

          </div>
          <label htmlFor="my-drawer-2" className="btn w-full mt-5 rounded-none drawer-button lg:hidden bg-[#d1a054] text-black text font-extrabold">Open dashboard</label>
          <Outlet></Outlet>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu font-bold text bg-[#d1a054] p-4 w-80 text-base-content dashboard-style">
            <div className='ml-5 mb-10'> <h1 className='text-3xl'>Culinary Cloud</h1>
              <small className='block text-xs font-thin' style={{ letterSpacing: '8px' }}>Restaurant</small>
            </div>

            <li><NavLink to='/dashboard/admin-home'>Admin Home</NavLink></li>
            <li><NavLink to='/dashboard/addRecipe'>Add Recipe</NavLink></li>
            <li><NavLink to='/dashboard/updateRecipe'>Update Recipe</NavLink></li>
            <li><NavLink to='/dashboard/manageBookings'>Manage Bookings</NavLink></li>
            <li><NavLink to='/dashboard/all-users'>All Users</NavLink></li>

            <hr />
            <li><NavLink to='/dashboard/user-home'>User Home</NavLink></li>
            <li><NavLink to='/dashboard/reservation'>Reservation</NavLink></li>
            <li><NavLink to='/dashboard/myBookings'>My Bookings</NavLink></li>
            <li><NavLink to='/dashboard/my-orders'>My Orders</NavLink></li>
            <li><NavLink to='/dashboard/paymentHistory'>Payment History</NavLink></li>
            <li><NavLink to='/dashboard/addReview'>Add Review</NavLink></li>

            <hr />
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/menu'>Menu</NavLink></li>
            <li><NavLink to='/shop'>Shop</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>

          </ul>

        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;