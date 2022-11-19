import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    FlatList,
} from 'react-native';
import ListRegions from '../components/ListRegions';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegionPokemons } from '../redux/slices/pokemons';

const CreateTeam = ({navigation}) => {

    return (
        <SafeAreaView>
            <View style={styles.content}>
                <Text style={styles.title}>Selecciona la región</Text>
                <ListRegions
                    navigation={navigation}
                />
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
        paddingTop: 5,
        fontFamily: 'Lato-Black'
    },
})

export default CreateTeam;
