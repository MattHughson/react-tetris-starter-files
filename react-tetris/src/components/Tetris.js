import React from 'react'

//Components
import Stage from './stage'
import Display from './Display'
import StartButton from './Startbutton'

const Tetris = () =>{



  return (

    <div>
      <Stage />
      <aside>
        <div>
          <Display text = "Score" />
          <Display text = "Rows" />
          <Display text = "Level" />
        </div>
        <StartButton />

      </aside>

    </div>
  )
}

export default Tetris;