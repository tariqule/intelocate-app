import React, {Component} from 'react';

import {Root} from 'native-base';
import Navigator from './src/config/navigation-config';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <Navigator />
        </Root>
      </Provider>
    );
  }
}
