import React from "react";
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap';
import {Link} from 'react-router-dom';
import  './App.css';

function teste(){

 
  return(
    
       <div className="perg-container">
      {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" crossorigin="anonymous"></link> */}
    
    <br/>
    <header >
      <Buscar/>
      <i class="bi bi-search"></i>
      {/* <img src={Lupa} alt='lupa'/> */}
      
      <Link to="/teste">
          <button className="btn btn-primary" >Outra Pagina </button>
      </Link>


      <button onClick={()=>setModal(true)}>Nova Pergunta</button> 
      
    
      
      
    </header>
    <table className="table table-bordered"/>
        
        
<thead >
  <tr>
    <th >Id</th>
    <th >Pergunta</th>
  </tr>    
</thead>
<tbody>   

  {data.map(perguntas=>(
    <tr>
      <td>{perguntas.id}</td>       
      <td>{perguntas.perg}</td>

     <td>
        <button className="btn btn-primary" onClick={()=>selecionarPergunta(perguntas,"Editar")}>Editar Pergunta</button> {"  "}
        <button className="btn btn-danger"onClick={()=>selecionarPergunta(perguntas,"Excluir")}>Excluir Pergunta</button>
        
        
      </td>
      
    </tr>
    
  ))}
  <br/>
  </tbody>
</div>
 
  )

}

export default teste;