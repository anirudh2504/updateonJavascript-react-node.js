
import componentsImg from './assets/components.png'
import {CORE_CONCEPTS} from './data.js'
import { EXAMPLES } from './data.js';
import { useState } from 'react';

import Header from "./components/Header/Header.jsx";
import CoreConcepts from './components/CoreConcepts.jsx';
import Button from './components/TabButton.jsx';
import TabButton from './components/TabButton.jsx';


function App() {
  const [tabContent,afterContent]=useState("components")
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
          <CoreConcepts title={CORE_CONCEPTS[0].title} 
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}/>


          <CoreConcepts {...CORE_CONCEPTS[1]}/>

          <CoreConcepts {
            ...CORE_CONCEPTS[2]
          }/>

          <CoreConcepts {...CORE_CONCEPTS[3]}/>
         </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>handleSelect("components")}>Components</TabButton>
            <TabButton onSelect={()=>handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={()=>handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={()=>handleSelect("state")}>State</TabButton>
          </menu>
           {tabContent}
        </section>
        <div id='tab-content'>
          <h3>{EXAMPLES[tabContent].title}</h3>
          <p>{EXAMPLES[tabContent].description}</p>
          <pre>
            <code>{EXAMPLES[tabContent].code}</code>
          </pre>
        </div>
      </main>
    </div>
  );
}

export default App;
