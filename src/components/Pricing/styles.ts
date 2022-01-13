

import styled from 'styled-components';
import card from '../../assets/card.jpg'

export const StyledContainer = styled.div`
.card-1, .card-2, .card-3{
  
background:linear-gradient(rgba(0,0,0, .6), rgba(0,0,0,.5)), url(${card}) center no-repeat /cover;
box-shadow: 7px 18px 50px #555;
max-width: 400px;

}

.card-list-item{
  border-bottom: 1px groove #eee;
  width: 50%;
  margin: auto;
  margin-bottom: 10pt;
  
}
.price-card-button{
  background: #f5593d;
  box-shadow: 5px 8px 18px #000;
  transition-property: all .2s;
  border-radius: 25px;
  color: #eee;
  

}
.price-card-button:hover{
  background: #f9793d;
  transform: translateY(-2px);
}
.moveFromleft{
  animation-name: moveFromleft;
  animation-duration: 2s;
}
.moveFromright{
  animation-name: moveFromright;
  animation-duration: 2s;
}
.moveFrombottom{
  animation-name: moveFrombottom;
  animation-duration: 2s;
}

@keyframes moveFromleft {
  0%{
    transform: translateX(-100px);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity:1;
  }
}
@keyframes moveFromright {
  0%{
    transform: translateX(100px);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity:1;
  }
}
@keyframes moveFrombottom {
  0%{
    transform: translateY(100px);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity:1;
  }
}
`