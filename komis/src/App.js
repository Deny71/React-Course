import React from 'react';
import './App.css';
import Autko from './Auta/Auta';
import './Auta/Auta.css'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
          <h1>Komis Samochodowy</h1>
          
      </header>
      <Autko className="Auta"/>
    </div>
    </BrowserRouter>
  );
}

export default App;
