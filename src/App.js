import React from 'react'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Perguntas from './paginas/Perguntas';
import ListaPergunta from './paginas/ListaPergunta';
import Navbar from './Component/Navbar';

 function App() {

  return (
    <>
   
  <Router>
    <Navbar/>
    <Routes>
      <Route  path="/" exact element={ <Perguntas />} />
      <Route  path="/ListaPergunta" element={ <ListaPergunta />}/>     
    </Routes>          
  </Router>
  </>
  
  );
}
export default App;

