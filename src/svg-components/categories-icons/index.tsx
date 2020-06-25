import * as React from 'react';
import {View} from 'react-native';
import {CategoryInput} from './types';
import {getCodeWithColor} from './utils';
import Icon from './icons';

export const IconByCode = (props: CategoryInput) => {
  const {code} = getCodeWithColor(props);
  if (Icon[code] !== undefined) {
    return Icon[code](props);
  }
  return <View></View>;
};
