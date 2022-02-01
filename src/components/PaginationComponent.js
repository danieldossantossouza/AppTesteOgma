import React from "react";
import './Pagination.css';

const PaginationComponent = ({pages,CurrentPage,setCarregPagina}) =>{
    return(
        <div>
             {Array.from (Array(pages),(itens,index) =>{
                 return <button 
                 style={ index === CurrentPage ? {backgroundColor:"gray"} : null}
                 className="paginationButton"
                 value={index} 
                 onClick={(e) => 
                    setCarregPagina(Number(e.target.value))}>
                  {index+1}</button>
             })}
        </div>
    );
}

export default PaginationComponent;