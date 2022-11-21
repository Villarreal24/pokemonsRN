import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

// Reducer
import pokemons from './slices/pokemons';
import auth from './slices/auth';

export default configureStore({
  reducer: {
    pokemons,
    auth,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});