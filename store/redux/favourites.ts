import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Props {
  favourites: string[];
}

const initialState: Props = {
  favourites: [],
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<{ id: string }>) => {
      state.favourites = [...state.favourites, action.payload.id];
    },
    removeFavourite: (state, action: PayloadAction<{ id: string }>) => {
      state.favourites = state.favourites.filter(
        (fave) => fave !== action.payload.id
      );
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
