import React from "react";
import Board from "./Board";
import calculateWinner from "./calculateWinner";
import * as styles from "./style.css";

class Games extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      history:[{
        squares:Array(9).fill(null)
      }],
      stepNumber:0,
      xIsNext:true,
    }
  }

  handleClick(i) {
  const history = this.state.history.slice(0, this.state.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();

  //既に勝敗が決まっている場合、またはbuttonがクリックされていた場合、処理をreturnする
  if(calculateWinner(squares) || squares[i]){
    return;
  }
  squares[i] = this.state.xIsNext ? "X" : "◯";
  this.setState({
    history:history.concat([{
        squares:squares,
      }]),
      stepNumber:history.length,
    xIsNext: !this.state.xIsNext,
  });
  }

  jumpTo(step) {
    this.setState({
      stepNumber:step,
      xIsNext:(step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step,move) =>{
      const desc = move ? `Go to move # ${move}` : "Go to Game start";
      return (
        <li key={move}>
          <button onClick={()=>this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    let status;
    if(winner){
      status = `Winner ${winner}`;
    } else {
      status = `Next Player: ${this.state.xIsNext ? "X" : "◯"}`;
    }
    
    return (
      <div className="game">
      <div className="game-board">
        <Board 
        squares={current.squares}
        onClick={(i) => this.handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div className="">
          {status}
        </div>
        <ol>
          {moves}
        </ol>
      </div>
    </div>
    );
  }
};

export default Games;