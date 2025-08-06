import { useState } from "react";

export default function Player({name,symbol})
{
    const [isEditing ,setIsEditing]=useState(false);
    return(
        <li>
          <span className="player">
            <span className="player-name">{name}</span>
            <span className="player-symbol">{symbol}</span>
            <button onClick={()=>setIsEditing(true)}>Edit</button>
          </span>
           </li>
    );
}