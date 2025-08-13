import reactImage from "../../assets/react-core-concepts.png";
import './Header.css'

const readDescription = ["Fundamental", "Crucial", "Core"];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}



export default function Header() {
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