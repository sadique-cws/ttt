import React,{useEffect, useState} from 'react'
import SquareComponent from './SquareComponent'


const initValues = ["","","","","","","","",""];

const Square = () => {

  const [tttState , setTttState] = useState(initValues);
  const [isPlayer1Chance, setisPlayer1Chance] = useState(true); 
  const [isGameOver, setIsGameOver] = useState(false);
  const [winnerMsg, setWinnerMsg] = useState("");

  const onBoxClickHandle = (index) => {
  
    let str = Array.from(tttState);
    if(str[index] == ""){  
      str[index] = isPlayer1Chance? "X" : "O";
      setTttState(str);
      setisPlayer1Chance(!isPlayer1Chance);
    }

  }

  const refresh = () => {
    let winner = checkGameWinner();
    if(winner){
      setWinnerMsg(`${winner} won the game`);
      setIsGameOver(true);
    }
   
   
}

  useEffect(refresh,[tttState])



  const checkGameWinner = () => {
    const winnerArrayList = [
      [0,1,2],
      [1,4,7],
      [0,3,6],
      [0,4,8],
      [3,4,5],
      [6,7,8],
      [2,5,8],
      [2,4,6]
    ] 


    for(let x = 0; x < winnerArrayList.length;x++){
      const [a,b,c] = winnerArrayList[x];
      if(tttState[a] && tttState[a] === tttState[b] && tttState[a] === tttState[c]){
        return tttState[a];
      }
    }
    return null;

  }

  const handleStartAgain = () =>{
    setIsGameOver(false)
    setTttState(initValues);
  }

  return (
    <div className="App-header">
      <h1 className='heading'>Tic tac Toe by cws</h1>
{
  isGameOver? 
  <>
    <h1>Game Over</h1>
    <h2>{winnerMsg}</h2>

    <div className="buttons">
        <button className='clear' onClick={() => handleStartAgain()}>Start Again</button>
      </div>
  </>
  
  : <>
  <div className='row jc-center'>
        <SquareComponent className="border-bottom-right" value={tttState[0]} handleClick={() => onBoxClickHandle(0)}/>
        <SquareComponent className="border-bottom-right" value={tttState[1]} handleClick={() => onBoxClickHandle(1)}/>
        <SquareComponent className="border-bottom" value={tttState[2]} handleClick={() => onBoxClickHandle(2)}/>
    </div>
      <div className='row jc-center'>
        <SquareComponent className="border-bottom-right" value={tttState[3]} handleClick={() => onBoxClickHandle(3)}/>
        <SquareComponent className="border-bottom-right" value={tttState[4]} handleClick={() => onBoxClickHandle(4)}/>
        <SquareComponent className="border-bottom" value={tttState[5]} handleClick={() => onBoxClickHandle(5)}/>
      </div>
      <div className='row jc-center'>
        <SquareComponent className="border-right" value={tttState[6]} handleClick={() => onBoxClickHandle(6)}/>
        <SquareComponent className="border-right" value={tttState[7]} handleClick={() => onBoxClickHandle(7)}/>
        <SquareComponent value={tttState[8]} handleClick={() => onBoxClickHandle(8)}/>
      </div>

      
      </>
    }



    
    </div>
  )
}

export default Square