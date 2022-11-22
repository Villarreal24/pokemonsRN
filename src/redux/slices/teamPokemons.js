import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import database from '@react-native-firebase/database';

export const teamPokemons = createSlice({
    name: 'teamPokemons',
    initialState: {
        teams: [],
        region: '',
        selectedTeam: [],
    },
    reducers: {
        setTeams: (state, action) => {
            state.teams = action.payload;
        },
        setSelectedRegion: (state, action) => {
            state.region = action.payload;
        },
        setSelectedTeam: (state, action) => {
            state.selectedTeam = action.payload;
        },
        deleteTeam: (state, action) => {
            state.deleteTeam = action.payload;
        }
    }
});

export const { setTeams, setSelectedTeam, setSelectedRegion } = teamPokemons.actions;

export default teamPokemons.reducer;

export const fetchGetTeams = (payload) => async (dispatch) => {
    await database().ref(`/teams/${payload}`)
        .once('value')
        .then(snapshot => {
            const data = snapshot.val();
            const teams = Object.values(data);
            dispatch(setTeams(teams));
        })
}

export const fetchGetTeamDetails = (payload) => async (dispatch) => {
    const urlPokemon = ('https://pokeapi.co/api/v2/pokemon/');
    let arrPokemons = payload.pokemons;
    let newArr = [];
    // GET VALUES OF POKEMONS
    for (const item of arrPokemons) {
        await axios.get(item.url)
            .then(async (res) => {
                // ID
                const id = res.data.id;
                // DESCRIPTION
                let description = '';
                // VALIDATE IF EXIST DESCRIPTION TO PREVENT ERROR
                if (res.data.form_descriptions[0]) {
                    description = res.data.form_descriptions[0].description;
                } else {
                    description = "No hay descripción."
                }
                // CREATE OBJECT TO ORGANICE THE DATA
                let object = {
                    name: item.name,
                    id: id,
                    url: item.url,
                    description: description,
                };
                await axios.get(`${urlPokemon}${id}`)
                    .then(result => {
                        // TYPES
                        const types = result.data.types;
                        object.types = types;
                        // IMAGE
                        const imageUrl = result.data.sprites.front_default;
                        object.imageUrl = imageUrl;
                    })
                newArr.push(object);
            })
    };
    dispatch(setSelectedRegion(payload.region));
    dispatch(setSelectedTeam(newArr));
}

export const deleteTeam = (payload) => async() => {
    // UPDATE ARRAY ON DATABASE
    await database().ref(`/teams/${payload.user}`)
        .set(payload.newArr)
}