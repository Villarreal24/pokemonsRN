import React from 'react'
import {
    StyleSheet,
    Text,
    Pressable
  } from 'react-native';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Views
import Home from '../views/Home';
import Login from '../views/Login';
import CreateTeam from '../views/CreateTeam';
// Components
import ListPokemons from './ListPokemons';
import ListRegions from './ListRegions';
import ListRegionPokemons from './ListRegionPokemons';
import TeamDetails from './TeamDetails';
// Redux
import { useDispatch } from 'react-redux';
import { fetLogOut } from '../redux/slices/auth';

const navigation = () => {

    const Stack = createNativeStackNavigator();

    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(fetLogOut());
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Login'
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: 'Lato-Black',
                    }
                }}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        title: "",
                        headerTransparent: true
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Pokemones",
                        headerBackVisible: false,
                        headerRight: () => (
                            <Pressable onPress={() => logOut()}>
                                <Text style={styles.textBtn}>Salir</Text>
                            </Pressable>
                        )
                    }}
                />
                <Stack.Screen
                    name="TeamDetails"
                    component={TeamDetails}
                    options={{
                        title: "Detalles del equipo",
                    }}
                />
                <Stack.Screen
                    name="ListPokemons"
                    component={ListPokemons}
                    options={{
                        title: "Pokemones"
                    }}
                />
                <Stack.Screen
                    name="CreateTeam"
                    component={CreateTeam}
                    options={{
                        title: "Creación de equipo"
                    }}
                />
                <Stack.Screen
                    name="ListRegions"
                    component={ListRegions}
                    options={{
                        title: "Regiones disponibles"
                    }}
                />
                <Stack.Screen
                    name="ListRegionPokemons"
                    component={ListRegionPokemons}
                    options={{
                        title: "Pokemones"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    textBtn: {
      fontSize: 16,
      fontFamily: 'Lato-Black',
      color: '#F10453'
    }
  });

export default navigation
