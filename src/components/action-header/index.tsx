import React from 'react';
import {View, Text} from 'react-native';
import {
  font_md,
  font_sm,
  font_sm_md,
  MAIN_GRAY,
  font_xs,
} from '../../config/global-styles';

const ActionHeader = (props) => {
  return (
    <View style={{flex: 1}}>
      <View style={{padding: 15}}>
        <Text {...props} style={{fontSize: font_sm_md}}>
          {props.title}
        </Text>
        <Text style={{color: MAIN_GRAY, fontSize: font_xs}}>
          {props.actionNumber}
        </Text>
      </View>
    </View>
  );
};

export default ActionHeader;
