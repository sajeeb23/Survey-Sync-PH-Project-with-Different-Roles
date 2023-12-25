import axios from 'axios';
import { useQuery } from "@tanstack/react-query";
import Swal from 'sweetalert2';
import { MdDelete } from 'react-icons/md';


import { useState } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';
import { useEffect } from 'react';
import UsersCount from './UsersCount';



const AllUsers = () => {
    useEffect(() => {
        aos.init({
            duration: 1000,
        });
    }, []);


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('https://test-build-blond.vercel.app/users');
            return res.data;
        }
    });


    const handleRoleChange = (user) => {
        if (!selectedRoles[user._id]) {
            Swal.fire({
                title: 'Error',
                text: 'Please select a role',
                icon: 'error'
            });
            return;
        }

        axios
            .patch(`https://test-build-blond.vercel.app/users/admin/${user._id}`, { role: selectedRoles[user._id] })
            .then((res) => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: 'Role Changed!',
                        text: `User role has been changed to ${selectedRoles[user._id]}`,
                        icon: 'success',
                    });
                }
            })
            .catch((error) => {
                console.error('Error changing user role:', error);


                console.log(error);

                Swal.fire({
                    title: 'Error',
                    text: 'Failed to change user role',
                    icon: 'error',
                });
            });
    };

    const handleDeleteUser = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this user!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#FF6C22',
            cancelButtonColor: '#427D9D',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`https://test-build-blond.vercel.app/users/${user._id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'User has been deleted',
                                icon: 'success'
                            });
                        }
                    })
                    .catch((error) => {
                        console.error('Error deleting user:', error);
                    });
            }
        });
    };

    const [selectedRoles, setSelectedRoles] = useState({});

    return (
        <div>
            <div className="text-center">
                <h1 className="text-4xl font-semibold">All Users</h1>
                <hr className='my-2 mx-40 opacity-50' />
                <h1 className="text-2xl font-semibold mt-2">Total Users: {users.length}</h1>
            </div>
            <div>
                <UsersCount></UsersCount>
            </div>
            <div className="overflow-x-auto mt-12">
                <h1 className="text-center text-2xl font-semibold mb-8"><span className='font-bold'>Manage Users</span> - Change Roles or Remove User</h1>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id} data-aos="fade" data-aos-duration="1000" data-aos-delay={index * 100}>

                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={user?.photo || 'https://i.ibb.co/cJjvjgj/user.png'}
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{user.email}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-40">
                                            <select
                                                value={selectedRoles[user._id] || ''}
                                                onChange={(e) =>
                                                    setSelectedRoles({
                                                        ...selectedRoles,
                                                        [user._id]: e.target.value
                                                    })
                                                }
                                                className="form-select font-semibold block w-full pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                                            >
                                                <option value="">{user.role ? user.role.toUpperCase() : 'Select Role'}</option>
                                                <option value="admin">ADMIN</option>
                                                <option value="student">STUDENT</option>

                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">

                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleRoleChange(user)}
                                            className="btn bg-red-700 text-white btn-sm"
                                        >
                                            Change Role
                                        </button>
                                    </div>

                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteUser(user)}
                                        className="btn btn-ghost btn-xs"
                                    >
                                        <MdDelete className="text-xl text-red-600" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
