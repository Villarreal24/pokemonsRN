import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const pokemons = createSlice({
    name: 'pokemons',
    initialState: {
        allPokemons: [],
        regions: [],
        regionPokemons: [],
    },
    reducers: {
        setAllPokemons: (state, action) => {
            state.allPokemons = action.payload;
        },
        setRegion: (state, action) => {
            state.regions = action.payload;
        },
        setRegionPokemons: (state, action) => {
            state.regionPokemons = action.payload
        },
        resetRegionPokemons: (state, action) => {
            state.regionPokemons = action.payload
        }
    }
});

export const { setAllPokemons, setRegion, setRegionPokemons, resetRegionPokemons } = pokemons.actions;

export default pokemons.reducer;

export const fetchRegion = () => (dispatch) => {
    const baseUrl = 'https://pokeapi.co/api/v2';
    axios.get(`${baseUrl}/region`)
        .then(res => {
            dispatch(setRegion(res.data.results));
        }).catch(err => {
            console.log(err)
        })
}

export const fetchRegionPokemons = (payload) => (dispatch) => {
    dispatch(resetRegionPokemons([]));
    axios.get(payload)
        .then(res => {
            const pokedex = res.data.pokedexes[0].url
            axios.get(pokedex)
                .then(resDex => {
                    let pokemons = resDex.data.pokemon_entries
                    dispatch(setRegionPokemons(pokemons));
                })
        }).catch(err => {
            console.log(err)
        })
}

export const fetchAllPokemons = () => (dispatch) => {
    const baseUrl = 'https://pokeapi.co/api/v2';
    axios.get(`${baseUrl}/pokemon`)
        .then(res => {
            const pokemons = res.data.results
            dispatch(setAllPokemons(pokemons))
        })
}