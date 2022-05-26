import React from 'react';

const UserRow = ({user,index}) => {
    console.log(user)
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td> Quality</td>
            <td>blue</td>
        </tr>
    );
};

export default UserRow;