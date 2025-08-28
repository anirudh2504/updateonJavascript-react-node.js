// import React, { useState } from 'react'

// function UseMemoHook() {
//     const [count,setCount]=useState(0);
    
    
//     function expensiveTask(num)
//     {
//         console.log("This is expensive task")
//         for(let i=0;i<100000000;i++){}
//             return num*2
//     }
//     let double=expensiveTask(4)
    

//   return (
//     <>
//     <h1> Use Memo Hook</h1>
//     <p>Count Value is:{count}</p>
//     <button onClick={setCount(count+1)}>Increment Count</button>
//     <p>Double Value is:{double}</p>
    
//     </>
    
//   )
// }

// export default UseMemoHook


import React, { useState } from 'react'
import MemoChild from './MemoChild';


function UseMemoHook() {
    const [count,setCount]=useState(0);
  return (
    <>
    <h2>useMemo Hook</h2>
    <div>
        <p>{count}</p>
        <button  style={{backgroundColor:"#00FA9A"}} onClick={()=>setCount(count+1)}>Counter Update</button>
    </div>
    <div>
        <MemoChild name='Child Button'/>
    </div>
    </>
    
  )
}

export default UseMemoHook;