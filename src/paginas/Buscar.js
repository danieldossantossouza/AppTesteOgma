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