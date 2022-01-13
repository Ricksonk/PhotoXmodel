import styled from 'styled-components';

export const StyledContainer = styled.section`
.mission{
  background: var(--dark);

}
.underline{
  width: 150px;
  border: 3px solid #eee;
  margin: auto;
}
.fromLeft{
  animation-name: fromLeft;
  animation-duration: 3s;
}
.fromRight{
  animation-name: fromRight;
  animation-duration: 3s;
}
.icon{
    color:#17a2b8;
    font-size: 6em
}

@keyframes fromLeft {
  0%{
    transform: translateX(-120px);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes fromRight {
  0%{
    transform: translateX(30px);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
}
`