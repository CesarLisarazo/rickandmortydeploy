import "./nav.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
const Nav = ({ onSearch, clearScreen,logout }) => {
  return (
    <div  >

      <SearchBar onSearch={onSearch} clearScreen={clearScreen} />
<div className="navBarButtons">
     <Link to ="About">
      <button className="showButton">About</button>
      </Link>

      <Link to="Home">
      <button className="showButton">Home</button>
<button className='showButton' onClick={()=>clearScreen()}>Clear screen</button>
      </Link>
      <button className="showButton" onClick={logout}>Logout</button>
      <Link to ="Favorites">
      <button className="showButton">Favorites</button>
      </Link>
      

      </div>    
      <div className="subTextContainer">
      <span className="subText">There are 826 characters from the Rick and Morty world to discover!  </span>
      </div>
    </div>
  );
};

export default Nav;
