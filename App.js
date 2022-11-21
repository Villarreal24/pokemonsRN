import React from 'react';

import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import store from './src/redux/store';
import { Provider } from 'react-redux';

import Navigation from './src/components/Navigation';


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
        <Navigation />
      </PaperProvider>
    </Provider>
  );
};

export default App;
