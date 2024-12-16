import React from 'react';

// import {Text} from '../../../components/Text/Text';
import {Text} from '@components';

import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';

export function HomeScreen() {
  return (
    <Screen>
      <Text>Home Screen</Text>
      <Button title="Settings" />
    </Screen>
  );
}
