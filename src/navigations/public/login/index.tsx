import * as React from 'react';
import {View, Text, Alert} from 'react-native';
// import {TextField} from '../../../components/text-field';
import {Input} from 'react-native-elements';
import {TextField} from 'react-native-material-textfield';
import {FormContainer} from '../../../components/FormContainer';
import {
  MAIN_BLUE,
  TEST_BORDER,
  ACTIVE_BLUE,
} from '../../../config/global-styles';
import {LogotypeIcon} from '../../../svg-components/logotype-icon';
import {Button} from 'react-native-elements';
import {Link, useNavigation} from '@react-navigation/native';

import {RESET_SCREEN, DASHBOARD} from '../../../config/navigation-config';
import {signin} from '../../../services/auth';
import {
  storeUserInfo,
  storeToken,
  getToken,
} from '../../../services/local-storage';
import NetInfo from '@react-native-community/netinfo';

export default () => {
  const navigation = useNavigation();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [shouldDisableButton, setShouldDisableButton] = React.useState(true);
  const [userLoggedIn, setUserLoggedIn] = React.useState(false);
  const onSubmitEmail = () => {};
  const onSubmitPassword = () => {};

  React.useEffect(() => {
    getToken().then((res) => {
      res && navigation.navigate(DASHBOARD);
    });
  }, []);
  const _onPressSubmit = () => {
    signin(
      email,
      password,
      (response) => {
        console.log(response);
        storeToken(response.data).then(() => navigation.navigate(DASHBOARD));
      },
      (error) =>
        Alert.alert(
          'Invalid Credentials',
          'You have entered an invalid email or password',
        ),
    );
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
            label="Email or username"
            containerStyle={{width: '100%'}}
            value={email}
            onSubmitEditing={onSubmitEmail}
            onChangeText={(value: string) => setEmail(value)}
          />
        </View>
        <View
          style={{
            width: '100%',
          }}>
          <TextField
            label="Password"
            secureTextEntry={true}
            containerStyle={{width: '100%'}}
            value={password}
            onChangeText={(value: string) => setPassword(value)}
            onSubmitEditing={onSubmitPassword}
          />
        </View>
        <View style={{top: '5%', width: '100%'}}>
          <Button
            title="Sign in"
            onPress={_onPressSubmit}
            disabled={email && password ? false : true}
            buttonStyle={{backgroundColor: ACTIVE_BLUE}}
          />
        </View>
      </View>
      <View style={{top: '10%', alignItems: 'center'}}>
        <Link to={`/${RESET_SCREEN}`}>
          <Text style={{color: ACTIVE_BLUE}}>Forgot Password?</Text>
        </Link>
      </View>
    </FormContainer>
  );
};
