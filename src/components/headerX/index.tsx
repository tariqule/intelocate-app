import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  Header,
  Container,
  Icon,
  Left,
  Title,
  Button,
  Body,
  Right,
} from 'native-base';
import {MAIN_BLUE, font_sm} from '../../config/global-styles';
// import {HeaderProps} from 'react-native-elements';

interface HeaderProps {
  iconName?: string;
  iconType?:
    | 'AntDesign'
    | 'Entypo'
    | 'EvilIcons'
    | 'Feather'
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'Foundation'
    | 'Ionicons'
    | 'MaterialCommunityIcons'
    | 'MaterialIcons'
    | 'Octicons'
    | 'SimpleLineIcons'
    | 'Zocial';
  iconStyle?: any;
  title: string;
  titleStyle?: string;
  rightComponent?: any;
  onPress?: () => void;
}
const HeaderX = (props: HeaderProps) => {
  return (
    <Header
      style={{backgroundColor: MAIN_BLUE}}
      androidStatusBarColor={MAIN_BLUE}>
      <Left>
        <Button transparent {...props}>
          <Icon
            name={props.iconName || 'arrow-back'}
            type={props.iconType}
            style={props.iconStyle}
          />
        </Button>
      </Left>
      <Body>
        <Title>{props.title}</Title>
      </Body>
      <Right>{props.rightComponent}</Right>
    </Header>
  );
};

export default HeaderX;
