import React from 'react'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Perguntas from './paginas/Perguntas';
import Respostas from './paginas/Respostas';
import Navbar from './Component/Navbar';





 function App() {

  return (
    <>
    
  <Router>
    <Navbar/>
    <Routes>
      <Route  path="/" exact element={ <Perguntas />} />
      <Route  path="/Respostas" element={ <Respostas />}/>     
    </Routes>          
  </Router>
  </>
  
  );
}
export default App;

