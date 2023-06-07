import Square from './Square';
const Board = ({squares, handleSquareClick}) => {
  // const [squares, setSquares] = useState(Array(9).fill(null));


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
