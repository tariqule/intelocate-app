import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import * as Animatable from 'react-native-animatable';
const Location = () => {
  return (
    <Animatable.View animation="fadeInDown">
      <MapView
        style={{flex: 1, height: 300}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      />
    </Animatable.View>
  );
};

export default Location;
