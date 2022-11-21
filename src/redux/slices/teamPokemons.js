import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import database from '@react-native-firebase/database';

export const teamPokemons = createSlice({
    name: 'teamPokemons',
    initialState: {
        teams: []
    },
    reducers: {
        setTeams: (state, action) => {

        }
    }
});

export const { setTeams } = teamPokemons.reducer;

export default teamPokemons.reducer;