import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
} from 'react-native';
import { Button } from 'react-native-paper';
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

    return (
        <SafeAreaView>
            <View style={styles.content}>
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
                <Text style={styles.title}>Equipos creados</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    content: {
        padding: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 15,
        fontFamily: 'Lato-Black'
    },
    button: {
        paddingBottom: 10,
    },
})

export default Home;
