import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: () => {},
    removeFavorite: (id) => {},
});

const FavoritesContextProvier = ({children}) => {
    const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);

    const addFavorite = (id) => {
        setFavoriteMealsIds((curretFavIds) => [...curretFavIds, id]);
    }

    const removeFavorite = (id) => {
        setFavoriteMealsIds((curretFavIds) =>
         curretFavIds.filter((mealId) => mealId !== id)
    )}

    const value = {
        ids: favoriteMealsIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return <FavoritesContext.Provider value={value}>
        {children}
    </FavoritesContext.Provider>
}

export default FavoritesContextProvier;