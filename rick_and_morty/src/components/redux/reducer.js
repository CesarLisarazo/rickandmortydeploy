import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-types";

let initialState = {
  myFavorites: [],
  allCharacters: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        myFavorites: [...state.allCharacters, action.payload],
      };

    case REMOVE_FAV:
      const filteredCharacters = state.allCharacters.filter(
        (favorite) => favorite.id !== Number(action.payload)
      );
      return {
        ...state,
        allCharacters: filteredCharacters,
        myFavorites: filteredCharacters,
      };

    case FILTER:
      if(action.payload=="All") return{
        ...state,
        myFavorites:state.allCharacters
      }
      const filteredFavs = state.allCharacters.filter(
        (char) => char.gender == action.payload
      );
      return {
        ...state,
        myFavorites: filteredFavs,
      };

    case ORDER:
      const orderCopy = [...state.allCharacters];
      if (action.payload == "A") orderCopy.sort((a, b) => a.id - b.id);
      if (action.payload == "D") orderCopy.sort((a, b) => b.id - a.id);
      return {
        ...state,
        myFavorites: orderCopy,
      };

    default:
      return { ...state };
  }
}
