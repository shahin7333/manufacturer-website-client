import React from 'react';

const User = ({user}) => {
    const {email}=user
    return (
        <tr className='text-center'>
        <th>1</th>
        <td>{email}</td>
        <td><button class="btn btn-xs btn-outline">Make Admin</button></td>
        <td><button class="btn btn-xs btn-outline">X</button></td>
      </tr>
    );
};

export default User;