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
        setRegion: (state, action) => {
            state.regions = action.payload;
        },
        setRegionPokemons: (state, action) => {
            state.regionPokemons = action.payload
        }
    }
});

export const { setRegion, setRegionPokemons } = pokemons.actions;

export default pokemons.reducer;

export const fetchRegion = () => (dispatch) => {
    const baseUrl = 'https://pokeapi.co/api/v2';
    axios.get(`${baseUrl}/region`)
        .then(res => {
            // console.log(res.data.results);
            dispatch(setRegion(res.data.results));
        }).catch(err => {
            console.log(err)
        })
}

export const fetchRegionPokemons = (payload) => (dispatch) => {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
    console.log(payload)
    let offset = ''
    switch (payload) {
        case 'kanto':
            offset = '?offset=0&limit=151'
            break;
        case 'johto':
            offset = '?offset=151&limit=100'
            break;
        case 'hoenn':
            offset = '?offset=251&limit=135'
            break;
        case 'sinnoh':
            offset = '?offset=386&limit=107'
            break;
        default:
            break;
    }
    axios.get(`${baseUrl}${offset}`)
        .then(res => {
            // console.log(res.data.results);
            dispatch(setRegionPokemons(res.data.results));
        }).catch(err => {
            console.log(err)
        })
}

export const fetchAllPokemons = () => () => {
    const baseUrl = 'https://pokeapi.co/api/v2';
    axios.get(`${baseUrl}/pokemon`)
}