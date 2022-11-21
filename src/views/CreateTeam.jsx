import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    FlatList,
} from 'react-native';
import ListRegions from '../components/ListRegions';

const CreateTeam = ({navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
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
    container: {
        flex: 1,
    },
    content: {
        paddingTop: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 5,
        fontFamily: 'Lato-Black'
    },
})

export default CreateTeam;
