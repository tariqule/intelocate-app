import React, {Component} from 'react';
import {Container, Header, Content, DatePicker, Text} from 'native-base';
import {ACTIVE_BLUE} from '../../config/global-styles';

interface datePickerProps {
  onChange: (date) => void;
  disabled?: boolean;
  defaultDate?: any;
}

const DatePickerComponent = (props: datePickerProps) => {
  const {onChange, disabled} = props;
  const _setDate = (date) => {
    onChange(date);
  };
  return (
    <DatePicker
      defaultDate={props.defaultDate}
      minimumDate={new Date(2018, 1, 1)}
      maximumDate={new Date(2018, 12, 31)}
      locale={'en'}
      timeZoneOffsetInMinutes={undefined}
      modalTransparent={false}
      animationType={'fade'}
      androidMode={'default'}
      placeHolderText="Select date"
      textStyle={{
        color: ACTIVE_BLUE,
        borderBottomWidth: 1,
        borderColor: ACTIVE_BLUE,
      }}
      placeHolderTextStyle={{color: '#d3d3d3'}}
      onDateChange={_setDate}
      disabled={disabled}
    />
  );
};

export default DatePickerComponent;
