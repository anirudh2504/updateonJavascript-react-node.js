
import {CORE_CONCEPTS} from './data.js'
import { EXAMPLES } from './data.js';
import { useState } from 'react';

import Header from "./components/Header/Header.jsx";
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';


function App() {
  const [tabContent,afterContent]=useState()
  function handleSelect(selectedButton)
  {
    afterContent(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
         <h2>Core Concepts</h2>
         <ul>

         {CORE_CONCEPTS.map((item)=>(<CoreConcepts{...item}/>))} 
         
          {/* <CoreConcepts title={CORE_CONCEPTS[0].title} 
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}/>


          <CoreConcepts {...CORE_CONCEPTS[1]}/>

          <CoreConcepts {
            ...CORE_CONCEPTS[2]
          }/>

          <CoreConcepts {...CORE_CONCEPTS[3]}/> */}
         </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton selectedButton={tabContent==="components"} onSelect={()=>handleSelect("components")}>Components</TabButton>
            <TabButton selectedButton={tabContent==="jsx"} onSelect={()=>handleSelect("jsx")}>JSX</TabButton>
            <TabButton selectedButton={tabContent==="props"} onSelect={()=>handleSelect("props")}>Props</TabButton>
            <TabButton selectedButton={tabContent==="state"} onSelect={()=>handleSelect("state")}>State</TabButton>
          </menu>
           
        </section>
        {!tabContent ? (<p>Please Select a Topic</p>) :(<div id='tab-content'>
          
          <p>{EXAMPLES[tabContent].description}</p>
          <h3>{EXAMPLES[tabContent].title}</h3>
          <pre>
            <code>{EXAMPLES[tabContent].code}</code>
          </pre>
        </div>)}
        
      </main>
    </div>
  );
}

export default App;
