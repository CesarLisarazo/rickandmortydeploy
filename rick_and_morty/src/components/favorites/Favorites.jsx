import "./favorites.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../redux/actions";

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);
 const dispatch= useDispatch()
  const handleOrder= (event)=>{
    dispatch(orderCards(event.target.value))
  }

  const handleFilter =(event)=>{
    dispatch(filterCards(event.target.value))
  }

  return (
    <div className="favoritesContainer">
      <div className="selectors">
      <div class="select-dropdown">
        <select className="order" name="order" onChange={handleOrder}>
          <option value="A"> Ascendente</option>
          <option value="D"> Descendente</option>
        </select>
        </div>

        <div class="select-dropdown">
          <select className="filter" name="filter" onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderles">Genderles</option>
          <option value="unknown">Unknown</option>
          <option value="All">All</option>
        </select>
        </div>



      </div>



<div className="favoritesCards">

      {myFavorites.map((fav) => {
        return (
          <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            image={fav.image}
            gender={fav.gender}
          />
        );
      })}

</div>
    </div>
  );
};

export default Favorites;
