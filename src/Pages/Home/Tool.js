import React from 'react';

const Tool = ({tool}) => {
    const {img,name,description,minOrder,available,price,_id}=tool
    return (
        <div class="card card-compact bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title text-2xl text-secondary">{name}</h2>
    <p>{description}</p>
    <p className='font-bold'>Minimum Order: <span className='text-secondary'> {minOrder}</span></p>
    <p className='font-bold'>Available: <span className='text-secondary'>{available}</span></p>
    <p className='font-bold'>Price: <span className='text-secondary'>{price}</span></p>
    
    <div class="card-actions justify-start">
    <button className="btn border-0 bg-gradient-to-r from-primary to-secondary text-white font-bold uppercase">Purchase</button>
    </div>
  </div>
</div>
    );
};

export default Tool;