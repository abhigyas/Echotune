import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamMusicApi } from './services/shazam';

export const store = configureStore({
  reducer: {
    [shazamMusicApi.reducerPath]:shazamMusicApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamMusicApi.middleware),
});
