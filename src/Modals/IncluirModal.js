import React from 'react';
import  '../paginas/Perguntas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './IncluirModal.css';





const IncluirModal=({id="modal",onClouse =()=>{},children})=>{
const handleOutsideClick=(e)=>{
 if(e.target.id===id)onClouse();
};

  return(
   <div id="modal" className='modal' onClick={handleOutsideClick}>
     <div className='container'>
       <button  background-color='transparent' className="clouse" onClick={onClouse}>X</button>
       <div className='content'>{children}
       <h6>Testando Modal</h6>
       </div>
     </div>
   </div>
  );

};

export default IncluirModal;