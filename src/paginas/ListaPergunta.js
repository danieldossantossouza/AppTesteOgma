import React,{useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import '../App.css';
import PaginationSelection from "../components/PaginationSelection";
import PaginationComponent from "../components/PaginationComponent";

 
function ListaPerguntas() {
  const [itens, setItens] = useState([]);
  const [itensPorPage,setItensPorPage] = useState(5);
  const [carregPagina,setCarregPagina] = useState(0);
  const pages = Math.ceil(itens.length/itensPorPage);
  const startIndex = carregPagina * itensPorPage;
  const endIndex = startIndex + itensPorPage;
  const currentItens = itens.slice(startIndex,endIndex);

  const [status,setStatus]=useState('Carregando...');


  useEffect(() => {

  const obertDados = async () => {
      const result= await fetch('Aqui vai a URL(API)')
      .then(response => response.json())
      .then(data => data)
      setItens(result)
      setStatus('Dados Carregados com sucesso !')
  }
    obertDados();
  },[])

  useEffect(()=>{
    setCarregPagina(0);
  },[itensPorPage])

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
    
<br/>


<Link to="/">
<button className="btn btn-primary">Nova Pergunta </button>
</Link>
</tbody>

<PaginationComponent
  pages={pages}
  // CurrentPage={CurrentPage}
  setCarregPagina={setCarregPagina}/>
<br/>
<PaginationSelection 
itensPorPage={itensPorPage} 
setItensPorPage={setItensPorPage}/>


{currentItens.map(item =>{
        return <div className="item"><span>{item.Id}</span><span>{item.Perg}</span></div>      })}
    
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