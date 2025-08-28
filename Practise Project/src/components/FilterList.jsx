import React, { useState } from "react";
const allUsers = ["Anirudh", "Keshav", "Vinay", "Prashant", "Anisha", "Manish"];

function FilterList() {
  const [name, setName] = useState();
  const [finalList, setFinalList] = useState(allUsers);
  const[list,filteredList]=useState(finalList)
  function handleClick() {
    if (name.trim()){
        setFinalList([...finalList, name.trim()]);
    }
  }
  function handleFilter(val)
  {
      const filteredUser=(finalList.filter((el)=>(el.includes(val))))
      filteredList(filteredUser)
  }
  return (
    <>
      <h2>List Concepts</h2>
      <button style={{ backgroundColor: "#9ACD32" }} onClick={handleClick}>
        Add Name
      </button>
      <input
        type="text"
        style={{ height: "32px" }}
        onChange={(event) => setName(event.target.value)}
      />
       <ul  style={{ listStyleType: 'none'}}>
        {finalList.map((ele, i) => (
          <li key={i}>
            {i + 1}.{ele}
          </li>
        ))}
      </ul>

      <br />
      <br />
        <h2>Filter Text by writing below</h2>
      <input type="text" style={{ height: "32px" }} onChange={(e)=>handleFilter(e.target.value)}/>
       <ul  style={{ listStyleType: 'none'}}>
        {list.map((ele, i) => (
          <li key={i}>
            {i + 1}.{ele}
          </li>
        ))}
      </ul>
     
    </>
  );
}

export default FilterList;
