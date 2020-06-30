import React, {Component} from 'react';

import {Root} from 'native-base';
import Navigator from './src/config/navigation-config';
// import store from './src/redux/store';
// import persistor from './src/redux/store';
import {Provider} from 'react-redux';
import {NetworkProvider} from 'react-native-offline';
import {ReduxNetworkProvider} from 'react-native-offline';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './src/redux/store';
import {ActivityIndicator} from 'react-native';

const {persistor, store} = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <ReduxNetworkProvider
            pingTimeout={10000000}
            pingInBackground={true}
            pingInterval={2000}
            pingServerUrl={'https://spinmetry.intelocate.com/'}>
            <Root>
              <Navigator />
            </Root>
          </ReduxNetworkProvider>
        </PersistGate>
      </Provider>
    );
  }
}
