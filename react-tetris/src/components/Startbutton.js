import React from 'react';
import{StyledStartButton} from './styles/StyleStartButton'
const StartButton = ({callback}) => (
  <StyledStartButton onclick={callback}>Start Game</StyledStartButton>
)

export default StartButton;