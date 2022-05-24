import React from 'react';

const OrderToHand = () => {
    return (
       <div className='text-center'>
           <h1 className='text-3xl mb-12 font-bold text-secondary'>How to Order?</h1>
            <ul class="steps steps-vertical lg:steps-horizontal w-1/2">
        <li class="step step-primary">Register</li>
        <li class="step step-primary">Choose Tools</li>
        <li class="step step-primary">Purchase</li>
        <li class="step step-primary">Receive Tools</li>
      </ul>
       </div>
    );
};

export default OrderToHand;