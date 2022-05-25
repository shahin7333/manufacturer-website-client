import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({tool,setPurchases}) => {
//   let Navigate =useNavigate();
// const setPurchases =  () =>{
//     Navigate("/purchase")
//    }
    const {img,name,description,minOrder,available,price,_id}=tool
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl text-secondary">{name}</h2>
    <p>{description}</p>
    <p className='font-bold'>Minimum Order: <span className='text-secondary'> {minOrder}</span></p>
    <p className='font-bold'>Available: <span className='text-secondary'>{available}</span>
     </p>
    <p className='font-bold'>Price: <span className='text-secondary'>{price}</span></p>
    
    <div className="card-actions justify-start">
    <label htmlFor="purchase-modal"   onClick={()=>setPurchases(tool)} className="btn border-0 bg-gradient-to-r from-primary to-secondary text-white font-bold uppercase">Purchase</label>
    </div>
  </div>
</div>
    );
};

export default Tool;