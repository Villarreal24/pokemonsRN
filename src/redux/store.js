import { configureStore } from '@reduxjs/toolkit'

// Reducer
import pokemons from './slices/pokemons';

export default configureStore({
  reducer: {
    pokemons
  }
});