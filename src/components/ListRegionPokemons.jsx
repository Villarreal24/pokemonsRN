import React, { useEffect } from 'react'
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import { Button, Card, Title, ActivityIndicator, List } from 'react-native-paper';
// Redux
import {useSelector, useDispatch} from 'react-redux'
const ListRegionPokemons = (props) => {

    const arrPokemons = useSelector(state => state.pokemons.regionPokemons);
    

    return (
        <View>
            <ScrollView>
                <Card>
                    <Card.Content />
                    {arrPokemons.length === 0 ? 
                        <View >
                            <ActivityIndicator style={styles.contentLoading} animating={true} /> 
                        </View>
                        : 
                        arrPokemons.map(item => (
                            <List.Item
                                key={item.entry_number}
                                title={item.pokemon_species.name}
                                titleStyle={styles.title}
                            />
                        ))}
                </Card>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Lato-Regular',
        textAlign: 'center',
    },
    contentLoading: {
        textAlignVertical: 'center'
    }
})

export default ListRegionPokemons;
