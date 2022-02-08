import axios from 'axios';
import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
// import '../App.css';
import './NovoGerenciador.css';
import ModalRoot from '../modulos/modal/components/ModalRoot';
import ModalService from '../modulos/modal/Services/ModalService';
import TesteModal from '../components/TesteModal';
import Upload from './Upload';



 
function NovoGerenciador() {
  const baseUrl="https://localhost:44391/api/Perguntas";

  const [data,setData]=useState([]);
  const [updateData,setUpdateData]=useState(true);
  const[modalEditar, setModalEditar]=useState(false);
  const[modalExcluir, setModalExcluir]=useState(false);

  const [perguntaSelecionada, setPerguntaSelecionada]=useState({
    Id:'',
    Perg:''
  })

  const abrirFecharModalEditar=()=>{
    setModalEditar(!modalEditar);
  } 
  const abrirFecharModalExcluir=()=>{
    setModalExcluir(!modalExcluir);
  } 
  const addModal = ()=>{
    ModalService.open(TesteModal);
  }
 
  const selecionarPergunta=(perguntas,opcao)=>{
    setPerguntaSelecionada(perguntas);
    (opcao ==="Editar") ?
      abrirFecharModalEditar() : abrirFecharModalExcluir();
  }

  const pedidoGet=async()=>{
    await axios.get(baseUrl)
    .then(Response => {
      setData(Response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    if(updateData){
      pedidoGet();
      setUpdateData(false);
    } 
  },[updateData])

  return(
  <div className="perg-container">
    <br/>
    <header >
      <h5>Criar Novo Gerenciador</h5><br/>
      <ModalRoot/>
      <button onClick={addModal} className='btn btn-primary m-4'>Adicionar Pergunta</button>   
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
      <Link to="/">
         <button className="btn btn-primary">Perguntas</button>
      </Link>
      <br/>
      <br/>
      <Upload/>
      </tbody>
       
  </div>
  );
}

 
export default NovoGerenciador;

  // const [file, setFile] = useState();
  // const [fileName,setFileName] = useState();
   
  // const saveFile = (e) =>{
  //   console.log(e.target.file[0]);
  //   setFile(e.target.file[0]);
  //   setFileName(e.target.file[0].name);
  // };

// const uploadFile = async (e)=>{
  //   console.log(file);
  //   const formData = new FormData();
  //   formData.append("formFile",file);
  //   formData.append("formName",fileName);
  //   try{
  //     const res = await axios.post("https://localhost:44391/api/Perguntas",formData);
  //     console.log(res);
  //   }catch(ex){
  //     console.log(ex);
  //   }
  // }; 

  //----------------------------------------------------
  // const [campos, setCampos] = useState({
  //     nome: '',
  //     email: '',
  //     mensagem: '',
  //     anexo: ''
  // });
  // function handleInputChange(event){
  //     if(event.target.name === "anexo")
  //       campos[event.target.name] = event.target.files[0];
  //     else
  //       campos[event.target.name] = event.target.value;
  //     setCampos(campos);
  // }

// return(
//   <div className="container">
//   <form>
//     <label htmlFor="email">E-mail</label>
//     <input type="text" id="email" name="email" placeholder="E-mail de destino.."  onChange={handleInputChange}/>

//     <label htmlFor="nome">Nome</label>
//     <input type="text" id="nome" name="nome" placeholder="Nome da pessoa.."  onChange={handleInputChange} />

//     <label htmlFor="mensagem">Mensagem</label>
//     <textarea id="mensagem" name="mensagem" placeholder="Escreva algo.." className="textArea"  onChange={handleInputChange}></textarea>

//     <label htmlFor="anexo">Anexo</label>
//     <input type="file" id="anexo" name="anexo" />

//     <input type="submit" value="Enviar" />
//   </form>
// </div>
// );
// }


{/*   <div className="perg-container">
   <h1>Olá esta é uma nova pagina!</h1>
   <Link to="/">
     <button>voltar </button>
   </Link>
  </div> */}