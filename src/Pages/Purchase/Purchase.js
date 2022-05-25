import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
   const {purchaseId}=useParams()
  
    return (
        <div>
         <h1>hello</h1>

        </div>
    );
};

export default Purchase;