import React, { useRef } from "react";
import ColorChangeButton from "./ColorChangeButton";
import RefHookStopwatch from "./RefHookStopwatch";

export default function UseRefParent() {
    let btnRef=useRef();
    
  return (
    <>
      <h1>UseRefParent</h1>
      <button style={{backgroundColor:"	#ffdab9"}} ref={btnRef}>Demo</button>
      <ColorChangeButton ref={btnRef}/>

      <p>----------------------------------------------------------------------</p>
      <RefHookStopwatch/>
    </>
  );
}
