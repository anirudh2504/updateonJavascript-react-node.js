import reactImage from "./assets/react-core-concepts.png";
import componentsImg from './assets/components.png'



const readDescription = ["Fundamental", "Crucial", "Core"];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = readDescription[genRandomInt(2)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {/* {readDescription[genRandomInt(2)]} */}
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
         <h2>Core Concepts</h2>
         <ul>
          <CoreConcepts title="Components" 
          description="The Core UI building block"
          image={componentsImg}/>
          <CoreConcepts/>
          <CoreConcepts/>
          <CoreConcepts/>
         </ul>
        </section>
        
      </main>
    </div>
  );
}

export default App;
