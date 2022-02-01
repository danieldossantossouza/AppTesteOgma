import React from "react";
import './Pagination.css';

const PaginationSelection = ({itensPorPage,setItensPorPage}) =>{
    return(
        <div>
          Quantidade da Lista: 
          <select value={itensPorPage} onClick={(e)=> setItensPorPage(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
          </select>
        </div>
    );
}

export default PaginationSelection;