import React from 'react';

const UserRow = ({user,index}) => {
    console.log(user)
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td> <button class="btn btn-xs">Make Admin</button></td>
            <td><button class="btn btn-xs">Remove Admin</button></td>
        </tr>
    );
};

export default UserRow;