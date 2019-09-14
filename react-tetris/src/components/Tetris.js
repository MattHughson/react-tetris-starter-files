import React, {useState} from 'react'

import {createStage} from '../gameHelpers';

//style comnponents
import { StyledTetrisWapper, StyledTetris} from './styles/StyledTetris';

//custom Hooks
import {usePlayer} from '../hooks/usePlayer';
import {useStage} from '../hooks/useStage'


//components
import Stage from './Stage'
import Display from './Display'
import StartButton from './Startbutton'

const Tetris = () =>{
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false)

  const [player] = usePlayer();
  const  [stage, setStage] = useStage(player);

console.log('re-render')

const movePlayer = dir => {
  updatePlayerPos({ x: dir, y: 0});

}
const startGame = () => {
// reset the game
setStage(createStage())
resetPlayer();
}
const drop = () => {
  updatePlayerPos({ x:  0, y: 1})
}
const dropPlayer = () => {
  drop();
}
const move = ({ keycode }) => {
  if(!gameOver){
    if(keycode === 37){
      //left arrow key
      movePlayer(-1);
    } else if (keycode === 39){
      //right arrow key
      movePlayer(1);
    } else if(keycode === 40){
      //down arrow key
      dropPlayer();
    }  
  }
}
  return (
    
    <StyledTetrisWapper role="button" tabindex="0" onkeydown={e => move(e)}>
      <StyledTetris>
      <Stage stage={stage}/>
      <aside>
        {gameOver ? (
          <Display gameOver={gameOver} text="GAME OVER!!!" />
        ): (
          //if game is not over diplay all of this
        <div>
          <Display text = "Score" />
          <Display text = "Rows" />
          <Display text = "Level" />
        </div>
        )}
        <StartButton onclick={startGame}/>

      </aside>
      </StyledTetris>
    </StyledTetrisWapper>
  )
}

export default Tetris;