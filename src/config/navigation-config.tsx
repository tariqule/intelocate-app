import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {
  ActionScreen,
  DashboardScreen,
  LoginScreen,
  ResetPassword,
  SplashScreen,
  ActionInfo,
} from '../navigations';
import {DrawerContent} from '../views/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const SPLASH_SCREEN = 'SPLASH_SCREEN';
export const SIGN_IN_SCREEN = 'SIGN_IN_SCREEN';
export const RESET_SCREEN = 'RESET_SCREEN';
export const DASHBOARD = 'DASHBOARD';
export const ACTION = 'ACTION';
export const ACTION_INFO = 'ACTION_INFO';

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={DASHBOARD}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={SIGN_IN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={RESET_SCREEN} component={ResetPassword} />
        {/* <Drawer.Navigator initialRouteName={DASHBOARD}> */}
        <Stack.Screen name={DASHBOARD} component={DrawerNavigator} />
        <Stack.Screen name={ACTION_INFO} component={ActionInfo} />

        {/* </Drawer.Navigator> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName={DASHBOARD}
      drawerContent={() => <DrawerContent />}>
      <Stack.Screen name={DASHBOARD} component={DashboardScreen} />
      <Stack.Screen name={ACTION} component={ActionScreen} />
    </Drawer.Navigator>
  );
}

export default Navigator;
