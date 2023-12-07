import React, { useState } from 'react';
import './searchBar.css'
import { Link } from 'react-router-dom';

const SearchBar =({onSearch})=> {



const [id,setId] = React.useState("")

const handleChange= (event)=>{

   setId(event.target.value)


}

   React.useState 
   return (
      <div className="searchBar">
  
        <div className='headTextContainer'>
         
         <span className='headText'>There are 826 characters from the Rick and Morty world to discover!  </span>
         </div>
        <div className='inputAndButton'> 

        <input autoComplete="off" value= {id} onChange={handleChange} placeholder= ' Enter ID ' id='input'type='search' />
        
         <Link to="Home">
         <button className='showButton' onClick={()=>onSearch(id)}>Show on screen</button> 
         <button className='showButton' onClick={()=>onSearch(Math.ceil(Math.random()*826))}>Add random</button>
         </Link>
         
         </div>
        
      </div>
   );
}

export default SearchBar;