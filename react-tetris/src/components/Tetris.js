import React from 'react'


import { createStage } from '../gameHelpers'
import { StyledTetrisWapper, StyledTetris} from './styles/StyledTetris';

import Stage from './Stage'
import Display from './Display'
import StartButton from './Startbutton'

const Tetris = () =>{



  return (
    
    <StyledTetrisWapper>
      <StyledTetris>
      <Stage stage={createStage()}/>
      <aside>
        <div>
          <Display text = "Score" />
          <Display text = "Rows" />
          <Display text = "Level" />
        </div>
        <StartButton />

      </aside>
      </StyledTetris>
    </StyledTetrisWapper>
  )
}

export default Tetris;