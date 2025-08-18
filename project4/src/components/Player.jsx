import { useRef, useState} from "react";

export default function Player() {
  const playerName=useRef();
  const [name ,setName]=useState();
  // const [summited,setSummited]=useState(false);
  // function handleChange(e)     without ref
  // {
  //   setSummited(false);
  //   setName(e.target.value)
  // }
  function handleClick()
  {
    // setSummited(true); without ref
    //with ref:
    setName(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {name ?name : 'unknown entity'} </h2>
      <p>
        <input ref={playerName} type="text"   />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
