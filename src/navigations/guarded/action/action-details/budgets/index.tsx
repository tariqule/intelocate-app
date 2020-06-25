import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextField from '../../../../../components/text-field';

const Budget = () => {
  const [costCode, setCostCode] = React.useState('');
  const [budget, setBudget] = React.useState('');
  const [estimatedHourly, setEstimatedHourly] = React.useState('');
  const [estimatedCode, setEstimatedCode] = React.useState('');

  const textFieldData = [
    {
      title: 'Cost Code: ',
      onChange: (val) => setCostCode(val),
      value: costCode,
    },
    {title: 'Budget:', onChange: (val) => setBudget(val), value: budget},
    {
      title: 'Estimated hourly Rate',
      onChange: (val) => setEstimatedHourly(val),
      value: estimatedHourly,
    },
    {
      title: 'Estimated Code',
      onChange: (val) => setEstimatedCode(val),
      value: estimatedCode,
    },
  ];
  return (
    <View>
      <View style={{paddingTop: 10}}>
        <TextField data={textFieldData} />
      </View>
    </View>
  );
};

export default Budget;

const styles = StyleSheet.create({});
