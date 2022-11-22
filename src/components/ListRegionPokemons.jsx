import React, { useState } from 'react'
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Button, Card, Banner, ActivityIndicator, List } from 'react-native-paper';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { resetTeam, fetchSaveTeam, fetchSelectTeam, setTeam } from '../redux/slices/pokemons';
const ListRegionPokemons = ({ navigation }) => {

    const dispatch = useDispatch();

    const [banner, setBanner] = useState(false);

    const arrPokemons = useSelector(state => state.pokemons.regionPokemons);
    const region = useSelector(state => state.pokemons.regionSelected);
    const team = useSelector(state => state.pokemons.team)
    const user = useSelector(state => state.auth.user)
    const loading = useSelector(state => state.pokemons.loading)


    if (arrPokemons.length === 0) {
        return (
            <View style={styles.contentLoading}>
                <ActivityIndicator style={styles.loading} size={'large'} animating={true} />
            </View>
        )
    }

    const selector = (poke) => {
        const pokemon = poke.pokemon_species;
        if (team.length <= 5) {
            dispatch(setTeam(pokemon));
        }
    }

    const createTeam = async () => {
        if (team.length >= 3) {
            await dispatch(fetchSaveTeam({
                user: user,
                region: region,
                poke: team
            }));
            setBanner(false);
            navigation.push('Home');
        } else {
            Alert.alert(
                "Faltan pokemones",
                "Debes de seleccionar minimo 3 pokemones."
            )
        }
    }

    if (loading) {
        return (
            <View style={styles.contentLoading}>
                <ActivityIndicator style={styles.loading} size={'large'} animating={true} />
            </View>
        )
    }

    return (
        <View>
            <Banner
                visible={true}
                actions={[
                    {
                        label: 'Borrar',
                        onPress: () => dispatch(resetTeam([]))
                    },
                    {
                        label: 'Guardar equipo',
                        onPress: () => createTeam()
                    }
                ]}
            >              
                <Text>Pokemones seleccionados: {team.length}</Text>
            </Banner>
            <ScrollView>
                <Card>
                    {arrPokemons.map(item => (
                        <TouchableOpacity
                            key={item.entry_number}
                            onPress={() => selector(item)}
                        >
                            <List.Item
                                key={item.entry_number}
                                title={item.pokemon_species.name}
                                titleStyle={styles.title}
                            />
                        </TouchableOpacity>
                    ))}
                    <Card.Actions>
                        <Text>Pokemos seleccionados:</Text>
                    </Card.Actions>
                </Card>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    contentLoading: {
        flex: 1,
        marginTop: 100
    },
    textBanner: {
        paddingBottom: 10
    },
    title: {
        fontFamily: 'Lato-Regular',
        textAlign: 'center',
    },
    loading: {
        textAlignVertical: 'center'
    }
})

export default ListRegionPokemons;
