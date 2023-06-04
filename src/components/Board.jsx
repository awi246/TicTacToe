import Square from './Square';
import { useState } from 'react';
const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsNext] =  useState(false); 
  const handleSquareClick = clickedPositon => {


    if(squares[clickedPositon]){
      return;
    }
    setSquares((currentSquares)=>{
        return currentSquares.map((squareValue , position)=>{
                if(clickedPositon === position) {
                  return isXNext ? 'X' : 'O';
                }
                return squareValue;
        })
    })
    setIsNext((currentIsXNext)=>!currentIsXNext)
  };


  const renderSquare =( positon) => {
    return (
      <Square
        value={squares[positon]}
        onclick={() => handleSquareClick(positon)}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
