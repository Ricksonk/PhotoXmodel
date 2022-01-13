import styled from 'styled-components';

export const StyleContainer = styled.section`
.submit-button{
    background: #f5593d;
    color: #eee;
    transition: all .3s;
}
.input{
    background: transparent;
  border-color: transparent;
  border-bottom: 2px solid #ccc;
  border-radius: 0;
  transition: all .8s;
}
.input:focus{
  background: transparent;
  border-color: transparent;
  box-shadow: none;
  color:#fff;
  border-bottom: 2px solid #f5593d;
}
.submit-button{
  background: #f5593d;
  color:#eee;
  transition: all .3s;
}
.submit-button:hover{
  background: #f9793d;
  transform: translateY(-3px);
}
@media(max-width: 992px){
  .contact{
  background:  linear-gradient(rgba(21,31,32,1), rgba(21,31,32,.95));
  }
  .contact-form{
    width: 80%;
    margin:auto;
  }
}
`