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