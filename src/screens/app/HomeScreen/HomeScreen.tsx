import React from 'react';

import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';

export function HomeScreen() {
  return (
    <Screen>
      <Text>Home Screen</Text>
      <Button title="Settings" />
    </Screen>
  );
}
