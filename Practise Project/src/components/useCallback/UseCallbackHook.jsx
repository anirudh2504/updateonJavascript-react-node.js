import React, { useCallback, useState } from "react";
import ChildCallback from "./ChildCallback";

function UseCallbackHook() {
  const [count, setCount] = useState(0);
  const handleClick =useCallback(() => {
    setCount(count + 1);
  },[count]);
  return (
    <>
      <h2>useCallback Hook</h2>
      <div>
        <p>{count}</p>
        <button style={{ backgroundColor: "#00FA9A" }} onClick={handleClick}>
          Counter Update
        </button>
      </div>
      <div>
        <ChildCallback name="Child Button" handleClick={handleClick} />
      </div>
    </>
  );
}

export default UseCallbackHook;
