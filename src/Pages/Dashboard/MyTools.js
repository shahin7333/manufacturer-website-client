import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyTools = () => {
    const [purchases,setPurchases]=useState([])
    const [user] = useAuthState(auth)
    useEffect(()=>{
       if(user){
        fetch(`http://localhost:5000/ordered?customer=${user.email}`)
        .then(res=>res.json())
        .then(data=>setPurchases(data))
       }
    },[user])
    return (
        <div>
            <h1>my oreder{purchases.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr className='text-center'>
        <th></th>
        <th>Name</th>
        <th>Address</th>
        <th>Quantity</th>
        <th>Phone</th>
        <th>Id</th>
      </tr>
    </thead>
    <tbody>
     {
         purchases.map(p=>
            <tr className='text-center'>
            <th>1</th>
            <td>{p.customerName}</td>
            <td>{p.address}</td>
            <td>{p.quantity}</td>
            <td>{p.phone}</td>
            <td>{p._id}</td>
          </tr>
            )
     }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyTools;