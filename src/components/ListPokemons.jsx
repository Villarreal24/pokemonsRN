import React, { useEffect } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Button, Card, Title, Divider, List } from 'react-native-paper';
// Redux
import {useSelector, useDispatch} from 'react-redux'

const ListPokemons = (props) => {
    // console.log(props)
    const arrPokemons = useSelector(state => state.pokemons.regionPokemons);

    return (
        <View style={styles.content}>
            <ScrollView>
                <Card>
                    <Card.Content />
                    {arrPokemons.map(item => (
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
    content: {
        marginLeft: 40,
        marginRight: 40,
    },
    title: {
        fontFamily: 'Lato-Regular',
        textAlign: 'center',
    },
})

export default ListPokemons;
