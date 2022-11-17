import React, { useState } from 'react';

const Test = ({props}) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <div className="count mt-5">
                <button className='ms-3 p-3' onClick={()=>setCount(count+1)}>+</button>
                <button className='ms-3 p-3' onClick={()=>setCount(count-1)}>-</button>
            </div>
        </div>
    );
};

export default Test;