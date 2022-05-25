import React from 'react';

const Purchase = ({purchases,setPurchases}) => {
    const {_id,name,minOrder,available}=purchases

    const handlePurchase=e=>{
        e.preventDefault()
        const quan=e.target.number
        console.log(quan,name,_id)
        setPurchases(null)

    }
    return (
        <div>
           
          <input type="checkbox" id="purchase-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label htmlFor="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-2xl text-secondary text-center mb-3">{name}</h3>
   <form onClick={handlePurchase} className='grid grid-cols-1 gap-4 justify-items-center'>
   <input type="text" readOnly value={name} className="input input-bordered input-accent w-full max-w-xs" />
    <input type="text" name='name' placeholder="Your name here" className="input input-bordered input-accent w-full max-w-xs" />
    <input type="email" name='email' placeholder="Email" className="input input-bordered input-accent w-full max-w-xs" />
    <input type="text" name='phone' placeholder="Phone number" className="input input-bordered input-accent w-full max-w-xs" />
    <input type="text" name='number' placeholder="Quantity" className="input input-bordered input-accent w-full max-w-xs" />
    <input type="text" name='text' placeholder="Address" className="input input-bordered input-accent w-full max-w-xs" />
    <input type="submit" value="Order" className="btn border-0 bg-gradient-to-r from-primary to-secondary text-white font-bold w-full max-w-xs" />
   </form>
  </div>
</div>
        </div>
    );
};

export default Purchase;