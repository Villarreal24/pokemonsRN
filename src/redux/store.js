import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

// Reducer
import pokemons from './slices/pokemons';
import auth from './slices/auth';
import teamPokemons from './slices/teamPokemons';

export default configureStore({
  reducer: {
    pokemons,
    auth,
    teamPokemons,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});