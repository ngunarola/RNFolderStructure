// =======>>>>>>>> LIBRARIES <<<<<<<<=======

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


// =======>>>>>>>> ASSETS <<<<<<<<=======

import { store, persistor } from './Redux/Store';
import AppNavigation from './AppNavigation';

// =======>>>>>>>> CLASS DECLARATION <<<<<<<<=======

export class App extends React.Component {
  // =======>>>>>>>> STATES DECLARATION <<<<<<<<=======


  // =======>>>>>>>> LIFE CYCLE METHODS <<<<<<<<=======

  componentDidMount() {
    console.disableYellowBox = true
  }
  componentWillUnmount() {

  }

  // =======>>>>>>>> FUNCTIONS DECLARATION <<<<<<<<=======



  // =======>>>>>>>> RENDER INITIALIZE <<<<<<<<=======

  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <StatusBar barStyle="dark-content" backgroundColor="black" />
            <SafeAreaView style={{ flex: 1 }}>
              <AppNavigation />
            </SafeAreaView>
          </PersistGate>
        </Provider>
      </Fragment>
    );
  };
}
export default App;
