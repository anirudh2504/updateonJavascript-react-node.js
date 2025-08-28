//import { createContext, useState } from 'react'
import { createContext, useState } from 'react'
import './App.css'
import Child1 from './components/Child1'

// //Step 1: create context
//   const UserContest=createContext();

const ThemeContext=createContext();
  
function App() {
  // const[user,setUser]=useState({name:"Anirudh"});
  const [theme,setTheme]=useState('light');
  

  return (
    <>
     
    <div>Hello Welcome to useContext Hook Demo</div>
    <br />

      <ThemeContext.Provider value={{theme,setTheme}}>

        <div id='container' style={{backgroundColor:theme==='light' ? "beige":"yellow"} }>
      <Child1/>

    </div>
      </ThemeContext.Provider>
    
    

    {/* step 2:warp all child  
     <UserContest.Provider value={user}>

         <Child1/>

    </UserContest.Provider>
     */}

    </>
  )
}

export default App
export {ThemeContext};
// export {UserContest}
