import React from 'react';
import {View, Text} from 'react-native';
// import {TextField} from '../../../components/text-field';
import {Input} from 'react-native-elements';
import {TextField} from 'react-native-material-textfield';
import {FormContainer} from '../../../components/FormContainer';
import {MAIN_BLUE, TEST_BORDER} from '../../../config/global-styles';
import {LogotypeIcon} from '../../../svg-components/logotype-icon';
import {Button} from 'react-native-elements';
import {Link, useNavigation} from '@react-navigation/native';
import {ACTIVE_BLUE} from '../../../config/global-styles';
import {forgotPassword} from '../../../services/auth';
import {SIGN_IN_SCREEN} from '../../../config/navigation-config';

const ResetPassword = () => {
  const [email, setEmail] = React.useState('');
  const navigation = useNavigation();
  const onSubmitEmail = () => {
    forgotPassword(email, (res) => {
      navigation.navigate(SIGN_IN_SCREEN);
      // alert(JSON.stringify(res));
    });
  };

  return (
    <FormContainer>
      <View
        style={{justifyContent: 'center', alignItems: 'center', height: '20%'}}>
        <LogotypeIcon
          colorMain={MAIN_BLUE}
          style={{width: '80%', borderWidth: TEST_BORDER}}
        />
      </View>
      <View
        style={{
          width: '80%',
          justifyContent: 'center',
          borderWidth: TEST_BORDER,
          left: '10%',
          flexDirection: 'column',
          flexWrap: 'wrap',
          // top: '5%',
        }}>
        <View
          style={{
            width: '100%',
          }}>
          <TextField
            label="Email"
            containerStyle={{width: '100%'}}
            value={email}
            onSubmitEditing={onSubmitEmail}
            onChangeText={(value: string) => setEmail(value)}
          />
        </View>

        <View style={{top: '5%', width: '100%'}}>
          <Button
            onPress={onSubmitEmail}
            title="Reset password"
            disabled={email ? false : true}
            buttonStyle={{backgroundColor: ACTIVE_BLUE}}
          />
        </View>
      </View>
    </FormContainer>
  );
};

export default ResetPassword;
