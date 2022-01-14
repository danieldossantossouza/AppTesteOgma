import React, { useState, useEffect} from "react";

function Buscar(){
    const[initalRepos, setinitalRepos ] = useState([]);
    const[repos,setRepos]=useState([]);

    useEffect(() => {
        const fetchRepos= async ()=>{
            try{
                const response = await fetch(
                    "https://localhost:44391/api/Perguntas"
                );
                const data= await response.json();
                setinitalRepos(data);
                setRepos(data);
        
            }catch (error){
               console.log(error);
            }       
        };
        fetchRepos(); 
    }, []);

    const handleChange=({target})=>{
        if(!target.value){
            setRepos(initalRepos);
            return;
        }
        const filterRepos = repos.filter(({name}) => name.includes(target.value));
        setRepos(filterRepos);
    };

    return(
        <>
        <div className="container-input">
            <input type="text" onClick={handleChange}/>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
        <div className="container-list">
            <ul>
                {repos.map((repo)=>{
                    <li Key={repo.Id}>{repo.Perg}</li>
                })}
            </ul>

        </div>
        </>

    );
}

export default Buscar;