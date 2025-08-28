import React from "react";


const ChildCallback = React.memo((props) => {
  return (
    <>
      <h4>ChildCallback</h4>
      {console.log("Child Rerender")}
      <button style={{ backgroundColor: "#E6E6FA" }}>{props.name}</button>
    </>
  );
});

export default ChildCallback;
