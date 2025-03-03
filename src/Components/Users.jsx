import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Navbar from '../Navbar';

const Users = () => {
    const userData = useLoaderData()
    const [remainingData, setRemainingData] = useState(userData)

    const handleDelete = id => {
        fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log("delete done")
                }
                const latestUser = remainingData.filter(e => e._id !== id)
                setRemainingData(latestUser)
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <h4 className='text-5xl py-9 text-center text-blue-700'>All Users:{remainingData.length}</h4>

            <div className="overflow-x-auto">
                <table className="table w-10/12 mx-auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created Date</th>
                            <th>last Date</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            remainingData.map((singleUserData, idx) => (
                                <tr key={idx}>
                                    <th >1</th>
                                    <td>{singleUserData.name}</td>
                                    <td>{singleUserData.email}</td>
                                    <td>{singleUserData.createdAt}</td>
                                    <td>{singleUserData.lastSignInTime}</td>
                                    <td onClick={() => handleDelete(singleUserData._id)}><Link>Delete</Link></td>
                                    <td><Link>Edit</Link></td>


                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;