import React, { useEffect, useState } from "react";

function Data2() {
  const [data2, setData2] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData2(data));
  }, []);
  function handleDelete(index) {
    const updatedData = data2.filter((element, i) => index !== i);
    setData2(updatedData);
  }

  return (
    <>
      <h3>Data In Table</h3>
      <table style={{ border: "2px solid Indigo" }}>
        <thead>
          <tr>
            <th>Data Number</th>
            <th>Data</th>
            <th>Buttons</th>
          </tr>
        </thead>
        <tbody>
          {data2.map((dtn, i) => (
            <tr key={i + 1}>
              <td>{i + 1}</td>
              <td>{dtn.title}</td>
              <td>
                <button onClick={() => handleDelete(i)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Data2;
