import React, { useEffect } from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';
import { Card } from 'react-native-paper';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegion, fetchAllPokemons } from '../redux/slices/pokemons';
import { fetchGetTeams, fetchGetTeamDetails } from '../redux/slices/teamPokemons';


const Home = ({ navigation }) => {

    const user = useSelector(state => state.auth.user);
    const teams = useSelector(state => state.teamPokemons.teams);

    const dispatch = useDispatch();

    const createTeam = () => {
        dispatch(fetchRegion());
        navigation.navigate('CreateTeam')
    }

    const allPokemons = () => {
        dispatch(fetchAllPokemons());
        navigation.navigate('ListPokemons')
    }

    const selected = async(team) => {
        await dispatch(fetchGetTeamDetails(team));
        navigation.navigate('TeamDetails');
    }

    useEffect(() => {
        dispatch(fetchGetTeams(user.uid));
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.contentBtns}>
                    <Button
                        compact='true'
                        uppercase='true'
                        mode='contained'
                        onPress={() => createTeam()}>
                        Crear equipo
                    </Button>
                    <Button
                        compact='true'
                        uppercase='true'
                        mode='contained'
                        onPress={() => allPokemons()}>
                        Ver todos los pokemones
                    </Button>
                </View>
                <Text style={styles.title}>Equipos creados</Text>
                <View style={styles.contentCard}>
                    {teams.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => selected(item)}
                        >
                            <Card style={styles.card}>
                                <Text style={styles.subtitle}>Equipo de region:
                                    <Text style={styles.textRegion}>  {item.region}</Text>
                                </Text>
                                {item.pokemons.map((poke, index) => (
                                    <View key={index}>
                                        <Text style={styles.textPoke}>Nombre:
                                            <Text style={styles.namePoke}>  {poke.name}</Text>
                                        </Text>
                                    </View>
                                ))}
                            </Card>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    contentBtns: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 20,
        fontFamily: 'Lato-Black',
        color: '#3D3D3D'
    },
    button: {
        paddingBottom: 10,
    },
    contentCard: {
        padding: 10,
    },
    card: {
        padding: 20,
        marginBottom: 20,
    },
    subtitle: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        fontWeight: '700',
        color: '#939393'
    },
    textRegion: {
        fontSize: 15,
        textTransform: 'uppercase',
        fontFamily: 'Lato-Black',
        color: '#ED6405',
    },
    textPoke: {
        paddingTop: 5,
        textTransform: 'capitalize',
        fontFamily: 'Lato-Regular',
        fontWeight: '600'
    },
    namePoke: {
        fontFamily: 'Lato-Black',
    }
})

export default Home;
