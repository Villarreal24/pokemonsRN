import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import database from '@react-native-firebase/database';

export const pokemons = createSlice({
    name: 'pokemons',
    initialState: {
        allPokemons: [],
        regions: [],
        regionSelected: [],
        regionPokemons: [],
        team: [],
        loading: false,
    },
    reducers: {
        setAllPokemons: (state, action) => {
            state.allPokemons = action.payload;
        },
        setRegions: (state, action) => {
            state.regions = action.payload;
        },
        setRegionSelected: (state, action) => {
            state.regionSelected = action.payload;
        },
        setRegionPokemons: (state, action) => {
            state.regionPokemons = action.payload
        },
        resetRegionPokemons: (state, action) => {
            state.regionPokemons = action.payload
        },
        setTeam: (state, action) => {
            if(action.payload !== '') {
                state.team = [...state.team, action.payload];
            } else {
                state.team = []
            }
        },
        resetTeam: (state, action) => {
            state.team = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
});

export const {
    setAllPokemons,
    setRegions,
    setRegionSelected,
    setRegionPokemons,
    resetRegionPokemons,
    setTeam,
    resetTeam,
    setLoading,
} = pokemons.actions;

export default pokemons.reducer;

export const fetchRegion = () => (dispatch) => {
    const baseUrl = 'https://pokeapi.co/api/v2';
    axios.get(`${baseUrl}/region`)
        .then(res => {
            dispatch(setRegions(res.data.results));
        }).catch(err => {
            console.log(err)
        })
}

export const fetchRegionPokemons = (payload) => (dispatch) => {
    dispatch(resetRegionPokemons([]));
    dispatch(setRegionSelected(payload.name));
    axios.get(payload.url)
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

export const fetchSelectTeam = (payload) => (dispatch) => {
    dispatch(setTeam(payload));
}

export const fetchSaveTeam = (payload) => async (dispatch) => {
    dispatch(setLoading(true))
    const region = payload.region;
    const team = payload.poke;
    const user = payload.user;
    const ref = await database().ref('/teams').push();
        await ref.set({
            by: user.uid,
            region: region,
            pokemons: team
        }).then(() => {
            dispatch(setLoading(false));
            dispatch(setRegionSelected(''))
            dispatch(setRegions([]))
            dispatch(setRegionPokemons([]))
            dispatch(setTeam(''))
        })
}