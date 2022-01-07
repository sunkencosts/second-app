import { createContext, useState } from "react";
import { Meetup } from "../pages/AllMeetups";

interface IFavoritesContext {
  favorites: Meetup[];
  totalFavorites: number;
  addFavorite: (favoriteMeetup: Meetup) => void;
  removeFavorite: (meetupId: string) => void;
  itemIsFavorite: (meetupId: string) => boolean;
}

const defaultState = {
  favorites: [],
  totalFavorites: 0,
  addFavorite: () => {},
  removeFavorite: () => {},
  itemIsFavorite: () => false,
};

const FavoritesContext = createContext<IFavoritesContext>(defaultState);

export function FavoritesContextProvider(props: { children: React.ReactNode }) {
  const [userFavorites, setUserFavorites] = useState<Meetup[]>([]);
  const context: IFavoritesContext = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  function addFavoriteHandler(favoriteMeetup: Meetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }
  function removeFavoriteHandler(meetupId: string) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }
  function itemIsFavoriteHandler(meetupId: string) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContext;
