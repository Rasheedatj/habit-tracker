import { createContext, ReactNode, use, useState } from 'react';

interface ContextProp {
  favourites: string[];
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;
}

const FavouriteContext = createContext<ContextProp | null>(null);

const FavoriteContextProvider = ({ children }: { children: ReactNode }) => {
  const [favourites, setFavourites] = useState<string[]>([]);

  const addFavourite = (id: string) => {
    if (favourites.includes(id)) {
      return removeFavourite(id);
    }

    setFavourites((curFavourites) => [...curFavourites, id]);
  };

  const removeFavourite = (id: string) =>
    setFavourites((curFavourites) => curFavourites.filter((cur) => cur !== id));

  return (
    <FavouriteContext.Provider
      value={{ addFavourite, removeFavourite, favourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavoriteContextProvider;

export const useFavourite = () => {
  const context = use(FavouriteContext);
  if (!context) throw new Error('Favorite context was used out of scope');

  return context;
};
