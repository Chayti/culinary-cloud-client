import React, { useEffect, useState } from 'react';
import { FaRegTrashAlt, FaUserCog, } from 'react-icons/fa';

const AllUsers = () => {
    // const [orders, setOrders] = useState([]);

    // useEffect(() => {
    //     fetch('orders.json')
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // }, [orders])
    // console.log(orders)
    const users = [
        {
            "email": "john@gmail.com",
            "name": "John",
            "role": 'user'
        },
        {
            "email": "jane@gmail.com",
            "name": "Jane",
            "role": 'user'
        },
        {
            "email": "john@gmail.com",
            "name": "John",
            "role": 'user'
        },
        {
            "email": "jane@gmail.com",
            "name": "Jane",
            "role": 'user'
        },
        {
            "email": "john@gmail.com",
            "name": "John",
            "role": 'user'
        },
        {
            "email": "john@gmail.com",
            "name": "John",
            "role": 'user'
        },
        {
            "email": "jane@gmail.com",
            "name": "Jane",
            "role": 'user'
        },
        {
            "email": "john@gmail.com",
            "name": "John",
            "role": 'user'
        },
        {
            "email": "john@gmail.com",
            "name": "John",
            "role": 'user'
        },
    ]
    return (
        <>
        <h1 className='my-10 text-5xl text-animation text font-extrabold '>All Users</h1>
        <div className='mb-14 w-11/12 p-10 shadow-2xl overflow-y-scroll bg-white rounded-2xl'>
            <h1 className='text-3xl text mb-4 font-bold'>Total users: {users.length}</h1>
<<<<<<< HEAD
           <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                <tr>
                    <th className='bg-[#d1a054] text-white'></th>
                    <th className='bg-[#d1a054] text-white'>Name</th>
                    <th className='bg-[#d1a054] text-white'>Email</th>
                    <th className='bg-[#d1a054] text-white'>Role</th>
                    <th className='bg-[#d1a054] text-white'>Action</th>
                </tr>
                </thead>
                <tbody>
               {
                users.map((user, index)=> <tr key={index}>
                <th>{index+1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><button className='btn tooltip bg-[#d1a054] text-white border-0' data-tip='make admin'><FaUserCog/></button></td>
                <td><button className='btn bg-red-700 tooltip text-white border-0' data-tip='delete'><FaRegTrashAlt/></button></td>
              </tr>)
               }
                </tbody>
            </table>
=======
            <p className="text-animation text-2xl my-4">It might be better, if we can give role & action in one dropdown</p>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='bg-[#d1a054] text-white'></th>
                            <th className='bg-[#d1a054] text-white'>Name</th>
                            <th className='bg-[#d1a054] text-white'>Email</th>
                            <th className='bg-[#d1a054] text-white'>Role</th>
                            <th className='bg-[#d1a054] text-white'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button className='btn bg-[#d1a054] text-white border-0'>Make Admin</button></td>
                                <td><button className='btn bg-red-700  text-white border-0'>Remove User</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
>>>>>>> 24461ebe6497ce8502af37714907ae9385fafeb4
            </div>
        </div>
        </>
    );
};

export default AllUsers;