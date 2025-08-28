import React, { useEffect, useState } from "react";


import DataFetcher from "./DataFetcher";

const EffectParent = () => {
  const [count, setCount] = useState(0);

  // ------------Variation one run after every rerender-------------------
// useEffect(() => alert("Re Render Alert"));

  //-----------------Variation two runs after update------------------------
//   useEffect(() => alert("ONly First ReRender"), []);

  //--------------------variation 3 runs after update in dependencies list-------------------
  useEffect(()=>alert("After Counter Update"),[count])

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Use Effect Practise</h1>
      <div>
         <p>CLicked {count} times </p>
      <button style={{backgroundColor:"#8a2be2"}} onClick={handleClick}>Increment</button>
      </div>
      <div>
       <DataFetcher/>
        <br />
        <br />
      </div>
     
    </>
  );
};

export default EffectParent;
