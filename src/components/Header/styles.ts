import styled from 'styled-components';
import header from "../../assets/header.jpg"

export const StyledContainer = styled.header`
height: 100vh;
  background:linear-gradient( rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.5)),  url(${header}) no-repeat center center /cover ;
  
  .banner{
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
  width: 80%;
}
.banner-heading{
  animation-name: anim;
  animation-duration: 2s;
}
.banner-par{
  animation-name: anim;
  animation-duration: 2s;
  animation-delay: .5s;
  animation-fill-mode: backwards;
}

@keyframes anim {
  0%{
    transform: translateX(-100px);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
}
`
export const StyledNavbar = styled.div`
.nav-menu{
  background: linear-gradient(rgba(0, 0, 0, .3),rgba(0, 0, 0, .5));
  padding:10px;
  transition: all .7s;
}

.menu-item{
  font-size: 14px;
  letter-spacing: 1px;
  color: #eee;
  transition: color .5s;
}
.menu-item:hover{
  color: #70aed2;
}

.nav-active{
  color:#70aed2;
}

.line1, .line2, .line3{
  width: 23px;
  height: 3px;
  margin: 5px;
  transition: all .4s;
}
.change .line1{
  transform: rotate(-45deg)translate(-5px, 6px);
}
.change .line2{
  opacity: 0;
}

.change .line3{
  transform: rotate(45deg)translate(-5px, -6px);
}
.custom-navbar{
  padding: 5px 30px;
  background: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.7));
}

`