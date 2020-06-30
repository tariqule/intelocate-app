import React from 'react';
import {View, Text} from 'react-native';
import {NetworkConsumer} from 'react-native-offline';
import {OfflineModeIcon} from '../../svg-components/offline-mode-icon';
import {MAIN_RED} from '../../config/global-styles';
import {useSelector} from 'react-redux';

const OfflineMode = (props) => {
  const isConnected = useSelector((state) => state.network.isConnected);

  React.useEffect(() => {
    console.log(isConnected + '[component]');
  }, []);

  return (
    <View>
      {isConnected ? undefined : (
        <View
          style={{
            backgroundColor: MAIN_RED,
            flexDirection: 'row',
            height: 30,
            alignItems: 'center',
          }}>
          <View style={{flex: 1, height: 20}}>
            <OfflineModeIcon color="#FFF" />
          </View>
          <View style={{flex: 5}}>
            <Text style={{color: 'white', paddingLeft: 10}}>Offline Mode</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default OfflineMode;
