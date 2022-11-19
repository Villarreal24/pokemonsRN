import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Button, Card, Title, Divider, List } from 'react-native-paper';
// Redux
import {useSelector, useDispatch} from 'react-redux'
import { fetchRegionPokemons } from '../redux/slices/pokemons';

const ListRegions = (props) => {
    const navigation = props.navigation
    const dispatch = useDispatch();

    const arrRegions = useSelector(state => state.pokemons.regions);

    const setRegion = region => {
        dispatch(fetchRegionPokemons(region))
        navigation.navigate('ListPokemons');
    }

    return (
        <View style={styles.content}>
            <ScrollView>
                <Card>
                    <Card.Content />
                    {arrRegions.map(item => (
                        <List.Item
                            key={item.name}
                            title={item.name}
                            titleStyle={styles.title}
                            onPress={() => {
                                setRegion(item.name)
                            }}
                        />
                    ))}
                </Card>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingTop: 20,
        paddingBottom: 70,
        marginLeft: 40,
        marginRight: 40,
    },
    title: {
        fontFamily: 'Lato-Regular',
        fontSize: 17,
        paddingLeft: 10,
        textAlign: 'center',
    },
})

export default ListRegions;
