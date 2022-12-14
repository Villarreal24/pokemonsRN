import React, { useEffect } from 'react'
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import { Button, Card, Title, ActivityIndicator, List } from 'react-native-paper';
// Redux
import {useSelector, useDispatch} from 'react-redux'
const ListPokemons = () => {

    const arrPokemons = useSelector(state => state.pokemons.allPokemons);
    
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
                                key={item.name}
                                title={item.name}
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
        paddingBottom: 25,
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 1,
    },
    contentLoading: {
        textAlignVertical: 'center'
    }
})

export default ListPokemons;
