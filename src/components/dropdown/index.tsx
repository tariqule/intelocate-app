import {Component} from 'react';
import React from 'react';
import {Container, Content, Form, Picker} from 'native-base';
import PropTypes from 'prop-types';

/**
 * @props containerStyle
 *        style
 *        data  => [value: "", label: ""]
 */

const DropDown = (props) => {
  const [selected, setSelected] = React.useState('');

  const {data, style, containerStyle} = props;
  const showStatus = [
    {label: 'New', value: 'NEW'},
    {label: 'Cancelled', value: 'CANCELLED'},
    {label: 'In Progress', value: 'INPROGRESS'},
  ];

  const _onChangeValue = (val) => {
    setSelected(val);
    props.onChange && props.onChange(val);
  };
  return (
    <Form style={containerStyle}>
      <Picker
        note
        mode={props.mode || 'dropdown'}
        style={[{width: 100, height: 40}, style]}
        selectedValue={props.value || selected}
        onValueChange={_onChangeValue}>
        {!props.showStatus
          ? data
            ? data.map((data) => (
                <Picker.Item
                  key={data.id}
                  label={data.name}
                  value={props.id ? data.id : data.name}
                />
              ))
            : showStatus.map((data) => (
                <Picker.Item
                  label={data.label}
                  value={data.value}
                  key={data.label}
                />
              ))
          : data.map((data) => (
              <Picker.Item
                key={data.id}
                label={data.label}
                value={data.value}
              />
            ))}
      </Picker>
    </Form>
  );
};

export default DropDown;
