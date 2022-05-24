import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools,setTools]=useState([])
    useEffect(()=>{
        fetch('tools.json')
        .then(res=>res.json())
        .then(data=>setTools(data))
    },[])
    return (
        <div>
           <h1 className='my-16 text-center text-4xl font-bold'>Our Available Tools</h1> 
           <div className='mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                 tools.map(tool=><Tool 
                 key={tool._id}
                 tool={tool}
                 ></Tool>)
               }
           </div>
        </div>
    );
};

export default Tools;