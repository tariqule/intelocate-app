import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextField from '../../../../../components/text-field';
import DropDown from '../../../../../components/dropdown';
import DatePicker from '../../../../../components/date-picker';

const Actual = () => {
  const [financialPeriod, setFinancialPeriod] = React.useState('');

  const textFieldData = [
    {
      title: 'Financial Period ',
      onChange: (val) => setFinancialPeriod(val),
      value: financialPeriod,
    },
  ];
  const nameData = [{value: 'Alio Company', label: 'Alio Company'}];
  return (
    <View>
      <View style={{paddingTop: 10}}>
        <TextField data={textFieldData} />
      </View>
      <View style={{}}>
        <Text style={styles.text}>Name:</Text>
        <DropDown data={nameData} style={{width: '100%'}}></DropDown>
      </View>
      <View style={{paddingTop: 10}}>
        <Text style={styles.text}>Date:</Text>
        <DatePicker onChange={(date) => console.log(date)} />
      </View>
    </View>
  );
};

export default Actual;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
});
