import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  function addFavoriteFavorite(id) {
    setFavoriteIds((currentFavoriteIds) => {
      return [...currentFavoriteIds, id];
    });
  }

  function removeFavoriteFavorite(id) {
    setFavoriteIds((currentFavoriteIds) => {
      return currentFavoriteIds.filter((bookId) => bookId != id);
    });
  }

  const value = {
    ids: favoriteIds,
    addFavorite: addFavoriteFavorite,
    removeFavorite: removeFavoriteFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
