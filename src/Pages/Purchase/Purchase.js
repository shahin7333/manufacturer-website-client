import React from 'react'
import { useParams } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import Quantity from './Quantity'

const Purchase = () => {
  const { purchaseId } = useParams()
  const [user, loading, error] = useAuthState(auth)

  const handlePurchase=e=>{
    e.preventDefault();
//    const phone=e.target.phone.value
//    console.log(phone)
  }

  const purchase={
      purchaseId:purchaseId,
      customer:user.email,
      customerName:user.displayName,
    //   phone:e.target.phone.value
  }
  return (
    <div>
      <h1 className="text-center text-4xl font-bold m-16 text-secondary">
        Fill up this form for your order
      </h1>
      <form onSubmit={handlePurchase} className="grid grid-cols-1 gap-4 justify-items-center">
        <input
          type="text"
          disabled
          value={user?.displayName}
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <input
          type="email"
          disabled
          value={user?.email}
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <input
          type="text"
          value={purchaseId}
          disabled
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Order Quantity"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Your Address"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <input
          type="submit"
          value="Submit"
          className="btn border-0 text-white w-full max-w-xs bg-gradient-to-r from-primary to-secondary"
        />
      </form>
      <div className="text-center m-24">
        <Quantity />
      </div>
    </div>
  )
}

export default Purchase
