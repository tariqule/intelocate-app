import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderX from '../../../components/headerX';
import {useNavigation} from '@react-navigation/native';

const Chat = ({route}) => {
  const {title} = route.params;
  const navigation = useNavigation();
  return (
    <View>
      <HeaderX
        title={title || 'Loading..'}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
