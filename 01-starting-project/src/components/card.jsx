import React from "react";

import { useState } from "react";
export default function Card()
{
    const [counter,SetCounter]=useState(0);
    return(
        <div>
        <h1>You clicked {counter} times </h1>
        <button onClick={()=>{SetCounter(counter+1)}}>Click Me</button>
        </div>
    );
}
 