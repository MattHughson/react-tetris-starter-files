import Styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc{25vw / ${props => props.width}}
  );

  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gab: 1px;
  border: 2px solid #333

`