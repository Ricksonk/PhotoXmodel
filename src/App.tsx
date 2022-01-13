import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from '../src/components/Footer/footer';
import {GlobalStyle} from './global'
import { Contact } from './components/Contact/contact';
import { Pricing } from './components/Pricing/pricing';
import { Customers } from '../src/components/Customers/customers'
import { Gallery } from './components/Gallery/gallery';
import { Collection } from './components/Collection/collection';
import { Mission } from './components/Mission/mission';
import { Header } from './components/Header/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Mission />
      <Collection />
      <Gallery /> 
      <Customers />
      <Pricing />
      <Contact />
     <Footer />
     <GlobalStyle/>

     
    </div>
    
  );
}

export default App;
