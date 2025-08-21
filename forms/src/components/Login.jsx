import { useState } from "react";

export default function Login() {

  
  // const[mail,setMail]=useState('')
  // const[pass,setPass]=useState('')


  //-----------Using single fucntion------------
  const[enteredValues,setEnteredValues]=useState({
    mail:'',
    pass:''
  })


  const emailIsInvalid=enteredValues.mail !=='' &&!enteredValues.mail.includes("@");



  function handleSubmit(event)
  { 
    event.preventDefault();
    console.log("Email :"+enteredValues.mail)
    console.log("Password :"+enteredValues.pass)
    setEnteredValues({
      mail:'',
    pass:''
    })

  }
  // function handleMail(event)
  // {
  //  setMail(event.target.value)
  // }
  // function handlePassword(event){
  //   setPass(event.target.value)
  // }



  function handleInputChange(id,value)
  {
    setEnteredValues((prev)=>({
      ...prev,
      [id]:value,
    }))

  }








  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(event)=>handleInputChange("mail",event.target.value)} value={enteredValues.mail} />
        </div>
        <div className="control-error">{emailIsInvalid && <p>Please Enter a Value icludes "@"</p>}</div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required minLength={8} onChange={(event)=>handleInputChange("pass",event.target.value)} value={enteredValues.pass} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" >Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
