import Board from './components/Board'
import './styles.scss'
import { useState } from 'react';
import { calculateWinner } from './winner';

function App() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsNext] =  useState(false); 
  const message = isXNext ? 'X' : 'O';

  const winner = calculateWinner(squares);
  // console.log(winner);
  const finall = winner ? `Winner is ${winner} ` : `Next player is ${message}`;
  const handleSquareClick = clickedPositon => {


    if(squares[clickedPositon] || winner){
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
  return (
    <div className='app'>
      <h2>{finall}</h2>
     <Board squares={squares} handleSquareClick={handleSquareClick}/>
    </div>
  )
}

export default App
