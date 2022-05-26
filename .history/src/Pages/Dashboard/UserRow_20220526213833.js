import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,refetch,index}) => {
   
    const {email,role} = user;
    // console.log(email);
    // console.log(role);
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                // if(res.status === 403){
                //     toast.error('Failed to Make an admin');
                // }
                return res.json()})
            .then(data => {
                refetch();
                toast.success(`Successfully made an admin`);
                // if (data.modifiedCount > 0) {
                //     refetch();
                //     toast.success(`Successfully made an admin`);
                // }
                console.log(data);
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove Admin</button></td>
        </tr>
    );
};

export default UserRow;