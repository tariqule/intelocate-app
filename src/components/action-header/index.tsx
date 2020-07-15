import React from 'react';
import {View, Text} from 'react-native';
import {
  font_md,
  font_sm,
  font_sm_md,
  MAIN_GRAY,
  font_xs,
  TEST_BORDER,
} from '../../config/global-styles';
import {Card} from 'react-native-elements';

const ActionHeader = (props) => {
  return (
    <View style={{borderWidth: TEST_BORDER, flex: 1}}>
      <Card
        wrapperStyle={{
          padding: 0,
          marginHorizontal: 0,
          marginVertical: 0,
          borderWidth: 0,
        }}
        containerStyle={{
          elevation: 0,
          borderWidth: 0,
          // borderWidth: TEST_BORDER,
          backgroundColor: 'transparent',
          shadowRadius: 0,
          shadowOpacity: 0,
          justifyContent: 'flex-start',
          shadowColor: 'rgba(0,0,0, .2)',
          shadowOffset: {height: 0, width: 0},
        }}>
        <Text {...props} style={{fontSize: font_sm_md, padding: 0}}>
          {props.title}
        </Text>
        <Text style={{color: MAIN_GRAY, fontSize: font_xs}}>
          {props.actionNumber}
        </Text>
      </Card>
    </View>
  );
};

export default ActionHeader;
