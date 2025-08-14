import { useState } from "react";

const initialGameBoard=[
[null,null,null]
,[null,null,null]
,[null,null,null]
];
export default function GameBoard({onSelectButton,activePlayerSymbol})
{
    const[gameBoard,setgameBoard]=useState(initialGameBoard);
    function handleClick(rowIndex,colIndex)
    {
        setgameBoard((prevGameBoard)=>
            {
                const updatedGameBoard=[...prevGameBoard];
                updatedGameBoard[rowIndex][colIndex]=activePlayerSymbol;
                return updatedGameBoard;

            })
            onSelectButton();
    }
    return(
        <ol id="game-board">
           {gameBoard.map((row,rowIndex)=><li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex)=><li key={colIndex}><button onClick={()=>handleClick(rowIndex,colIndex)} disabled={playerSymbol!==null}>{playerSymbol} </button></li>)}
            </ol>
           </li>)}
        </ol>
    )
}