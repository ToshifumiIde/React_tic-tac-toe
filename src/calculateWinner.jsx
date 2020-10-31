function calculateWinner (squares){

  //勝利条件の配列を作成
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  //勝利条件を満たしている場合、勝者が"X"か"◯"、nullを返却
  for (let i = 0 ; i < lines.length ; i ++){
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}

export default calculateWinner;