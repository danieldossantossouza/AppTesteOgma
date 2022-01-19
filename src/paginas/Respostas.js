import react,{useState} from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import {Link} from 'react-router-dom';
// import  './Navbar.css';
// import {IconContext} from 'react-icons' 


function Resposta(){
  // const[sidebar, setSidebar]=useState(false);
  // const showSidebar =() =>setSidebar(!sidebar);

return(
  <form>
  
  <div class="form-group">
    <label for="inputAddress">Endereço</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Rua dos Bobos, nº 0"/>
  </div>
  
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Cidade</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputEstado">Estado</label>
      <select id="inputEstado" class="form-control">
        <option selected>Escolher...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputCEP">CEP</label>
      <input type="text" class="form-control" id="inputCEP"/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Clique em mim
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Entrar</button>
</form>

  



  
);
  

}

export default Resposta

{/*   <div className="perg-container">
   <h1>Olá esta é uma nova pagina!</h1>
   <Link to="/">
     <button>voltar </button>
   </Link>
  </div> */}