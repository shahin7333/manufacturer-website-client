import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import User from './User';

const AllUsers = () => {
    const {data:users,isLoading}=useQuery('users',()=>fetch('http://localhost:5000/user').then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>all users{users.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr className='text-center'>
        <th></th>
        <th>Email</th>
        <th>Make Adimin</th>
        <th>Remove User</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map(user=><User
        key={user._id}
        user={user}
        ></User>)
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;