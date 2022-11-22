import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Card } from 'react-native-paper';
// Redux
import { useDispatch, useSelector } from 'react-redux';

const TeamDetails = () => {

    const region = useSelector(state => state.teamPokemons.region);
    const teams = useSelector(state => state.teamPokemons.selectedTeam);

    return (
        <View style={styles.container}>
            <ScrollView>
                <Card style={styles.card}>
                    <Text style={styles.title}>Pokemons del equipo region
                        <Text style={styles.textRegion}>  {region}</Text>
                    </Text>
                    {teams.map((poke, index) => (
                        <View style={styles.containerPoke} key={index}>
                            <View style={styles.contentPoke}>
                                <View>
                                    {/* =========== POKEMON NAME =========== */}
                                    <Text style={styles.textContent}>Nombre:
                                        <Text style={styles.textPoke}>  {poke.name}</Text>
                                    </Text>
                                    {/* =========== POKEMON NUMBER =========== */}
                                    <Text style={styles.textContent}>Numero:
                                        <Text style={styles.textPoke}>  {poke.id}</Text>
                                    </Text>
                                    {/* =========== POKEMON TYPES =========== */}
                                    <View style={styles.row}>
                                        <Text style={styles.textContent}>Tipo:
                                            {poke.types.map((item, index) => (
                                                <Text
                                                    key={index}
                                                    style={styles.textPoke}> {item.type.name},
                                                </Text>
                                            ))}
                                        </Text>
                                    </View>
                                </View>

                                {/* =========== POKEMON IMAGE =========== */}
                                <View>
                                    <Image
                                        style={{ width: 110, height: 100 }}
                                        source={{ uri: `${poke.imageUrl}`}}
                                    />
                                </View>
                            </View>
                            {/* =========== POKEMON DESCRIPTION =========== */}
                            <Text style={styles.textContent}>Descripción:
                                <Text>  {poke.description}</Text>
                            </Text>
                        </View>
                    ))}
                </Card>
            </ScrollView>
        </View>
    );
}

export default TeamDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    card: {
        padding: 20,
    },
    title: {
        fontFamily: 'Lato-Black',
        textAlign: 'center',
        fontSize: 18,
    },
    textRegion: {
        textTransform: 'uppercase',
        color: '#ED6405'
    },
    containerPoke: {
        paddingTop: 15,
        paddingBottom: 25,
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 1,
    },
    contentPoke: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textContent: {
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        paddingTop: 10,
    },
    textPoke: {
        textTransform: 'capitalize',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})