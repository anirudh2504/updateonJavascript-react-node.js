import React, { useEffect, useState } from "react";
import DeletePopUp from "./DeletePopUp";

function Data2() {
  const [data2, setData2] = useState([]);
  const [pop,setPop]=useState(false);
  const [index,setindex]=useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData2(data));
  }, []);
  function handlepopUp(index){
    setindex(index)
    setPop(prev=>!prev)

  }
  // console.log(pop)
  function handleDelete(){
    const updatedData=data2.filter((element,i)=>{ return index !==i})
    setData2(updatedData)
    setPop(false)
  }
  
  return (
    <>
      <h3>Data In Table</h3>
      <table style={{ border: "2px solid Indigo" ,margin:'0 auto'}}>
        <thead>
          <tr>
            <th>Data Number</th>
            <th>Data</th>
            <th>Buttons</th>
          </tr>
        </thead>
        <tbody >
          {data2.map((dtn, i) => (
            <tr key={i + 1}>
              <td>{i + 1}</td>
              <td>{dtn.title}</td>
              <td>
                <button onClick={()=>handlepopUp(i)} >delete</button>
               
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {pop ?(<DeletePopUp stateupdate={handlepopUp} deleteData={handleDelete}/>):(null)}
     
    </>
  );
}

export default Data2;
