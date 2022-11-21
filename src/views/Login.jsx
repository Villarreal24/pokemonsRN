import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, Icon } from 'react-native';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setUser, setInitializing } from '../redux/slices/auth';
import { fetchLogin } from '../redux/slices/auth';
// Firebase
import auth from '@react-native-firebase/auth';


const Login = ({ navigation }) => {

    const dispatch = useDispatch();

    // ======= AUTH USER ========
    const initializing = useSelector(state => state.auth.initializing);
    const user = useSelector(state => state.auth.user);

    // Handle user state changes
    function onAuthStateChanged(user) {
        dispatch(setUser(user))
        // setUser(user);
        if (initializing) dispatch(setInitializing(false));
        if (user) {
            navigation.navigate('Home');
        } else {
            navigation.navigate('Login')
        }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    const SignIn = async() => {
        dispatch(fetchLogin())
    }

    return (
        <View style={styles.content}>
            <View style={styles.contentText}>
                <Text style={styles.title}>Iniciar sesión</Text>
                <Text style={styles.title}>Entra por medio de Google</Text>
            </View>

            <Pressable
                style={styles.button}
                onPress={() => SignIn()}
            >
                <Text style={styles.textBtn}>Cuenta Google</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        padding: 20,
        flex: 1,
        backgroundColor: '#EDEDED'
    },
    contentText: {
        marginTop: 80,
        marginBottom: 30
    },
    title: {
        fontFamily: 'Lato-Black',
        fontSize: 25,
        textAlign: 'center'
    },
    button: {
        marginVertical: 40,
        backgroundColor: '#FFF',
        padding: 15,
        marginHorizontal: 20,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textBtn: {
        color: '#444',
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'center',
        textTransform: 'uppercase'
    }
})

export default Login
