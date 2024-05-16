import React from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import MiApi from './componentes/MiApi';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      
      <div className="container">
        <MiApi />
        
      </div>
      <Footer />
    </div>
  );
};

export default App;
