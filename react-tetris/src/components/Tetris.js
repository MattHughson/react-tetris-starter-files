import React, {useState} from 'react'


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
  return (
    
    <StyledTetrisWapper>
      <StyledTetris>
      <Stage stage={Stage()}/>
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
        <StartButton />

      </aside>
      </StyledTetris>
    </StyledTetrisWapper>
  )
}

export default Tetris;