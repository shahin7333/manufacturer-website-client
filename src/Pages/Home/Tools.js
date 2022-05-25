import React, { useEffect, useState } from 'react';
import Tool from './Tool';
import Purchase from '../Purchase/Purchase'

const Tools = () => {
    const [purchases,setPurchases]=useState(null)
    const [tools,setTools]=useState([])
    useEffect(()=>{
        fetch('tools.json')
        .then(res=>res.json())
        .then(data=>setTools(data))
    },[])
    return (
        <div>
           <h1 className='my-16 text-center text-4xl font-bold'>Our Available Tools</h1> 
           <div className='mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
               {
                 tools.map(tool=><Tool 
                 key={tool._id}
                 tool={tool}
               setPurchases={setPurchases}
                 ></Tool>)
               }
           </div>
{purchases && <Purchase purchases={purchases} setPurchases={setPurchases}></Purchase>}
        </div>
    );
};

export default Tools;