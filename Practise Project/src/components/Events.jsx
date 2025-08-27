import React, { useState } from "react";

const Events = () => {
  const [name, setName] = useState("");
  const [state, setState] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();   //if we donot use this page got refresh after submit
    //     event.stopPropogation      used to stop event bubbling
    alert("Submit");
    setName("")
    
  }

  return (
    <>
      <h2>Events in React</h2>

      {state ? (
        <div>
          {" "}
          <input type="text" onChange={(e) => setName(e.target.value)}  value={name}/>
          {/* <button onClick={()=>setName(name)} style={{color:"white",backgroundColor:"#800080"}}>Click Me to Change Name</button> */}
          <p>OnChange Event Name:{name}</p>
          <form onSubmit={handleSubmit}>
            <button style={{ color: "white", backgroundColor: "#808080" }}>
              Submit Button ALert
            </button>
          </form>
        </div>
      ) : (
        ""
      )}
      <button
        style={{ color: "white", backgroundColor: "#800080" }}
        onClick={() => setState(!state)}
      >
        Click to {state ? "hide" : "show"}
      </button>
    </>
  );
};

export default Events;
