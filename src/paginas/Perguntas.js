import React, { useEffect, useState } from 'react';
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap';
// import 'bootstrap/css/dist/bootstrap.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../App.css';
import Buscar from './Buscar';



function Perguntas(){
const baseUrl="https://localhost:44391/api/Perguntas";
const [data,setData]=useState([]);
const [updateData,setUpdateData]=useState(true);
const[modalIncluir,setModalIncluir]=useState(false);
const[modalEditar, setModalEditar]=useState(false);
const[modalExcluir, setModalExcluir]=useState(false);

const [perguntaSelecionada, setPerguntaSelecionada]=useState({
    Id:'',
    Perg:''
  })

  const selecionarPergunta=(perguntas,opcao)=>{
    setPerguntaSelecionada(perguntas);
    (opcao ==="Editar") ?
      abrirFecharModalEditar() : abrirFecharModalExcluir();
  }

  const abrirFecharModalIncluir=()=>{
    setModalIncluir(!modalIncluir);
  }

  const abrirFecharModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirFecharModalExcluir=()=>{
    setModalExcluir(!modalExcluir);
  }

  const handleChange =e=>{
    const{name,value}=e.target;
    setPerguntaSelecionada({
      ...perguntaSelecionada,[name]:value
    });
    console.log(perguntaSelecionada);
   }

   const pedidoGet=async()=>{
    await axios.get(baseUrl)
    .then(Response => {
      setData(Response.data);
    }).catch(error=>{
      console.log(error);
    })
    }

    const pedidoPost=async()=>{
        delete perguntaSelecionada.Id;
        await axios.post(baseUrl,perguntaSelecionada)
        .then(response => {
          setData(data.concat(response.data));
          setUpdateData(true);
          abrirFecharModalIncluir();
        }).catch(error=>{
          console.log(error);
        })
       }

       const perguntaPut=async()=>{
        await axios.put(baseUrl+"/"+perguntaSelecionada.id,perguntaSelecionada)
         .then(response=>{
            var resposta = response.data;
            var dadosAuxiliar = data;
            dadosAuxiliar.map(perguntas=>{
              if(perguntas.id===perguntaSelecionada.id){
                perguntas.Perg=resposta.Perg
              }
            });
            setUpdateData(true);
            abrirFecharModalEditar();  
         }).catch(error=>{
           console.log(error);
         })
      }
      const perguntaDelete=async()=>{
        await axios.delete(baseUrl+"/"+perguntaSelecionada.id)
        .then(response=>{
          setData(data.filter(pergunta=>pergunta.id !==response.data))
          setUpdateData(true);
          abrirFecharModalExcluir();
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

return (
    <div className="perg-container">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" crossorigin="anonymous"></link>
    
    <br/>
    <header >
      <Buscar/>
      <i class="bi bi-search"></i>
      {/* <img src={Lupa} alt='lupa'/> */}
      <button className="btn btn-success" onClick={()=>abrirFecharModalIncluir()}>Nova Pergunta</button> 
      
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

<Link to="/Respostas">
    <button>voltar </button>
  </Link>
</tbody>

   {/* Modal Incluir */}
   <Modal isOpen={modalIncluir}>
    <ModalHeader>Incluir Pergunta</ModalHeader>
    <ModalBody>
    <div className='form-group'>
      <div class="mb-3">
        <label for="validationTextarea">Pergunta</label>
        <input type="text-log" className='form-control' name='Perg' onChange={handleChange}/>
        <div class="invalid-feedback">
          Inclua a pergunta !
        </div>
      </div>
    </div>
  </ModalBody>
  <ModalFooter>
    <button className="btn btn-primary" onClick={()=>pedidoPost()} >Incluir</button>
    <button className="btn btn-danger" onClick={()=>abrirFecharModalIncluir()}>Cancelar</button>
    
  </ModalFooter>
  </Modal>

  {/* Modal Editar */}
  <Modal isOpen={modalEditar}>
    <ModalHeader>Editar Pergunta</ModalHeader>
    <ModalBody>
      <div className="form-group">
        <label>Id: </label>
        <input type="text" className="form-control"
         readOnly value={perguntaSelecionada && perguntaSelecionada.id}/>
        <br></br>
        <label>Pergunta: </label>
        <input Type="text" className="form-control" name="Perg"   onChange={handleChange} 
           value={perguntaSelecionada && perguntaSelecionada.Id} />
        < br/>
          
      </div>
    </ModalBody>
    <ModalFooter>
      <button className="btn btn-primary" onClick={()=> perguntaPut()}>Editar</button>{"   "}
      <button className="btn btn-danger" onClick={()=> abrirFecharModalEditar()}>Cancelar</button>
    </ModalFooter>
  </Modal>

  {/* Modal Editar */}
  <Modal isOpen={modalEditar}>
    <ModalHeader>Editar Pergunta</ModalHeader>
    <ModalBody>
      <div className="form-group">
        <label>Id: </label>
        <input type="text" className="form-control"
         readOnly value={perguntaSelecionada && perguntaSelecionada.id}/>
        <br></br>
        <label>Pergunta: </label>
        <input Type="text" className="form-control" name="Perg"   onChange={handleChange} 
           value={perguntaSelecionada && perguntaSelecionada.Id} />
        < br/>
          
      </div>
    </ModalBody>
    <ModalFooter>
      <button className="btn btn-primary" onClick={()=> perguntaPut()}>Editar</button>{"   "}
      <button className="btn btn-danger" onClick={()=> abrirFecharModalEditar()}>Cancelar</button>
    </ModalFooter>
  </Modal>

  <Modal isOpen={modalExcluir}>
     <ModalBody>
       Confirme a exclusão deta Pergunta com Id : {perguntaSelecionada && perguntaSelecionada.id}?
     </ModalBody>
     <ModalFooter>
       <button className="btn btn-danger" onClick={()=>perguntaDelete()}>Sim</button>
       <button className="btn btn-secondary" onClick={()=>abrirFecharModalExcluir()}>Não</button>
     </ModalFooter>
   </Modal>
</div>

);

}

export default Perguntas;

