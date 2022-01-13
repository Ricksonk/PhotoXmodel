import styled from 'styled-components';

export const StyledContainer = styled.section`
.card-shadow{
  box-shadow: 5px 8px 20px #444;

}
.heading{
  position: absolute;
  top: 70%;
  right: 0;
  font-size: 14px;
  letter-spacing: 1px;
  background: #222;
  width: 70%;
  cursor: pointer;
  opacity: 0.7;
  transition: all .5s
}
.heading:hover{
  opacity: 1;
}
`