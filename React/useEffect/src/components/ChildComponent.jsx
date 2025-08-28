import { useRef } from "react"
//import ChildKaChild from "./childkaChild";

const ChildComponent=(()=>{
    {
    console.log("Child rerender")
const inputRef=useRef(null)
function handleTextInput()
{
inputRef.current.value=Number(inputRef.current.value)+1000;
inputRef.current.focus();


}
    return(
        <div>
            <hr />
            <h1>Child Component</h1>
           <input type="text" />
            <button onClick={handleTextInput}>Child Component</button>
            <br />
            <hr />

            {/* <ChildKaChild ref={inputRef}/> */}
          
            
        </div>
    )
}
})

export default ChildComponent;