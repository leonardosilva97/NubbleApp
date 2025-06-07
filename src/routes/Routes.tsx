import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {useAuthCredentials} from '@service';

import {AppStack} from './AppStack';
import {AuthSatck} from './AuthStack';

export function Router() {
  const {authCredentials} = useAuthCredentials();
  return (
    <NavigationContainer>
      {authCredentials ? <AppStack /> : <AuthSatck />}
    </NavigationContainer>
  );
}
