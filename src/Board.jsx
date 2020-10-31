import React from "react";
import Square from "./Square";
// import calculateWinner from "./calculateWinner";

class Board extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state= {
  //     squares: Array(9).fill(null),
  //     xIsNext:true,
  //   };
  // }

  //クリックした場合のメソッド
  // handleClick(i){
  //   const squares = this.state.squares.slice();
  //   //既に勝敗が決まっている場合、またはbuttonがクリックされていた場合、処理をreturnする
  //   if(calculateWinner(squares) || this.state.squares[i]){
  //     return;
  //   }
  //   squares[i] = this.state.xIsNext ? "X" : "◯";
  //   this.setState({
  //     squares:squares,
  //     xIsNext: !this.state.xIsNext,
  //   });
  // }

  renderSquare(i){
    return( 
    <Square 
      value={this.props.squares[i]} 
      onClick={() => this.props.onClick(i)}
      />
    );
  }

  //勝敗判定の条件分岐
  render(){

  // const winner = calculateWinner(this.state.squares);
  // let status;
  // if(winner){
  //   status = `Winner ${winner}`;
  // } else {
  //   status = `Next Player: ${this.state.xIsNext ? "X" : "◯"}`;
  // }

  return (
  <div>
    {/* <div className="status">{status}</div> */}
    <div className="board-row">
      {this.renderSquare(0)}
      {this.renderSquare(1)}
      {this.renderSquare(2)}
    </div>
    <div className="board-row">
      {this.renderSquare(3)}
      {this.renderSquare(4)}
      {this.renderSquare(5)}
    </div>
    <div className="board-row">
      {this.renderSquare(6)}
      {this.renderSquare(7)}
      {this.renderSquare(8)}
    </div>
  </div>
  )}
}


export default Board;