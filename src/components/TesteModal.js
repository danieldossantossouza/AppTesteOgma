import Modal from '../modulos/modal/components/Modal';
import ModalBody from '../modulos/modal/components/ModalBody';
import ModalHeader  from '../modulos/modal/components/ModalHeader';
import ModalFooter from '../modulos/modal/components/ModalFooter';
import  '../modulos/modal/Styles/ModalRoot.module.css';

export default function TesteModal(props){


    
    return(
        <Modal>
            <ModalHeader>
              <h4>Nova Pergunta</h4>
            </ModalHeader>
            <ModalBody>

    <div class="mb-3">
        <label for="validationTextarea">Pergunta</label>
        <input type="text-log" className='form-control' name='Perg' />
        <div class="invalid-feedback">
          Inclua a pergunta !
           </div><br/>
            <div >
      <select class="form-select" aria-label="Default select example">
         <option selected>Escolha o Tipo de Fromulario</option>
         <option value="1" >Texto</option>
         <option value="2">Multipla Escolha</option>
         <option value="3">Radio Button</option>
      </select>
      </div><br/>           
      <div >
          Escreva as opções e Marque a Resposta Certa 
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <input type="text" class="form-control col-md-11" id="validationDefault05" required/> 
          </div><br/>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <input type="text" class="form-control col-md-11" id="validationDefault05" required/> 
          </div><br/>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <input type="text" class="form-control col-md-11" id="validationDefault05" required/> 
          </div><br/>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <input type="text" class="form-control col-md-11" id="validationDefault05" required/> 
          </div>

      </div>
      </div>
      
            </ModalBody>
            <ModalFooter>
             <button onClick={props.close}  className='btn btn-primary'> Fechar modal</button>
            </ModalFooter>
        </Modal>
    );
}