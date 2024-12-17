import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IconProps} from '@components';

import {ForgetPasswordScreen} from '../screens/auth/ForgetPasswordScreen/ForgetPassword';
import {LoginScreen} from '../screens/auth/LoginScreen/Login';
import {SignUpScreen} from '../screens/auth/SignUpScreen/SignUpScreen';
import {SuccessScreen} from '../screens/auth/SuccessScreen/SuccessScreen';

export type AuthStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  ForgetPasswordScreen: undefined;
};
const {Navigator, Screen} = createNativeStackNavigator<AuthStackParamList>();

export function AuthSatck() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Screen name="LoginScreen" component={LoginScreen} />
      <Screen name="SignUpScreen" component={SignUpScreen} />
      <Screen name="SuccessScreen" component={SuccessScreen} />
      <Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
    </Navigator>
  );
}
