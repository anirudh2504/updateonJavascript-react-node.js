import React, { useEffect, useState } from "react";

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setloading(false);
      });
  }, []);
  function handleShowData() {
    setShow(!show);
  }
  function handleClick()
  {
    
  }
  return (
    <>
      <h2>DataFetcher using fetch </h2>
      <button style={{backgroundColor:"#98fb98"}} onClick={handleShowData}>
        {show ? "Hide" : "Show"} Fetched Data
      </button>
      {loading ? (
        <h5>Loading Data....</h5>
      ) : show ? (
        <ul style={{ listStyleType: 'none'}}>
          {data.map((post) => (
            <>
            <li key={post.id}>{post.id}:{post.title}</li>
            
            </>
            
          ))}
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

export default DataFetcher;
