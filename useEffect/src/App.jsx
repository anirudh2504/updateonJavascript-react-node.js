import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  //use Effect variatio 1:
  //useEffect(()=>{alert("Run after every Rerender")}) // run after every render if this type of formater used
  
  
  
  //variation 2:
  // useEffect(() => {
  //   alert("Active only once")
  // }, []);


 // variation 3
//  useEffect(                           //when counter is updated
//   ()=>{
//     alert("ONe update")
//   },[count]
//  )

// useEffect(
//   ()=>{
//       alert("Alert on ")
//     return ()=>{
//       console.log("Executed")
//     }

//   },[]

// )
// const[data,setData]=useState([]);
// const[loading,setLoading]=useState(true);

// useEffect(()=>{
//   fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response=>response.json())
//   .then(data=>{
//     setData(data)
//     setLoading(false) 

//   })
// })



  function handleClick() {
    setCount(() => count + 1);
  }
  function handleReset() {
    setCount(() => 0);
  }

  return (
    <>
      <div>Hello </div>
      <br />
      <div>
        <p>Count value is :{count}</p>
        <button onClick={handleClick}>Click Me </button>
        <button onClick={handleReset}>Reset</button>
      </div>

{/* 
      <section>
        <div>{loading?(<h1>Loading...</h1>):(<ul>
          data.map(()=>(<li key={post.id}>{post.title}</li>))
        </ul>)}</div>
      </section> */}
    </>
  );
}

export default App;
