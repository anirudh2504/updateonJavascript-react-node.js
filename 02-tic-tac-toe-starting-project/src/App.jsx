import Player from "./Components/Player"
import GameBoard from "./Components/GameBoard"
import { useState } from "react"

function App() {
  const[activePlayer,setActivePlayer]=useState('X');
  function handleBoardClick()
  {
    setActivePlayer((currPlayer)=>currPlayer==='X'?'O':'X')
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer==='X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer==='O'}/>

        </ol>
        <GameBoard onSelectButton={handleBoardClick} activePlayerSymbol={activePlayer}/>
      </div>
    </main>
  )
}

export default App
