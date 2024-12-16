import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
// import {Text} from '../../../components/Text/Text';
import {Text} from '@components';
import {Button} from '../../../components/Button/Button';

export function HomeScreen() {
  return (
    <Screen>
      <Text>Home Screen</Text>
      <Button title="Settings" />
    </Screen>
  );
}
