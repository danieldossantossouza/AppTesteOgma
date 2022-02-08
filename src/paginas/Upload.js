import  Axios  from 'axios';
import React from 'react';
// import '../App.css';
import './NovoGerenciador.css';


 
const Upload = () => {

  let formData = new FormData();

  const onFileChange = (e) =>{
    console.log(e.target.files[0])
      if(e.target && e.target.files[0]){
        formData.append('file',e.target.files[0]);
      }
  }

  const submitFileData = () =>{
    Axios.post(
      'https://localhost:44391/api/Perguntas',
      {formData}
    )
    .then (res => {
      console.log(res);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  return(
      <div className='Upload'>
        <div>        
          <input type="file" name="file_upload" onChange={onFileChange}  />
        </div>
        <div>
          <button onClick={submitFileData}>Submit Data</button>
        </div>

      </div>
  );

  
  }
export default Upload;