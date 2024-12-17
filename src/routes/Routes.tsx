import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack';
import {AuthSatck} from './AuthStack';

export function Router() {
  const authenticated = false;
  return (
    <NavigationContainer>
      {authenticated ? <AppStack /> : <AuthSatck />}
    </NavigationContainer>
  );
}
