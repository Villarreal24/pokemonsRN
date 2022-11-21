import React, {useEffect} from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
} from 'react-native';
import { Button } from 'react-native-paper';
import { Card } from 'react-native-paper';
// Redux
import { useDispatch } from 'react-redux';
import { fetchRegion, fetchAllPokemons } from '../redux/slices/pokemons';


const Home = ({ navigation }) => {

    const dispatch = useDispatch();

    const createTeam = () => {
        dispatch(fetchRegion());
        navigation.navigate('CreateTeam')
    }

    const allPokemons = () => {
        dispatch(fetchAllPokemons());
        navigation.navigate('ListPokemons')
    }

    // useEffect(() => {

    // }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentBtns}>
                <Button
                    compact='true'
                    uppercase='true'
                    onPress={() => createTeam()}>
                    Crear equipo
                </Button>
                <Button
                    compact='true'
                    uppercase='true'
                    onPress={() => allPokemons()}>
                    Ver todos los pokemones
                </Button>
            </View>
            <Text style={styles.title}>Equipos creados</Text>
            <View style={styles.contentCard}>
                <Card style={styles.team}>
                    <Text></Text>
                </Card>
            </View>
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
        fontFamily: 'Lato-Black'
    },
    button: {
        paddingBottom: 10,
    },
    contentCard: {
        padding: 10,
    },
    team: {
        padding: 20
    },
})

export default Home;
