import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import {
  StyleSheet,
} from 'react-native';
import store from './src/redux/store';
import { Provider } from 'react-redux';

import Home from './src/views/Home';
import CreateTeam from './src/views/CreateTeam';
import ListRegions from './src/components/ListRegions';
import ListPokemons from './src/components/ListPokemons';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ED6405',
    secondary: '#F10453',
  },
};

const App = () => {

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
              title: "Pokemones",
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontFamily: 'Lato-Black',
              }
            }}
          >
            <Stack.Screen
              name="Home"
              component={Home}
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
              name="ListPokemons"
              component={ListPokemons}
              options={{
                title: "Pokemones"
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default App;
