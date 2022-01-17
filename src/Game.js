import React, { useEffect, useState } from "react";
import './Game.css';

function Game() {
  const emptyBoard = Array(25).fill("");
  const [board, setBoard] = useState(emptyBoard);

  const [currentPlayer, setCurrentPlayer] = useState("o");
  const [winner, setWinner] = useState(null);

  const handleCellClick = (index) =>{

    if (winner){
      return null;
    }
if (board[index] !== "") return null;

setBoard(
  board.map((item, itemIndex) => itemIndex === index ? currentPlayer : item));
 

setCurrentPlayer(currentPlayer ==="x" ? "o" : "x")
}

const checkWinner = () => {
const possibleWaysToWin = [
  [board[0], board[1], board[5], board[6]],
  [board[1], board[2], board[6], board[7]],
  [board[2], board[3], board[7], board[8]],
  [board[3], board[4], board[8], board[9]],
  [board[5], board[6], board[10], board[11]],
  [board[6], board[7], board[11], board[12]],
  [board[7], board[8], board[12], board[13]],
  [board[8], board[9], board[13], board[14]],
  [board[10], board[11], board[15], board[16]],
  [board[11], board[12], board[16], board[17]],
  [board[12], board[13], board[17], board[18]],
  [board[13], board[14], board[18], board[19]],
  [board[15], board[16], board[20], board[21]],
  [board[16], board[17], board[21], board[22]],
  [board[17], board[18], board[22], board[23]],
  [board[18], board[19], board[23], board[24]],

];

possibleWaysToWin.forEach(cell => {
  if (cell.every(cell => cell === "o"))  setWinner("o");
  if (cell.every(cell => cell === "x"))  setWinner("x");
});
checkDraw();
}

const checkDraw = () => {
  if (board.every(item => item !== "")) {
    setWinner("e");
  }
}
useEffect(checkWinner, [board]);

const reset =() => {
  setCurrentPlayer("o");
  setBoard(emptyBoard);
  setWinner(null);
}
  return (
    <main>
      <h1 className="title">Albuka Game</h1>
      <h3 className="subtitle"> Quem fizer um quadrado primeiro vence!</h3>
      
      <div className={`board ${winner ? "Game-Over" : ""}`} >
    {board.map((item, index) => (
      <div 
        key={index}
        className={`cell ${item}`}
        onClick={() => handleCellClick(index)}
        >
          {item}
        </div>
))}       
      </div>
      {winner &&
      <footer>
        {winner === "e" ?
          <h2 className="winner-message">
          <span className={winner}>Empatou</span>
        </h2>

      :
        <h2 className="winner-message">
          <span className={winner}>{winner}</span> - 
          venceu!
        </h2>
}
        <button onClick={reset}>Recomeçar o Jogo!</button>
      </footer>
}
    </main>
  );
}

export default Game;
