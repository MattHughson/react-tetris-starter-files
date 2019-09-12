import React from 'react';

import { StyledCell } from './styles/styledCell'
import { TETROMINOS} from '../tetrominos'

const Cell = ({ type }) => (
  <StyledCell type={'L'} color={TETROMINOS[type].color}>cell</StyledCell>
)

export default Cell;