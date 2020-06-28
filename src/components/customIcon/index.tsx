import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR_BORDER} from '../../config/global-styles';
import {IconByCode} from '../../svg-components/categories-icons';
import {Icon} from 'native-base';

interface iconBackgroundProps {
  iconCode?: any;
  backgroundColor?: any;
  nativeIcon?: boolean;
  name?: string;
  type?:
    | 'FontAwesome'
    | 'AntDesign'
    | 'Entypo'
    | 'EvilIcons'
    | 'Feather'
    | 'FontAwesome5'
    | 'Foundation'
    | 'Ionicons'
    | 'MaterialCommunityIcons'
    | 'MaterialIcons'
    | 'Octicons'
    | 'SimpleLineIcons'
    | 'Zocial';
  nativeIconStyle?: any;
}
export const CustomIcon = (props: iconBackgroundProps) => (
  <View
    style={{
      height: 50,
      width: 50,
      borderRadius: 100,
      backgroundColor: props.backgroundColor || COLOR_BORDER,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    {!props.nativeIcon ? (
      IconByCode(props.iconCode)
    ) : (
      <Icon
        style={props.nativeIconStyle}
        name={props.name}
        type={props.type}></Icon>
    )}
  </View>
);
