import React,{useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import '../App.css';

 
function ListaPerguntas(){
  const[vetor, setVetor]=useState([]);
  const [status,setStatus]=useState('Carregando...');



  const obertDados = async ()=>{
      const dados= await fetch('Aqui vai a URL(API)');
      const converteJson = await dados.json();
      setVetor(converteJson);
      setStatus('Dados Carregados com sucesso !');

  }
  
  useEffect(()=>{
    obertDados();
  })

return(
 
  <div className="perg-container">
   <h1>{status}</h1>
    <br/>
  <header >
  <h5>Lista de Perguntas</h5>
  </header>
    <table className="table table-bordered"/>
  <thead >
    <tr>
      <th >Id</th>
      <th >Pergunta</th>
    </tr>    
  </thead>
  <tbody>   
    {vetor.map(perguntas=>(
  <tr>
    <td>{perguntas.id}</td>       
    <td>{perguntas.perg}</td>
  <td>
    <button className="btn btn-primary" >Editar Pergunta</button> {"  "}
    <button className="btn btn-danger">Excluir Pergunta</button>  
  </td>
  </tr>
  ))}
<br/>

<Link to="/">
<button className="btn btn-primary">Nova Pergunta </button>
</Link>
</tbody>
</div>

     
  
);
}

export default ListaPerguntas;

{/*   <div className="perg-container">
   <h1>Olá esta é uma nova pagina!</h1>
   <Link to="/">
     <button>voltar </button>
   </Link>
  </div> */}