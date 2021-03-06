import React from 'react';

const UserRow = ({user,index}) => {
    console.log(user)
    const {email,role} = user;
    const makeAdmin = ()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td> <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button></td>
            <td><button class="btn btn-xs">Remove Admin</button></td>
        </tr>
    );
};

export default UserRow;