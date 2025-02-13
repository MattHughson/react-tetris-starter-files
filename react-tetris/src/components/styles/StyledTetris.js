import Styled from 'styled-components';

import bgImage from '../../img/bg.png';

export const StyledTetrisWapper  = Styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`

export const StyledTetris = Styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;
  
aside {

  width: 100%;
  max-width: 200px;
  display: block;
  padding: 0 20px;

}
`
