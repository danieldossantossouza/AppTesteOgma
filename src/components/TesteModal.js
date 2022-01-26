import Modal from '../modulos/modal/components/Modal';
import ModalBody from '../modulos/modal/components/ModalBody';
import ModalHeader  from '../modulos/modal/components/ModalHeader';
import ModalFooter from '../modulos/modal/components/ModalFooter';

export default function TesteModal(props){


    
    return(
        <Modal>
            <ModalHeader>
              <h1>Olá eu sou o modal !</h1>
            </ModalHeader>
            <ModalBody>

            <div class="mb-3">
        <label for="validationTextarea">Pergunta</label>
        <input type="text-log" className='form-control' name='Perg' />
        <div class="invalid-feedback">
          Inclua a pergunta !
           </div>
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
            </ModalBody>
            <ModalFooter>
             <button onClick={props.close} className='btn btn-primary'> Abri Modal</button>
            </ModalFooter>
        </Modal>
    );
}