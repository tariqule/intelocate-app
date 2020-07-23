/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import {Input, KeyboardType} from '../input';
import {
  viewTextField,
  FormTextStyles,
  ACTIVE_BLUE,
  MAIN_GRAY,
} from '../../config/global-styles';
import {Input} from 'react-native-elements';

export {KeyboardType} from '../input';

interface Props {
  data: any;
}

const TextField = (props: Props) => {
  const {data} = props;
  const [value, setValue] = React.useState('');
  const _onChangeSubStatus = (val) => {
    setValue(val);
  };
  return (
    <View style={{}}>
      {data.map((data) => (
        <View>
          <Text style={styles.inputHeader}>{data.title}</Text>
          <View style={{}}>
            <Input
              onBlur={data.onBlur}
              // containerStyle={{width: '100%'}}
              inputContainerStyle={{borderColor: ACTIVE_BLUE}}
              inputStyle={{color: MAIN_GRAY}}
              labelStyle={{color: MAIN_GRAY}}
              onChange={data.onChange}
              value={data.value}></Input>
          </View>
        </View>
      ))}
    </View>
  );
};

export default TextField;
const styles = StyleSheet.create({
  inputHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
});
