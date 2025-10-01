import "./App.css";
import Card from "./components/Card";
import First from "./components/FirstCustomComponent";
import img1 from "./assets/bird.jpg";
import img2 from "./assets/eye.jpg";
import img3 from "./assets/tree.jpg";
import StateHook from "./components/StateHook";
import ChildProp from "./components/ChildProp";
import ParentForStateLift from "./components/StateLifting/ParentForStateLift";
import ConditionalRender from "./components/ConditionalRender";
import Events from "./components/Events";
import FirstCustomComponent from "./components/FirstCustomComponent";
import EffectParent from "./components/Effect/EffectParent";
import UseRefParent from "./components/UseRef/UseRefParent";
import { createContext, useState } from "react";
import ParentContext from "./components/useContext/ParentContext";
import UseCallbackHook from "./components/useCallback/UseCallbackHook";
import FilterList from "./components/FilterList";
import Data2 from "./components/Data2";
import Model_PopUp from "./components/Models/popUp/Model_PopUp";
// import NavBar from "./components/NavBar";
//import UseMemoHook from './components/usememo/UseMemoHook'

const UserContext = createContext();
function App() {
  const [name] = useState({ name: "Anirudh" });

  return (
    <>
      <h2>React Concepts practise</h2>
      {/* <NavBar/> */}
      <hr />
      <FirstCustomComponent />
      <hr />
      <div style={{ display: "flex", gap: "2rem", width: "fit-content" }}>
        <Card
          title={"Bird Image"}
          img={img1}
          description={"This is a bird image sitting on Tree"}
        />
        <Card
          title={"Eye Image"}
          img={img2}
          description={"This is a human eye image "}
        />
        <Card
          title={"Tree image"}
          img={img3}
          description={"This is a tree image in green land"}
        />
      </div>
      <hr />
      <Model_PopUp/>
      <hr />
      <StateHook />
      <hr />
      <ChildProp>
        <h2>Child Prop</h2>
        <p>This Is Heading</p>
        <p>betweeen opening and closing tag of childProp</p>
      </ChildProp>
      <hr />
      <ParentForStateLift />
      <hr />
      <ConditionalRender />
      <hr />
      <Events />
      <hr />
      <EffectParent />
      <hr />
      <UseRefParent />
      <hr />
      <UserContext.Provider value={name}>
        <ParentContext />
      </UserContext.Provider>
      <hr />
      <br />
      {/* <UseMemoHook/> */}

      <UseCallbackHook />
      <hr />
      <br />
      <FilterList />
      <hr />
      <br />
      <br />
      

        <Data2 />
      

      
    </>
  );
}

export default App;
export { UserContext };
