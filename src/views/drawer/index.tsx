import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Container, Icon} from 'native-base';
import {
  MAIN_BLUE,
  font_sm,
  MAIN_DARK_ORANGE,
  TEST_BORDER,
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

//TODO: get the user using redux to
export function DrawerContent() {
  const navigation = useNavigation();

  const [user, setUser] = React.useState('loading...');
  const [ab, setAb] = React.useState('');

  const [toogle, setToogle] = React.useState(false);

  React.useEffect(() => {
    retrieveUserInfo().then((res) => {
      const abreviation = res.firstName.charAt(0) + res.lastName.charAt(0);
      setUser(res.fullname);
      setAb(abreviation);
    });
  }, []);

  const _signOut = () => {
    // storeToken('').then(())
    navigation.navigate(SIGN_IN_SCREEN);
  };
  const _dashboard = () => {
    navigation.navigate(DASHBOARD);
  };
  const _action = () => {
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
    <View
      style={{
        flex: 1,

        backgroundColor: MAIN_BLUE,
      }}>
      <View style={{paddingTop: 15}}>
        {drawerData.map((data) => (
          <View>
            <TouchableOpacity
              onPress={data.userIcon ? () => toggleUser() : data.onPress}>
              <View
                style={{
                  flexDirection: 'row',

                  alignItems: 'center',

                  borderWidth: TEST_BORDER,
                  paddingLeft: 10,
                }}>
                {data.userIcon && (
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
                )}
                {!data.userIcon && (
                  <Icon
                    name={data.icon}
                    type="MaterialIcons"
                    style={{color: '#fff'}}></Icon>
                )}

                <View style={{padding: 10}}>
                  <Text
                    style={{
                      color: '#FFF',
                      fontSize: font_sm,
                      fontWeight: data.userIcon && 'bold',
                    }}>
                    {data.title}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            {data.userIcon &&
              toogle &&
              userData.map((data) => (
                <TouchableOpacity onPress={data.onPress}>
                  <View style={{padding: 10}}>
                    <Text style={{color: '#fff', fontSize: font_sm}}>
                      {data.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}

            {data.userIcon && <Divider />}
          </View>
        ))}
      </View>
    </View>
  );
}
