import React from 'react';
import  '../paginas/Perguntas';
import 'bootstrap/dist/css/bootstrap.min.css';






const IncluirModal=({id="modal",onClouse =()=>{},children})=>{
  
const handleOutsideClick=(e)=>{
 if(e.target.id===id)onClouse();
};

  return(
   <div id="modal" className='modal' onClick={handleOutsideClick}>
     <div className='container'>
       <button  background-color='transparent' className="clouse" onClick={onClouse}>X</button>
       <div className='content'>{children}

       
       <div className='row' style={{margin: "4%"}}>
      <select class="form-select" aria-label="Default select example">
         <option selected>Escolha o Tipo de Fromulario</option>
         <option value="1" >Texto</option>
         <option value="2">Multipla Escolha</option>
         <option value="3">Radio Button</option>
      </select>
      </div>
      
      
      <div className='row'style={{margin: "4%"}}>
          Escreva e Marque a Resposta Certa 
      

      <div className="row" style={{margin: "4%"}}>
        <input className='top-4 col-md-1' style={{marginTop: "4%"}} type="checkbox"/>
        <input type="text" class="form-control col-md-11" id="validationDefault05" required/> 
      </div>
      <div className="row"style={{margin: "4%"}}>
        <input className='top-4 col-md-1' style={{marginTop: "4%"}} type="checkbox"/>
        <input type="text" class="form-control col-md-11" id="validationDefault05" required/> 
      </div>
      <div className="row"style={{margin: "4%"}}>
        <input className='top-4 col-md-1' style={{marginTop: "4%"}} type="checkbox"/>
        <input type="text" class="form-control col-md-11" id="validationDefault05" required/> 
      </div>
      <div className="row"style={{margin: "4%"}}>
        <input className='top-4 col-md-1' style={{marginTop: "4%"}} type="checkbox"/>
        <input type="text" class="form-control col-md-11" id="validationDefault05" required/> 
      </div> 
      </div>

       </div>

     </div>

   </div>
  );

};

export default IncluirModal;