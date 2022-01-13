import {StyledContainer} from './styles';
import React from 'react';
import { Navigation } from './navbar';

export function Header(){
    return(
    <StyledContainer>
        <Navigation/>
         <div className='text-light text-md-right text-center banner'>
             <h1 className='display-4 banner-heading'>Welcome to <span>PHOTO </span><span className='display-3'>X</span></h1>
             <p className="lead banner-par">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

         </div>
    </StyledContainer>
   )
    
    ;
}