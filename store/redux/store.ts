import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from './favourites';

export const store = configureStore({
  reducer: {
    favouriteMeals: favouritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
