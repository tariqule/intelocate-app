import * as React from 'react';
import {View, Text, ViewStyle, TextStyle} from 'react-native';
import {getTouchable} from '../../utils/touchable';
import {FormStyles, FormTextStyles} from '../../config/global-styles';

interface Props {
  title: string | JSX.Element;
  onPress: () => void;
  disabled?: boolean;
  viewStyles?: ViewStyle;
  textStyles?: TextStyle;
}

export function Button(props: Props) {
  const {title, onPress, disabled, viewStyles, textStyles} = props;
  const enabled = disabled === undefined || disabled === false;
  const Touchable = getTouchable();
  return (
    <Touchable onPress={() => (enabled ? onPress() : undefined)}>
      <View
        style={{
          ...FormStyles.button,
          ...(viewStyles || {}),
          ...(!enabled ? {backgroundColor: '#e8e8e8'} : {}),
        }}>
        <Text
          style={{
            ...FormTextStyles.button,
            ...(textStyles || {}),
            ...(!enabled ? {color: '#fff'} : {}),
          }}>
          {title}
        </Text>
      </View>
    </Touchable>
  );
}
