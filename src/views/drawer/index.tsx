import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Container, Icon} from 'native-base';
import {
  MAIN_BLUE,
  font_sm,
  MAIN_DARK_ORANGE,
  TEST_BORDER,
  ACTIVE_BLUE,
} from '../../config/global-styles';
import {Divider} from 'react-native-elements';
import {NavigationDashboardIcon} from '../../svg-components/navigation-dashboard';
import {
  SIGN_IN_SCREEN,
  DASHBOARD,
  ACTION,
} from '../../config/navigation-config';
import {useNavigation} from '@react-navigation/native';
import {retrieveUserInfo, storeToken} from '../../services/local-storage';
import ActionIcon from '../../icons/ActionIcon';
import LinearGradient from 'react-native-linear-gradient';
import {userOrgId} from '../../redux/action/user';
import {useDispatch} from 'react-redux/lib/hooks/useDispatch';

//TODO: get the user using redux to
export function DrawerContent() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [user, setUser] = React.useState('loading...');
  const [ab, setAb] = React.useState('');
  const [pressedDasboard, setPressedDasboard] = React.useState(false);
  const [pressedAction, setPressedAction] = React.useState(false);
  const [toogle, setToogle] = React.useState(false);

  React.useEffect(() => {
    setPressedDasboard(true);
    retrieveUserInfo().then((res) => {
      const abreviation = res.firstName.charAt(0) + res.lastName.charAt(0);
      dispatch(userOrgId(res.organization.id));
      setUser(res.fullname);
      setAb(abreviation);
    });
  }, []);

  const _signOut = () => {
    let params = {jwt: ''};
    storeToken(params).then(() =>
      navigation.reset({index: 1, routes: [{name: SIGN_IN_SCREEN}]}),
    );
    // navigation.navigate(SIGN_IN_SCREEN);
  };
  const _dashboard = () => {
    setPressedDasboard(true);
    setPressedAction(false);
    if (!pressedDasboard) {
      navigation.goBack();
      navigation.goBack();
    }
  };
  const _action = () => {
    setPressedAction(true);
    setPressedDasboard(false);
    navigation.navigate(ACTION);
  };
  const drawerData = [
    {title: user, userIcon: true},
    {title: 'Dashboard', icon: 'dashboard', onPress: _dashboard},
    {title: 'Actions', icon: 'check-box', onPress: _action},
  ];

  const userData = [{title: 'Sign Out', onPress: _signOut}];

  const toggleUser = () => {
    if (toogle === true) {
      setToogle(false);
    }
    if (toogle === false) {
      setToogle(true);
    }
  };
  return (
    <LinearGradient colors={['#0A3D70', '#051F40']} style={{flex: 1}}>
      <View
        style={
          {
            // backgroundColor: MAIN_BLUE,
          }
        }>
        <View style={{paddingTop: 15}}>
          <View>
            <TouchableOpacity onPress={() => toggleUser()}>
              <View
                style={{
                  flexDirection: 'row',

                  alignItems: 'center',

                  borderWidth: TEST_BORDER,
                  paddingLeft: 10,
                }}>
                <View
                  style={{
                    backgroundColor: MAIN_DARK_ORANGE,
                    height: 20,
                    width: 20,
                    borderRadius: 100,
                    borderColor: '#fff',
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#fff', fontSize: 8}}>{ab}</Text>
                </View>

                <View style={{padding: 10}}>
                  <Text
                    style={{
                      color: '#FFF',
                      fontSize: font_sm,
                      fontWeight: 'bold',
                    }}>
                    {user}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            {toogle && (
              <TouchableOpacity onPress={_signOut}>
                <View style={{padding: 10}}>
                  <Text style={{color: '#fff', fontSize: font_sm}}>
                    Sign Out
                  </Text>
                </View>
              </TouchableOpacity>
            )}

            <Divider />
          </View>

          <View>
            <TouchableOpacity onPress={_dashboard}>
              <View
                style={{
                  flexDirection: 'row',
                  display: 'flex',
                  // alignItems: 'center',

                  borderWidth: TEST_BORDER,
                  paddingLeft: 10,
                }}>
                {/* <Icon
                name={'dashboard'}
                type="MaterialIcons"
                style={{color: '#fff'}}></Icon> */}
                <View
                  style={{
                    flexBasis: '0%',
                    flex: 1,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignContent: 'center',
                    borderWidth: TEST_BORDER,
                  }}>
                  <NavigationDashboardIcon
                    color={pressedDasboard ? ACTIVE_BLUE : '#FFF'}
                  />
                </View>

                <View style={{padding: 10, flex: 10}}>
                  <Text
                    style={{
                      color: pressedDasboard ? ACTIVE_BLUE : '#FFF',
                      fontSize: font_sm,
                    }}>
                    Dashboard
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={_action}>
              <View
                style={{
                  flexDirection: 'row',
                  display: 'flex',

                  borderWidth: TEST_BORDER,
                  paddingLeft: 10,
                }}>
                {/* <Icon
                name={'check-box'}
                type="MaterialIcons"
                style={{color: '#fff'}}></Icon> */}
                <View
                  style={{
                    flexBasis: '0%',
                    flex: 1,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignContent: 'center',
                    borderWidth: TEST_BORDER,
                  }}>
                  <ActionIcon color={pressedAction ? ACTIVE_BLUE : '#FFF'} />
                </View>

                <View style={{padding: 10, flex: 10}}>
                  <Text
                    style={{
                      color: pressedAction ? ACTIVE_BLUE : '#FFF',
                      fontSize: font_sm,
                    }}>
                    Actions
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
